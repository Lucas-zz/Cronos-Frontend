import { slideIn } from "@/utils/motion";
import { motion } from "framer-motion"
import React from "react";

export default function Footer() {
  return (
    <motion.footer
      variants={slideIn('left', 'tween', 0.2, 1)}
      initial="hidden"
      whileInView="show"
      className="max-w-screen-xl relative z-0 mx-auto shadow-md bg-bgBlack relative z-10 select-none py-36 font-dm"
    >
      <motion.nav className="grid grid-cols-2 justify:center gap-10 m-auto sm:grid-cols-3 lg:w-full w-fit lg:flex lg:gap-5 lg:justify-between py-6 sm:py-8 md:py:16 lg:py-16 px-8 md:px-16 lg:px-14 xl:px-10 2xl:px-0 tracking-[0.01em]">
        {
          footer_content &&
          footer_content.map(({ subject }) => (
            <FooterComponents link={"#"} key={subject.title} title={subject.title} subtitles={subject.subtitles} />
          ))
        }
      </motion.nav>
    </motion.footer>
  );
}

type FooterComponent = {
  title: string;
  subtitles: string[];
  link: string;
};

function FooterComponents({ title, subtitles, link }: FooterComponent) {
  return (
    <div className="justify-center" key={title}>
      <div className="items-center text-xl md:text-2xl pb-10 font-medium" key={title}>{title}</div>
      {subtitles.map((subtitle) => (
        <motion.a
          whileHover={{ translateX: 10 }}
          transition={{ type: "spring", stiffness: 200 }}
          href={link}
          className="flex text-base md:text-lg opacity-50 font-normal pb-4 hover:underline cursor-pointer tracking-[0.01em]"
          key={subtitle}
        >
          {subtitle}
        </motion.a>
      ))}
    </div>
  );
}

const footer_content = [
  {
    subject: {
      title: "Learn",
      subtitles: [
        "Introduction",
        "Features",
        "Staking",
        "Get HEDRON",
        "FAQ",
      ],
    },
  },
  {
    subject: {
      title: "Build",
      subtitles: [
        "Developer Portal",
        "Ignite CLI",
        "Cronos SDK",
        "IBC Protocol",
      ],
    },
  },
  {
    subject: {
      title: "Explore",
      subtitles: [
        "Tokens",
        "Apps & Service",
        "Wallets",
        "Gravity DEX",
        "Blog",
      ],
    },
  },
  {
    subject: {
      title: "Participate",
      subtitles: [
        "Community",
        "Contributors",
        "Events",
        "Newsletters",
      ],
    },
  },
  {
    subject: {
      title: "Resources",
      subtitles: [
        "About",
        "Press Kit",
        "Design",
        "Resources",
      ],
    },
  },
];
