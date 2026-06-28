"use client";

import Link from "next/link";
import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const socialLinks = [
  { icon: FaWhatsapp, url: "https://wa.me/917735317551" },
  { icon: FaInstagram, url: "https://www.instagram.com/nagen_majhi/" },
  {
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/in/pitambara-majhi-7b9205228",
  },

  {
    icon: FaYoutube,
    url: "https://youtube.com/@blogtoonnagen?si=2A7BBnA5HGc7QcZW",
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#f7f3ef] py-4">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* LEFT TEXT */}
        <p className="text-gray-500 text-sm text-center md:text-left">
          © 2026 Designed & Developed by Pitambar.
        </p>

        <Link href="/">
          <img
            src="/images/pitambar-dev.png"
            alt="logo"
            className="w-18 md:w-28"
          />
        </Link>

        {/* RIGHT SOCIAL */}
        <div className="flex items-center gap-4 text-gray-600">
          <span className="text-sm mr-2">Follow Me</span>

          <div className="flex items-center space-x-4">
            {socialLinks.map(({ icon: Icon, url }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 transition-colors"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
