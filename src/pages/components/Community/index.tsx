import { motion } from "framer-motion"
import Image from "next/image";
import { FiChevronRight } from "react-icons/fi";
import Helix from "../../../../public/assets/helix.png";
import { textVariant } from "@/utils/motionUtils";
import { Button } from "../CustomButton";
import { TypingText } from "../CustomTexts";

export default function Community() {
    return (
        <div className="xl:flex w-full relative z-10 pt-56 sm:pt-[400px]"        >
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="flex-col xl:w-[60%]"
            >
                <motion.div
                    variants={textVariant(0.6, 0.6)}
                    className="flex justify-center xl:justify-start text-center text-xl sm:text-2xl font-dm font-medium tracking-widest leading-8 px-20 sm:px-0 uppercase"
                >
                    Community-owned and Operated
                </motion.div>
                <motion.div
                    variants={textVariant(0.7, 1)}
                    className="flex text-center xl:text-left font-helve font-normal text-[50px] sm:text-[70px] md:text-[90px] leading-[55px] sm:leading-[100px] lg:leading-[120px] text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 px-5 md:px-10 xl:px-0 py-[49px]"
                >
                    Enter a Universe of Connected Services.
                </motion.div>
                <motion.div
                    variants={textVariant(0.8, 1)}
                    className="flex text-center xl:text-left font-dm font-normal text-lg sm:text-xl md:text-3xl leading-7 md:leading-10 px-12 sm:px-20 md:px-40 xl:pr-10 xl:pl-0"
                >
                    Cronos apps and services connect using IBC,
                    the Inter-Blockchain Communication protocol.
                    This innovation enables you to freely exchange
                    assets and data across sovereign.
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false, amount: 0.25 }}
                    className="sm:flex text-center pt-14 gap-16 text-xl sm:justify-center xl:justify-start"
                >
                    <div className="flex justify-center">
                        <Button>
                            <div className="flex justify-center py-5 px-20 sm:py-8 sm:px-28">
                                <span>Learn</span>
                            </div>
                        </Button>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start font-dm pt-10 sm:pt-0">
                        <a href="#" className=" ">Explore Tokens</a>
                        <motion.a
                            initial={{ x: "0%" }}
                            animate={{ x: "20%" }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                repeatType: 'reverse'
                            }}
                        >
                            <FiChevronRight className="w-16 h-6 lg:h-8" />
                        </motion.a>
                    </div>
                </motion.div>
            </motion.div>
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="flex-col xl:w-[40%] pt-10 sm:pt-28 text-center xl:text-right">
                <motion.div variants={textVariant(0.5, 1)} >
                    <div className="font-helve font-normal text-[90px] sm:text-[117px] leading-[139px] text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500">265+</div>
                    <TypingText title="App & Services" textStyles="font-dm font-normal text-[25px] sm:text-[30px] leading-10" />
                </motion.div>
                <motion.div variants={textVariant(0.5, 1)} className="pt-10 sm:pt-36">
                    <div className="font-helve font-normal text-[90px] sm:text-[117px] leading-[139px] text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500">$63B+</div>
                    <TypingText title="Digital assets" textStyles="font-dm font-normal text-[25px] sm:text-[30px] leading-10" />
                </motion.div>
            </motion.div>
            <Image
                src={Helix}
                alt="Helix background image."
                className="absolute -z-10 top-[470px] -left-[200px] sm:-left-[350px] w-[400px] sm:w-[600px]"
            />
        </div>
    );
}