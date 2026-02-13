import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">

          {/* LEFT - LOGO */}
          <div className="text-2xl font-bold text-black">
            <Link to="/">MyStore</Link>
          </div>

          {/* CENTER - SEARCH BAR (Hidden on small screens) */}
          <div className="hidden md:flex flex-1 mx-6">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* RIGHT - DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="hover:text-gray-600">Home</Link>
            <Link to="/products" className="hover:text-gray-600">Products</Link>
            <Link to="/about" className="hover:text-gray-600">About</Link>
            <Link to="/contact" className="hover:text-gray-600">Contact</Link>
            <Link
              to="/signin"
              className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
            >
              Sign In
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              ☰
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/products" onClick={() => setIsOpen(false)}>Products</Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            <Link
              to="/signin"
              className="bg-black text-white px-4 py-2 rounded-lg text-center"
              onClick={() => setIsOpen(false)}
            >
              Sign In
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
