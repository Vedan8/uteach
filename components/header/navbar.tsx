"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <nav className="w-fill bg-white mx-[80px] my-[12px] font-roboto">
      <div className="w-fill">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <Link href="" className="flex items-center shrink-0 gap-[2px]">
            <Image 
                src="/logo.png" 
                width={22} 
                height={21} 
                alt="Picture of the author" 
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
                alt="Picture of the author" 
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
              className="text-[16px]/[24px] h-[48px] w-[153px] font-medium text-[#0F172A] border-[2px] border-[#0F172A] rounded-[8px] px-6 py-2 tracking-[0.5px] pt-[10px]"
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
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="px-6 py-4 space-y-3">
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
              className="flex items-center gap-1.5 text-[15px] font-medium text-[#1a2234] py-2 w-full"
            >
              Resources
              <svg
                className={`w-3.5 h-3.5 transition-transform ${resourcesOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {resourcesOpen && (
              <div className="pl-4 space-y-2">
                <Link href="/blog" className="block text-sm text-gray-600 py-1">Blog</Link>
                <Link href="/help" className="block text-sm text-gray-600 py-1">Help Center</Link>
                <Link href="/guides" className="block text-sm text-gray-600 py-1">Guides</Link>
              </div>
            )}
            <hr className="border-gray-100" />
            <Link href="/login" className="block text-[15px] font-medium text-[#1a2234] py-2">
              Log In
            </Link>
            <Link
              href="/signup"
              className="block text-center text-[15px] font-medium text-[#1a2234] border border-[#1a2234] rounded-full px-6 py-2.5 hover:bg-[#1a2234] hover:text-white transition-colors"
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