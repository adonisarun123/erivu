# Erivu Website - Kerala's Authentic Spice Brand

## Overview
This is a comprehensive e-commerce website for Erivu, a premium Kerala spice brand specializing in GI-tagged (Geographical Indication certified) spices. The website tells the story of Kerala's 2000-year spice heritage while providing a modern, user-friendly shopping experience.

## Website Features

### 🌶️ Brand Storytelling
- Authentic Kerala heritage narrative throughout the site
- Story-driven product descriptions
- Farmer and tradition spotlights
- Educational content about GI certification

### 🛒 E-commerce Functionality
- Product catalog with premium Kerala spices
- Shopping cart integration (ready for backend)
- Product ratings and reviews display
- Pricing with discount highlights
- Mobile-responsive design

### 🎨 Design Elements
- **Color Scheme**: 
  - Spice Red (#C73E1D) - warmth and tradition
  - Kerala Green (#228B22) - nature and freshness  
  - Heritage Gold (#DAA520) - premium quality
- **Typography**: Playfair Display for headers, Inter for body text
- **Visual Style**: Premium, authentic, story-driven

### 📱 Technical Features
- Built with React 19 + TypeScript + Vite
- Tailwind CSS V4 for styling
- ShadCN UI components for consistency
- Mobile-first responsive design
- SEO optimized with meta tags and schema markup

## Content Sections

### 🏠 Homepage
- **Hero Section**: Compelling story about Kerala's spice heritage
- **Features**: GI certification, farm-direct sourcing, quality promise
- **Product Showcase**: Featured spices with authentic descriptions
- **Story Section**: Heritage and tradition narrative
- **Quality Promise**: Certification and testing details
- **Contact Information**: Multiple ways to connect

### 📖 SEO & Schema
- Comprehensive meta tags for search optimization
- JSON-LD schema markup for organization
- Keyword optimization for spice-related searches
- Social media Open Graph tags

## Getting Started

### Prerequisites
- Node.js 18+ and Bun package manager
- Modern web browser for development

### Installation & Development
```bash
cd erivu-website
bun install
bun run dev
```

### Building for Production
```bash
bun run build
```

## Content Management

### Adding New Products
Products are currently defined in the `src/App.tsx` file in the `products` array. To add new products:

```javascript
{
  name: "New Spice Name",
  description: "Authentic description with origin story",
  price: "₹XXX",
  originalPrice: "₹XXX",
  rating: 4.8,
  image: "🌿", // Use emoji or replace with actual image
  badge: "Premium/Organic/Best Seller/Rare"
}
```

### Updating Content
Key content areas to customize:
- **Hero Message**: Update the main headline and description in the hero section
- **Story Content**: Modify the heritage story in the story section
- **Contact Information**: Update phone, email, and social media links
- **Product Information**: Add/remove/modify spice descriptions

### SEO Optimization
Update the following in `index.html`:
- Page title and meta description
- Keywords for target search terms
- Schema markup with actual business details
- Social media URLs

## Brand Guidelines

### Voice & Tone
- **Warm & Inviting**: Like sharing family traditions
- **Educational**: Teaching about quality and heritage
- **Premium yet Accessible**: Quality without pretension
- **Story-Driven**: Every touchpoint tells part of the larger narrative

### Content Principles
- Lead with the story, not just the product
- Emphasize GI certification as quality guarantee
- Connect customers to Kerala's heritage
- Build trust through transparency

## Digital Marketing Integration

### Social Media Ready
- Instagram-optimized visual content
- Shareable story elements
- Hashtag strategy built into content
- User-generated content placeholders

### SEO Foundations
- Keyword-optimized content structure
- Local SEO for Kerala-based searches
- Blog-ready architecture for content marketing
- Schema markup for rich snippets

## Future Enhancements

### Phase 1 Additions
- [ ] Shopping cart functionality with backend
- [ ] User authentication and accounts
- [ ] Payment gateway integration
- [ ] Order tracking system

### Phase 2 Features
- [ ] Product reviews and ratings system
- [ ] Recipe blog with spice integration
- [ ] Loyalty program
- [ ] Subscription boxes

### Phase 3 Expansion
- [ ] Mobile app
- [ ] International shipping
- [ ] B2B wholesale portal
- [ ] Advanced analytics

## Brand Assets Included
- Custom CSS animations for spice-themed interactions
- Color palette aligned with Kerala heritage
- Typography scale for consistent branding
- Responsive image optimization

## Support & Maintenance

### Regular Updates Needed
- Product inventory and pricing
- Seasonal promotions and offers
- Blog content for SEO
- Customer testimonials and reviews

### Performance Monitoring
- Page load speeds
- Mobile responsiveness
- SEO ranking improvements
- Conversion rate optimization

## Technical Architecture

### Built With
- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS V4
- **Components**: ShadCN UI
- **Icons**: Lucide React
- **Package Manager**: Bun

### File Structure
```
src/
├── App.tsx              # Main application component
├── index.css            # Global styles with brand colors
├── components/ui/       # Reusable UI components
└── assets/              # Images and static files
```

---

*This website embodies Erivu's mission to bring authentic Kerala spices to kitchens worldwide while preserving and sharing the rich heritage of India's spice capital.*