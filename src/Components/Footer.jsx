import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Column 1 - Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">ESSENCE.</h2>
            <p className="text-sm text-gray-400 leading-6 mb-6">
              Minimal fashion for the modern world. Redefining style with
              sustainability and authenticity at our core.
            </p>

            <div className="flex gap-4">
              <FaInstagram className="cursor-pointer hover:text-white transition" />
              <FaTwitter className="cursor-pointer hover:text-white transition" />
              <FaFacebookF className="cursor-pointer hover:text-white transition" />
            </div>
          </div>

          {/* Column 2 - Shop */}
          <div>
            <h3 className="text-white font-semibold mb-4">Shop</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer">New Arrivals</li>
              <li className="hover:text-white cursor-pointer">Best Sellers</li>
              <li className="hover:text-white cursor-pointer">Accessories</li>
              <li className="hover:text-white cursor-pointer">Sale</li>
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Sustainability</li>
              <li className="hover:text-white cursor-pointer">Terms of Service</li>
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stay in the loop</h3>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to receive exclusive offers and updates.
            </p>

            <input
              type="email"
              placeholder="Your email address"
              className="w-full bg-[#1a1a1a] border border-gray-700 rounded-md px-4 py-2 mb-4 text-sm focus:outline-none focus:border-white"
            />

            <button className="w-full bg-white text-black font-medium py-2 rounded-md hover:bg-gray-200 transition">
              SUBSCRIBE
            </button>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
          © 2026 Essence Fashion. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
