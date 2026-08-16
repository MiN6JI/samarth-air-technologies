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
  { value: "homes", label: "HVAC & REFRIGERATION" },
  { value: "commercial", label: "ELECTRICAL & INFRASTRUCTURE" },
  { value: "housing-society", label: "SOLAR ENERGY SOLUTIONS & AMC" },
  { value: "Fire Alarm", label: "FIRE ALARM & SAFETY SYSTEMS" },
];

// Zero-padded field index, spec-sheet style ("01", "02"...)
const idx = (n: number) => String(n).padStart(2, "0");

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
    "w-full rounded-md border bg-white px-4 py-2.5 text-sm text-[#16211C] outline-none transition-colors placeholder:text-[#9AA69E] focus:border-[#0E3B2E] focus:ring-2 focus:ring-[#0E3B2E]/15";

  const fieldLabel =
    "mb-1.5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5C6B62]";

  const tagNum = (n: number) => (
    <span className=" text-[10px] text-[#0E3B2E]/60">{idx(n)}</span>
  );

  return (
    <section className="relative overflow-hidden bg-primary-light/30 py-16 md:py-24">
      {/* faint blueprint grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(#DDE3DA 1px, transparent 1px), linear-gradient(90deg, #DDE3DA 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <Container>
        <div className="relative mx-auto max-w-5xl font-body">
          <div className="mb-12">
            <div className="flex items-center gap-2 text-sm font-semibold tracking-[0.2em] text-slate-600">
              <span className="h-2 w-2 rounded-full bg-primary" />
              WHAT WE DO
            </div>
            <h2 className="font-display mt-3 text-3xl font-bold leading-tight text-[#16211C] md:text-[2.5rem]">
              Have a project in mind or need
              <br className="hidden md:block" /> urgent support?
            </h2>
            <p className="mt-3 max-w-xl text-[#5C6B62]">
              Fill out the request below — HVAC, electrical, solar, or fire
              safety — and our engineering team will follow up with a
              consultation and quote.
            </p>
          </div>

          {/* Panel with corner-bracket "spec sheet" framing */}
          <div className="relative rounded-xl bg-white p-[1px] shadow-[0_1px_2px_rgba(14,59,46,0.08)]">
            <div className="grid gap-0 md:grid-cols-5">
              {/* Contact / nameplate panel */}
              <div className="rounded-xl relative flex flex-col justify-between bg-[#0E3B2E] p-8 text-white md:col-span-2">
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage:
                      "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
                <div className="relative">
                  <span className="text-[11px] tracking-[0.25em] text-white">
                    NAMEPLATE
                  </span>
                  <h3 className="font-display mt-2 text-xl font-semibold">
                    Samarth Air Technologies
                  </h3>
                  <p className="mt-2 text-sm text-white/70">
                    Fill out the form and our specialists will respond within 24
                    hours.
                  </p>

                  <div className="mt-8 flex flex-col gap-4 text-sm">
                    <div className="flex items-center gap-3">
                      <HiOutlinePhone size={18} className="text-white" />
                      <span className="">+91 73047 39002</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <HiOutlineMail size={18} className="text-white" />
                      <span className="">xyz@gmail.com</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <HiOutlineLocationMarker
                        size={18}
                        className="mt-0.5 text-white"
                      />
                      <span>Mumbai, Maharashtra, India</span>
                    </div>
                  </div>
                </div>

                {/* Site location — embedded map, styled like a spec-sheet panel */}
                <div className="relative mt-8">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="text-[10px] tracking-[0.2em] text-white">
                      SITE LOCATION
                    </span>
                    <span className="h-px flex-1 bg-white/15" />
                  </div>
                  <div className="overflow-hidden border border-white/15">
                    <iframe
                      title="Samarth Air Technologies location"
                      src="https://www.google.com/maps?q=Mumbai,Maharashtra,India&output=embed"
                      width="100%"
                      height="180"
                      style={{
                        border: 0,
                        filter: "grayscale(0.15) contrast(1.05)",
                      }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5 p-8 md:col-span-3 rounded-xl"
                noValidate
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={fieldLabel}>
                      {tagNum(1)} Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`${inputBase} ${errors.name ? "border-red-400" : "border-[#DDE3DA]"}`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className={fieldLabel}>
                      {tagNum(2)} Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className={`${inputBase} ${errors.phone ? "border-red-400" : "border-[#DDE3DA]"}`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className={fieldLabel}>
                    {tagNum(3)} Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`${inputBase} ${errors.email ? "border-red-400" : "border-[#DDE3DA]"}`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="service" className={fieldLabel}>
                    {tagNum(4)} Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`${inputBase} ${errors.service ? "border-red-400" : "border-[#DDE3DA]"}`}
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.service}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className={fieldLabel}>
                    {tagNum(5)} Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className={`${inputBase} resize-none ${errors.message ? "border-red-400" : "border-[#DDE3DA]"}`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary py-3 text-sm font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#16211C]"
                >
                  Submit Request
                </Button>

                {submitted && (
                  <p className="flex items-center gap-2  text-xs text-[#0E3B2E]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#E8A33D]" />
                    RECEIVED — we'll get back to you shortly.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactForm;
