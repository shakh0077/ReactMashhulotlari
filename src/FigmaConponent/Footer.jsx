import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-10 px-6 relative top-[250px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        <div>
          <h2 className="text-xl font-semibold">Funiro.</h2>
          <p className="text-gray-500 mt-2">
            Worldwide furniture store since 2020. We sell over 1000+ branded products on our website.
          </p>
          <div className="flex items-center text-gray-600 mt-3">
            <FaMapMarkerAlt className="mr-2 text-gray-400" />
            Toshkent Mirzo Ulug'bek, Buyuk Ipak Yo'li
          </div>
          <a href="+998902640680" className="flex items-center text-gray-600 mt-1">
            <FaPhoneAlt className="mr-2 text-gray-400" />
            +998 90 264 06 80
          </a>
          <a href="https://www.funiro.com" className="text-blue-500 mt-2 block">
            www.funiro.com
          </a>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Menu</h3>
          <ul className="mt-2 text-gray-600 space-y-1">
            <li>Products</li>
            <li>Rooms</li>
            <li>Inspirations</li>
            <li>About Us</li>
            <li>Terms & Policy</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Account</h3>
          <ul className="mt-2 text-gray-600 space-y-1">
            <li>My Account</li>
            <li>Checkout</li>
            <li>My Cart</li>
            <li>My Catalog</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Stay Connected</h3>
          <ul className="mt-2 text-gray-600 space-y-1">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Stay Updated</h3>
          <div className="mt-3 flex items-center border rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 w-full text-gray-600 focus:outline-none"
            />
            <button className="bg-orange-400 text-white p-3">
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
