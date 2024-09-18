import React from "react"


export default function Dropdown({ list }) {

    const listElements = list.map((item, index) => {
        return (
            <li key={index} className="flex justify-start items-center px-[15px] py-[10px] hover:bg-con-600 rounded-[5px] cursor-pointer" onClick={item.click}>
                <img src={item.icon} alt={item.text} className="w-[15px] h-[15px] mr-[10px]" />
                <p className=" text-base leading-none font-bold">{item.text}</p>
            </li>
        )
    })

    return (
        <>
            <ul className="absolute top-[37px] right-0 w-48 bg-white shadow-lg rounded-[10px] z-10 p-[10px]">
                {listElements}
            </ul>
        </>
    )
}

