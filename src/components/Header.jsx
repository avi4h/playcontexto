import React from "react"

export default function Header() {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDropdown = () => setIsOpen(!isOpen)

    return (
        <header className="grid grid-cols-12 align-center w-full p-1 mt-[80px] sm:mt-[60px] md:mt-[40px] lg:mt-[20px] relative">
            <h1 className="col-start-2 col-span-10 text-2xl font-black uppercase leading-normal text-center">Contexto</h1>
            <div className={`col-start-12 col-span-1 justify-self-end self-center rounded-full hover:bg-con-600 p-[5px] cursor-pointer ${isOpen ? "bg-con-600" : ""}`} onClick={toggleDropdown}>
                <img className=" w-[19px] h-[19px] " src='./drop.svg' alt="logo" />
            </div>
            { isOpen && (
                <ul className="absolute top-[37px] right-0 w-48 bg-white shadow-lg rounded-[10px] z-10 p-[10px]">
                    <li className="flex justify-start items-center px-[15px] py-[10px] hover:bg-con-600 rounded-[5px]">
                       <img src=".././public/q-rounded.svg" alt="how to play" className="w-[15px] h-[15px] mr-[10px]"/>
                       <p className=" text-base leading-none font-bold">How to play</p>
                    </li>
                    <li className="flex justify-start items-center px-[15px] py-[10px] hover:bg-con-600 rounded-[5px]">
                       <img src=".././public/hint.svg" alt="hint" className="w-[15px] h-[15px] mr-[10px]"/>
                       <p className=" text-base leading-none font-bold">Hint</p>
                    </li>
                    <li className="flex justify-start items-center px-[15px] py-[10px] hover:bg-con-600 rounded-[5px]">
                       <img src=".././public/flag.svg" alt="give up" className="w-[15px] h-[15px] mr-[10px]"/>
                       <p className=" text-base leading-none font-bold">Give up</p>
                    </li>
                    <li className="flex justify-start items-center px-[15px] py-[10px] hover:bg-con-600 rounded-[5px]">
                       <img src=".././public/calendar.svg" alt="previous game" className="w-[15px] h-[15px] mr-[10px]"/>
                       <p className=" text-base leading-none font-bold">Previous games</p>
                    </li>
                    <li className="flex justify-start items-center px-[15px] py-[10px] hover:bg-con-600 rounded-[5px]">
                       <img src=".././public/settings.svg" alt="settings" className="w-[15px] h-[15px] mr-[10px]"/>
                       <p className=" text-base leading-none font-bold">Settings</p>
                    </li>
                    <li className="flex justify-start items-center px-[15px] py-[10px] hover:bg-con-600 rounded-[5px]">
                       <img src=".././public/info.svg" alt="credits" className="w-[15px] h-[15px] mr-[10px]"/>
                       <p className=" text-base leading-none font-bold">Credits</p>
                    </li>
                    <li className="flex justify-start items-center px-[15px] py-[10px] hover:bg-con-600 rounded-[5px]">
                       <img src=".././public/message.svg" alt="feedback" className="w-[15px] h-[15px] mr-[10px]"/>
                       <p className=" text-base leading-none font-bold">Feedback</p>
                    </li>
                    <li className="flex justify-start items-center px-[15px] py-[10px] hover:bg-con-600 rounded-[5px]">
                       <img src=".././public/q-square.svg" alt="faq" className="w-[15px] h-[15px] mr-[10px]"/>
                       <p className=" text-base leading-none font-bold">FAQ</p>
                    </li>
                </ul>
            )}
        </header>
    )
}