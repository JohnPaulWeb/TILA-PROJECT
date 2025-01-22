import Image from "next/image";

// import { motion } from 'framer-motion'



export function ClientLogos() {
    return (
        <div className="flex justify-center items-center gap-12 mt-20 grayscale opacity-60">
            <Image src="/yas.jpg" height={30} width={100} alt="Gover"  />
            <Image src="/yas.jpg" height={30} width={100} alt="Gover" />
            <Image src="/yas.jpg" height={30} width={100} alt="Gover" />
            <Image src="/yas.jpg" height={30} width={100} alt="Gover" />
            <Image src="/yas.jpg" height={30} width={100} alt="Gover" />
        </div>
        // <motion.div className=""></motion.div>
    )
}