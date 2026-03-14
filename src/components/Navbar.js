"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Calendar } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#f6f7fb]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10 lg:px-16 py-4">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-purple-600 to-blue-500"></div>
          <span className="text-lg font-extrabold">
            <span className=" text-blue-700">TubeHelper</span> Lite
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden items-center text-sm gap-10 md:flex">
          <Link
            href="/"
            className="relative rounded-lg px-4 py-2 text-purple-600 bg-purple-100 font-medium"
          >
            Home
            {/* <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-purple-600"></span> */}
          </Link>

          <Link href="/services" className="text-gray-600 hover:text-black">
            Services
          </Link>

          <Link href="/about" className="text-gray-600 hover:text-black">
            About
          </Link>
        </nav>

        {/* Right Buttons */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/#Contact"
            className="rounded-xl border border-purple-300 px-6 py-2 font-medium text-purple-600 hover:bg-purple-50"
          >
            Contact
          </Link>

          <Link
            href="/#BookDemo"
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 px-6 py-2 font-semibold text-white shadow-lg hover:opacity-90"
          >
            <Calendar size={18} />
            Book a Demo
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>

            <Link href="/services" onClick={() => setOpen(false)}>
              Services
            </Link>

            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>

            <Link
              href="/#Contact"
              className="rounded-lg border border-purple-300 px-4 py-2 text-purple-600"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>

            <Link
              href="/#BookDemo"
              className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 px-4 py-2 text-white"
              onClick={() => setOpen(false)}
            >
              <Calendar size={18} />
              Book a Demo
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}
