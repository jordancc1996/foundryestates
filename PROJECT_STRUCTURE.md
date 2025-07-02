# Foundry Estates - Complete Project Structure

## 📁 File Structure Overview

This document provides a complete overview of all files in the Foundry Estates Next.js TypeScript project, optimized for GitHub Codespaces and Vercel deployment.

### Root Configuration Files

| File | Purpose | Description |
|------|---------|-------------|
| `package.json` | Dependencies & Scripts | All required dependencies, scripts for dev/build/deploy |
| `next.config.js` | Next.js Configuration | Performance, security headers, image optimization |
| `tailwind.config.js` | Tailwind CSS Config | Custom colors, fonts, animations |
| `postcss.config.js` | PostCSS Configuration | Tailwind and Autoprefixer setup |
| `tsconfig.json` | TypeScript Config | Strict typing, path aliases, Next.js integration |
| `.eslintrc.json` | ESLint Configuration | Code quality and Next.js best practices |
| `.prettierrc` | Prettier Configuration | Code formatting with Tailwind plugin |
| `.gitignore` | Git Ignore Rules | Node modules, build files, environment variables |
| `vercel.json` | Vercel Deployment | Headers, rewrites, build configuration |
| `.env.example` | Environment Template | Example environment variables |
| `next-env.d.ts` | Next.js Types | Auto-generated TypeScript definitions |
| `README.md` | Documentation | Comprehensive setup and usage guide |

### GitHub Codespaces Configuration

| File | Purpose | Description |
|------|---------|-------------|
| `.devcontainer/devcontainer.json` | Codespaces Setup | Node.js 18, auto-install, port forwarding |
| `.vscode/settings.json` | VS Code Settings | Format on save, TypeScript preferences |
| `.vscode/extensions.json` | Extension Recommendations | Tailwind, Prettier, TypeScript extensions |

### Public Assets

| File/Directory | Purpose | Description |
|----------------|---------|-------------|
| `public/favicon.ico` | Site Icon | Browser tab icon |
| `public/robots.txt` | SEO Configuration | Search engine crawling rules |
| `public/images/` | Image Assets | Luxury property and lifestyle photos |

### Source Code Structure

#### Components (`src/components/`)

| Component | Purpose | Key Features |
|-----------|---------|--------------|
| `Layout.tsx` | Main Layout Wrapper | SEO, navigation, footer integration |
| `Navigation.tsx` | Header Navigation | Responsive menu, scroll effects, mobile hamburger |
| `Hero.tsx` | Homepage Hero Section | Full-screen image, elegant typography, CTA |
| `OpeningStatement.tsx` | Main Content Section | Service highlights with colored boxes |
| `ClientSuccess.tsx` | Property Showcase | Tyburn-inspired design, property display |
| `Contact.tsx` | Contact Form & Info | Form validation, contact details |
| `Footer.tsx` | Site Footer | Links, company info, copyright |

#### Pages (`src/pages/`)

| Page | Purpose | Description |
|------|---------|-------------|
| `_app.tsx` | App Wrapper | Global styles, layout integration |
| `index.tsx` | Homepage | Complete homepage with all sections |

#### Styles (`src/styles/`)

| File | Purpose | Description |
|------|---------|-------------|
| `globals.css` | Global Styles | Tailwind imports, custom components, utilities |

#### Types (`src/types/`)

| File | Purpose | Description |
|------|---------|-------------|
| `index.ts` | TypeScript Definitions | Interfaces for components, forms, data |

## 🚀 Key Features Implemented

### Design System
- **Colors:** Charcoal (#1E1E1E) primary, Gold (#D4AF37) accent
- **Typography:** Playfair Display (headings) + Inter (body)
- **Components:** Service boxes with colored borders (blue, orange, purple)
- **Animations:** Fade-in, slide-up, slide-in effects

### Tyburn-Inspired Elements
- Clean navigation with company name and subtitle
- "Bespoke property services with a personal touch" hero
- "Opening doors to the world's most exclusive homes" section
- Client success stories with property showcase
- Minimalist, text-focused design approach

### Technical Features
- **TypeScript:** Full type safety throughout
- **Responsive Design:** Mobile-first approach
- **SEO Optimized:** Meta tags, structured data
- **Performance:** Image optimization, code splitting
- **Accessibility:** Keyboard navigation, ARIA labels
- **Form Handling:** Contact form with validation

### Development Experience
- **GitHub Codespaces:** Zero-config development environment
- **Hot Reload:** Instant development feedback
- **Type Checking:** Real-time TypeScript validation
- **Code Formatting:** Automatic Prettier formatting
- **Linting:** ESLint for code quality

### Deployment Ready
- **Vercel Integration:** Zero-config deployment
- **Environment Variables:** Secure configuration
- **Build Optimization:** Production-ready builds
- **Security Headers:** XSS protection, content security

## 🛠 Scripts Available

```bash
npm run dev          # Development server (localhost:3000)
npm run build        # Production build
npm run start        # Production server
npm run lint         # Code linting
npm run codespaces   # Codespaces development (0.0.0.0:3000)
npm run type-check   # TypeScript validation
```

## 📱 Responsive Breakpoints

- **Mobile:** < 768px (hamburger menu, stacked layout)
- **Tablet:** 768px - 1024px (adjusted spacing, grid layouts)
- **Desktop:** > 1024px (full layout, hover effects)

## 🎨 Color Palette

```css
/* Primary Colors */
--primary-950: #1e1e1e    /* Charcoal - main text, backgrounds */
--primary-800: #5a5a5a    /* Hover states */
--primary-700: #6a6a6a    /* Secondary text */

/* Accent Colors */
--gold-500: #d4af37      /* Gold - CTAs, highlights */
--gold-600: #ca8a04      /* Gold hover states */

/* Service Box Colors */
--blue-500: #3b82f6      /* Buying services */
--orange-500: #f97316    /* Selling services */
--purple-500: #a855f7    /* Consulting services */
```

## 🔧 Customization Guide

### Adding New Sections
1. Create component in `src/components/`
2. Add TypeScript interfaces in `src/types/`
3. Import and use in `src/pages/index.tsx`
4. Add navigation link if needed

### Updating Content
- **Hero Text:** Edit `src/components/Hero.tsx`
- **Services:** Modify `src/components/OpeningStatement.tsx`
- **Contact Info:** Update `src/components/Contact.tsx`
- **Company Info:** Edit `src/components/Footer.tsx`

### Changing Images
1. Add new images to `public/images/`
2. Update image paths in components
3. Optimize images for web (WebP recommended)

### Environment Configuration
1. Copy `.env.example` to `.env.local`
2. Update values for your deployment
3. Add new variables to `next.config.js` if needed

This project structure provides a complete, production-ready foundation for the Foundry Estates luxury real estate website with modern development practices and deployment optimization.

