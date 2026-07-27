import { Link } from "react-router-dom";

import Container from "../UI/Container";

const Footer = () => {
  return (
    <footer className="mt-auto bg-gray-900 text-gray-300">
      <Container className="grid gap-10 py-12 md:grid-cols-3">
        {/* Company */}
        <div>
          <h2 className="mb-4 text-2xl font-bold text-white">GK India</h2>

          <p className="leading-7">
            Delivering innovative technology solutions with quality and
            reliability.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>

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

          <p>Email: info@gkindia.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>India</p>
        </div>
      </Container>

      <div className="border-t border-gray-800">
        <Container className="py-5 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} GK India. All rights reserved.
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
