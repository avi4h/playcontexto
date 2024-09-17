import React from "react"

export default function Header() {
    return (
        <header className="grid grid-cols-12 align-center w-full p-1 mt-[80px] sm:mt-[60px] md:mt-[40px] lg:mt-[20px]">
            <h1 className="col-start-2 col-span-10 text-2xl font-black uppercase leading-normal text-center">Contexto</h1>
            <div className="col-start-12 col-span-1 justify-self-end self-center rounded-full hover:bg-con-600 p-[5px]">
                <img className=" w-[19px] h-[19px] " src='./drop.svg' alt="logo" />
            </div>
        </header>
    )
}