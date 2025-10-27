export default function TopBar() {
  return (
    <div className="border-b h-10 bg-gray-900 border-gray-300 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* On small screens, content is centered (justify-center); on larger screens, it's spread out (justify-between) */}
        <div className="flex justify-center sm:justify-between items-center text-sm">
          
          {/* Left side - Contact info: Hidden on mobile, visible on small screens and up */}
          <div className="hidden sm:flex items-center gap-6">
            <div className="flex items-center gap-2">
           
              {/* Changed text color to white for better contrast on dark blue background */}
              <span className="font-bold text-xs text-white">hello@dozienwankwo.org</span>
            </div>
          </div>

          {/* Right side - Social links */}
          <div className="flex items-center gap-4">
            {/* Reduced gap slightly for mobile, kept text white for contrast */}
            <div className="flex gap-2 text-white">
              <a
                href="#"
                className="w-5 h-5 rounded-full flex items-center justify-center !text-white text-xs hover:text-red-600 transition-colors"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="#"
                className="w-5 h-5  rounded-full flex items-center justify-center !text-white text-xs hover:text-red-600 transition-colors"
                aria-label="Twitter/X"
              >
                𝕏
              </a>
              <a
                href="#"
                className="w-5 h-5  rounded-full flex items-center justify-center !text-white text-xs hover:text-red-600 transition-colors"
                aria-label="LinkedIn"
              >
                in
              </a>
              {/* <a
                href="#"
                className="w-5 h-5  rounded-full flex items-center justify-center !text-white text-xs hover:text-red-600 transition-colors"
                aria-label="YouTube"
              >
                ▶
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
