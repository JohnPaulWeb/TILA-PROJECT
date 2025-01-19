import Link from "next/link";


export function NotificationBanner() {
    return (
        <div className="bg-[#1A1A1A] border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 py-2 text-center text-sm">
                <Link href="/postgres" className="text-gray-300 hover:text-white">
                  Welcome To Kiyotaka, Ayanokoji
                </Link>
            </div>
        </div>
    )
}