import React from "react"

export default function Input() {
    return (
        <section className="flex justify-start items-center w-full my-[10px]">
            <input type="text" className=" bg-con-200 border-solid border-[1px] border-slate-900 w-full px-[15px] py-[10px] rounded-[5px] text-[22.5px] font-bold placeholder:text-slate-500 placeholder:text-[22.5px] placeholder:font-bold " placeholder="type a word" />
        </section>
    )
}