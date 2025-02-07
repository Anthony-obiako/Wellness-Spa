"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Added the isOpen state

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Booking", href: "/booking" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-lg transition-all duration-300`}
    >
      <div className="container mx-auto flex items-center justify-between py-1 px-1 md:px-10">
        {/* Left-side Desktop Links */}
        <div className="hidden md:flex flex-1 justify-end lg:gap-28 md:gap-14 gap-8">
          {navLinks.slice(0, Math.ceil(navLinks.length / 2)).map((link) => (
            <Link key={link.name} href={link.href}>
              <motion.span
                className="text-amber-50 hover:text-white transition-colors duration-300 lg:text-xl md:text-lg"
                whileHover={{ scale: 1.1 }}
              >
                {link.name}
              </motion.span>
            </Link>
          ))}
        </div>

        {/* Logo (Centered on Desktop) with Bottom-to-Top Animation */}
        <Link href="/" className="md:px-14 lg:px-28 md:flex md:justify-center md:my-2">
          <div
            className="w-14 sm:w-full cursor-pointer">
            <Image
              src="/images/wellness-logo.png"
              alt="wellness logo"
              width={70}
              height={70}
            />
          </div>
        </Link>

        {/* Right-side Desktop Links */}
        <div className="hidden md:flex flex-1 lg:gap-28 md:gap-14 gap-8">
          {navLinks.slice(Math.ceil(navLinks.length / 2)).map((link) => (
            <Link key={link.name} href={link.href}>
              <motion.span
                className="text-amber-50 hover:text-white transition-colors duration-300 lg:text-xl md:text-lg"
                whileHover={{ scale: 1.1 }}
              >
                {link.name}
              </motion.span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden space-x-3">
          <a
            href="tel:+1234567890" // Replace with actual phone number
            className="text-amber-100  transition p-2 border-2 border-amber-100 rounded-full"
          >
            <PhoneIcon className="w-3 h-3" />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-100 transition p-2 border-2 border-amber-100 rounded-full"
          >
            <FaInstagram className="w-3 h-3" />
          </a>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)} // Toggle isOpen on click
          >
            {isOpen ? (
              <XMarkIcon className="w-9 h-9 text-amber-100 font-extralight" />
            ) : (
              <Bars3Icon className="w-9 h-9 text-amber-100" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-white/80 backdrop-blur-lg py-4 shadow-md"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
              >
                <span className="text-gray-700 hover:text-teal-600 transition-colors duration-300">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
