"use client"


import { ButtonProps } from "@radix-ui/themes";

import { motion } from 'framer-motion'
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";


interface AnimatedButtonProps extends ButtonProps {
    delay?: number
}


export function AnimatedButton({ children, className, delay = 0, ...props }: AnimatedButtonProps) {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
            duration: 0.5,
            ease: 'easeOut'
        }}
        >
            <Button className={cn(
                "Transition-all duration-300 hover:scale-105",
                className
            )}
            {...props}>
                {children}
            </Button>
        </motion.div>
    )
}