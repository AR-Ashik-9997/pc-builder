import Link from "next/link";
import React, { useState } from "react";
import logo from "../../assets/pc-builder-logo.svg";
import Image from "next/image";
import Footer from "./Footer";
import Dropdown from "../ui/DropdownCategories";
import { useSession, signIn, signOut } from "next-auth/react";

const RootLayout = ({ children }) => {
  const { data: session } = useSession();
  const [ixsenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!ixsenuOpen);
  };

  return (
    <section>
      <nav className="bg-[#053164]">
        <div className="container mx-auto px-4 max-w-[90%]">
          <div className="flex  items-center justify-between lg:justify-around  gap-4 py-2">
            <div className="flex items-center">
              <Link href="/" className="text-white">
                <Image src={logo} height={200} width={200} alt="logo" />
              </Link>
            </div>
            <div className="hidden lg:flex md:items-center px-8">
              <Link
                href="/"
                className="text-white mx-4 hover:text-white hover:bg-gray-700 px-2 py-1 rounded-lg transition duration-300 text-xl  "
              >
                Home
              </Link>
              <Dropdown />
              <Link
                href="/pcbuilder"
                className="text-white mx-4 hover:text-white hover:bg-gray-700 px-2 py-1 rounded-lg transition duration-300 text-xl  "
              >
                PC Builder
              </Link>

              {session?.user ? (
                <button
                  onClick={() => signOut()}
                  className="text-white mx-4 hover:text-white hover:bg-gray-700 px-2 py-1 rounded-lg transition duration-300 text-xl "
                >
                  Logout
                </button>
              ) : (
                <Link
                  href=""
                  onClick={() => signIn("google")}
                  className="text-white mx-4 hover:text-white hover:bg-gray-700 px-2 py-1 rounded-lg transition duration-300 text-xl  "
                >
                  Sign-in
                </Link>
              )}
            </div>

            <div className="lg:hidden">
              <buthrefn
                className="text-white focus:outline-none"
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
                  className="block text-white mt-2 hover:text-white hover:bg-gray-700 px-2 py-1 rounded-lg transition duration-300"
                >
                  Home
                </Link>

                <Dropdown />

                <Link
                  href="/pcbuilder"
                  className="block text-white mt-2 hover:text-white hover:bg-gray-700 px-2 py-1 rounded-lg transition duration-300"
                >
                  PC Builder
                </Link>

                <Link
                  href="/login"
                  className="block text-white mt-2 hover:text-white hover:bg-gray-700 px-2 py-1 rounded-lg transition duration-300"
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
