import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js for client-side navigation

export default function Home() {
    return (
        <main className="min-h-screen flex justify-center items-center">
            <div className="w-[498px] h-[275px] bg-white relative">
                <div className="absolute left-[77px] top-[93px] text-zinc-950 text-[40px] font-normal font-['Inter']">
                    Teston
                </div>
                <div className="absolute left-[272px] top-[148px]">
                    {/* Wrap "start" text with Link component for navigation */}
                    <Link href="/mondai" className="block px-4 py-2 bg-red-400 rounded-[20px] text-white text-xl font-normal font-['Inter']">
                            start

                    </Link>
                </div>
            </div>
        </main>
    );
}

