import React, { useState } from "react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex space-x-4">
            <a href="#home" className="hover:bg-red-500 px-3 py-2 rounded">
              Home
            </a>
            <a href="#news" className="hover:bg-red-500 px-3 py-2 rounded">
              News
            </a>
            {/* Dropdown konteyneri */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setTimeout(() => setDropdownOpen(false), 300)} // 300ms kechikish bilan yopiladi
            >
              <button className="hover:bg-red-500 px-3 py-2 rounded flex items-center">
                Dropdown <span className="ml-1">&#x25BC;</span>
              </button>
              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-40 bg-white text-black rounded shadow-lg">
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onMouseEnter={() => setDropdownOpen(true)} // Link ustiga kelganda yopilmasin
                  >
                    Link 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onMouseEnter={() => setDropdownOpen(true)}
                  >
                    Link 2
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onMouseEnter={() => setDropdownOpen(true)}
                  >
                    Link 3
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
