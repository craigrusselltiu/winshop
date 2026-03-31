# Winshop Australia - Website Specification

## Implementation Note

Use the `/frontend-design` skill when building pages and components to ensure distinctive, production-grade UI with high design quality. Reference `docs/reference.png` for the target aesthetic: editorial fashion layout with bold oversized typography, asymmetric grid compositions, warm neutral palette (cream, beige, charcoal), and a mix of full-bleed imagery with structured content blocks.

## Overview

Winshop Australia (winshopaustralia.com.au) is an e-commerce store selling sublimation-ready apparel blanks. This spec defines the complete redesign as a React SPA hosted on GitHub Pages with Stripe Payment Links for checkout.

## Business Details

- **Business**: Winshop Pty Ltd
- **ABN**: 20652298121
- **Location**: Suite 8382, 57 Macquarie Street, Parramatta NSW 2150, Australia
- **Email**: enquiries@winshopaustralia.com.au
- **Trading Hours**: Mon-Fri 9AM-5PM AEST, closed weekends & public holidays
- **Social**: Facebook (winshopaustralia), Instagram (winshopau)

## Tech Stack

- **Framework**: Vite + React 18
- **Routing**: React Router v7 (HashRouter for GitHub Pages compatibility)
- **Styling**: Tailwind CSS with custom theme
- **Icons**: lucide-react
- **Animations**: framer-motion
- **Accessible UI**: @headlessui/react
- **E-commerce**: Stripe Payment Links (no backend required)
- **Forms**: Formspree (free tier)
- **Hosting**: GitHub Pages via GitHub Actions
- **Domain**: Custom domain via CNAME + A records

## Design

### Color Palette: Warm & Premium

| Token | Hex | Usage |
|-------|-----|-------|
| cream | `#FAF7F2` | Page backgrounds |
| beige | `#F0E6D6` | Section backgrounds, cards |
| sand | `#D4C5A9` | Borders, subtle accents |
| charcoal | `#2C2C2C` | Headings, primary text |
| warm-gray | `#6B6259` | Body text, secondary |
| terracotta | `#C67D4B` | Primary CTA buttons, links |
| terracotta-dark | `#A8603A` | Hover states |
| gold | `#B8963E` | Premium accents, badges |
| sage | `#7D8C6E` | Sale badges |

### Typography

- **Headings**: Playfair Display (Google Fonts) - serif, elegant
- **Body**: Inter (Google Fonts) - clean sans-serif

## Pages

### Home (`/`)

- **AnnouncementBar**: Dismissible top banner for current promotions
- **HeroSection**: Full-width background image, headline "Simplify Your Custom Apparel with Sublimation Magic", subheadline, "Shop Now" CTA
- **ValuePropositions**: 4 icon cards - Premium Quality, Ethically Made, Australian Owned, Wholesale Available
- **CategoryShowcase**: 3 image tiles linking to Adult, Kids, Infant categories
- **FeaturedProducts**: Grid of 4-6 curated product cards
- **AboutSnippet**: Split layout with image and brief story, "Learn More" CTA
- **NewsletterSignup**: Email input, "Get 10% off your first order"

### Shop (`/shop`, `/shop/:category`)

- **CategoryFilter**: Horizontal pill buttons - All, Adult, Kids, Infant, On Sale, Pre-Orders
- **SortDropdown**: Sort by Featured, Price Low-High, Price High-Low, Name A-Z
- **ProductGrid**: Responsive grid (1/2/3/4 columns by breakpoint)
- **ProductCard**: Image, name, price (with sale formatting), color swatch dots, status badges (Sale, Sold Out, New, Pre-Order)

### Product Detail (`/product/:slug`)

- Two-column layout (stacks on mobile)
- **Left**: ProductGallery - main image + thumbnail strip, images switch by selected color
- **Right**:
  - Product name (h1)
  - PriceDisplay (regular, range, or sale formatting)
  - Short description
  - VariantSelector for color (circular swatches) and size (button row)
  - Size guide link
  - BuyButton - redirects to Stripe Payment Link based on selected variant
  - ProductInfo accordion: Description, Fabric & Care, Shipping

### About (`/about`)

- Hero banner with heading
- Mission statement
- Manufacturing breakdown: 60% Australia, 30% Philippines, 10% Thailand
- Values cards: Ethical Production, Fair Labor, Sustainability, Quality
- Supply chain commitment statement

### Contact (`/contact`)

- Two-column layout
- **Left**: Email, trading hours, address, social links
- **Right**: Contact form (Name, Email, Subject dropdown, Message) via Formspree

### Wholesale (`/wholesale`)

- Intro text on wholesale benefits
- Form: Business name, Contact name, Email, Phone, ABN, Products of interest, Monthly volume, Message
- Submitted via Formspree

### Size Guide (`/size-guide`)

- Tab navigation: Adult Standard, Adult Plus Size, Kids, Infant
- Size chart tables with measurements in cm
- How to measure instructions
- Sublimation tip: 180C for 60 seconds
- Disclaimer about measurements being approximate

### Shipping & Returns (`/shipping-returns`)

Accordion sections covering:
- Processing time: 3-5 business days
- Shipping methods: Standard NSW 2-4 days, Standard Interstate 3-6 days, Express NSW 1-2 days, Express Interstate 1-3 days
- Carrier: Australia Post
- Postage rates calculated at checkout (AU and NZ)
- Insurance: recommended for orders above A$200
- Returns: defective items only, contact within 48 hours, no change-of-mind returns
- Color disclaimer

### Terms & Conditions (`/terms`)

Legal content covering: General terms, Products, Pricing, Payment, Delivery, Returns, Liability, Governing Law (NSW, Australia). Operated by Winshop Pty Ltd (ABN 20652298121).

### Privacy Policy (`/privacy`)

Complies with Australian data protection laws. Sections: Data Collection, Use of Data, Third-party Sharing, Age Restrictions (16+), User Rights, Contact.

### FAQ (`/faq`)

Accordion Q&A driven from data file. Categories: Ordering, Shipping, Products, Sublimation Tips, Wholesale.

### Checkout Success (`/checkout-success`)

- Checkmark icon
- "Thank you for your order!"
- "You'll receive a confirmation email shortly."
- Contact info for questions
- "Continue Shopping" button

### 404 Not Found (`*`)

- "Page Not Found" heading
- "Go Home" and "Shop Now" buttons

## Products

### Categories

- **Adult**: T-shirts, pastel t-shirts, hoodies, crop tops, oversized tees, plus size, v-neck long sleeves
- **Kids**: T-shirts, long sleeves, hoodies (Size 1-12)
- **Infant**: Onesies, t-shirts
- **Pre-Orders**: Bulk packs (5-10 pieces)

### Product Catalog

| Product | Price (AUD) | Sizes | Colors | Status |
|---------|------------|-------|--------|--------|
| Adult Sublimation T-shirt | $9.95-$10.95 | XS-5XL | 10 colors | Active |
| Adult Sublimation T-shirt (Pastel) | $9.95-$10.95 | XS-5XL | Pastel range | Active |
| Adult Hoodies | $28.95 | S-5XL | Multiple | Active |
| Crop Top Short Sleeves | $14.75 | XS-XL | Multiple | Active |
| Oversized Tee | $20.65-$21.95 | S-5XL | Multiple | Sold Out |
| Plus Size T-shirt (6XL-8XL) | $23.95-$24.75 | 6XL-8XL | Multiple | Active |
| V-neck Long Sleeves Crop Top | $20.65 | XS-XL | Multiple | Active |
| Kids Sublimation T-shirt | $6.00-$6.50 | 1-12 | Multiple | Active |
| Kids Long Sleeves | $6.95 | 1-12 | 5 colors | Active |
| Kids Hoodies | $19.95-$22.95 | 1-12 | Multiple | Active |
| Infant Onesies | $7.50 (was $9.75) | 000-1 | Multiple | On Sale |
| Infant T-shirts | $8.95-$9.25 | 000-1 | Multiple | Sold Out |

### Pre-Order Packs

Bulk packs (5-10 pieces) ranging from A$38-A$105. Delivery: 2-4 weeks.

## Stripe Integration

### Approach: Payment Links

1. Products and prices created in Stripe Dashboard
2. Payment Links generated per product with custom fields for size/color
3. `src/data/products.js` maps each variant to its Payment Link URL
4. BuyButton redirects via `window.location.href = paymentLinkUrl`
5. After payment, Stripe redirects to `/#/checkout-success`

### Product Data Schema

```js
{
  slug: string,              // URL-friendly ID
  name: string,              // Display name
  category: string,          // 'adult' | 'kids' | 'infant' | 'pre-order'
  tags: string[],            // ['bestseller', 'on-sale', 'new']
  description: string,
  shortDescription: string,
  fabric: string,
  images: { [color]: string[] },
  defaultImage: string,
  basePrice: number,
  maxPrice: number | null,
  salePrice: number | null,
  onSale: boolean,
  soldOut: boolean,
  colors: [{ name: string, hex: string }],
  sizes: string[],
  sizeChart: string,         // Reference to size chart data
  variants: {
    '[Color]-[Size]': {
      price: number,
      paymentLink: string,
      soldOut: boolean,
    }
  },
  sortOrder: number,
}
```

## Project Structure

```
winshop/
  .github/workflows/deploy.yml
  public/
    CNAME
    images/products/...
    favicon.ico
  src/
    main.jsx
    App.jsx
    index.css
    components/
      layout/     Header, Footer, Layout, MobileMenu, AnnouncementBar
      home/       HeroSection, FeaturedProducts, ValuePropositions,
                  CategoryShowcase, AboutSnippet, NewsletterSignup
      shop/       ProductGrid, ProductCard, CategoryFilter,
                  SortDropdown, ProductBadge
      product/    ProductDetail, ProductGallery, VariantSelector,
                  PriceDisplay, BuyButton, ProductInfo
      ui/         Button, Container, SectionHeading, Breadcrumbs, ScrollToTop
      forms/      ContactForm, WholesaleForm
    pages/        HomePage, ShopPage, ProductPage, AboutPage, ContactPage,
                  WholesalePage, SizeGuidePage, ShippingReturnsPage,
                  TermsPage, PrivacyPage, FAQPage, CheckoutSuccessPage,
                  NotFoundPage
    data/
      products.js
      categories.js
      sizeCharts.js
      faq.js
      navigation.js
    hooks/        useScrollToTop, useDocumentTitle
    utils/        formatPrice, getStripeLink, constants
  index.html
  vite.config.js
  tailwind.config.js
  postcss.config.js
  package.json
```

## Deployment

### GitHub Actions Workflow

On push to `main`: checkout -> install -> build -> deploy to GitHub Pages.

### Custom Domain DNS Setup

**Apex domain (A records):**
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**WWW subdomain (CNAME):**
```
www -> craigrusselltiu.github.io
```

**GitHub Settings:**
- Repo Settings > Pages > Source: GitHub Actions
- Custom domain: www.winshopaustralia.com.au
- Enforce HTTPS: enabled

## Ethical Manufacturing

Key messaging for About page:
- 60% of production in Australia (supporting local jobs)
- 30% in Philippines (trusted partners, ethical labor)
- 10% in Thailand (specialized expertise)
- All supply chains verified for fair and safe working conditions
- Environmentally conscious: recycled fabrics where possible, responsible production
