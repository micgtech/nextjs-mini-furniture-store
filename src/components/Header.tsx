'use client';

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          <Link href="/">Mini Furniture Store</Link>
        </h1>

        {/* Hamburger button (mobile) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Hamburger icon (3 lines) */}
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Menu links */}
        <nav className={`flex-col md:flex-row md:flex ${isOpen ? 'flex' : 'hidden'} absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent text-center md:text-left`}>
          <ul className="flex flex-col md:flex-row md:space-x-4 p-4 md:p-0">
            <li><Link href="/about" className="block py-2 hover:underline">About</Link></li>
            <li><Link href="/products" className="block py-2 hover:underline">Products</Link></li>
            <li><Link href="/contact" className="block py-2 hover:underline">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
