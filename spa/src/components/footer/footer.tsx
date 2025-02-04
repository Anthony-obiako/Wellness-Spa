"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Booking", href: "/booking" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="w-full px-4 py-2 md:px-14">
      {/* Mobile Layout */}
      <div className="flex flex-col items-center md:hidden p-2">
        
        <div className="container flex items-center justify-center mb-2">
          <div className="flex justify-end lg:gap-10 md:gap-6 gap-2 ">
            {navLinks.slice(0, Math.ceil(navLinks.length / 2)).map((link) => (
              <Link key={link.name} href={link.href}>
                <motion.span
                  className="text-amber-50 hover:text-white transition-colors duration-300 lg:text-base text-xs"
                  whileHover={{ scale: 1.1 }}
                >
                  {link.name}
                </motion.span>
              </Link>
            ))}
          </div>

          {/* Center Logo */}
          <Link href="/" className="flex md:justify-center mx-4">
            <div className="sm:w-full cursor-pointer">
              <Image
                src="/images/wellness-logo.png"
                alt="wellness logo"
                width={90}
                height={90}
              />
            </div>
          </Link>

          <div className="flex lg:gap-10 md:gap-4 gap-2">
            {navLinks.slice(Math.ceil(navLinks.length / 2)).map((link) => (
              <Link key={link.name} href={link.href}>
                <motion.span
                  className="text-amber-50 hover:text-white transition-colors duration-300 lg:text-base text-xs"
                  whileHover={{ scale: 1.1 }}
                >
                  {link.name}
                </motion.span>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex w-full justify-between">
          <div className="text-amber-50 text-xs md:text-base whitespace-nowrap text-start">
            <p>Terms of Service Agreement</p>
            <p>Privacy Policy</p>
            <p>@2025ABWellness</p>
          </div>

          
          <div className="text-amber-50 text-xs md:text-base whitespace-nowrap text-end">
            <p>+48 881206 660</p>
            <p>UI. Jana Ostroroga 24 E.</p>
            <p>01-163 Warzawa</p>
          </div>
        </div>
      </div>

      {/* Desktop Layout: Separate text containers on left and right with links centered */}
      <div className="hidden md:flex h-full max-h-32 items-center justify-center">
        
        <div className="text-amber-50 text-xs md:text-sm text-nowrap">
          <p>Terms of Service Agreement</p>
          <p>Privacy Policy</p>
          <p>@2025ABWellness</p>
        </div>

        {/* Links Container */}
        <div className="container flex items-center justify-center -ml-10">
          <div className="flex justify-end lg:gap-10 md:gap-6 gap-2">
            {navLinks.slice(0, Math.ceil(navLinks.length / 2)).map((link) => (
              <Link key={link.name} href={link.href}>
                <motion.span
                  className="text-amber-50 hover:text-white transition-colors duration-300 lg:text-base text-sm"
                  whileHover={{ scale: 1.1 }}
                >
                  {link.name}
                </motion.span>
              </Link>
            ))}
          </div>

          {/* Center Logo */}
          <Link href="/" className="flex md:justify-center mx-4">
            <div className="sm:w-full cursor-pointer">
              <Image
                src="/images/wellness-logo.png"
                alt="wellness logo"
                width={90}
                height={90}
              />
            </div>
          </Link>

          <div className="flex lg:gap-10 md:gap-4 gap-2">
            {navLinks.slice(Math.ceil(navLinks.length / 2)).map((link) => (
              <Link key={link.name} href={link.href}>
                <motion.span
                  className="text-amber-50 hover:text-white transition-colors duration-300 lg:text-base text-sm"
                  whileHover={{ scale: 1.1 }}
                >
                  {link.name}
                </motion.span>
              </Link>
            ))}
          </div>
        </div>

        {/* Right Text */}
        <div className="text-amber-50 text-xs md:text-sm whitespace-nowrap">
          <p>+48 881206 660</p>
          <p>UI. Jana Ostroroga 24 E.</p>
          <p>01-163 Warzawa</p>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
