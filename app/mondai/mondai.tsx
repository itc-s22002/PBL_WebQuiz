import Link from "next/link";

export default function Home() {
    return (
        <main className="flex justify-center items-center h-screen">
            <div className="w-full max-w-lg bg-white p-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 text-center text-black text-xl font-normal font-['Inter']">問題文</div>
                    <Link href="/kaisetu1" passHref>
                        <div className="bg-red-400 rounded-2xl h-8 flex items-center justify-center text-white text-xl font-normal font-['Inter']">
                            sec1
                        </div>
                    </Link>
                    <Link href="/kaisetu2" passHref>
                        <div className="bg-red-400 rounded-2xl h-8 flex items-center justify-center text-white text-xl font-normal font-['Inter']">
                            sec2
                        </div>
                    </Link>
                    <Link href="/kaisetu3" passHref>
                        <div className="bg-red-400 rounded-2xl h-8 flex items-center justify-center text-white text-xl font-normal font-['Inter']">
                            sec3
                        </div>
                    </Link>
                    <Link href="/kaisetu4" passHref>
                        <div className="bg-red-400 rounded-2xl h-8 flex items-center justify-center text-white text-xl font-normal font-['Inter']">
                            sec4
                        </div>
                    </Link>
                </div>
            </div>
        </main>
    );
}
