import React, { useState } from "react";
import { navLinks } from "./data";
import { Link } from "react-router-dom";
import hamburger from "/hamburger.svg"; // Make sure the path is correct

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-6 z-30 w-full fixed shadow-lg bg-white">
      <nav className="flex justify-between items-center max-container mx-auto px-4">
        <div className="flex-1">
          <div className="block md:hidden">
            <button onClick={toggleMenu}>
              <img src={hamburger} alt="hamburger" width={25} height={25} />
            </button>
          </div>
          <ul
            className={`flex flex-col md:flex-row justify-start md:items-center gap-4 md:gap-16 py-4 md:py-0 ${
              isMenuOpen ? "block" : "hidden md:flex"
            }`}>
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  className="hover:text-yellow-500 font-normal"
                  to={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
