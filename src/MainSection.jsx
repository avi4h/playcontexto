import React from "react"

export default function MainSection() {
    return (
        <main className="flex text-con-900 flex-col justify-center items-center h-screen max-w-[480px] sm:w-[480px] md:w-[480px] lg:w-[480px] p-[15px]">
            <header className="flex justify-center items-center w-full">
                <h1 className="text-2xl font-extrabold uppercase">
                    Contexto
                </h1>
            </header>
            <section className="flex justify-start items-baseline w-full pt-[10px] px-[10px] gap-[10px]">
                <h2 className="text-xs font-bold">GAME: <span className="text-lg font-extrabold">#729</span></h2>
                <h3 className="text-xs font-bold">GUESSES: <span className="text-lg font-extrabold">0</span></h3>
            </section>
            <section className="flex justify-start items-center w-full my-[10px]">
                <input type="text" className=" bg-con-200 border-solid border-[1px] border-slate-900 w-full px-[15px] py-[10px] rounded-[5px] text-[22.5px] font-bold placeholder:text-slate-500 placeholder:text-[22.5px] placeholder:font-bold " placeholder="type a word" />
            </section>
            <section className="flex bg-con-600 flex-col justify-start items-center w-full mt-[10px] py-[15px] pl-[15px] pr-[35px] rounded-[5px]">
                <div className="flex gap-[10px] justify-start items-center w-full mb-[15px]">
                    <img className="w-[15px] h-[15px]" src='./q-rounded.svg' alt="question" />
                    <h4 className="text-[20px] leading-[20px] font-extrabold">How to play</h4>
                </div>
                <div className="flex flex-col gap-[8px] justify-start items-left w-full">
                    <p className="text-base leading-normal font-bold">Find the secret word. You have unlimited guesses.</p>
                    <p className="text-base leading-normal font-bold">The words were sorted by an artificial intelligence algorithm according to how similar they were to the secret word.</p>
                    <p className="text-base leading-normal font-bold">After submitting a word, you will see its position. The secret word is number 1.</p>
                    <p className="text-base leading-normal font-bold">The algorithm analyzed thousands of texts. It uses the context in which words are used to calculate the similarity between them.</p>
                </div>
            </section>
            <section className="flex flex-col justify-start items-center w-full mt-[10px] p-[15px]">
                <div className="flex gap-[10px] justify-start items-center w-full mb-[20px]">
                    <img className="w-[15px] h-[15px]" src='./q-square.svg' alt="question" />
                    <h4 className="text-[20px] leading-[20px] font-extrabold">FAQ</h4>
                </div>
                <div className="flex flex-col gap-[15px] justify-start items-left w-full">
                    <div className="flex flex-row gap-[8px] justify-between items-left w-full pb-[10px] border-b ">
                        <h5 className="text-base leading-normal font-bold">How is the word order defined?</h5>
                        <img src="./expand.svg" className="cursor-pointer w-[25px] h-[25px]" alt="see answer" />
                    </div>
                    <div className="flex flex-row gap-[8px] justify-between items-left w-full">
                        <h5 className="text-base leading-normal font-bold">How can I ask for a hint?</h5>
                        <img src="./expand.svg" className="cursor-pointer w-[25px] h-[25px]" alt="see answer" />
                    </div>
                </div>
            </section>
        </main>
    )
}