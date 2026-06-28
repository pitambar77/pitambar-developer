"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  FaRegEnvelope,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaBars,
  FaTimes,
  FaWhatsapp,
} from "react-icons/fa";
import { BsPhone } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

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

const Nav = () => {
  const [showSticky, setShowSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const drawerVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  return (
    <>
      {/* ----------- Top Contact Bar ----------- */}
      <div className="hd bg-gray-200 text-[#5c5e62] py-2 text-sm hidden lg:block relative z-[50]">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <BsPhone />
              <span>+91 7735317551</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaRegEnvelope />
              <span>Email: pitambermajhi33@gmail.com</span>
            </div>
          </div>
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

      {/* ----------- Transparent Header (above banner) ----------- */}
      <nav
        className={`w-full absolute top-0 md:top-10 left-0 z-[100] transition-all duration-700 ${
          showSticky
            ? "opacity-0 pointer-events-none"
            : "opacity-100 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto py-4 flex items-center justify-between relative text-[#3c4655]  px-4 ">
          {/* Logo */}
          <Link href="/">
            <img src="/images/pitambar-dev.png" alt="logo" className="w-18 md:w-28" />
          </Link>

          <ul className="hd hidden lg:flex gap-8 text-[14px]   uppercase">
            <li>
              <Link href="/" className="hover:text-[#ab7e47]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#ab7e47]">
                About Me
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-[#ab7e47]">
                Projects
              </Link>
            </li>

            <li>
              <Link href="/tech-stack" className="hover:text-[#ab7e47]">
                Tech Stack
              </Link>
            </li>
          </ul>

          {/* Right Menu (Desktop) */}
          <ul className="hd hidden lg:flex gap-6 text-[14px]  uppercase">
            <li>
              <Link href="/contact" className="hover:text-[#ab7e47]">
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Icon */}
          <div
            className="lg:hidden text-2xl cursor-pointer"
            onClick={() => setMenuOpen(true)}
          >
            <FaBars />
          </div>
        </div>
      </nav>

      {/* ----------- Sticky Header ----------- */}
      <nav
        className={`fixed top-0 left-0 w-full z-[999] transition-all duration-700 transform ${
          showSticky
            ? "translate-y-0 opacity-100 bg-[#fff] shadow-md text-[#5c5e62]"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto py-4 flex items-center justify-between relative px-4 ">
          {/* Logo */}
          <Link href="/">
            <img src="/images/pitambar-dev.png" alt="logo" className=" w-18 md:w-28" />
          </Link>

          {/* Left Menu (Desktop) */}
          <ul className="hd hidden lg:flex gap-8 text-[14px]   uppercase">
            <li>
              <Link href="/" className="hover:text-[#ab7e47]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#ab7e47]">
                About Me
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-[#ab7e47]">
                Projects
              </Link>
            </li>

            <li>
              <Link href="/tech-stack" className="hover:text-[#ab7e47]">
                Tech Stack
              </Link>
            </li>
          </ul>

          {/* Right Menu (Desktop) */}

          <Link
            href="/contact"
            className=" text-white/70 hd hidden lg:flex gap-6 text-[14px]  uppercase hover:bg-[#ab7e47] px-4 py-2 rounded-sm bg-gray-600 "
          >
            Contact
          </Link>

          {/* Mobile Menu Icon */}
          <div
            className="lg:hidden text-2xl cursor-pointer"
            onClick={() => setMenuOpen(true)}
          >
            <FaBars />
          </div>
        </div>
      </nav>

      {/* ----------- Mobile Drawer Menu (Right Slide) ----------- */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Background Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-[998]"
              onClick={() => setMenuOpen(false)}
            />

            {/* Drawer Panel */}
            <motion.div
              key="drawer"
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 w-full h-full  bg-[#aca188]  z-[999] shadow-xl flex flex-col items-center justify-start pt-16 space-y-6 hd uppercase text-sm text-white/80 "
            >
              {/* Close Icon */}
              <button
                className="absolute top-4 right-4 text-2xl"
                onClick={() => setMenuOpen(false)}
              >
                <FaTimes />
              </button>

              {/* Menu Links */}
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
              <div className=" h-[1px] bg-[#ebebeb]/50 w-3/4"></div>
              <Link href="/about" onClick={() => setMenuOpen(false)}>
                About Me
              </Link>
              <div className=" h-[1px] bg-[#ebebeb]/50 w-3/4"></div>
              <Link href="/projects" onClick={() => setMenuOpen(false)}>
                Projects
              </Link>
              <div className=" h-[1px] bg-[#ebebeb]/50 w-3/4"></div>
              <Link href="/tech-stack" onClick={() => setMenuOpen(false)}>
                Tech Stack
              </Link>

              <div className=" h-[1px] bg-[#ebebeb]/50 w-3/4"></div>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
              <div className=" h-[1px] bg-[#ebebeb]/50 w-3/4"></div>

              <div className="pt-8 flex space-x-4 text-lg">
                {[FaWhatsapp, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="hover:text-gray-900 transition-colors"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
