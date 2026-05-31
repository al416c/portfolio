# 🛡️ Cybersecurity Portfolio

A cybersecurity-focused portfolio website built with Next.js, featuring network surveillance aesthetics and a cinematic validation transition.

## ✨ Features

- **Dark Network Surveillance UI**: Network monitoring aesthetics with particle effects
- **Matrix Rain Effect**: Animated cybersecurity-themed background
- **Cinematic Transitions**: Powered by Framer Motion with packet storms and glitch effects
- **Responsive Design**: Looks great on all devices
- **Custom Cursor**: Interactive cursor effect on desktop
- **Scroll Progress**: Visual scroll indicator
- **Glassmorphism**: Modern glass-effect cards
- **Easy Customization**: All content in one config file

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Build for Production

```bash
npm run build
npm start
```

## 📝 Customization

All content can be edited in a single file: `src/config/content.ts`

### Personal Information

```typescript
export const siteConfig = {
  name: "Your Name",
  title: "Cybersecurity Expert",
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
};
```

### Sections to Customize

1. **Hero Section** (`heroContent`) - Greeting, name, title, subtitle, description
2. **About Section** (`aboutContent`) - Bio paragraphs, statistics
3. **Skills Section** (`skillsContent`) - Skill categories and individual skills
4. **Projects Section** (`projectsContent`) - Project details, descriptions, tags, links
5. **Experience Section** (`experienceContent`) - Job history, timeline
6. **Certifications** (`certificationsContent`) - Your certifications and achievements
7. **Contact Section** (`contactContent`) - Form labels, description

## 🎨 Theming

Colors can be customized in `src/app/globals.css`:

```css
:root {
  --color-cyber-green: #00ff88;
  --color-cyber-blue: #00d4ff;
  --color-cyber-purple: #9d4edd;
  --color-cyber-pink: #ff006e;
  --color-dark-bg: #0a0a0f;
  --color-dark-surface: #12121a;
  --color-dark-border: #1e1e2e;
}
```

## 🚀 Deploy to Vercel

### Option 1: Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option 2: GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with one click

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css       # Global styles
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Main page
│   ├── components/
│   │   ├── MatrixRain.tsx    # Background animation
│   │   ├── Navigation.tsx    # Header navigation
│   │   ├── HeroSection.tsx   # Hero/landing section
│   │   ├── AboutSection.tsx  # About me section
│   │   ├── SkillsSection.tsx # Skills/arsenal section
│   │   ├── ProjectsSection.tsx # Projects showcase
│   │   ├── ExperienceSection.tsx # Timeline/experience
│   │   ├── ContactSection.tsx # Contact form
│   │   ├── Footer.tsx        # Footer
│   │   ├── ScrollProgress.tsx # Scroll indicator
│   │   └── CustomCursor.tsx  # Custom cursor effect
│   └── config/
│       └── content.ts        # ⭐ ALL CONTENT HERE
├── public/
│   └── projects/             # Project images
└── package.json
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, Anime.js
- **Language**: TypeScript
- **Deployment**: Vercel

## 📸 Adding Project Images

Place your project images in `public/projects/`:

```
public/projects/
├── project1.jpg
├── project2.jpg
├── project3.jpg
└── project4.jpg
```

Then reference them in `src/config/content.ts`.

---

**Made with 💚 for the cybersecurity community**
