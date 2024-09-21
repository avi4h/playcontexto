import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

export default function Prev({ isOpen, onClose, prevGames, gameNum }) {

    const [visible, setVisible] = useState(false)
    const [animate, setAnimate] = useState(false)

    useEffect(() => {
        if (isOpen) {
            setVisible(true)
            setTimeout(() => setAnimate(true), 30)
        } else {
            setAnimate(false)
            setTimeout(() => setVisible(false), 150) 
        }
    }, [isOpen])

    if (!isOpen && !visible) return null


    const currentIndex = prevGames.findIndex(item => item.game === gameNum)

    // Slice the array up to the current game index
    const slicedPrevGames = currentIndex !== -1 ? prevGames.slice(0, currentIndex + 1) : prevGames

    const prevGamesList = slicedPrevGames.map((item) => {
        return (
            <button
                key={item.game}
                onClick={() => window.open('https://www.google.com/', '_blank', 'noopener noreferrer')}
                className='bg-con-900 px-[18px] py-[12px] rounded-[5px] flex gap-3 w-full items-center cursor-pointer'>
                <span className="text-[18px] leading-none font-bold text-con-200">#{item.game}</span>
                <span className="text-[14px] leading-none font-bold text-con-200">{item.day}</span>
            </button>
        )
    })

    return ReactDOM.createPortal(
        <div className={`fixed inset-0 bg-black bg-opacity-[0.35] flex justify-center items-center z-50 transition-opacity duration-150 ${animate ? 'opacity-100' : 'opacity-0'}`}>
            <div className={`bg-con-200 rounded-[10px] border-[3px] border-con-900 relative max-w-[480px] sm:w-[480px] md:w-[480px] lg:w-[480px] mx-[15px] transform transition-transform duration-150 ${animate ? 'scale-100' : 'scale-[0.87]'}`}>
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