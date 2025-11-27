# Quick Start Guide - AQL.PH

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm start
```

---

## 📝 Quick Customization

### Update Your Information

**Edit `src/lib/constants.ts`:**

```typescript
export const SITE_CONFIG = {
  name: 'Your Name',              // ← Change this
  shortName: 'initials',          // ← Change this
  tagline: 'your · tags · here',  // ← Change this
  description: 'Your bio here',   // ← Change this
  url: 'https://yoursite.com',    // ← Change this
}
```

### Update Social Links

**In the same file:**

```typescript
export const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/yourprofile', // ← Update URL
    // ... rest stays the same
  },
  // Add or remove social links as needed
]
```

### Update Skills

**In the same file:**

```typescript
export const SKILLS = [
  { name: 'JavaScript', category: 'frontend' },
  { name: 'Your Skill', category: 'frontend' }, // ← Add skills
  // ...
]
```

### Change Your Photo

Replace `/public/images/me.jpg` with your photo (keep the same filename).

Recommended size: 400x400px (square)

---

## 🎨 Customizing Colors

### Change Accent Color

**Edit `src/app/globals.css`:**

Find the blue color values and replace with your preferred color:

```css
@theme {
  /* Change these blue values */
  --color-blue-400: #60A5FA;  /* Dark mode accent */
  --color-blue-500: #3B82F6;  /* Light mode accent */
  --color-blue-600: #2563EB;  /* Hover states */
}
```

### Change Background Colors

```css
@theme {
  /* Light mode background */
  --color-neutral-50: #FAFAFA;

  /* Dark mode background */
  --color-neutral-950: #0A0A0A;
}
```

---

## 🌙 Dark Mode

Dark mode is automatic! It:
- Detects system preference
- Saves user choice to localStorage
- Provides toggle button in header

No configuration needed.

---

## 📱 Mobile Responsive

Everything is mobile-first and fully responsive. No additional work needed.

---

## 🔍 SEO & Metadata

**Update in `src/app/layout.tsx`:**

```typescript
export const metadata: Metadata = {
  title: 'Your Name',
  description: 'Your description',
  keywords: ['your', 'keywords', 'here'],
  // ...
}
```

---

## 📊 Analytics

Google Analytics is already configured (UA-67526894-1).

**To use your own:**

1. Open `src/app/layout.tsx`
2. Find `UA-67526894-1`
3. Replace with your GA ID

Or remove the Google Analytics scripts entirely if not needed.

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to Vercel for auto-deployments.

### Deploy to Netlify

```bash
npm run build
```

Then drag the `out/` folder to Netlify.

### Deploy to Any Static Host

```bash
npm run build
```

Upload the `out/` folder contents.

---

## 🛠️ Customizing Components

### Modify Button Styles

**Edit `src/components/ui/Button.tsx`**

### Modify Card Styles

**Edit `src/components/ui/Card.tsx`**

### Modify Section Layout

**Edit files in `src/components/sections/`**

---

## 📄 Adding New Sections

1. **Create new section component:**

```typescript
// src/components/sections/NewSection.tsx
export default function NewSection() {
  return (
    <section id="new-section" className="py-16 lg:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2>New Section</h2>
        {/* Your content */}
      </div>
    </section>
  )
}
```

2. **Add to homepage:**

```typescript
// src/app/page.tsx
import NewSection from '@/components/sections/NewSection'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <NewSection /> {/* ← Add here */}
        <Connect />
      </main>
      <Footer />
    </>
  )
}
```

3. **Add to navigation:**

```typescript
// src/lib/constants.ts
export const NAV_ITEMS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'New Section', href: '#new-section' }, // ← Add here
  { name: 'Connect', href: '#connect' },
]
```

---

## 🐛 Troubleshooting

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Dark Mode Not Working

Check browser console for errors. Ensure localStorage is enabled.

### Images Not Loading

- Ensure images are in `/public/images/`
- Use `Image` component from `next/image`
- Check file names match exactly (case-sensitive)

### Styles Not Applying

- Ensure TailwindCSS classes are valid
- Check `globals.css` is imported in `layout.tsx`
- Clear Next.js cache: `rm -rf .next`

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

---

## 💡 Tips

1. **Use the design system** - Components are pre-styled for consistency
2. **Keep it simple** - Don't over-complicate the design
3. **Mobile first** - Always test on mobile devices
4. **Performance matters** - Keep bundle size small
5. **Accessibility counts** - Test with keyboard and screen readers

---

## 🎯 Common Tasks

### Change Font

1. Update Google Fonts URL in `globals.css`
2. Update `--font-sans` in @theme

### Add Blog Section

Consider using:
- MDX for markdown content
- Contentlayer for content management
- Next.js dynamic routes

### Add Contact Form

Consider using:
- Formspree (easiest)
- Netlify Forms
- Custom API route

### Add Projects Gallery

Create new section with Card components in a grid layout.

---

**Need help?** Check REDESIGN_SUMMARY.md for full documentation.
