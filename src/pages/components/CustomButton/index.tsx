import { motion } from "framer-motion";

export function Button({ children }: any) {
    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            className="flex items-center w-fit bg-gradient-to-r from-white to-gray-500 text-black font-dm rounded group"
        >
            {children}
        </motion.button>
    );
};