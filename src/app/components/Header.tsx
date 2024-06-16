
import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import logo from "../../../public/images/shades.png";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="px-4 py-4 fixed w-full shadow-sm top-0 z-30 bg-background">
      <div className="flex items-center justify-center">
        <div className="w-[75px] h-[75px]">
          <Image src={logo} alt="placeholder logo" width={75} height={75} />
        </div>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
    