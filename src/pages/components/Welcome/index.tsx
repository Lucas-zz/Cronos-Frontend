import Image from 'next/image';
import hedron from '../../../../public/assets/icosahedron.png'
import { motion } from "framer-motion"
import { textVariant } from '@/utils/motion';

export default function Welcome() {

    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="flex-col mt-28 relative w-full"
        >
            <Hedron initialPos={'0%'} finalPos={'20%'} duration={15} />
            <motion.div variants={textVariant(0.6)} className="flex relative z-10 justify-center text-xl sm:text-2xl font-normal font-dm opacity-60 tracking-widest text-white">WELCOME TO CRONOS</motion.div>
            <motion.div variants={textVariant(0.7)} className="flex relative z-10 justify-center text-[45px] min-[480px]:text-[60px] sm:text-[80px] md:text-[100px] lg:text-[125px] xl:text-[153px] font-helve font-normal tracking-[0.02em] leading-[60px] sm:leading-[100px] lg:leading-[120px] xl:leading-[181px] py-12 sm:py-8 md:py-4 text-center text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500">The Internet of Blockchains</motion.div>
            <motion.div variants={textVariant(0.8)} className="flex relative z-10 justify-center text-lg sm:text-xl md:text-3xl font-dm font-normal tracking-[0.01em] leading-5 md:leading-10 px-8 sm:px-16 md:px-28 lg:px-56 text-center text-white">Cronos is an ever expanding ecosystem of connected apps and services, built for a decentralized future</motion.div>
            <Hedron initialPos={'70%'} finalPos={'60%'} duration={20} />
        </motion.div>
    );
}

type HedronType = {
    initialPos: string;
    finalPos: string;
    duration: number;
}

function Hedron({ initialPos, finalPos, duration }: HedronType) {
    return (
        <motion.div
            initial={{ x: initialPos }}
            animate={{ x: finalPos }}
            transition={{
                duration: duration, repeat: Infinity,
                repeatType: 'reverse'
            }}
        >
            <Image src={hedron} className={`absolute sm:-top-24 sm:left-18 w-48 h-48 md:w-60 md:h-60 filter opacity-90 animate-blob ${duration == 20 ? 'lg:w-96 lg:h-96 blur' : 'lg:w-72 lg:h-72 blur-[3px]'}`} alt="Background image of a icosahedron in a floating animation" />
        </motion.div>
    );
}