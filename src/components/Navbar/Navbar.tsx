"use client";

import React from "react";
import { Menu } from "@headlessui/react";
import Link from "next/link";
import Container from "../ui/Container";

const Navbar = () => {
  return (
    <header className="bg-black text-white">
      <Container>
        <nav className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <Link href="/">2x-Warriors</Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <a href="/home" className="hover:text-gray-300">
                Home
              </a>
              <a href="/shop" className="hover:text-gray-300">
                Shop
              </a>
              <a href="/about" className="hover:text-gray-300">
                About
              </a>
              <a href="/contact" className="hover:text-gray-300">
                Contact
              </a>
            </div>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex space-x-4">
            <button className="px-4 py-2 border border-white rounded hover:bg-gray-700">
              Login
            </button>
            <button className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200">
              Sign Up
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          <div className="md:hidden">
            <Menu as="div" className="relative">
              <Menu.Button className="p-2 bg-gray-800 rounded-md text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </Menu.Button>
              <Menu.Items className="absolute right-0 mt-2 w-48 bg-black text-white rounded-md shadow-lg focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/home"
                      className={`block px-4 py-2 ${
                        active ? "bg-gray-700" : ""
                      }`}
                    >
                      Home
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/shop"
                      className={`block px-4 py-2 ${
                        active ? "bg-gray-700" : ""
                      }`}
                    >
                      Shop
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/about"
                      className={`block px-4 py-2 ${
                        active ? "bg-gray-700" : ""
                      }`}
                    >
                      About
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/contact"
                      className={`block px-4 py-2 ${
                        active ? "bg-gray-700" : ""
                      }`}
                    >
                      Contact
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
