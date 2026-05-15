import React from "react"
import { FaChartLine } from "react-icons/fa";

function Footer(){
    return (
       <footer id="Footer" className="bg-zinc-900 text-gray-500 px-4 py-12 mt-20">
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
    <div className="col-span-1 sm:col-span-2">
      <div className="flex items-center gap-2 mb-4">
        <FaChartLine className="lg:text-3xl text-2xl  text-gray-500" />
        <span className="text-white font-bold text-xl">FinGenius</span>
      </div>
      <p className="text-sm md:text-base max-w-md leading-relaxed">
        FinGenius helps you simplify investing by combining smart AI recommendations,
        real-time portfolio insights, and seamless tracking—designed for modern investors.
      </p>
      <div className="flex gap-4 mt-4">
        {/* Replace these with your actual icons or links */}
        <a href="#"><svg className="w-5 h-5 hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M22 4.01c-..."/></svg></a>
        <a href="#"><svg className="w-5 h-5 hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5..."/></svg></a>
        <a href="#"><svg className="w-5 h-5 hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5C..."/></svg></a>
      </div>
    </div>

    <div>
      <h4 className="text-white font-semibold mb-2">Product</h4>
      <ul className="space-y-1 text-sm">
        <li><a href="#" className="hover:text-white">Features</a></li>
        <li><a href="#" className="hover:text-white">Pricing</a></li>
        <li><a href="#" className="hover:text-white">Portfolio Tools</a></li>
        <li><a href="#" className="hover:text-white">Live Data</a></li>
      </ul>
    </div>

    <div>
      <h4 className="text-white font-semibold mb-2">Support</h4>
      <ul className="space-y-1 text-sm">
        <li><a href="#" className="hover:text-white">Help Center</a></li>
        <li><a href="#" className="hover:text-white">Guides</a></li>
        <li><a href="#" className="hover:text-white">API Status</a></li>
        <li><a href="#" className="hover:text-white">Documentation</a></li>
      </ul>
    </div>

    <div>
      <h4 className="text-white font-semibold mb-2">Company</h4>
      <ul className="space-y-1 text-sm">
        <li><a href="#" className="hover:text-white">About</a></li>
        <li><a href="#" className="hover:text-white">Blog</a></li>
        <li><a href="#" className="hover:text-white">Careers</a></li>
        <li><a href="#" className="hover:text-white">Press</a></li>
      </ul>
    </div>

    <div>
      <h4 className="text-white font-semibold mb-2">Legal</h4>
      <ul className="space-y-1 text-sm">
        <li><a href="#" className="hover:text-white">Privacy</a></li>
        <li><a href="#" className="hover:text-white">Terms</a></li>
        <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
        <li><a href="#" className="hover:text-white">Licenses</a></li>
      </ul>
    </div>
  </div>

  <div className="border-t border-zinc-800 mt-10 pt-6 text-sm text-center">
    © 2025 FinGenius, Inc. All rights reserved.
  </div>
</footer>


    )
}

export default Footer;

