import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <motion.div
        variants={textVariant()}
        className="container mx-auto text-center"
      >
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-[#915eff]">
          Abhishek Raj Singh
        </h2>

        {/* Social Media Icons - Responsive */}
        <motion.div
          variants={textVariant()}
          className="flex flex-wrap justify-center space-x-4 mt-6"
        >
          {[
            {
              icon: <FaGithub />,
              link: "https://github.com/abhishekrajsingh25",
            },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/abhishek-raj-singh-731794239/",
            },
            {
              icon: <FaTwitter />,
              link: "https://x.com/Abhishek2592000",
            },
            {
              icon: <FaInstagram />,
              link: "https://www.instagram.com/abhishekraj_25/",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-[#915eff] transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </motion.div>

        {/* Copyright Text */}
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-sm text-gray-400 mt-6"
        >
          © 2025 Abhishek Raj Singh. All rights reserved.
        </motion.p>
      </motion.div>
    </footer>
  );
};

export default Footer;
