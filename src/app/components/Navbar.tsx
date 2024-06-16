"use client";
import React, { useState } from "react";
import Link from "next/link";
import RotatingHamburger from "./RotatingHamburger";
import { useEffect } from "react";

const navItems = [
  { link: "Home", path: "/" },
  { link: "Business Directory", path: "/business-directory" },
  { link: "List Your Business", path: "/list-your-business" },
  { link: "Contact", path: "/contact" },
];

type Props = {};

const Navbar = (props: Props) => {
  const [open, setOpen] = useState(false);

  const isUserLoggedIn = false;

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [open]);

  return (
    <nav className="flex items-center justify-between max-w-7xl md:flex-row md:w-full mx-auto">
      <Link href="/" className="text-accent font-semibold text-xl">
        Shades of Service
      </Link>
      <ul
        className={
          "flex flex-col md:flex-row gap-12 md:gap-8 items-center w-full md:w-auto justify-center md:justify-end absolute md:static top-[155px] left-0 right-0 h-[calc(100vh-155px)] md:h-auto bg-background transition-all ease-in-out duration-500 " +
          (open ? "translate-x-0" : "translate-x-[100vh] md:translate-x-0")
        }
      >
        {navItems.map((navItem, index) => {
          const { link, path } = navItem;
          return (
            <li key={index}>
              <Link
                className="text-2xl md:text-base hover:underline py-2 text-primary-text hover:text-accent"
                href={path}
                scroll={false}
                onClick={() => setOpen(false)}
              >
                {link}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="space-x-4">
        {isUserLoggedIn ? (
          <button className="p-3 bg-primary-text text-white rounded flex-shrink-0 mr-6 md:mr-0 hover:opacity-90">
            Logout
          </button>
        ) : (
          <button className="p-3 bg-primary-text text-white rounded flex-shrink-0 mr-6 md:mr-0 hover:opacity-90">
            Member Login
          </button>
        )}
      </div>

      <RotatingHamburger open={open} setOpen={setOpen} />
    </nav>
  );
};

export default Navbar;
