"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    // FIX: Changed 'w-fill' to 'w-full' and used responsive padding (px-4 for mobile, lg:px-[80px] for desktop)
    <nav className="w-full bg-white px-6 py-[12px] lg:px-[80px] font-roboto">
      <div className="w-full">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 gap-[2px]">
            <Image 
                src="/logo.png" 
                width={22} 
                height={21} 
                alt="Logo" 
            />
            <span className="text-[32px] font-bold text-[#0F172A]">
              teach
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-[58px] ml-16 w-[515px]">
            <Link
              href="/products"
              className="text-[16px] leading-[24px] font-medium text-[#0F172A] w-[69px] tracking-[0.5px]"
            >
              Products
            </Link>
            <Link
              href="/solutions"
              className="text-[16px] leading-[24px] font-medium text-[#0F172A] w-[69px] tracking-[0.5px]"
            >
              Solutions
            </Link>
            <Link
              href="/pricing"
              className="text-[16px] leading-[24px] font-medium text-[#0F172A] w-[69px] tracking-[0.5px]"
            >
              Pricing
            </Link>
            <div className="relative">
              <button
                className="flex items-center gap-1.5 text-[16px] leading-[24px] font-medium text-[#0F172A] w-[69px] tracking-[0.5px]"
              >
                Resources
                <Image 
                  src="/drop.png" 
                  width={22} 
                  height={21} 
                  alt="Dropdown icon" 
                />
              </button>
            </div>
          </div>

          {/* Desktop Auth Buttons — pushed to far right */}
          <div className="hidden lg:flex items-center gap-6 ml-auto">
            <Link
              href="/login"
              className="text-[16px] font-medium text-[#0F172A] tracking-[0.5px]"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="text-[16px]/[24px] h-[48px] w-[153px] font-medium text-[#0F172A] border-[2px] border-[#0F172A] rounded-[8px] px-6 py-2 tracking-[0.5px] flex items-center justify-center"
            >
              Sign Up Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-[#1a2234]"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        // FIX: Removed fixed borders that might cause overflow, added slight shadow for better mobile UI
        <div className="lg:hidden mt-2 border-t border-gray-100 bg-white shadow-sm rounded-b-md">
          <div className="py-4 space-y-3">
            <Link href="/products" className="block text-[15px] font-medium text-[#1a2234] py-2">
              Products
            </Link>
            <Link href="/solutions" className="block text-[15px] font-medium text-[#1a2234] py-2">
              Solutions
            </Link>
            <Link href="/pricing" className="block text-[15px] font-medium text-[#1a2234] py-2">
              Pricing
            </Link>
            <button
              onClick={() => setResourcesOpen(!resourcesOpen)}
              className="flex items-center justify-between text-[15px] font-medium text-[#1a2234] py-2 w-full pr-4"
            >
              Resources
              <svg
                className={`w-4 h-4 transition-transform ${resourcesOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {resourcesOpen && (
              <div className="pl-4 space-y-2 border-l-2 border-gray-100 ml-2">
                <Link href="/blog" className="block text-sm text-gray-600 py-1">Blog</Link>
                <Link href="/help" className="block text-sm text-gray-600 py-1">Help Center</Link>
                <Link href="/guides" className="block text-sm text-gray-600 py-1">Guides</Link>
              </div>
            )}
            <hr className="border-gray-100 my-4" />
            <Link href="/login" className="block text-[15px] font-medium text-[#1a2234] py-2">
              Log In
            </Link>
            <Link
              href="/signup"
              className="block text-center text-[15px] font-medium text-[#1a2234] border border-[#1a2234] rounded-lg px-6 py-2.5 hover:bg-[#1a2234] hover:text-white transition-colors mt-4"
            >
              Sign Up Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;