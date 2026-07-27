import { useState } from "react";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";

import Button from "../../components/UI/Button";
import Container from "../../components/UI/Container";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const serviceOptions = [
  { value: "", label: "Select a service" },
  { value: "homes", label: "Residential Solar" },
  { value: "commercial", label: "Commercial Solar" },
  { value: "housing-society", label: "Housing Society Solar" },
];

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {},
  );

  const validate = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // TODO: wire this up to your API / email service
    console.log("Contact form submitted:", formData);

    setSubmitted(true);
    setFormData(initialForm);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputBase =
    "w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20";

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Get In Touch
            </span>
            <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
              Power Your Future With Solar
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-gray-600">
              Tell us about your project and our team will get back to you with
              a free consultation and quote.
            </p>
          </div>

          <div className="grid gap-10 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:grid-cols-5 md:p-10">
            {/* Contact Info Panel */}
            <div className="flex flex-col justify-between rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 p-6 text-white md:col-span-2 md:p-8">
              <div>
                <h3 className="text-xl font-semibold">Contact Information</h3>
                <p className="mt-2 text-sm text-blue-100">
                  Fill out the form and our solar experts will reach out within
                  24 hours.
                </p>

                <div className="mt-8 flex flex-col gap-5 text-sm">
                  <div className="flex items-center gap-3">
                    <HiOutlinePhone size={20} />
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <HiOutlineMail size={20} />
                    <span>info@gkindiasolar.com</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <HiOutlineLocationMarker size={20} className="mt-0.5" />
                    <span>Mumbai, Maharashtra, India</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 h-40 w-full overflow-hidden rounded-lg">
                <img
                  src="https://images.pexels.com/photos/25751713/pexels-photo-25751713.jpeg"
                  alt="Solar panel installation"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 md:col-span-3"
              noValidate
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`${inputBase} ${errors.name ? "border-red-400" : "border-gray-200"}`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className={`${inputBase} ${errors.phone ? "border-red-400" : "border-gray-200"}`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={`${inputBase} ${errors.email ? "border-red-400" : "border-gray-200"}`}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="mb-1.5 block text-sm font-medium text-gray-700"
                >
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`${inputBase} ${errors.service ? "border-red-400" : "border-gray-200"}`}
                >
                  {serviceOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="mt-1 text-xs text-red-500">{errors.service}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your energy needs..."
                  className={`${inputBase} resize-none ${errors.message ? "border-red-400" : "border-gray-200"}`}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                variant="gradient"
                className="w-full rounded-full bg-gradient-to-r from-blue-600 to-blue-800 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition-transform hover:scale-[1.01]"
              >
                Send Message
              </Button>

              {submitted && (
                <p className="text-center text-sm font-medium text-green-600">
                  Thanks! We'll get back to you shortly.
                </p>
              )}
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactForm;
