# Modern Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and TailwindCSS.

## Features

- 🎨 Modern and clean design
- 🌓 Dark/Light mode
- 📱 Fully responsive
- ⚡ Fast and optimized
- 🎯 SEO friendly
- 📧 Contact form with EmailJS integration
- 🔄 Smooth animations
- 🎨 Customizable theme
- ♿ Accessible

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- TailwindCSS
- Framer Motion
- EmailJS
- React Hook Form
- Zod
- React Icons

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
pnpm install
```

3. Create a `.env.local` file in the root directory and add your EmailJS credentials:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Start the development server:
```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

1. Update personal information:
   - Edit the content in each section component under `src/components/sections/`
   - Replace the profile image in the `public` directory
   - Update the resume PDF in the `public` directory

2. Theme customization:
   - Modify colors and other theme variables in `src/app/globals.css`
   - Update Tailwind configuration in `tailwind.config.ts`

3. Add/Remove sections:
   - Modify the sections in `src/app/page.tsx`
   - Create new section components in `src/components/sections/`

## Project Structure

```
├── src/
│   ├── app/                 # Next.js app directory
│   ├── components/          # React components
│   │   ├── layout/         # Layout components
│   │   ├── sections/       # Page sections
│   │   └── ui/            # UI components
│   ├── lib/                # Utility functions
│   ├── types/              # TypeScript types
│   └── hooks/              # Custom hooks
├── public/                 # Static files
└── ...config files
```

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
