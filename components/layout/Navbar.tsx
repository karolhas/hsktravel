"use client";

//hooks
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

//icons
import { LuHeart, LuHome, LuList, LuUser2, LuX } from "react-icons/lu";
import { BsCurrencyExchange } from "react-icons/bs";

//images
import logo from "@/public/logo.png";

const Navbar = () => {
  const [currency, setCurrency] = useState("złoty (zł)");
  const [menuOpen, setMenuOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow-md text-sm text-gray-700 z-50">
      <nav className="container mx-auto flex justify-between items-center p-2">
        {/* Desktop Navbar */}
        <div className="flex items-center">
          <Image src={logo} alt="HSKtravel" width={64} height={64} />
          <Link href="/" className="text-xl font-bold text-orange-500">
            HSK<span className="text-gray-700">travel</span>
          </Link>
        </div>

        <div className="hidden md:flex space-x-6 font-semibold ">
          <Link href="/all-inclusive" className="hover:text-orange-500">
            All Inclusive
          </Link>
          <Link href="/destinations" className="hover:text-orange-500">
            Destinations
          </Link>
          <Link href="/blog" className="hover:text-orange-500">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-orange-500">
            Contact
          </Link>
        </div>

        <div className="hidden md:flex items-center font-semibold">
          <div className="relative mr-6">
            <button
              className="hover:text-orange-500 focus:outline-none"
              onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
            >
              Currency: {currency}
            </button>
            {currencyDropdownOpen && (
              <ul className="absolute bg-white border rounded shadow-md mt-2 ml-8 z-10">
                {["złoty (zł)", "euro (€)", "dollar ($)"].map((cur) => (
                  <li
                    key={cur}
                    className="px-4 py-2 hover:bg-orange-100 cursor-pointer"
                    onClick={() => {
                      setCurrency(cur);
                      setCurrencyDropdownOpen(false);
                    }}
                  >
                    {cur}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Link
            href="/sign-in"
            className="flex items-center justify-center text-gray-700 hover:text-orange-500 transition font-bold"
          >
            <LuUser2 className="text-2xl mr-2" />
            Sign In
          </Link>
        </div>
        <p className="md:hidden w-28 text-sm text-end p-2">
          Your journey starts here!
        </p>

        {/* Bottom Navbar (Mobile/Tablets) */}
        <footer className="bg-white fixed bottom-0 left-0 w-full z-50 shadow-[inset_0_0_5px_0_rgba(0,0,0,0.3)] md:hidden">
          <div className="container mx-auto flex justify-around items-center p-2 ">
            <Link
              href="/"
              className="text-center flex flex-col items-center text-gray-700 hover:text-orange-500"
            >
              <LuHome className="text-2xl" />
              <span className="text-sm">Start</span>
            </Link>
            <button
              className="text-center flex flex-col items-center text-gray-700 hover:text-orange-500"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <LuList className="text-2xl" />
              <span className="text-sm">Menu</span>
            </button>
            <Link
              href="/favorites"
              className="text-center flex flex-col items-center text-gray-700 hover:text-orange-500"
            >
              <LuHeart className="text-2xl" />
              <span className="text-sm">Favourite</span>
            </Link>
            <Link
              href="/sign-in"
              className="text-center flex flex-col items-center text-gray-700 hover:text-orange-500"
            >
              <LuUser2 className="text-2xl" />
              <span className="text-sm">Sign in</span>
            </Link>
          </div>
        </footer>

        {/* Mobile Menu Fullscreen */}
        {menuOpen && (
          <div className="fixed inset-0 bg-white z-20 flex flex-col px-6 py-4 overflow-hidden">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Image src={logo} alt="HSKtravel" width={64} height={64} />
                <Link href="/" className="text-xl font-bold text-orange-500">
                  HSK<span className="text-gray-700">travel</span>
                </Link>
              </div>
              <button
                className="text-3xl text-gray-700 hover:text-orange-500"
                onClick={() => setMenuOpen(false)}
              >
                <LuX />
              </button>
            </div>

            <nav className="flex flex-col mt-12 space-y-8 font-semibold">
              <Link href="/all-inclusive" className="hover:text-orange-500">
                All Inclusive
              </Link>
              <Link href="/destinations" className="hover:text-orange-500">
                Destinations
              </Link>
              <Link href="/blog" className="hover:text-orange-500">
                Blog
              </Link>
              <Link href="/contact" className="hover:text-orange-500">
                Contact
              </Link>
            </nav>

            <div className="mt-10 border-t pt-6 space-y-4 font-semibold">
              <div className="flex flex-col gap-4">
                <div className="relative">
                  <button
                    className="hover:text-orange-500 flex items-center"
                    onClick={() =>
                      setCurrencyDropdownOpen(!currencyDropdownOpen)
                    }
                  >
                    <BsCurrencyExchange className="text-xl mr-1" /> Currency:{" "}
                    {currency}
                  </button>
                  {currencyDropdownOpen && (
                    <ul className="absolute bg-white border rounded shadow-md mt-2">
                      {["złoty (zł)", "euro (€)", "dollar ($)"].map((cur) => (
                        <li
                          key={cur}
                          className="px-4 py-2 hover:bg-orange-100 cursor-pointer"
                          onClick={() => {
                            setCurrency(cur);
                            setCurrencyDropdownOpen(false);
                          }}
                        >
                          {cur}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
