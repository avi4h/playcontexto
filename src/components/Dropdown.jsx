import React from "react"

export default function Dropdown() {
    return (
        <ul className="absolute top-[37px] right-0 w-48 bg-white shadow-lg rounded-[10px] z-10 p-[10px]">
            <li className="flex justify-start items-center px-[15px] py-[10px] hover:bg-con-600 rounded-[5px]">
                <img src="./src/assets/icons/q-rounded.svg" alt="how to play" className="w-[15px] h-[15px] mr-[10px]" />
                <p className=" text-base leading-none font-bold">How to play</p>
            </li>
            <li className="flex justify-start items-center px-[15px] py-[10px] hover:bg-con-600 rounded-[5px]">
                <img src="./src/assets/icons/hint.svg" alt="hint" className="w-[15px] h-[15px] mr-[10px]" />
                <p className=" text-base leading-none font-bold">Hint</p>
            </li>
            <li className="flex justify-start items-center px-[15px] py-[10px] hover:bg-con-600 rounded-[5px]">
                <img src="./src/assets/icons/flag.svg" alt="give up" className="w-[15px] h-[15px] mr-[10px]" />
                <p className=" text-base leading-none font-bold">Give up</p>
            </li>
            <li className="flex justify-start items-center px-[15px] py-[10px] hover:bg-con-600 rounded-[5px]">
                <img src="./src/assets/icons/calendar.svg" alt="previous game" className="w-[15px] h-[15px] mr-[10px]" />
                <p className=" text-base leading-none font-bold">Previous games</p>
            </li>
            <li className="flex justify-start items-center px-[15px] py-[10px] hover:bg-con-600 rounded-[5px]">
                <img src="./src/assets/icons/settings.svg" alt="settings" className="w-[15px] h-[15px] mr-[10px]" />
                <p className=" text-base leading-none font-bold">Settings</p>
            </li>
            <li className="flex justify-start items-center px-[15px] py-[10px] hover:bg-con-600 rounded-[5px]">
                <img src="./src/assets/icons/info.svg" alt="credits" className="w-[15px] h-[15px] mr-[10px]" />
                <p className=" text-base leading-none font-bold">Credits</p>
            </li>
            <li className="flex justify-start items-center px-[15px] py-[10px] hover:bg-con-600 rounded-[5px]">
                <img src="./src/assets/icons/message.svg" alt="feedback" className="w-[15px] h-[15px] mr-[10px]" />
                <p className=" text-base leading-none font-bold">Feedback</p>
            </li>
            <li className="flex justify-start items-center px-[15px] py-[10px] hover:bg-con-600 rounded-[5px]">
                <img src="./src/assets/icons/q-square.svg" alt="faq" className="w-[15px] h-[15px] mr-[10px]" />
                <p className=" text-base leading-none font-bold">FAQ</p>
            </li>
        </ul>
    )
}