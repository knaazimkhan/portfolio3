const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const COMPANIES_DIR = path.join(process.cwd(), "public", "companies");
const EDUCATION_DIR = path.join(process.cwd(), "public", "education");
const PROJECTS_DIR = path.join(process.cwd(), "public", "projects");
const IMAGES_DIR = path.join(process.cwd(), "public", "images");
const BLOG_DIR = path.join(process.cwd(), "public", "blog");

async function ensureDirectoryExists(dir) {
  if (!fs.existsSync(dir)) {
    await fs.promises.mkdir(dir, { recursive: true });
  }
}

async function generatePlaceholderImage() {
  await ensureDirectoryExists(IMAGES_DIR);

  const svg = `
    <svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="400" fill="#F3F4F6" />
      <text x="200" y="200" font-family="Arial" font-size="24" fill="#9CA3AF" text-anchor="middle" dominant-baseline="middle">
        Image Not Found
      </text>
    </svg>
  `;

  await sharp(Buffer.from(svg))
    .resize(400, 400)
    .toFile(path.join(IMAGES_DIR, "placeholder.png"));

  console.log("✅ Placeholder image generated successfully!");
}

async function generateCompanyLogos() {
  await ensureDirectoryExists(COMPANIES_DIR);

  const companies = ["company1", "company2", "company3"];
  const colors = ["#4F46E5", "#10B981", "#F59E0B"]; // Indigo, Emerald, Amber

  for (let i = 0; i < companies.length; i++) {
    const svg = `
      <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="${colors[i]}" />
        <text x="100" y="100" font-family="Arial" font-size="24" fill="white" text-anchor="middle" dominant-baseline="middle">
          ${companies[i].toUpperCase()}
        </text>
      </svg>
    `;

    await sharp(Buffer.from(svg))
      .resize(200, 200)
      .toFile(path.join(COMPANIES_DIR, `${companies[i]}.png`));
  }

  console.log("✅ Company logos generated successfully!");
}

async function generateEducationLogos() {
  await ensureDirectoryExists(EDUCATION_DIR);

  const schools = [
    { name: "stanford", color: "#8C1515" }, // Stanford Red
    { name: "berkeley", color: "#003262" }, // Berkeley Blue
  ];

  for (const school of schools) {
    const svg = `
      <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="${school.color}" />
        <text x="100" y="100" font-family="Arial" font-size="24" fill="white" text-anchor="middle" dominant-baseline="middle">
          ${school.name.toUpperCase()}
        </text>
      </svg>
    `;

    await sharp(Buffer.from(svg))
      .resize(200, 200)
      .toFile(path.join(EDUCATION_DIR, `${school.name}.png`));
  }

  console.log("✅ Education logos generated successfully!");
}

async function generateProjectImages() {
  await ensureDirectoryExists(PROJECTS_DIR);

  const projects = [
    { name: "portfolio", color: "#4F46E5" }, // Indigo
    { name: "ecommerce", color: "#10B981" }, // Emerald
    { name: "task-manager", color: "#F59E0B" }, // Amber
    { name: "weather", color: "#EF4444" }, // Red
    { name: "code-editor", color: "#8B5CF6" }, // Purple
  ];

  for (const project of projects) {
    const svg = `
      <svg width="1200" height="675" viewBox="0 0 1200 675" xmlns="http://www.w3.org/2000/svg">
        <rect width="1200" height="675" fill="${project.color}" />
        <text x="600" y="337.5" font-family="Arial" font-size="48" fill="white" text-anchor="middle" dominant-baseline="middle">
          ${project.name.toUpperCase()} PROJECT
        </text>
        <text x="600" y="400" font-family="Arial" font-size="24" fill="white" text-anchor="middle" dominant-baseline="middle">
          Click to view details
        </text>
      </svg>
    `;

    await sharp(Buffer.from(svg))
      .resize(1200, 675) // 16:9 aspect ratio
      .toFile(path.join(PROJECTS_DIR, `${project.name}.png`));
  }

  console.log("✅ Project images generated successfully!");
}

async function generateBlogImages() {
  await ensureDirectoryExists(BLOG_DIR);

  const blogImages = [
    { name: "future-web", color: "#4F46E5", title: "Future of Web Development" },
    { name: "portfolio-guide", color: "#10B981", title: "Portfolio Guide" },
    { name: "typescript-guide", color: "#F59E0B", title: "TypeScript Guide" },
  ];

  for (const blog of blogImages) {
    const svg = `
      <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
        <rect width="1200" height="630" fill="${blog.color}" />
        <text x="600" y="315" font-family="Arial" font-size="48" fill="white" text-anchor="middle" dominant-baseline="middle">
          ${blog.title}
        </text>
      </svg>
    `;

    await sharp(Buffer.from(svg))
      .resize(1200, 630)
      .toFile(path.join(BLOG_DIR, `${blog.name}.png`));
  }

  console.log("✅ Blog images generated successfully!");
}

async function main() {
  await generatePlaceholderImage();
  await generateCompanyLogos();
  await generateEducationLogos();
  await generateProjectImages();
  await generateBlogImages();
}

main().catch(console.error); 