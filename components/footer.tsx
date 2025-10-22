import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">Politicia</h3>
            <p className="text-gray-400">
              Building a better future through transparent leadership and community-driven solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="!text-white hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="!text-white hover:text-white transition-colors">
                  Our Platform
                </a>
              </li>
              <li>
                <a href="#" className="!text-white hover:text-white transition-colors">
                  News
                </a>
              </li>
              <li>
                <a href="#" className="!text-white hover:text-white transition-colors">
                  Events
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className=" !text-white hover:text-white transition-colors">
                  Volunteer
                </a>
              </li>
              <li>
                <a href="#" className="!text-white hover:text-white transition-colors">
                  Donate
                </a>
              </li>
              <li>
                <a href="#" className="!text-white hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="!text-white hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:info@politicia.com" className="!text-white hover:text-white transition-colors">
                  hello@dozienwankwo.com
                </a>
              </li>
            
              {/* <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span>123 Main Street, City, State 12345</span>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">&copy; 2025 Dozie Nwankwo Campaign. All rights reserved.</p>

            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
