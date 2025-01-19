import Link from "next/link";


export function Navbar() {
    return (
        <nav className="w-full py-4">
            <div className="max-w-7x1 mx-auto px-4 flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <Link href="/" className="text-white font-bold text-2x1">
                        Prisma
                    </Link>
                </div>
            </div>
        </nav>
    )
}