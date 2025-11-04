# Sterling Energy Infrastructure

Official website for Sterling Energy Infrastructure (SEI) - Premium DC fast-charging infrastructure for electric vehicles.

🌐 **Live Site**: [sterlingenergyinfrastructure.com](https://sterlingenergyinfrastructure.com)

## Overview

Sterling Energy Infrastructure is building next-generation EV charging hubs across Utah with a focus on:
- ≥98% uptime guarantee
- Premium amenities and well-lit environments
- Universal compatibility (CCS and NACS/Tesla)
- Strategic locations near retail and services

## Site Structure

```
sterling-energy-infrastructure/
├── index.html              # Homepage - Mission, features, CTAs
├── projects.html           # Project portfolio (Traverse, South Jordan, Orem/Provo)
├── updates.html            # Project milestones and announcements
├── back-our-first-site.html # Investment and partnership opportunities
├── contact.html            # Contact information
├── assets/
│   ├── css/
│   │   └── styles.css      # Premium dark theme with SEI brand tokens
│   ├── js/
│   │   └── main.js         # Scroll animations, form validation, navigation
│   └── img/
│       ├── traverse-mountain.svg
│       ├── south-jordan.svg
│       └── orem-provo.svg
├── favicon.svg             # Site favicon
├── CNAME                   # Custom domain configuration
├── robots.txt              # SEO configuration
└── sitemap.xml             # Site structure for search engines

```

## Design System

### SEI Brand Tokens
```css
--bg: #0B0F14          /* Dark background */
--panel: #0F1621       /* Panel background */
--card: #121B28        /* Card background */
--text: #E6EDF6        /* Primary text */
--muted: #A7B0BF       /* Muted text */
--primary: #58D5FF     /* Cyan accent - primary brand color */
--accent: #8EF5A3      /* Green accent - secondary brand color */
```

### Typography
- Font Stack: `system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`
- Line Height: 1.55
- Headings: Bold (700), -2% letter spacing
- Crisp rendering with antialiasing

## Features

✅ **Pure HTML/CSS/JS** - No frameworks, no build steps, no dependencies
✅ **Responsive Design** - Mobile-first, tested on all screen sizes
✅ **Accessibility** - Keyboard navigable, high contrast, ARIA labels
✅ **SEO Optimized** - Meta tags, OpenGraph, JSON-LD structured data
✅ **Performance** - All images <5KB, optimized for fast loading
✅ **GitHub Pages Ready** - Static site hosting with custom domain
✅ **Premium UX** - Sticky glassy nav, scroll animations, pill buttons

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge) - Full support
- Older browsers - Graceful degradation with fallbacks
- Mobile browsers - Fully responsive

## Development

### Local Testing
```bash
# Clone the repository
git clone https://github.com/blmothapo1/sterling-energy-infrastructure.git
cd sterling-energy-infrastructure

# Start a local server (Python 3)
python3 -m http.server 8080

# Or use any static file server
# Visit http://localhost:8080
```

### File Structure
- All HTML files are in the root directory
- Assets are organized in `/assets/` subdirectories
- SVG images for lightweight, scalable graphics
- No build process required - edit and deploy

## Deployment

This site is configured for GitHub Pages with a custom domain:
1. Push changes to the repository
2. GitHub Pages automatically deploys from the `main` branch
3. Site is live at sterlingenergyinfrastructure.com

### Custom Domain Setup
- CNAME file contains: `sterlingenergyinfrastructure.com`
- DNS configured to point to GitHub Pages
- HTTPS enabled via GitHub

## Performance

- Lighthouse Score Target: ≥90 in all categories
- All images compressed and optimized (<5KB each)
- Minimal JavaScript (6KB main.js)
- CSS custom properties for theme consistency
- Lazy loading for images

## Accessibility

- Semantic HTML5 structure
- Proper heading hierarchy (h1-h6)
- Alt text for all images
- Keyboard navigation support
- Focus visible states on interactive elements
- ARIA labels where appropriate
- High contrast color scheme

## SEO

### Meta Tags
- Proper title and description on every page
- OpenGraph tags for social sharing
- Viewport meta for mobile

### Structured Data
- JSON-LD Organization schema
- Sitemap.xml for search engines
- Robots.txt for crawler configuration

## Contact

**Email**: [blmothapo@sterlingenergyinfrastructure.com](mailto:blmothapo@sterlingenergyinfrastructure.com)

## License

© 2025 Sterling Energy Infrastructure. All rights reserved.
