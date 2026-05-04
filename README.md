# FreeAPI Product Listing Interface - Claymorphism UI

## Overview
A responsive product listing interface built with HTML, CSS, and vanilla JavaScript. Fetches random products from the [FreeAPI Products endpoint](https://api.freeapi.app/api/v1/public/randomproducts) and displays them in a modern claymorphism design.

**Demo Features:**
- Real-time API data fetching
- Claymorphism cards with hover effects
- Responsive grid layout (mobile-first)
- Loading states and error handling
- Add to cart demo functionality

## Quick Start
1. Open `index.html` in any modern web browser.
2. Products load automatically.

**Live Server (optional):**
```bash
# Using VSCode Live Server extension, right-click index.html > Open with Live Server
# Or Python: cd freeapi-product-listing && python -m http.server 8000
# Or Node: npx serve .
```

## File Structure
```
freeapi-product-listing/
├── index.html      # Main page structure
├── styles.css      # Claymorphism styles & responsive design
├── script.js       # API fetch, rendering, interactions
└── README.md       # This file
```

## Tech Stack
- **HTML5** - Semantic structure
- **CSS3** - Claymorphism (multi-shadows, backdrop-filter), CSS Grid, Flexbox
- **Vanilla JavaScript** - API calls, DOM manipulation
- **FreeAPI** - Product data source

## Claymorphism Design
- Soft shadows (outer light, inner dark)
- Backdrop blur effects
- Subtle gradients and rounded corners
- Smooth hover animations
- Pastel color palette

## Hosting & Submission
1. **GitHub Repo:** Push to new repo, enable GitHub Pages.
2. **Netlify:** Drag/drop folder to [netlify.com/drop](https://app.netlify.com/drop).
3. **Vercel:** `vercel --prod`.

## API Response Example
```json
{
  "products": [
    {
      "id": 1,
      "name": "Product Name",
      "price": 29.99,
      "image": "https://..."
    }
  ]
}
```

## Customization
- Change colors in `styles.css` (gradient backgrounds)
- Modify product limit in `script.js`
- Add real cart functionality

