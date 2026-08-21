import { useState, useRef, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  HiMenu,
  HiX,
  HiChevronDown,
  HiMail,
  HiPhone,
  HiArrowRight,
} from "react-icons/hi";

import Container from "../UI/Container";
import { FaLinkedinIn } from "react-icons/fa6";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  {
    name: "Services",
    path: "/services",
    children: [
      { name: "Homes", path: "/services/homes" },
      { name: "Commercial", path: "/services/commercial" },
      { name: "Housing Society", path: "/services/housing-society" },
    ],
  },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [desktopDropdown, setDesktopDropdown] = useState(false); // desktop Services dropdown
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false); // mobile Services accordion
  const dropdownRef = useRef<HTMLLIElement>(null);
  const location = useLocation();

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDesktopDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect */
    setIsOpen(false);
    setMobileServicesOpen(false);
    setDesktopDropdown(false);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, [location.pathname]);

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `relative py-1 text-lg font-medium text-white transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:rounded-full after:bg-white after:transition-all after:content-[''] ${
      isActive
        ? "text-white after:w-full"
        : "text-white hover:text-white after:w-0 hover:after:w-full"
    }`;

  const isServicesActive = location.pathname.startsWith("/services");

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
          {/* I need this link only to show up when I scroll down or when the header becomes sticky */}
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
              {navItems.map((item) =>
                item.children ? (
                  <li
                    key={item.path}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => setDesktopDropdown(true)}
                    onMouseLeave={() => setDesktopDropdown(false)}
                  >
                    <button
                      onClick={() => setDesktopDropdown((prev) => !prev)}
                      className={`relative flex items-center gap-1 py-1 text-lg font-medium text-white transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:rounded-full after:bg-white after:transition-all after:content-[''] ${
                        isServicesActive
                          ? "text-white after:w-full"
                          : "text-white after:w-0 hover:after:w-full"
                      }`}
                    >
                      {item.name}

                      <HiChevronDown
                        size={16}
                        className={`text-white transition-transform ${
                          desktopDropdown ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown panel */}
                    <div
                      className={`absolute left-1/2 top-full z-50 w-52 -translate-x-1/2 pt-3 transition-all duration-150 ${
                        desktopDropdown
                          ? "pointer-events-auto translate-y-0 opacity-100"
                          : "pointer-events-none -translate-y-1 opacity-0"
                      }`}
                    >
                      <ul className="overflow-hidden rounded-xl border border-gray-100 bg-white py-2 shadow-lg shadow-gray-900/5">
                        {item.children.map((child) => (
                          <li key={child.path}>
                            <NavLink
                              to={child.path}
                              className={({ isActive }) =>
                                `block px-4 py-2 text-sm transition-colors ${
                                  isActive
                                    ? "bg-white-50 text-white"
                                    : "text-white hover:bg-gray-50 hover:text-white"
                                }`
                              }
                            >
                              {child.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ) : (
                  <li key={item.path}>
                    <NavLink to={item.path} className={linkClasses}>
                      {item.name}
                    </NavLink>
                  </li>
                ),
              )}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <Link to="/contact" className="hidden md:block">
            <button className="bg-white px-6 text-sm font-semibold text-primary transition-transform hover:scale-[1.03]">
              Get Quote
              <HiArrowRight size={16} />
            </button>
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
        {/* </div> */}

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-gray-100 bg-white md:hidden">
            <Container className="flex flex-col gap-1 py-4">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.path}>
                    <button
                      onClick={() => setMobileServicesOpen((prev) => !prev)}
                      className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-base font-medium transition-colors ${
                        isServicesActive
                          ? "bg-white-50 text-white-600"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {item.name}
                      <HiChevronDown
                        size={18}
                        className={`transition-transform ${
                          mobileServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {mobileServicesOpen && (
                      <div className="ml-3 flex flex-col gap-1 border-l border-gray-100 pl-3 pt-1">
                        {item.children.map((child) => (
                          <NavLink
                            key={child.path}
                            to={child.path}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                              `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                                isActive
                                  ? "bg-white-50 text-white-600"
                                  : "text-gray-600 hover:bg-gray-50"
                              }`
                            }
                          >
                            {child.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
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
                ),
              )}
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
