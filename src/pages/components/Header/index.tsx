import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion"
import RightVector from "../../../../public/assets/right-vector.svg";
import { FiAlignJustify, FiX } from "react-icons/fi";
import MobileMenu from "../MobileMenu";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <header className="w-full m-auto shadow-md bg-bgBlack relative z-10 select-none font-dm">
      <nav className="max-w-screen-xl mx-auto flex justify-between items-center py-6 sm:py-8 md:py:16 lg:py-16 px-8 md:px-16 lg:px-14 xl:px-10 2xl:px-0">
        <span className="font-medium text-base md:text-lg lg:text-2xl leading-9">
          {header_content.logo.title}
        </span>
        <div className="hidden item-center md:flex font-medium text-xs sm:text-sm md:text-base lg:text-lg leading-7">
          {header_content?.menu &&
            header_content?.menu.map((item) => (
              <HeaderComponent key={item.title} link="#" active={item.active}>{item.title}</HeaderComponent>
            ))}
        </div>
        <motion.a
          className="hidden md:flex items-center space-x-2 cursor-pointer text-base md:text-lg lg:text-2xl"
          whileHover={{ scale: 1.1 }}
          whileFocus={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
        >
          <span className="font-medium leading-9">
            {header_content.link.title}
          </span>
          <Image src={RightVector} alt="Arrow to the right" className="w-12 h-4 md:h-4 lg:h-6" />
        </motion.a>
        <div className="md:hidden" onClick={() => setMobileMenu(!mobileMenu)}>
          {
            mobileMenu
              ? <FiX className="h-6 w-6 cursor-pointer" />
              : <FiAlignJustify className="h-6 w-6 cursor-pointer" />
          }
        </div>
      </nav>
      <MobileMenu mobileMenu={mobileMenu} />
    </header>
  );
};

type HeaderComponents = {
  link: string;
  active?: boolean;
};

function HeaderComponent({ children, link, active }: React.PropsWithChildren<HeaderComponents>) {
  return (
    <a href={link} className="mx-6 cursor-pointer transition duration-300 ease-in-out hover:text-customPurple">
      {children}
    </a>
  )
};

export const header_content = {
  logo: {
    title: "CRONOS",
  },
  menu: [
    {
      title: "Learn",
      active: true,
    },
    {
      title: "Build",
      active: false,
    },
    {
      title: "Explore",
      active: false,
    }
  ],
  link: {
    title: "Get CRONOS",
  },
};
