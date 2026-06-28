"use client";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useRef, useState } from "react";
import { isValidPhoneNumber } from "libphonenumber-js";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

export default function ContactSection() {
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
    <section
      className="relative w-full bg-fixed bg-center bg-cover py-20"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1600')",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        {/* LEFT CONTENT */}
        <div className="text-white">
          <p className="text-gray-400 tracking-widest  mb-3">LET’S CONNECT</p>

          <h2 className="text-4xl md:text-5xl text-gray-300 leading-tight mb-6">
            Have a Project Idea? Let’s Talk
          </h2>

          <p className="text-gray-400 mb-10 leading-relaxed">
            I’m always open to discussing new projects, creative ideas, website
            redesigns, MERN stack development, or Zoho CRM automation solutions.
            Let’s create a scalable and user-focused digital experience
            together.
          </p>

          {/* INFO ITEMS */}
          <div className="space-y-8">
            <div className="flex items-start gap-4 border-b border-gray-700 pb-6">
              <FaMapMarkerAlt className="text-[#ab7e47] text-xl mt-1" />
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-gray-400 text-sm">
                  S.V - 62, Sambit Villa, Khandagiri, Bhubaneswar, Odisha,
                  India, 751003
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 border-b border-gray-700 pb-6">
              <FaEnvelope className="text-[#ab7e47] text-xl mt-1" />
              <div>
                <h4 className="font-semibold">General Enquiries</h4>
                <p className="text-gray-400 text-sm">
                  pitambermajhi33@gmail.com / yahoonagen77@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhone className="text-[#ab7e47] text-xl mt-1" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-gray-400 text-sm">+91 7735317551</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT FORM CARD */}

        {/* RIGHT FORM CARD */}
        <div className="bg-white/90 backdrop-blur-md rounded-md shadow-md p-8 md:p-10">
          <h2 className="text-2xl text-[#ab7e47] text-center mb-6">
            Start Your Project Discussion
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <input
                ref={fieldRefs.name}
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-[#ab7e47]"
              />

              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                ref={fieldRefs.email}
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-[#ab7e47]"
              />

              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
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

            {/* Subject */}
            <div>
              <input
                ref={fieldRefs.subject}
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                type="text"
                placeholder="Project Subject"
                className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-[#ab7e47]"
              />

              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <textarea
                ref={fieldRefs.message}
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-[#ab7e47]"
              />

              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-[#3c4655] w-full text-white py-3 rounded-md uppercase tracking-widest border border-[#3c4655] hover:bg-transparent hover:text-[#ab7e47] hover:border-[#ab7e47] transition duration-300 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Inquiry"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
