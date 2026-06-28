"use client";
import emailjs from "@emailjs/browser";
import {
  Mail,
  MapPin,
  Phone,
  Clock3,
  Users,
  Briefcase,
  MessageCircle,
} from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import Link from "next/link";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { isValidPhoneNumber } from "libphonenumber-js";
import { useRef, useState } from "react";

export default function ContactPage() {
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const fieldRefs = {
    name: useRef(null),
    email: useRef(null),
    phone: useRef(null),
    subject: useRef(null),
    message: useRef(null),
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!isValidPhoneNumber(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = "Subject must be at least 5 characters";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Message should be at least 20 characters";
    }

    setErrors(newErrors);

    const firstError = Object.keys(newErrors)[0];

    if (firstError && fieldRefs[firstError]?.current) {
      fieldRefs[firstError].current.focus();
    }

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handlePhoneChange = (value, data) => {
    const formattedPhone = "+" + value;

    setPhone(value);

    setFormData((prev) => ({
      ...prev,
      phone: formattedPhone,
      countryCode: "+" + data.dialCode,
      country: data.countryCode.toUpperCase(),
    }));

    if (!value) {
      setPhoneError("Phone number is required");

      setErrors((prev) => ({
        ...prev,
        phone: "Phone number is required",
      }));
      return;
    }

    if (!isValidPhoneNumber(formattedPhone)) {
      setPhoneError("Invalid phone number");

      setErrors((prev) => ({
        ...prev,
        phone: "Invalid phone number",
      }));
    } else {
      setPhoneError("");

      setErrors((prev) => ({
        ...prev,
        phone: "",
      }));
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;
    if (loading) return;

    setLoading(true);

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      };

      // Email to yourself
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      );

      // Auto-reply to the visitor
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_REPLY_TEMPLATE,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      );

      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setPhone("");
      setPhoneError("");
      setErrors({});
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#f8f6f2] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-cormorant text-5xl md:text-6xl text-[#ab7e47]">
            Get In Touch
          </h1>

          <p className="mt-6 text-gray-500 text-lg">
            Have a project in mind or would like to discuss your next digital
            solution? I'd love to hear from you.
          </p>
        </div>

        {/* Contact Section */}
        <div className="grid lg:grid-cols-3 gap-8 mt-20">
          {/* Left */}
          <div className="space-y-6">
            <div className="bg-white p-8 shadow-sm rounded-md">
              <h3 className="font-cormorant text-3xl text-[#3c4655] mb-6">
                Contact Information
              </h3>

              <div className="space-y-5">
                <div className="flex gap-4">
                  <Mail className="text-[#ab7e47]" />
                  <div>
                    <p className="font-medium text-[#3c4655]">Email</p>
                    <p className="text-gray-500">pitambermajhi33@gmail.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="text-[#ab7e47]" />
                  <div>
                    <p className="font-medium text-[#3c4655]">Phone</p>
                    <p className="text-gray-500">+91 7735317551</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="text-[#ab7e47]" />
                  <div>
                    <p className="font-medium text-[#3c4655]">Location</p>
                    <p className="text-gray-500">Bhubaneswar,Odisha, India</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 shadow-sm rounded-md">
              <h3 className="font-cormorant text-3xl text-[#3c4655] mb-6">
                Connect With Me
              </h3>

              <div className="space-y-5">
                <Link
                  href="https://www.linkedin.com/in/pitambara-majhi-7b9205228"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#3c4655] hover:text-[#ab7e47] transition"
                >
                  <CiLinkedin size={22} className="text-[#ab7e47] mt-0.5" />
                  <span className="font-medium">LinkedIn</span>
                </Link>

                <Link
                  href="https://wa.me/917735317551"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#3c4655] hover:text-[#ab7e47] transition"
                >
                  <FaWhatsapp size={20} className="text-[#ab7e47] mt-0.5" />
                  <span className="font-medium">WhatsApp</span>
                </Link>

                <Link
                  href="https://www.instagram.com/nagen_majhi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#3c4655] hover:text-[#ab7e47] transition"
                >
                  <FaInstagram size={20} className="text-[#ab7e47] mt-0.5" />
                  <span className="font-medium">Instagram</span>
                </Link>
              </div>
            </div>
            <div className="bg-[#3c4655] text-white p-8 rounded-md">
              <h4 className="font-cormorant text-2xl mb-4">
                Available For New Projects
              </h4>

              <p className="text-gray-300">
                Open to freelance, agency collaborations, CRM implementation,
                and web development projects.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white shadow-sm rounded-md p-10">
            <h3 className="font-cormorant text-4xl text-[#3c4655] mb-8">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  ref={fieldRefs.name}
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Your Name"
                  className="border border-gray-200 rounded-sm w-full px-5 py-2.5 outline-none focus:border-[#ab7e47]"
                />

                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <input
                  ref={fieldRefs.email}
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email Address"
                  className="border border-gray-200 rounded-sm w-full px-5 py-2.5 outline-none focus:border-[#ab7e47]"
                />

                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <PhoneInput
                  country={"in"}
                  ref={fieldRefs.phone}
                  value={phone}
                  // onChange={(phone) => setPhone(phone)}
                  onChange={handlePhoneChange}
                  enableSearch={true}
                  inputStyle={{
                    width: "100%",
                    height: "48px",
                    borderRadius: "8px",
                    border: "1px solid #e5e7eb",
                  }}
                  containerStyle={{
                    width: "100%",
                  }}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
              <div>
                <input
                  ref={fieldRefs.subject}
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  type="text"
                  placeholder="Subject"
                  className="border border-gray-200 rounded-sm w-full px-5 py-2.5 outline-none focus:border-[#ab7e47]"
                />

                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                )}
              </div>
              <div>
                <textarea
                  ref={fieldRefs.message}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="border border-gray-200 rounded-sm w-full px-5 py-2.5 outline-none focus:border-[#ab7e47]"
                />
              </div>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="bg-[#3c4655] font-aviner text-white text-sm w-full px-8 py-3 uppercase rounded-sm hover:bg-transparent border border-[#3c4655] hover:border hover:text-[#ab7e47] hover:border-[#ab7e47]  transition cursor-pointer tracking-widest duration-300"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-28">
          <h2 className="font-cormorant text-center text-5xl text-[#ab7e47] mb-12">
            Frequently Asked Questions
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-8 shadow-sm">
              <Clock3 className="text-[#ab7e47] mb-4" />
              <h3 className="text-xl font-semibold text-[#3c4655] mb-3">
                Response Time
              </h3>
              <p className="text-gray-500">
                Most inquiries receive a response within 24 hours.
              </p>
            </div>

            <div className="bg-white p-8 shadow-sm">
              <Briefcase className="text-[#ab7e47] mb-4" />
              <h3 className="text-xl font-semibold text-[#3c4655] mb-3">
                Services
              </h3>
              <p className="text-gray-500">
                Web development, CRM solutions, automation, integrations, and
                digital consulting.
              </p>
            </div>

            <div className="bg-white p-8 shadow-sm">
              <MessageCircle className="text-[#ab7e47] mb-4" />
              <h3 className="text-xl font-semibold text-[#3c4655] mb-3">
                Consultation
              </h3>
              <p className="text-gray-500">
                Initial consultations are available to discuss requirements and
                project scope.
              </p>
            </div>

            <div className="bg-white p-8 shadow-sm">
              <Users className="text-[#ab7e47] mb-4" />
              <h3 className="text-xl font-semibold text-[#3c4655] mb-3">
                Collaboration
              </h3>
              <p className="text-gray-500">
                Available for freelance, agency partnerships, and long-term
                projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
