import Link from "next/link";
import Image from "next/image";

export default function Home() {
    return (
        <main className="min-h-screen flex justify-center items-center">
            <div className="Frame5 w-[498px] h-[275px] relative bg-white">
                <div className="Next w-[141.96px] h-[33px] left-[296px] top-[173px] absolute">
                    <Link href="/mondai" passHref>
                        <p className="block px-4 py-2 bg-red-400 rounded-[20px] text-white text-xl font-normal font-['Inter'] hover:bg-blue-500 text-center absolute left-0 top-0 w-full h-full">
                            next
                        </p>
                    </Link>
                </div>
                <div className="Statistics left-[50px] top-[45px] absolute text-center text-black text-base md:text-lg lg:text-xl font-normal font-['Inter']">
                    解説文
                </div>
                <div className="Statistics left-[50px] top-[137px] absolute text-center text-black text-base md:text-lg lg:text-xl font-normal font-['Inter']">
                    統計情報
                </div>
            </div>
        </main>
    );
}
