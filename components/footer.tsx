import { Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-20 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Wrapper grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand — full width on mobile */}
          <div className="space-y-4 md:col-span-1">
            <h3 className="text-2xl font-bold text-primary">Hon. Dozie Nwankwo</h3>
            <p className="text-gray-400">
              Building a better future through transparent leadership and
              community-driven solutions.
            </p>
          </div>

          {/* On mobile: Quick Links + Resources side-by-side */}
          <div className="grid grid-cols-2 gap-8 md:contents">
            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-bold text-lg">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="/about" className="!text-white hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="!text-white hover:text-white transition-colors">
                    Contact us
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
                  <a href="/volunteer" className="!text-white hover:text-white transition-colors">
                    Volunteer
                  </a>
                </li>
                <li>
                  <a href="/donate" className="!text-white hover:text-white transition-colors">
                    Donate
                  </a>
                </li>
                <li>
                  <a href="/#" className="!text-white hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact — full width at bottom on mobile */}
          <div className="space-y-4 md:col-span-1">
            <h4 className="font-bold text-lg">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <a
                  href="mailto:hello@dozienwankwo.com"
                  className="!text-white hover:text-white transition-colors"
                >
                  hello@dozienwankwo.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; 2025 Hon. Dozie Nwankwo Campaign Organization. All rights reserved.
            </p>
            {/* <div className="flex gap-4">
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
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
