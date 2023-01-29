'use client'

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion"
import RightVector from "../../../../public/assets/right-vector.svg";
import { FiAlignJustify, FiX } from "react-icons/fi";
import MobileMenu from "../MobileMenu";
import { navVariants } from "@/utils/motionUtils";
import { header_content } from "@/utils/contentUtils";
import { HeaderComponents } from "@/utils/typesUtils";
import { FiChevronRight } from "react-icons/fi";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="w-full m-auto shadow-md bg-bgBlack z-50 select-none font-dm">
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className="max-w-screen-xl mx-auto flex justify-between items-center py-6 sm:py-8 md:py:16 lg:py-16 px-8 md:px-16 lg:px-14 xl:px-10 2xl:px-0"
      >
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
          className="hidden md:flex items-center space-x-2 cursor-pointer text-base md:text-lg lg:text-2xl group"
          whileTap={{ scale: 0.9 }}
        >
          <span className="font-medium leading-9">
            {header_content.link.title}
          </span>
          <FiChevronRight className="w-12 h-6 lg:h-8 delay-100 transition-all group-hover:translate-x-2" />
        </motion.a>
        <div className="md:hidden" onClick={() => setMobileMenu(!mobileMenu)}>
          {
            mobileMenu
              ? <FiX className="h-6 w-6 cursor-pointer" />
              : <FiAlignJustify className="h-6 w-6 cursor-pointer" />
          }
        </div>
      </motion.nav>
      <MobileMenu mobileMenu={mobileMenu} />
    </header>
  );
};

function HeaderComponent({ children, link, active }: React.PropsWithChildren<HeaderComponents>) {
  return (
    <a href={link} className="mx-6 cursor-pointer transition duration-300 ease-in-out hover:text-customPurple">
      {children}
    </a>
  )
};