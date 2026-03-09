import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dir = path.join(__dirname, 'src', 'assets');

async function processImages() {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.toLowerCase().endsWith('.png') || file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')) {
      const inputPath = path.join(dir, file);
      // Replace extension with webp
      const newName = file.replace(/\.(png|jpg|jpeg)$/i, '.webp');
      const outputPath = path.join(dir, newName);
      
      try {
        await sharp(inputPath)
          .resize({ width: 1200, withoutEnlargement: true })
          .webp({ quality: 80, effort: 6 })
          .toFile(outputPath);
        console.log(`Optimized ${file} to ${newName}`);
        
        // Remove the old file
        fs.unlinkSync(inputPath);
      } catch (err) {
        console.error(`Error with ${file}`, err);
      }
    }
  }
}

processImages().catch(console.error);
