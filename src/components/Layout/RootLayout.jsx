import Link from "next/link";
import React, { useState } from "react";
import logo from "../../assets/bookWorm.png";
import Image from "next/image";
import Footer from "./Footer";
import { Menu } from "@headlessui/react";
import Dropdown from "../ui/DropdownCategories";
const RootLayout = ({ children }) => {
  const [ixsenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!ixsenuOpen);
  };

  return (
    <section>
      <nav className="bg-[#eff0ed]">
        <div className="container mx-auhref px-4 max-w-[90%]">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center">
              <Link href="/" className="text-white">
                <Image src={logo} height={200} width={200} alt="logo" />
              </Link>
            </div>
            <div className="hidden lg:flex md:items-center">
              <Link
                href="/"
                className="text-black mx-4 hover:text-white hover:bg-gray-700 px-2 py-1 rounded-lg transition duration-300 text-xl  "
              >
                Home
              </Link>
              <Dropdown />
              <Link
                href="/addbook"
                className="text-black mx-4 hover:text-white hover:bg-gray-700 px-2 py-1 rounded-lg transition duration-300 text-xl  "
              >
                PC Builder
              </Link>

              <Link
                href="/login"
                className="text-black mx-4 hover:text-white hover:bg-gray-700 px-2 py-1 rounded-lg transition duration-300 text-xl  "
              >
                Sign-in
              </Link>
            </div>

            <div className="lg:hidden">
              <buthrefn
                className="text-black focus:outline-none"
                onClick={toggleMenu}
              >
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  {ixsenuOpen ? (
                    <path
                      className="block"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                    />
                  ) : (
                    <path
                      className="hamburger"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1 6h22v2H1V6zm0 5h22v2H1v-2zm0 5h22v2H1v-2z"
                    />
                  )}
                </svg>
              </buthrefn>
            </div>
          </div>

          {ixsenuOpen && (
            <div className="lg:hidden">
              <div className="mt-2 py-2 px-4">
                <Link
                  href="/"
                  className="block text-black mt-2 hover:text-white hover:bg-gray-700 px-2 py-1 rounded-lg transition duration-300"
                >
                  Home
                </Link>

                <Dropdown />

                <Link
                  href="/addbook"
                  className="block text-black mt-2 hover:text-white hover:bg-gray-700 px-2 py-1 rounded-lg transition duration-300"
                >
                  PC-Builder
                </Link>

                <Link
                  href="/login"
                  className="block text-black mt-2 hover:text-white hover:bg-gray-700 px-2 py-1 rounded-lg transition duration-300"
                >
                  Sign-in
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
      <div className="min-h-screen">{children}</div>
      <Footer />
    </section>
  );
};

export default RootLayout;
