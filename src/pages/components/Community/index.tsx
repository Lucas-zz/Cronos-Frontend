import { motion } from "framer-motion"
import Image from "next/image";
import RightVector from "../../../../public/assets/right-vector.svg";
import Helix from "../../../../public/assets/helix.png";
import { slideIn, textVariant } from "@/utils/motion";

export default function Community() {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="xl:flex w-full relative z-10 pt-72 sm:pt-[400px]"
        >
            <div className="flex-col xl:w-[60%]">
                <motion.div variants={textVariant(0.6)} className="flex justify-center xl:justify-start text-center xl:text-left font-dm opacity-60 font-medium tracking-widest leading-8 px-20 sm:px-0 uppercase">Community-owned and operated</motion.div>
                <motion.div variants={textVariant(0.7)} className="flex text-center xl:text-left font-helve font-normal text-[50px] sm:text-[70px] md:text-[90px] leading-[80px] md:leading-[107px] text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 px-5 md:px-10 xl:px-0 py-[49px]">Enter a Universe of Connected Services.</motion.div>
                <motion.div variants={textVariant(0.8)} className="flex text-center xl:text-left font-dm font-normal text-[24px] md:text-[33px] leading-[43px] px-5 md:px-10 xl:px-0 xl:pr-10">
                    Cronos apps and services connect using IBC,
                    the Inter-Blockchain Communication protocol.
                    This innovation enables you to freely exchange
                    assets and data across sovereign.
                </motion.div>
                <motion.div
                    variants={slideIn('left', 'tween', 0.2, 1)}
                    className="sm:flex text-center pt-14 gap-16 text-xl sm:justify-center xl:justify-start"
                >
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 1 }}
                        className="bg-gradient-to-r from-white to-gray-500 py-8 px-28 text-black font-dm rounded"
                    >
                        Learn
                    </motion.button>
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
                            <Image src={RightVector} alt="Arrow to the right" className="w-12 h-4 lg:h-5" />
                        </motion.a>
                    </div>
                </motion.div>
            </div>
            <div className="flex-col xl:w-[40%] pt-10 sm:pt-28 text-center xl:text-right">
                <motion.div variants={slideIn('right', 'tween', 0.2, 1)} >
                    <div className="font-helve font-normal text-[90px] sm:text-[117px] leading-[139px] text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500">265+</div>
                    <span className="font-dm font-normal text-[25px] sm:text-[30px] leading-10">App & Services</span>
                </motion.div>
                <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className="pt-10 sm:pt-36">
                    <div className="font-helve font-normal text-[90px] sm:text-[117px] leading-[139px] text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500">$63B+</div>
                    <span className="font-dm font-normal text-[25px] sm:text-[30px] leading-10">Digital assets</span>
                </motion.div>
            </div>
            <Image
                src={Helix}
                alt="Helix background image."
                className="absolute -z-10 top-[470px] -left-[200px] sm:-left-[350px] w-[400px] sm:w-[600px]"
            />
        </motion.div>
    );
}