import { Button } from "@/components/ui/button";
import { ChevronDown, Github } from "lucide-react";
import Link from "next/link";


export function Navbar() {
    return (
        <nav className="w-full py-4">
            <div className="max-w-7x1 mx-auto px-4 flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <Link href="/" className="text-white font-bold text-2x1">
                        Ayanokoji
                    </Link>
                    <div className="hidden md:flex items-center gap-6">
                        <div className="flex items-center gap-1 text-gray-500 hover:text-white">
                            <span>Products</span>
                            <ChevronDown className="w-4 h-4" />
                        </div>
                        <Link href="/pricing" className="text-gray-300 hover:text-white">
                        Pricing
                        </Link>
                        <div className="flex items-center gap-1 text-gray-500 hover:text-white">
                            <span>Resources</span>
                            <ChevronDown className="w-4 h-4" />
                        </div>
                        <Link href="/blog" className="text-gray-300 hover:text-white">
                        Blog
                        </Link>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Link href="" className="text-gray-300 hover:text-white flex items-center gap-2">
                     <Github className="w-5 h-5" />
                     <span>49</span>
                    </Link>
                    <Button variant="ghost" className="text-gray-300 hover:text-red-600">
                        Log in
                    </Button>
                    <Button className="bg-violet-600 hover:bg-violet-500">Sign Up</Button>
                </div>
            </div>
        </nav>
    )
}