import Link from "next/link";
import { Globe, MessageSquare, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-12">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">

          {/* Left */}
          <div className="max-w-sm">
            <div className="flex items-center gap-2 font-extrabold text-lg">
              <div className="h-7 w-7 bg-gradient-to-tr from-purple-600 to-blue-500 rounded-md"></div>
              <span>
                <span className="text-blue-600 ">TubeHelper</span>{" "}
                Lite
              </span>
            </div>

            <p className="mt-4 text-gray-600 pr-10 mx-auto text-sm leading-relaxed">
              Helping local businesses grow digitally through websites, AI
              automation, and smart marketing.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              <button className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 text-gray-600 hover:bg-gray-100">
                <Globe size={18} />
              </button>

              <button className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 text-gray-600 hover:bg-gray-100">
                <MessageSquare size={18} />
              </button>

              <button className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 text-gray-600 hover:bg-gray-100">
                <Mail size={18} />
              </button>
            </div>
          </div>

          {/* Right Links */}
          <div className="flex flex-wrap gap-8 text-sm text-gray-600 md:pt-1">
            <Link href="/" className="hover:text-black">
              Home
            </Link>
            <Link href="/services" className="hover:text-black">
              Services
            </Link>
            <Link href="/about" className="hover:text-black">
              About
            </Link>
            <Link href="/#BookDemo" className="hover:text-black">
              Book a Demo
            </Link>
            <Link href="/#Contact" className="hover:text-black">
              Contact
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-gray-200"></div>

        {/* Bottom Section */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© 2026 TubeHelper Lite. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="/privacy_policy" className="hover:text-black">
              Privacy Policy
            </Link>
            <Link href="/terms_of_use" className="hover:text-black">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}