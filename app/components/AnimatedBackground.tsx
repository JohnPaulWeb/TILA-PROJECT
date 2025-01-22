'use client'



import { motion } from 'framer-motion'

export function AnimatedBackground() {
    return (
        
        <motion.div 
         className="absolute inset-0 bg-[url('')]
       bg-no-repeat bg-cover opacity-20 pointer-events-none"
        style={{ backgroundPosition: '50% 100%' }}
        initial={{ opacity: 0}}
        animate={{
            opacity: 0.2,
            y: [0, -10, 0],
        }}
        transition={{
            opacity: { duration: 1},
            y: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }}
        />
    )
} 