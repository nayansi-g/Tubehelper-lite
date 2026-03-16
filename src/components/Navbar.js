"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Calendar } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10 lg:px-16 py-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-sample.svg"
            width={32}
            height={32}
            alt="TubeHelper Lite logo"
            className="h-8 w-8 rounded-md border border-slate-200 bg-white p-1"
          />
          <span className="text-lg font-extrabold">
            <span className=" text-indigo-700">TubeHelper</span> Lite
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center text-sm gap-2 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-4 py-2 font-medium transition ${
                  isActive
                    ? "bg-indigo-100 text-indigo-700"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Buttons */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/#Contact"
            className="rounded-xl border border-indigo-200 px-6 py-2 font-medium text-indigo-700 hover:bg-indigo-50"
          >
            Contact
          </Link>

          <Link
            href="/#BookDemo"
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-sky-500 px-6 py-2 font-semibold text-white shadow-lg hover:opacity-90"
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
            
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-2 font-medium ${
                    isActive
                      ? "bg-indigo-100 text-indigo-700"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="/#Contact"
              className="rounded-lg border border-indigo-200 px-4 py-2 text-indigo-700"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>

            <Link
              href="/#BookDemo"
              className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-sky-500 px-4 py-2 text-white"
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
