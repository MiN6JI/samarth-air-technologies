import { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";
import { HiMenu, HiX, HiMail, HiPhone, HiArrowRight } from "react-icons/hi";

import Button from "../UI/Button";
import Container from "../UI/Container";
import { FaLinkedinIn } from "react-icons/fa6";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
  }, [location.pathname]);

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `relative py-1 text-lg font-medium text-white transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:rounded-full after:bg-white after:transition-all after:content-[''] ${
      isActive
        ? "text-white after:w-full"
        : "text-white hover:text-white after:w-0 hover:after:w-full"
    }`;

  return (
    <>
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-100">
        <Container className="flex h-14 items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3"
            onClick={() => setIsOpen(false)}
          >
            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-primary-light rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
            >
              <FaFacebookF size={12} />
            </a>
            <a
              href="https://instagram.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-primary-light rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
            >
              <FaInstagram size={12} />
            </a>
            <a
              href="https://linkedin.com/company/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-primary-light rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
            >
              <FaLinkedinIn size={12} />
            </a>
            <a
              href="https://twitter.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-primary-light rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
            >
              <FaTwitter size={12} />
            </a>
          </Link>

          <div className="flex justify-center items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="p-1 bg-primary-light rounded-full">
                <HiMail size={18} className="text-primary" />
              </div>
              <p className="font-semibold text-primary">xyz@gmail.com</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-1 bg-primary-light rounded-full">
                <HiPhone size={16} className="text-primary" />
              </div>
              <p className="font-semibold text-primary">+91 98345 34845</p>
            </div>
          </div>
        </Container>
      </header>

      <header className="bg-primary sticky top-0 z-50">
        <Container className="flex h-22 items-center justify-between bg-primary">
          <Link
            to="/"
            className="text-xl font-bold tracking-tight text-white"
            onClick={() => setIsOpen(false)}
          >
            <h2 className="font-extrabold text-white text-4xl">LOGO</h2>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-10">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink to={item.path} className={linkClasses}>
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <Link to="/contact" className="hidden md:block">
            <Button className="bg-white px-6 text-sm font-semibold text-primary transition-transform hover:scale-[1.03]">
              Get Quote
              <HiArrowRight size={16} />
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="p-2 text-gray-700 md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </Container>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-gray-100 bg-white md:hidden">
            <Container className="flex flex-col gap-1 py-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-2.5 text-base font-medium transition-colors ${
                      isActive
                        ? "bg-white-50 text-white-600"
                        : "text-gray-700 hover:bg-gray-50"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-2"
              >
                <button className="w-full bg-white px-3 text-sm font-semibold text-primary">
                  Get Quote
                </button>
              </Link>
            </Container>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
