import { motion } from "framer-motion"
import { textContainer, textVariant } from '@/utils/motionUtils';
import Image from "next/image";
import Donut from "../../../../public/assets/donut.png";
import { hub_content } from "@/utils/contentUtils";
import { HubComponentsTypes } from "@/utils/typesUtils";
import { Button } from "../../../utils/CustomButton";
import { FiChevronRight } from "react-icons/fi";

export default function Hub() {

    return (
        <div className="flex-col w-full relative z-10 pt-56 sm:pt-[400px]">
            <Image
                src={Donut}
                alt="Donut background image."
                className="absolute -z-10 top-[240px] right-0 left-0 mx-auto w-[820px] blur"
            />
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="flex-col relative"
            >
                <motion.div
                    variants={textVariant(0.6, 0.6)}
                    className="flex relative z-10 justify-center text-center text-xl sm:text-2xl font-dm font-medium tracking-widest leading-8 px-20 sm:px-0 opacity-60 text-white uppercase"
                >
                    Enter the Cronos Hub
                </motion.div>
                <motion.div
                    variants={textVariant(0.7, 1)}
                    className="flex relative z-10 justify-center text-[50px] sm:text-[70px] md:text-[90px] font-helve font-normal tracking-[0.02em] leading-[55px] sm:leading-[100px] lg:leading-[120px] px-10 md:px-10 xl:px-10 py-[49px] text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500"
                >
                    The Heart of the Interchain.
                </motion.div>
                <motion.div
                    variants={textVariant(0.8, 1)}
                    className="flex relative z-10 justify-center text-lg sm:text-xl md:text-3xl font-dm font-normal tracking-[0.01em] leading-7 md:leading-10 px-24 sm:px-32 md:px-60 lg:px-80 text-center text-white"
                >
                    Serving as the economic center of Cronos,
                    the Cronos Hub is a blockchain that provides
                    vital services to the Interchain
                </motion.div>
            </motion.div>
            <div className="grid xl:grid xl:grid-cols-2 gap-y-32 w-[50%] xl:w-[100%] m-auto pt-[200px]">
                {hub_content.map((content, index) => (
                    <HubComponents title={content.title} text={content.text} image={content.image} key={index} />
                ))}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false, amount: 0.25 }}
                    className="flex md:block justify-center items-center"
                >
                    <Button>
                        <div className="flex py-5 px-6 sm:px-14 sm:py-8">
                            <span className="flex justify-center items-center font-dm font-normal text-[16px] md:text-[20px]">Cosmos HUB</span>
                            <FiChevronRight className="w-8 sm:w-10 md:w-14 h-6 md:h-8 delay-100 transition-all group-hover:translate-x-2" />
                        </div>
                    </Button>
                </motion.div>
            </div>
        </div>
    );
};

function HubComponents({ title, text, image }: HubComponentsTypes) {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            variants={textContainer}
            className="flex-col font-dm"
        >
            <motion.div
                variants={textVariant(0.3, 1)}
                className="flex justify-center md:block"
            >
                <Image
                    src={image}
                    alt={text}
                    className="flex md:block justify-center items-center m-0"
                />
            </motion.div>
            <motion.div
                variants={textVariant(0.4, 1)}
                className="flex font-dm font-bold text-[32px] md:text-[50px]">{title}
            </motion.div>
            <motion.div
                variants={textVariant(0.5, 1)}
                className="flex font-dm font-normal text-[18] md:text-[24px] xl:mr-[200px]">{text}
            </motion.div>
        </motion.div>
    );
};