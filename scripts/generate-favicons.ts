import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const SIZES = {
  favicon16: 16,
  favicon32: 32,
  appleIcon: 180,
  androidSmall: 192,
  androidLarge: 512,
} as const;

async function generateFavicons() {
  const inputPath = path.join(process.cwd(), 'public', 'profile', 'profile.jpeg');
  const outputDir = path.join(process.cwd(), 'public', 'icons');

  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  try {
    // Generate PNG favicons
    await Promise.all([
      // Favicon 16x16
      sharp(inputPath)
        .resize(SIZES.favicon16, SIZES.favicon16)
        .png()
        .toFile(path.join(outputDir, 'favicon-16x16.png')),

      // Favicon 32x32
      sharp(inputPath)
        .resize(SIZES.favicon32, SIZES.favicon32)
        .png()
        .toFile(path.join(outputDir, 'favicon-32x32.png')),

      // Apple Touch Icon
      sharp(inputPath)
        .resize(SIZES.appleIcon, SIZES.appleIcon)
        .png()
        .toFile(path.join(outputDir, 'apple-touch-icon.png')),

      // Android Chrome 192x192
      sharp(inputPath)
        .resize(SIZES.androidSmall, SIZES.androidSmall)
        .png()
        .toFile(path.join(outputDir, 'android-chrome-192x192.png')),

      // Android Chrome 512x512
      sharp(inputPath)
        .resize(SIZES.androidLarge, SIZES.androidLarge)
        .png()
        .toFile(path.join(outputDir, 'android-chrome-512x512.png')),

      // ICO file (32x32)
      sharp(inputPath)
        .resize(SIZES.favicon32, SIZES.favicon32)
        .png()
        .toBuffer()
        .then(buffer => {
          fs.writeFileSync(path.join(outputDir, 'favicon.ico'), buffer);
        }),
    ]);

    console.log('✅ All favicons generated successfully!');
  } catch (error) {
    console.error('❌ Error generating favicons:', error);
  }
}

generateFavicons(); 