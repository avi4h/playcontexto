import React from 'react'
import ReactDOM from 'react-dom'

export default function Settings({ isOpen, onClose}){

    if (!isOpen) return null

    return ReactDOM.createPortal(
        <div className="fixed inset-0 bg-black bg-opacity-[0.35] flex justify-center items-center z-50">
            <div className="bg-con-200 p-5 rounded-[10px] border-[3px] border-con-900 relative max-w-[480px] sm:w-[480px] md:w-[480px] lg:w-[480px] mx-[15px]">
                <div className='cursor-pointer absolute -top-[14px] -right-[14px] rounded-full border-[3px] border-con-900 z-15 bg-con-200'  onClick={onClose} >
                    <img src="./close.svg" alt="Close" className=" w-[28px] h-[28px] " />
                </div>
                <div className="text-center">
                    <h2 className="text-xl font-black">How to Play</h2>
                    <p className="text-lg mt-2">The game is simple. You have to find the matching cards. You can only flip two cards at a time. If the cards match, they will stay flipped. If they don't match, they will flip back over. The game is over when all the cards are flipped.</p> 
                </div>
            </div>
        </div>,
        document.getElementById('modal-root')
    )
}