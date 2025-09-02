# MotionField Web

A modern SaaS website for MotionField - an AI-powered video analysis platform. This website showcases the capabilities of the MotionField desktop application with a beautiful, responsive design inspired by modern SaaS platforms.

## Features

- **Modern Design**: Clean, professional design with gradient accents and smooth animations
- **Responsive Layout**: Optimized for all screen sizes from mobile to desktop
- **Dark Mode Support**: Automatic dark/light theme switching
- **Interactive Elements**: Hover effects, animations, and smooth transitions
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS 4
- **Fonts**: Geist Sans and Geist Mono
- **TypeScript**: Full type safety
- **Deployment**: Vercel-ready

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
motion-field-web/
├── app/
│   ├── globals.css      # Global styles and custom CSS
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main landing page
├── public/              # Static assets
└── package.json         # Dependencies and scripts
```

## Sections

The landing page includes:

1. **Navigation**: Fixed header with smooth scrolling links
2. **Hero Section**: Compelling headline with call-to-action buttons
3. **Features Section**: Six key features with icons and descriptions
4. **How It Works**: Three-step process explanation
5. **Call-to-Action**: Prominent signup section
6. **Footer**: Links and company information

## Customization

- **Colors**: Modify CSS variables in `globals.css`
- **Content**: Update text and links in `page.tsx`
- **Styling**: Adjust Tailwind classes for different looks
- **Animations**: Customize keyframes in `globals.css`

## Deployment

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/amanibobo/motion-field-web)

## Related Projects

- [MotionField Desktop App](https://github.com/amanibobo/motion-field) - The Python desktop application for video analysis

## License

MIT License - see LICENSE file for details.
