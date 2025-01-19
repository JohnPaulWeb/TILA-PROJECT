import { ButtonProps } from "@radix-ui/themes";

import { Button } from "@/components/ui/button";

interface AnimatedButtonProps extends ButtonProps {
    delay?: number
}


export function AnimatedButton({ children, className, delay = 0, ...props }: AnimatedButtonProps) {
    return (
        <div>
            
        </div>
    )
}