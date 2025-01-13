import sharp from "sharp";
import path from "path";
import { siteConfig } from "../config/site";
import fs from "fs";

// Helper function to extract all image paths from siteConfig
function getAllImagePaths(obj: any): string[] {
  const paths: string[] = [];

  function traverse(current: any) {
    if (!current) return;

    if (typeof current === "object") {
      for (const key in current) {
        if (key === "image" && typeof current[key] === "string") {
          paths.push(current[key]);
        } else if (Array.isArray(current[key])) {
          current[key].forEach((item: any) => traverse(item));
        } else if (typeof current[key] === "object") {
          traverse(current[key]);
        }
      }
    }
  }

  traverse(obj);
  return paths
    .filter((path) => path.startsWith("/"))
    .map((path) => path.substring(1)); // Remove leading slash
}

async function resizeImage(inputPath: string, outputPath: string) {
  try {
    await sharp(inputPath)
      .resize(800, 800, {
        fit: "cover",
        position: "center",
      })
      .jpeg({
        quality: 80,
        mozjpeg: true,
      })
      .toFile(outputPath);

    console.log(`✅ Imagine redimensionată cu succes: ${outputPath}`);
  } catch (error) {
    console.error(`❌ Eroare la redimensionarea imaginii ${inputPath}:`, error);
  }
}

async function main() {
  const images = getAllImagePaths(siteConfig);
  const publicDir = path.join(process.cwd(), "public");

  for (const image of images) {
    const inputPath = path.join(publicDir, "original", image);
    const outputPath = path.join(publicDir, image);

    // Ensure the output directory exists
    const outputDir = path.dirname(outputPath);
    await fs.promises.mkdir(outputDir, { recursive: true });

    await resizeImage(inputPath, outputPath);
  }
}

main().catch(console.error);
