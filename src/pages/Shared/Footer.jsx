import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="bg-gray-950 text-white">
      <div className="container mx-auto px-6 py-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold"><span className="text-[#af2828]">Where<span className="text-red-400">IsIt</span></span></h1>
            <p className="text-gray-400 mt-2">
              Bringing creativity to life, one step at a time.
            </p>
          </div>

          {/* email field */}
          <form>
          <h6 className="footer-title ">Share Your Ideas</h6>
          <fieldset className="form-control w-full md:w-80">
            <label className="label">
              <span className="label-text text-gray-400">Enter your email address</span>
            </label>
            <div className="join flex flex-col md:flex-row">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item mb-2 md:mb-0"
              />
              <button className="btn bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white hover:text-rose-200 join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>

          {/* Social Media Icons */}
          <div className="flex space-x-6 mt-6 md:mt-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition-colors"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-700 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-red-600" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Links */}
          <div className="flex space-x-4 text-sm">
            <a
              href="/about"
              className="text-gray-400 hover:text-white transition-colors"
            >
              About Us
            </a>
            <a
              href="/services"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Services
            </a>
            <a
              href="/contact"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            © 2024 WhereIsIt. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
    );
};

export default Footer;