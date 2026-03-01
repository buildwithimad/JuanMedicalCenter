# Juan Medical Company Website

A modern, multilingual marketing website for Juan Medical Company built with Next.js and Tailwind CSS. The site features full English and Arabic language support with RTL layout optimization.

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-19-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)
![License](https://img.shields.io/badge/License-Internal-red)

## Overview

Juan Medical Company is a professional medical services provider website featuring a modern, responsive design with smooth animations and multilingual support. The website showcases company services, workflow, about information, and contact capabilities.

## Key Features

- **Multilingual Support** – Full English and Arabic (RTL) language support
- **Responsive Design** – Mobile-first approach with Tailwind CSS
- **Smooth Animations** – Scroll-based animations using Framer Motion and Lenis
- **Optimized Images** – Next.js Image component for performance
- **Custom Typography** – Montserrat (English) and Cairo (Arabic) fonts
- **Contact Form** – Email integration via API route
- **SEO Ready** – Server-side rendering with Next.js App Router

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion, Lenis (smooth scroll)
- **Email:** Nodemailer
- **Fonts:** Google Fonts (Montserrat, Cairo)

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd juanmedical

# Install dependencies
npm install
```

### Development

```bash
# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
juanmedical/
├── app/                      # Next.js App Router
│   ├── [lang]/              # Language routes (en/ar)
│   │   ├── page.js          # Home page
│   │   ├── about/           # About page
│   │   ├── services/        # Services page
│   │   ├── workflow/        # Workflow page
│   │   └── contact/         # Contact page
│   ├── api/                 # API routes
│   │   └── send-email/      # Contact form API
│   ├── globals.css          # Global styles
│   ├── layout.js            # Root layout
│   └── page.js              # Root redirect
├── components/              # React components
│   ├── Home/               # Home page components
│   ├── About/              # About page components
│   ├── Services/           # Services page components
│   ├── Workflow/           # Workflow page components
│   ├── Contact/            # Contact components
│   ├── Ui/                 # Shared UI components
│   ├── Navbar.jsx          # Navigation
│   └── Footer.jsx          # Footer
├── public/                  # Static assets
│   ├── Logo.png            # Logo variants
│   └── Home/               # Page images
└── package.json            # Dependencies
```

## Language Support

The website supports two languages:

- **English (en)** – Default, LTR layout
- **Arabic (ar)** – RTL layout with Cairo font

To change the default language or add new languages, modify the routing in `app/[lang]/`.

## Deployment

Deploy to any platform supporting Next.js:

- **Vercel** – Recommended (zero config)
- **Netlify** – Supported
- **Node.js Server** – Run `npm run build && npm start`

### Environment Variables

If adding new features (e.g., contact form email service), configure environment variables as needed.

## Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Custom 404 Page

A custom "Not Found" page has been created at `app/[lang]/not-found.js` that follows the same design language as other pages:
- Full English and Arabic (RTL) language support
- Matching color scheme (#1e635f teal)
- Smooth scroll-based animations
- Responsive design
- Back to Home navigation button

The root `app/not-found.js` redirects to the English version for routes without a language prefix.

## License

This project is for internal use by Juan Medical Company.

---

Built with ❤️ using Next.js and Tailwind CSS
