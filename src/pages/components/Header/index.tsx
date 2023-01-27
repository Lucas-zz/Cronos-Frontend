import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion"
import RightVector from "../../../../public/assets/right-vector.svg";
import { FiAlignJustify, FiX } from "react-icons/fi";
import MobileMenu from "../MobileMenu";

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

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <header className="w-full m-auto shadow-md bg-bgBlack relative z-10 select-none">
      <nav className="max-w-screen-2xl mx-auto flex justify-between items-center py-6 sm:py-8 md:py:16 lg:py-16 px-8 md:px-16 lg:px-14 xl:px-10 2xl:px-0 font-md ">
        <span className="font-medium text-base md:text-lg lg:text-2xl leading-9">
          {header_content.logo.title}
        </span>
        <ul className="hidden item-center md:flex font-medium text-xs sm:text-sm md:text-base lg:text-lg leading-7">
          {header_content?.menu &&
            header_content?.menu.map((item) => (
              <li
                className="mx-6 cursor-pointer transition duration-300 ease-in-out hover:text-customPurple"
                key={item.title}
              >
                {item?.title}
              </li>
            ))}
        </ul>
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
}
