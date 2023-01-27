import { motion } from "framer-motion"

export default function Footer() {
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
  return (
    <footer className="max-w-screen-xl mx-auto shadow-md bg-bgBlack relative z-10 select-none py-36">
      <motion.nav layout transition={{ duration: 0.3 }} className="grid grid-cols-2 justify:center gap-10 m-auto sm:grid-cols-3 lg:w-full w-fit lg:flex lg:gap-5 lg:justify-between py-6 sm:py-8 md:py:16 lg:py-16 px-8 md:px-16 lg:px-14 xl:px-10 2xl:px-0 font-md">
        {
          footer_content &&
          footer_content.map(({ subject }) => (
            <ul className="justify-center" key={subject.title}>
              <li className="text-xl md:text-2xl pb-10 font-medium" key={subject.title}>{subject.title}</li>
              {subject.subtitles.map((subtitle, i) => (
                <motion.li whileHover={{ translateX: 10 }} transition={{ type: "spring", stiffness: 200 }} className="text-base md:text-lg opacity-50 font-normal pb-4 hover:underline cursor-pointer" key={i}>{subtitle}</motion.li>
              ))}
            </ul>
          ))
        }
      </motion.nav>
    </footer>
  );
}
