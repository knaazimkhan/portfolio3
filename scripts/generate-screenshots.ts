import sharp from 'sharp';
import path from 'path';

async function generateScreenshots() {
  try {
    // Desktop screenshot (1920x1080)
    await sharp({
      create: {
        width: 1920,
        height: 1080,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 1 }
      }
    })
    .composite([
      {
        input: Buffer.from(`
          <svg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="#000"/>
            <rect width="100%" height="100%" fill="url(#grid)" opacity="0.1"/>
            <defs>
              <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
                <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#fff" stroke-width="1"/>
              </pattern>
            </defs>
            <text x="50%" y="50%" font-family="Arial" font-size="48" fill="#fff" text-anchor="middle">
              Desktop Screenshot Placeholder
            </text>
          </svg>
        `),
        top: 0,
        left: 0
      }
    ])
    .toFile(path.join(process.cwd(), 'public/screenshots/desktop.png'));

    console.log('Generated desktop screenshot');

    // Mobile screenshot (390x844)
    await sharp({
      create: {
        width: 390,
        height: 844,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 1 }
      }
    })
    .composite([
      {
        input: Buffer.from(`
          <svg width="390" height="844" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="#000"/>
            <rect width="100%" height="100%" fill="url(#grid)" opacity="0.1"/>
            <defs>
              <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
                <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#fff" stroke-width="1"/>
              </pattern>
            </defs>
            <text x="50%" y="50%" font-family="Arial" font-size="24" fill="#fff" text-anchor="middle">
              Mobile Screenshot
            </text>
            <text x="50%" y="54%" font-family="Arial" font-size="24" fill="#fff" text-anchor="middle">
              Placeholder
            </text>
          </svg>
        `),
        top: 0,
        left: 0
      }
    ])
    .toFile(path.join(process.cwd(), 'public/screenshots/mobile.png'));

    console.log('Generated mobile screenshot');
  } catch (error) {
    console.error('Error generating screenshots:', error);
    process.exit(1);
  }
}

generateScreenshots(); 