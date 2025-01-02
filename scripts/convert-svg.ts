import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

async function convertSvgToPng() {
  try {
    const svgBuffer = await fs.readFile(path.join(process.cwd(), 'src/assets/icon.svg'));
    
    await sharp(svgBuffer)
      .resize(512, 512)
      .png()
      .toFile(path.join(process.cwd(), 'src/assets/icon.png'));
    
    console.log('Successfully converted SVG to PNG');
  } catch (error) {
    console.error('Error converting SVG to PNG:', error);
    process.exit(1);
  }
}

convertSvgToPng(); 