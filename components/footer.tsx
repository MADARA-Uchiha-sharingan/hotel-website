import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-stone-800 text-white py-12 mt-auto">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-lg font-semibold mb-4">Hotel Path Annapurna</h3>
          <p className="text-stone-300">
            Experience luxury and nature in harmony at our unique city business hotel with a cozy cottage-style
            experience in Lamjung, Nepal.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-stone-300 hover:text-amber-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/rooms" className="text-stone-300 hover:text-amber-400 transition-colors">
                Rooms & Stay
              </Link>
            </li>
            <li>
              <Link href="/dining" className="text-stone-300 hover:text-amber-400 transition-colors">
                Food & Dining
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-stone-300 hover:text-amber-400 transition-colors">
                Services & Amenities
              </Link>
            </li>
            <li>
              <Link href="/shop" className="text-stone-300 hover:text-amber-400 transition-colors">
                Retail Shop
              </Link>
            </li>
            <li>
              <Link href="/booking" className="text-stone-300 hover:text-amber-400 transition-colors">
                Book Now
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <address className="not-italic text-stone-300 space-y-2">
            <p>Simapni Bagaicha, Lamjung</p>
            <p>Nepal</p>
            <p>Phone: +977 9844572742</p>
            <p>Email: info@hotelpathannapurna.com</p>
          </address>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="#" className="text-stone-300 hover:text-amber-400 transition-colors">
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-stone-300 hover:text-amber-400 transition-colors">
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-stone-300 hover:text-amber-400 transition-colors">
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
          <div className="mt-6">
            <h4 className="text-sm font-semibold mb-2">Subscribe to our newsletter</h4>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex h-10 w-full rounded-md border border-stone-600 bg-stone-700 px-3 py-2 text-sm text-white placeholder:text-stone-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-800"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-amber-600 text-white hover:bg-amber-700 h-10 px-4 py-2"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="container mt-8 pt-8 border-t border-stone-700">
        <p className="text-center text-stone-400">
          &copy; {new Date().getFullYear()} Hotel Path Annapurna. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

