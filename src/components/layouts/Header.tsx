import { useState, useRef, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";

import Button from "../UI/Button";
import Container from "../UI/Container";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  {
    name: "Services",
    path: "/services",
    children: [
      { name: "Commercial", path: "/services/commercial" },
      { name: "Residential", path: "/services/residential" },
      { name: "Maintenance", path: "/services/maintenance" },
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
    setIsOpen(false);
    setMobileServicesOpen(false);
    setDesktopDropdown(false);
  }, [location.pathname]);

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `relative py-1 text-sm font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:rounded-full after:bg-blue-600 after:transition-all after:content-[''] ${
      isActive
        ? "text-blue-600 after:w-full"
        : "text-gray-600 hover:text-gray-900 after:w-0 hover:after:w-full"
    }`;

  const isServicesActive = location.pathname.startsWith("/services");

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <Container className="flex h-22 items-center justify-between py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold tracking-tight text-gray-900"
          onClick={() => setIsOpen(false)}
        >
          <img
            src="public\resized-logo.webp"
            alt="GK India Solar Tech"
            width={"80px"}
            height={"80px"}
          />
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
                    className={`relative flex items-center gap-1 py-1 text-sm font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:rounded-full after:bg-blue-600 after:transition-all after:content-[''] ${
                      isServicesActive
                        ? "text-blue-600 after:w-full"
                        : "text-gray-600 hover:text-gray-900 after:w-0 hover:after:w-full"
                    }`}
                  >
                    {item.name}
                    <HiChevronDown
                      size={16}
                      className={`transition-transform ${
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
                                  ? "bg-blue-50 text-blue-600"
                                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
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
          <Button
            variant="gradient"
            className="rounded-full bg-gradient-to-r from-blue-600 to-blue-800 px-6 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition-transform hover:scale-[1.03]"
          >
            Get Quote
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
            {navItems.map((item) =>
              item.children ? (
                <div key={item.path}>
                  <button
                    onClick={() => setMobileServicesOpen((prev) => !prev)}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-base font-medium transition-colors ${
                      isServicesActive
                        ? "bg-blue-50 text-blue-600"
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
                                ? "bg-blue-50 text-blue-600"
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
                        ? "bg-blue-50 text-blue-600"
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
              <Button
                variant="gradient"
                className="w-full rounded-full bg-linear-to-r from-blue-600 to-blue-800 text-sm font-semibold text-white"
              >
                Get Quote
              </Button>
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Header;
