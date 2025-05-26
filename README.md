# Coriano Harris website

A modern, interactive single-page application (SPA) website of services for a full-stack UX designer and developer. Built with Next.js, TypeScript, and Tailwind CSS, featuring accessibility-first design, smooth animations, and comprehensive project showcases.

## Features

### Design & User Experience
- **Modern, responsive design** with purple gradient theme
- **Accessibility-first approach** with WCAG 2.1 compliance
- **Smooth animations** powered by Framer Motion (toggleable)
- **Large text mode** for improved readability
- **Keyboard navigation** with proper focus management
- **Screen reader optimized** with semantic HTML and ARIA attributes

### Responsive Layout
- **Mobile-first design** with touch-friendly interactions
- **Adaptive layouts** for all screen sizes
- **Progressive enhancement** for better performance
- **Cross-browser compatibility** with modern web standards

### Interactive Components
- **Dynamic role marquee** showcasing professional skills
- **Expandable service cards** with detailed descriptions
- **Interactive tool showcases** with hover tooltips
- **Project image galleries** with modal overlays
- **Horizontal sliders** for companies, community, articles, and events
- **Smooth scrolling navigation** with section anchors

### Accessibility Features
- **Keyboard navigation** with logical tab order
- **Screen reader support** with descriptive labels
- **High contrast ratios** for better visibility
- **Focus indicators** for interactive elements
- **Alternative text** for all images
- **Semantic HTML structure** for better understanding

## Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

### UI Components
- **shadcn/ui** - Reusable component library
- **Radix UI** - Accessible component primitives
- **Custom components** - Tailored for portfolio needs

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Static type checking

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- Next.js 15
- pnpm package manager

### Setup Instructions

1. **Clone the repository**
 
2. **Install dependencies**
   \`\`\`bash
   pnpm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   pnpm dev
   \`\`\`

### Google Analytics

1. **Google Analytics is automatically configured** in the app with:
   - Page view tracking
   - Event tracking for interactions
   - User engagement metrics
   - Performance monitoring

### Analytics Events Tracked
- **Navigation clicks** - Menu and section navigation
- **Service card expansions** - User engagement with services
- **Project modal opens** - Portfolio project interactions
- **Image gallery views** - Project showcase engagement
- **Contact link clicks** - Lead generation tracking
- **Accessibility feature usage** - Animation and font size toggles

## 📁 Project Structure

\`\`\`
coriano-harris-website/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles and Tailwind
│   ├── layout.tsx               # Root layout with metadata
│   └── page.tsx                 # Main website page
├── components/                   # React components
│   ├── ui/                      # shadcn/ui components
│   ├── navbar.tsx               # Navigation header
│   ├── footer.tsx               # Contact footer
│   ├── role-marquee.tsx         # Animated role display
│   ├── teaser-section.tsx       # Hero section
│   ├── services-section.tsx     # Services showcase
│   ├── tools-section.tsx        # Tools and technologies
│   ├── approach-section.tsx     # Methodology section
│   ├── companies-slider.tsx     # Company projects
│   ├── community-section.tsx    # Community contributions
│   ├── articles-slider.tsx      # Article publications
│   └── events-slider.tsx        # Event appearances
├── public/                       # Static assets
│   ├── icons/                   # Tool and technology icons
│   └── images/                  # Project and reference images
├── lib/                         # Utility functions
│   └── utils.ts                 # Helper functions
├── hooks/                       # Custom React hooks
│   ├── use-mobile.tsx           # Mobile detection
│   └── use-toast.ts             # Toast notifications
└── README.md                    # Project documentation
\`\`\`

## Key Sections

### 1. Hero Section (Teaser)
- **Compelling headline** with animated text
- **Professional introduction** and availability status
- **Visual showcase** with workspace imagery

### 2. Services
- **8 core services** including UX/UI Design, Development, and Consulting
- **Expandable cards** with detailed service descriptions
- **Interactive hover effects** and smooth animations

### 3. Tools & Technologies
- **UX/UI Design tools** - Figma, Sketch, Framer, etc.
- **Development stack** - React, Next.js, TypeScript, Node.js, etc.
- **Categorized display** with tooltips and hover effects

### 4. Company Contributions
- **Project showcases** with detailed case studies
- **Interactive image galleries** with modal overlays
- **Metrics and achievements** for each project
- **Technology stacks** and implementation details

### 5. Community Engagement
- **Open source contributions** with GitHub links
- **Mentoring activities** and community involvement
- **Speaking engagements** and workshop leadership

### Articles
- **Technical writing** and thought leadership

###  Events
- **Conference appearances** and speaking engagements
- **Workshop facilitation** and knowledge sharing

## Deployment

### Vercel (Recommended)
1. **Connect your repository** to Vercel
2. **Add environment variables** in Vercel dashboard
3. **Deploy automatically** on every push to main branch

### Other Platforms
The website is compatible with:
- **Vercel** - Static site hosting

## Analytics & Performance

### Google Analytics 4 Integration
- **Automatic page tracking** for all sections
- **Custom event tracking** for user interactions
- **Performance monitoring** and Core Web Vitals
- **Conversion tracking** for contact form submissions

### Performance Optimizations
- **Image optimization** with Next.js Image component
- **Lazy loading** for non-critical content
- **Code splitting** for optimal bundle sizes
- **SEO optimization** with proper meta tags

## ♿ Accessibility Compliance

### WCAG 2.1 AA Standards
- **Keyboard navigation** support throughout
- **Screen reader compatibility** with semantic HTML
- **Color contrast ratios** meeting accessibility guidelines
- **Focus management** for modal interactions
- **Alternative text** for all meaningful images

### Accessibility Features
- **Skip navigation** links for keyboard users
- **Descriptive headings** and landmark regions
- **Form labels** and error messaging
- **Animation controls** for motion sensitivity
- **Text scaling** support up to 200%

## Contributing

### Development Guidelines
1. **Follow TypeScript** best practices
2. **Maintain accessibility** standards
3. **Write semantic HTML** with proper ARIA attributes
4. **Test keyboard navigation** for all interactions
5. **Optimize images** and performance

### Code Style
- **ESLint configuration** for consistent code style
- **Prettier formatting** for code consistency
- **TypeScript strict mode** for type safety
- **Component documentation** with JSDoc comments

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

**Coriano Harris**
- **Portfolio**: [https://www.corianoharris.com](https://www.corianoharris.com)
- **Email**: [corianoharrispro@gmail.com](mailto:corianoharrispro@gmail.com)
- **LinkedIn**: [linkedin.com/in/janedesigner](https://linkedin.com/in/corianoharris)
- **GitHub**: [github.com/corianoharris](https://github.com/corianoharris)

---

## Acknowledgments

- **shadcn/ui** for the excellent component library
- **Framer Motion** for smooth animations
- **Lucide React** for beautiful icons
- **Tailwind CSS** for utility-first styling
- **Next.js team** for the amazing framework

Built and power by Coriano Harris
