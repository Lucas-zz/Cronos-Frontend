import Image from 'next/image';
import hedron from '../../../../public/assets/icosahedron.png'
import { motion } from "framer-motion"

export default function Welcome() {

    return (
        <div className="flex-col mt-28 relative">
            <motion.div
                initial={{ x: "0%" }}
                animate={{ x: "calc(100vw - 120%)" }}
                transition={{
                    duration: 20, repeat: Infinity,
                    repeatType: 'reverse'
                }}
            >
                <Image src={hedron} className="absolute sm:-top-24 sm:left-18 w-48 h-48 md:w-60 md:h-60 lg:w-96 lg:h-96 filter blur-sm opacity-90 animate-blob" alt="Background image of a icosahedron in a floating animation" />
            </motion.div>
            <span className="flex relative z-10 justify-center text-xl sm:text-2xl font-normal font-dm opacity-60 tracking-widest text-white">WELCOME TO CRONOS</span>
            <span className="flex relative z-10 justify-center text-[45px] min-[480px]:text-[60px] sm:text-[80px] md:text-[100px] lg:text-[125px] xl:text-[153px] font-helve font-normal tracking-[0.02em] leading-[60px] sm:leading-[100px] lg:leading-[120px] xl:leading-[181px] py-24 sm:py-8 md:py-4 text-center text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500">The Internet of Blockchains</span>
            <span className="flex relative z-10 justify-center text-lg sm:text-xl md:text-3xl font-dm font-normal tracking-[0.01em] leading-5 md:leading-10 px-8 sm:px-16 md:px-28 lg:px-56 text-center text-white">Cronos is an ever expanding ecosystem of connected apps and services, built for a decentralized future</span>
            <motion.div
                initial={{ x: "70%" }}
                animate={{ x: "calc(100vw - 110%)" }}
                transition={{
                    duration: 20, repeat: Infinity,
                    repeatType: 'reverse'
                }}
            >
                <Image src={hedron} className="absolute sm:-top-24 sm:left-18 w-48 h-48 md:w-60 md:h-60 lg:w-96 lg:h-96 filter blur-sm opacity-90 animate-blob" alt="Background image of a icosahedron in a floating animation" />
            </motion.div>
        </div>
    );
}