
'use client'

import { motion } from 'framer-motion'

interface AnimatedTextProps {
    text: string
    className?: string
    delay?: number
}


export function AnimatedText({ text, className = "", delay = 0}: AnimatedTextProps) {


    return(
        <motion.span className={className}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0}}
        transition={{
            duration: 0.8,
            delay: delay,
            ease: "easeOut"
        }}
        >
            {text}
        </motion.span>
    )
}