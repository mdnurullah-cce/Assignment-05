import { useState } from "react";
import Logo from "../assets/logo-text.png";
import type { NavLink } from "../Types/Navbar";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navLinks: NavLink[] = [
    { name: "Home", href: "#home" },
    { name: "Technologies", href: "#technologies" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[rgba(12,11,20,0.82)] backdrop-blur-md">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-3 items-center px-4 py-3 lg:flex lg:justify-between lg:px-8">

        {/* Left: Hamburger menu (mobile only) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="justify-self-start text-3xl text-white lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

        {/* Center: Logo */}
        <a href="#home" className="justify-self-center lg:justify-self-auto">
          <img
            src={Logo}
            alt="Dev Stack Logo"
            className="w-28 sm:w-36 lg:w-40"
          />
        </a>

        {/* Desktop navigation links */}
        <ul className="hidden items-center gap-6 text-lg text-[#cac5d8] lg:flex">
          {navLinks.map((link: NavLink) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="transition-colors hover:text-white"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Authentication buttons */}
        <div className="flex justify-self-end items-center gap-1.5 sm:gap-2 lg:gap-3">
          <button className="btn btn-xs rounded-full sm:btn-sm lg:btn-md">
            Sign In
          </button>

          <button className="btn btn-xs rounded-full bg-pink-500 text-white sm:btn-sm lg:btn-md">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <ul className="absolute left-0 top-full flex w-full flex-col gap-4 bg-[#0c0b14] px-6 py-5 text-lg text-[#cac5d8] shadow-lg lg:hidden">
          {navLinks.map((link: NavLink) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block transition-colors hover:text-white"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
