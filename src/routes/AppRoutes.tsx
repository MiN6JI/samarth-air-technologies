import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Calculator from "../pages/Calculator/Calculator";
// Services
import Commercial from "../pages/Services/Commercial";
import Residential from "../pages/Services/Residential";
import Maintenance from "../pages/Services/Maintenance";

import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/contact" element={<Contact />} />

      <Route path="/calculator" element={<Calculator />} />

      <Route path="/services/commercial" element={<Commercial />} />
      <Route path="/services/residential" element={<Residential />} />
      <Route path="/services/maintenance" element={<Maintenance />} />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
