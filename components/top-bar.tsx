export default function TopBar() {
    return (
      <div className="border-b h-10 border-gray-300 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            {/* Left side - Contact info */}
            <div className="flex items-center gap-6">
             
              <div className="flex items-center gap-2">
                <span className="text-gray-600 text-xs font-semibold">Mail to us:</span>
                <span className="font-bold text-xs text-gray-900">support@dozienwankwo.com</span>
              </div>
            </div>
  
            {/* Right side - Social links */}
            <div className="flex items-center gap-4">
              <span className="text-gray-600 text-xs font-bold">Follow Us</span>
              <div className="flex gap-3 text-gray-600">
                <a
                  href="#"
                  className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs"
                >
                  f
                </a>
                <a
                  href="#"
                  className="w-5 h-5  rounded-full flex items-center justify-center text-white text-xs "
                >
                  𝕏
                </a>
                <a
                  href="#"
                  className="w-5 h-5  rounded-full flex items-center justify-center text-white text-xs "
                >
                  in
                </a>
                <a
                  href="#"
                  className="w-5 h-5  rounded-full flex items-center justify-center text-white text-xs "
                >
                  ▶
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  