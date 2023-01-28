import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion"
import { fadeIn, slideIn } from "@/utils/motion";

export default function Newsletter() {
    const [formData, setFormData] = useState({
        email: '',
    });

    function handleInputChange(e: any) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    return (
        <>
            <div className="w-full h-[1px] bg-gray-900 mb-20 sm:mb-36" />
            <div className="md:flex">
                <div className="flex relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.25 }}
                        className="flex-col font-dm m-auto md:pl-24 pb-2 sm:pb-10 md:pb-0"
                    >
                        <motion.div
                            variants={fadeIn('right', 'tween', 0.2, 1)}
                            className="font-bold text-xl max-[300px]:text-2xl sm:text-4xl md:text-3xl lg:text-4xl tracking-[0.01em]"
                        >
                            Receive transmissions
                        </motion.div>
                        <div className="justify-center items-center md:flex h-8">
                            <div className="flex font-normal text-sm max-[300px]:text-base sm:text-xl md:text-base lg:text-xl tracking-[0.01em]">
                                <motion.div
                                    variants={fadeIn('right', 'spring', 0.2, 1)}
                                >
                                    Unsubscribe at any time.
                                </motion.div>
                                <motion.div
                                    variants={fadeIn('right', 'spring', 0.2, 1)}
                                    className="flex pl-2 cursor-pointer underline"
                                >
                                    <a href="#">Privacy policy</a>
                                    <FiArrowUpRight />
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    className="flex justify-center lg:w-[50%] md:w-[40%] sm:w-[70%] w-[100%] m-auto"
                    variants={slideIn('left', 'tween', 0.2, 1)}
                >
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your email"
                        className="flex justify-center w-[80%] py-4 bg-[#191919] p-4 font-normal text-lg sm:text-xl placeholder-gray-500 rounded" />
                </motion.div>
            </div>
            <div className="w-full h-[1px] bg-gray-900 mt-20 sm:mt-36" />
        </>
    );
}

