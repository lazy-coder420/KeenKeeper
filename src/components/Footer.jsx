"use client";

import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#2F5D50] text-white py-16">
      <div className="max-w-4xl mx-auto text-center px-4">

        {/* Title */}
        <h1 className="text-5xl font-bold mb-4">KeenKeeper</h1>

        {/* Subtitle */}
        <p className="text-gray-200 mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        {/* Social Links */}
        <h3 className="text-lg font-semibold mb-4">Social Links</h3>

        <div className="flex justify-center gap-4 mb-10">
          <a
            href="#"
            className="bg-white text-black p-3 rounded-full hover:scale-110 transition"
          >
            <FaInstagram size={18} />
          </a>

          <a
            href="#"
            className="bg-white text-black p-3 rounded-full hover:scale-110 transition"
          >
            <FaFacebookF size={18} />
          </a>

          <a
            href="#"
            className="bg-white text-black p-3 rounded-full hover:scale-110 transition"
          >
            <FaXTwitter size={18} />
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-400/30 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300 gap-4">

          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
}