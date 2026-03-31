import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-sand bg-beige">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-serif text-lg font-bold text-charcoal">Winshop Australia</h3>
            <p className="mt-2 text-sm text-warm-gray">
              Premium sublimation-ready apparel blanks. Australian owned, ethically made.
            </p>
          </div>

          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-charcoal">Shop</h4>
            <ul className="mt-3 space-y-2">
              <li><Link to="/shop/adult" className="text-sm text-warm-gray hover:text-charcoal">Adult</Link></li>
              <li><Link to="/shop/kids" className="text-sm text-warm-gray hover:text-charcoal">Kids</Link></li>
              <li><Link to="/shop/infant" className="text-sm text-warm-gray hover:text-charcoal">Infant</Link></li>
              <li><Link to="/wholesale" className="text-sm text-warm-gray hover:text-charcoal">Wholesale</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-charcoal">Information</h4>
            <ul className="mt-3 space-y-2">
              <li><Link to="/about" className="text-sm text-warm-gray hover:text-charcoal">About Us</Link></li>
              <li><Link to="/size-guide" className="text-sm text-warm-gray hover:text-charcoal">Size Guide</Link></li>
              <li><Link to="/shipping-returns" className="text-sm text-warm-gray hover:text-charcoal">Shipping & Returns</Link></li>
              <li><Link to="/faq" className="text-sm text-warm-gray hover:text-charcoal">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-charcoal">Contact</h4>
            <ul className="mt-3 space-y-2">
              <li><a href="mailto:enquiries@winshopaustralia.com.au" className="text-sm text-warm-gray hover:text-charcoal">enquiries@winshopaustralia.com.au</a></li>
              <li><span className="text-sm text-warm-gray">Mon-Fri 9AM-5PM AEST</span></li>
              <li><Link to="/contact" className="text-sm text-warm-gray hover:text-charcoal">Contact Form</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-sand pt-8 sm:flex-row">
          <p className="text-xs text-warm-gray">
            &copy; {new Date().getFullYear()} Winshop Pty Ltd (ABN 20652298121). All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link to="/terms" className="text-xs text-warm-gray hover:text-charcoal">Terms & Conditions</Link>
            <Link to="/privacy" className="text-xs text-warm-gray hover:text-charcoal">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
