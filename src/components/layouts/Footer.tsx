import { Link } from "react-router-dom";

import Container from "../UI/Container";

const Footer = () => {
  return (
    <footer className="mt-auto bg-primary text-gray-300">
      <Container className="grid gap-10 py-12 md:grid-cols-3">
        {/* Company */}
        <div>
          <Link to="/" className="inline-block py-4">
            <img
              src="/logo/Smarath-air-technologies-logo-1.png"
              alt="samarth-air-technologies-logo"
              className="h-22 w-auto object-contain brightness-0 invert"
            />
          </Link>

          <p className="leading-7">
            Delivering innovative technology solutions with quality and
            reliability.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">Information</h3>

          <ul className="space-y-2">
            <li>
              <Link to="/" className="transition-colors hover:text-white">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="transition-colors hover:text-white">
                About
              </Link>
            </li>

            <li>
              <Link
                to="/services"
                className="transition-colors hover:text-white"
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="transition-colors hover:text-white"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">Contact</h3>

          <p>Email: samarthairtechnologies@gmail.com</p>
          <p>Phone: +91 73047 39002</p>
          <p>India</p>
        </div>
      </Container>

      <div className="border-t border-neutral-300">
        <Container className="py-5 text-center text-sm text-neutral-300">
          © {new Date().getFullYear()} Samartha Air Technologies. All rights
          reserved.
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
