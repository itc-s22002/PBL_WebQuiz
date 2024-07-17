//解説画面
const Explanation = () => {
    return(
            <main className="min-h-screen flex justify-center items-center">
                <div className="w-full h-full flex flex-col items-center justify-center bg-white p-8">
                    <div className="w-full text-center">
                        <Link href="../start" passHref>
                            <a className="block px-4 py-2 bg-red-400 rounded-[20px] text-white text-4xl font-normal font-['Inter'] hover:bg-blue-500">
                                next
                            </a>
                        </Link>
                    </div>
                    <div className="w-full text-left text-black text-6xl font-bold font-['Inter'] mt-8">
                        解説文
                    </div>
                    <div className="w-full text-center text-black text-6xl font-bold font-['Inter'] mt-8">
                        統計情報
                    </div>
                    <div className="w-full text-center text-black text-6xl font-bold font-['Inter'] mt-8">
                        テスト
                    </div>
                </div>
            </main>
        );
}

export default Explanation