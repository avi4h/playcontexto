import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { getBarWidth, getBarColor } from "../store/utils"

export default function Words({ isOpen, onClose , gameId}) {

    const [visible, setVisible] = useState(false)
    const [animate, setAnimate] = useState(false)
    const [loading, setLoading] = useState(true)
    const [words, setWords] = useState([])

    useEffect(() => {

        if (isOpen) {
            setVisible(true)
            setTimeout(() => setAnimate(true), 30)
            fetchWords()
        } else {
            setAnimate(false)
            setTimeout(() => setVisible(false), 150)
        }

    }, [isOpen])

    async function fetchWords() {
        setLoading(true)
        try {
            const response = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(`https://api.contexto.me/machado/en/top/${gameId}`)}`)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            const data = await response.json()
            setWords(data.words)
        }
        catch (error) {
            console.error('Error fetching words:', error)
        } 
        finally {
            setLoading(false)
        }
    }

    if (!isOpen && !visible) return null

    return ReactDOM.createPortal(
        <div className={`fixed inset-0 bg-black bg-opacity-[0.35] flex justify-center items-center z-50 transition-opacity duration-150 ${animate ? 'opacity-100' : 'opacity-0'}`}>
            <div className={`bg-con-200 rounded-[10px] border-[3px] border-con-900 relative max-w-[480px] w-full sm:w-[480px] md:w-[480px] lg:w-[480px] mx-[15px] transform transition-transform duration-150 ${animate ? 'scale-100' : 'scale-[0.87]'}`}>
                <div className='cursor-pointer absolute -top-[14px] -right-[14px] rounded-full border-[3px] border-con-900 z-15 bg-con-200' onClick={onClose} >
                    <img src="./close.svg" alt="Close" className=" w-[28px] h-[28px] " />
                </div>
                {
                    loading ? (
                        <div className="loading-text ml-auto mr-auto p-8">
                            <span className='font-bold text-con-900 text-lg' style={{ '--i': 1 }}>L</span>
                            <span className='font-bold text-con-900 text-lg' style={{ '--i': 2 }}>o</span>
                            <span className='font-bold text-con-900 text-lg' style={{ '--i': 3 }}>a</span>
                            <span className='font-bold text-con-900 text-lg' style={{ '--i': 4 }}>d</span>
                            <span className='font-bold text-con-900 text-lg' style={{ '--i': 5 }}>i</span>
                            <span className='font-bold text-con-900 text-lg' style={{ '--i': 6 }}>n</span>
                            <span className='font-bold text-con-900 text-lg' style={{ '--i': 7 }}>g</span>
                            <span className='font-bold text-con-900 text-lg' style={{ '--i': 8 }}>.</span>
                            <span className='font-bold text-con-900 text-lg' style={{ '--i': 9 }}>.</span>
                            <span className='font-bold text-con-900 text-lg' style={{ '--i': 10 }}>.</span>
                        </div>
                    ) : (
                        <div className="text-center overflow-y-scroll max-h-[450px] pt-7 pb-4 pl-7 pr-4 mb-[6px]">
                            <div className="flex justify-start items-center mt-2">
                                <p className=" text-base leading-none font-bold">Today's word (#<span className="text-base leading-none font-black" >{gameId}</span>) was:</p>
                            </div>
                            <div className="flex justify-center items-center my-[15px]">
                                <p className=" text-xl leading-none font-black">{words[0]}</p>
                            </div>
                            <div className="flex justify-start items-center my-4">
                                <p className=" text-base leading-none font-bold">These were the 500 closest words:</p>
                            </div>
                            <div className="flex flex-col gap-[7px] justify-start items-start">
                                { words.length > 0 &&
                                    words.map((word, distance) => {
                                        let highlight = false
                                        return (
                                            <div className={`relative w-full h-[35px] flex items-center justify-between rounded-[5px] ${highlight ? 'bg-gray-200' : ''}`} key={word}>
                                                <div className="absolute w-full h-full bg-con-600 rounded-[5px]">
                                                    <div
                                                        className={`min-w-[1%] h-full rounded-[5px] ${getBarColor(distance)} `}
                                                        style={{
                                                            width: getBarWidth(distance)
                                                        }}
                                                    />
                                                </div>
                                                <div className="relative w-full flex items-center justify-between">
                                                    <span className='font-bold p-3 text-lg leading-none'>{word}</span>
                                                    <span className='font-bold p-3 text-lg leading-none'>{distance + 1}</span>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )}
            </div>
        </div>,
        document.getElementById('modal-root')
    )
}