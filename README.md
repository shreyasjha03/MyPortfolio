# Portfolio Website - Shreyas Jha

A modern, minimalistic portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and minimalistic design
- 🌓 Dark/Light mode toggle
- ✨ Smooth animations with Framer Motion
- 📱 Fully responsive
- ⚡ Fast and optimized with Next.js 14
- 🎯 SEO optimized

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Projects.tsx
│   └── Skills.tsx
└── public/
```

## Customization

All content is pulled from your resume and can be easily updated in the respective component files:
- Personal info: `components/Hero.tsx` and `components/About.tsx`
- Experience: `components/Experience.tsx`
- Projects: `components/Projects.tsx`
- Skills: `components/Skills.tsx`
- Contact: `components/Contact.tsx`

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
npm i -g vercel
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

