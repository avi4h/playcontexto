import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

export default function Give({ isOpen, onClose }) {

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

    return ReactDOM.createPortal(
        <div className={`fixed inset-0 bg-black bg-opacity-[0.35] flex justify-center items-center z-50 transition-opacity duration-150 ${animate ? 'opacity-100' : 'opacity-0'}`}>
            <div className={`bg-con-200 p-7 rounded-[10px] border-[3px] border-con-900 relative max-w-[480px] sm:w-[480px] md:w-[480px] lg:w-[480px] mx-[15px] transform transition-transform duration-150 ${animate ? 'scale-100' : 'scale-[0.87]'}`}>
                <div className='cursor-pointer absolute -top-[14px] -right-[14px] rounded-full border-[3px] border-con-900 z-15 bg-con-200' onClick={onClose} >
                    <img src="./close.svg" alt="Close" className=" w-[28px] h-[28px] " />
                </div>
                <div className="text-center">
                    <div className="flex justify-center items-center">
                        <p className=" text-base leading-none font-bold">Are you sure you want to give up?</p>
                    </div>
                    <div className="flex gap-4 justify-center items-center mt-6">
                        <button
                            className='bg-con-900 px-[20px] pt-[8px] pb-[5px] rounded-[5px]'
                            onClick={() => window.open('https://forms.gle/gwjTmucbZyJhdAuG8', '_blank', 'noopener noreferrer')} >
                            <span className="text-xl font-bold leading-none text-con-200">Yes</span>
                        </button>
                        <button
                            className='bg-con-900 px-[20px] pt-[8px] pb-[5px] rounded-[5px]'
                            onClick={onClose} >
                            <span className="text-xl font-bold leading-none text-con-200">No</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById('modal-root')
    )
}