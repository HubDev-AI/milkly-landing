import puppeteer from "puppeteer";
import { createServer } from "http";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";

const DIST_DIR = join(import.meta.dirname, "..", "dist");
const ROUTES = ["/", "/features", "/work", "/access", "/privacy", "/terms"];
const PORT = 4173;

function serveStatic(distDir: string, port: number): Promise<ReturnType<typeof createServer>> {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      const url = req.url ?? "/";
      const filePath = url === "/" || !url.includes(".") ? join(distDir, "index.html") : join(distDir, url);

      try {
        const content = readFileSync(filePath);
        const ext = filePath.split(".").pop() ?? "";
        const mimeTypes: Record<string, string> = {
          html: "text/html",
          js: "application/javascript",
          css: "text/css",
          svg: "image/svg+xml",
          png: "image/png",
          jpg: "image/jpeg",
          woff2: "font/woff2",
          woff: "font/woff",
        };
        res.writeHead(200, { "Content-Type": mimeTypes[ext] ?? "application/octet-stream" });
        res.end(content);
      } catch {
        const fallback = readFileSync(join(distDir, "index.html"));
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(fallback);
      }
    });

    server.listen(port, () => resolve(server));
  });
}

async function prerender() {
  if (!existsSync(DIST_DIR)) {
    console.error("dist/ not found. Run `bun run build` first.");
    process.exit(1);
  }

  console.log("Starting static server...");
  const server = await serveStatic(DIST_DIR, PORT);

  console.log("Launching browser...");
  const browser = await puppeteer.launch({ headless: true });

  for (const route of ROUTES) {
    console.log(`  Rendering ${route}...`);
    const page = await browser.newPage();
    await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: "networkidle2", timeout: 30000 });

    await page.waitForFunction(() => document.title !== "", { timeout: 10000 }).catch(() => {
      console.warn(`    Warning: title not set for ${route}, continuing anyway`);
    });

    const html = await page.content();

    const outputPath = route === "/"
      ? join(DIST_DIR, "index.html")
      : join(DIST_DIR, route, "index.html");

    const outputDir = dirname(outputPath);
    if (!existsSync(outputDir)) {
      mkdirSync(outputDir, { recursive: true });
    }

    writeFileSync(outputPath, html, "utf-8");
    console.log(`    Saved ${outputPath.replace(DIST_DIR, "dist")}`);
    await page.close();
  }

  await browser.close();
  server.close();
  console.log("Pre-rendering complete.");
}

prerender().catch((err) => {
  console.error("Pre-rendering failed:", err);
  process.exit(1);
});
