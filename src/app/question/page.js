//出題画面
const Question = () => {
    return (
        // <h1>Question:出題</h1>
    <main className="flex justify-center items-center h-screen">
        <div className="w-full max-w-lg bg-white p-4">
            <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 text-center text-black text-xl font-normal font-['Inter']">問題文</div>
                <Link href="../explanation/page.js" passHref>
                    <div
                        className="bg-red-400 rounded-2xl h-8 flex items-center justify-center text-white text-xl font-normal font-['Inter']">
                        sec1
                    </div>
                </Link>
                <Link href="../explanation/page.js" passHref>
                    <div
                        className="bg-red-400 rounded-2xl h-8 flex items-center justify-center text-white text-xl font-normal font-['Inter']">
                        sec2
                    </div>
                </Link>
                <Link href="../explanation" passHref>
                    <div
                        className="bg-red-400 rounded-2xl h-8 flex items-center justify-center text-white text-xl font-normal font-['Inter']">
                        sec3
                    </div>
                </Link>
                <Link href="../explanation/page.js" passHref>
                    <div
                        className="bg-red-400 rounded-2xl h-8 flex items-center justify-center text-white text-xl font-normal font-['Inter']">
                        sec4
                    </div>
                </Link>
            </div>
        </div>
    </main>
)
}

export default Question