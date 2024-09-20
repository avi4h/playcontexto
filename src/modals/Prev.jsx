import React from 'react'
import ReactDOM from 'react-dom'

export default function Prev({ isOpen, onClose }) {

    if (!isOpen) return null

    const prevGames = [
        {
            game: 1,
            day: "Fri, Sep 10"
        },
        {
            game: 2,
            day: "Thu, Sep 11"
        },
        {
            game: 3,
            day: "Wed, Sep 12"
        },
        {
            game: 4,
            day: "Tue, Sep 13"
        },
        {
            game: 5,
            day: "Mon, Sep 14"
        },
        {
            game: 6,
            day: "Sun, Sep 15"
        },
        {
            game: 7,
            day: "Sat, Sep 16"
        },
        {
            game: 8,
            day: "Fri, Sep 17"
        },
        {
            game: 9,
            day: "Thu, Sep 18"
        },
        {
            game: 10,
            day: "Wed, Sep 19"
        },
        {
            game: 11,
            day: "Tue, Sep 20"
        }
    ]

    const prevGamesList = prevGames.map((item) => {
        return (
            <button
                onClick={() => window.open('https://www.google.com/', '_blank', 'noopener noreferrer')}
                className='bg-con-900 px-[18px] py-[12px] rounded-[5px] flex gap-3 w-full items-center cursor-pointer'>
                <span className="text-[18px] leading-none font-bold text-con-200">#{item.game}</span>
                <span className="text-[14px] leading-none font-bold text-con-200">{item.day}</span>
            </button>
        )
    })

    return ReactDOM.createPortal(
        <div className="fixed inset-0 bg-black bg-opacity-[0.35] flex justify-center items-center z-50">
            <div className="bg-con-200 rounded-[10px] border-[3px] border-con-900 relative max-w-[480px] sm:w-[480px] md:w-[480px] lg:w-[480px] mx-[15px]">
                <div className='cursor-pointer absolute -top-[14px] -right-[14px] rounded-full border-[3px] border-con-900 z-15 bg-con-200' onClick={onClose} >
                    <img src="./close.svg" alt="Close" className=" w-[28px] h-[28px] " />
                </div>
                <div className="text-center overflow-y-scroll max-h-[500px] pt-7 pr-4 pl-7 mb-1 ">
                    <div className="flex justify-start items-center ml-2 ">
                        <p className='text-base font-bold text-wrap text-left'>Select a previous game to play:</p>
                    </div>
                    <button
                        onClick={() => window.open('https://www.google.com/', '_blank', 'noopener noreferrer')}
                        className='bg-con-900 px-[18px] py-[10px] rounded-[5px] mt-[15px] flex justify-center items-center mx-auto cursor-pointer'>
                        <img alt="random" src="./random.svg" className="w-[15px] h-[15px] mr-[10px] invert" />
                        <span className="text-lg leading-normal font-bold text-con-200">Random</span>
                    </button>
                    <div className="flex flex-col-reverse gap-[10px] justify-start items-start m-[15px]">
                        {prevGamesList}
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById('modal-root')
    )
}