
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-400">
          MyWebsite
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="transition-colors duration-300 hover:text-blue-400"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <button className="hidden rounded-lg bg-blue-500 px-5 py-2 font-medium transition-colors hover:bg-blue-600 md:block">
          Get Started
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-gray-700 px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block transition-colors hover:text-blue-400"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <button className="mt-5 w-full rounded-lg bg-blue-500 px-5 py-2 font-medium hover:bg-blue-600">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;