'use client';

import { textContainer, textVariant2 } from "@/utils/motion";
import { motion } from "framer-motion";

type TypingTextTypes = {
    title: string;
    textStyles: string;
}

export const TypingText = ({ title, textStyles }: TypingTextTypes) => (
    <motion.p
        variants={textContainer}
        className={textStyles}
    >
        {Array.from(title).map((letter, i) => (
            <motion.span variants={textVariant2} key={i}>
                {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
        ))}
    </motion.p>
)