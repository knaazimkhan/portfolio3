import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const ICON_SIZES = [16, 32, 192, 512];
const SOURCE_ICON = path.join(process.cwd(), 'src/assets/icon.png');
const PUBLIC_DIR = path.join(process.cwd(), 'public');

async function generateIcons() {
  try {
    // Ensure source icon exists
    await fs.access(SOURCE_ICON);
    
    // Read the source icon
    const sourceBuffer = await fs.readFile(SOURCE_ICON);
    
    // Generate different sizes
    for (const size of ICON_SIZES) {
      const fileName = size === 16 ? 'favicon-16x16.png' :
                      size === 32 ? 'favicon-32x32.png' :
                      size === 192 ? 'android-chrome-192x192.png' :
                      'android-chrome-512x512.png';
      
      await sharp(sourceBuffer)
        .resize(size, size)
        .toFile(path.join(PUBLIC_DIR, fileName));
      
      console.log(`Generated ${fileName}`);
    }
    
    // For favicon.ico, we'll use the 32x32 PNG
    const favicon32Path = path.join(PUBLIC_DIR, 'favicon-32x32.png');
    await fs.copyFile(favicon32Path, path.join(PUBLIC_DIR, 'favicon.ico'));
    console.log('Generated favicon.ico');
    
    // Generate Apple Touch Icon (180x180)
    await sharp(sourceBuffer)
      .resize(180, 180)
      .toFile(path.join(PUBLIC_DIR, 'apple-touch-icon.png'));
      
    console.log('Generated apple-touch-icon.png');
    
    // Generate Safari Pinned Tab SVG
    const svgPath = path.join(process.cwd(), 'src/assets/icon.svg');
    await fs.copyFile(svgPath, path.join(PUBLIC_DIR, 'safari-pinned-tab.svg'));
    console.log('Generated safari-pinned-tab.svg');
    
    console.log('All icons generated successfully!');
  } catch (error) {
    console.error('Error generating icons:', error);
    process.exit(1);
  }
}

generateIcons(); 