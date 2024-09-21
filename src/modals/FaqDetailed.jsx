import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom'

export default function FaqDetailed({ isOpen, onClose }) {

    const faq = [
        {
            question: "How is the word order defined?",
            answer: "The game uses an artificial intelligence algorithm and thousands of texts to calculate the similarity of the words in relation to the word of the day. Not necessarily it is related to the meaning of the words, but to the proximity in which they are used on the internet. For example, if the word of the day were “infinite”, words related to “love” or words related to “universe” might be close to the word of the day because “infinite” is commonly used in those two different contexts. In similar reasoning, if “tv” and “television”, for example, are in very different positions, it means that they are used differently in relation to the word of the day, despite being the same object."
        },
        {
            question: "How can I ask for a hint?",
            answer: "Click on the three dots located on the upper right corner of the screen and select the option “Hint” and it will reveal one word."
        },
        {
            question: "I couldn't figure the word out. Can I see what the word of the day is?",
            answer: "In case you don't want to keep trying to guess the word, you have the option to give up. In order to do it, click on the three dots located on the upper right corner of the screen and select the option “Give up”. The word of the day will be displayed on the screen."
        },
        {
            question: "I want to play more than one game a day, is that possible?",
            answer: "Yes. It is possible to play the games of previous days since Contexto launch day or to play a random game. To do so, click on the three dots located on the upper right corner of the screen and select the option “Previous games”. You can choose the game of some specific day or play on random mode."
        },
        {
            question: "I couldn't play yesterday. Can I still play yesterday's game?",
            answer: "Yes, the previous games can be played anytime. To do so, click on the three dots located on the upper right corner of the screen and select the option “Previous games”. You can choose the game of some specific day or play on random mode."
        }
    ]

    const [visible, setVisible] = useState(false)
    const [animate, setAnimate] = useState(false)
    const [visibilityStates, setVisibilityStates] = useState(faq.map(() => false))

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
    

    const toggleVisibility = (index) => {
        setVisibilityStates((prevStates) => {
            const newStates = [...prevStates]
            newStates[index] = !newStates[index]
            return newStates
        })
    }


    const faqList = faq.map((item, index) => {
        return (
            <div key={index} className={`flex flex-col justify-start items-left w-full pb-[10px] ${index === (faq.length - 1) ? "" : "border-b border-con-100"}`}>
                <div className="flex flex-row gap-[8px] justify-between items-left w-full cursor-pointer" onClick={() => toggleVisibility(index)}>
                    <h5 className="text-base leading-normal font-bold">{item.question}</h5>
                    <img src="./expand.svg" className={`w-[25px] h-[25px] transition-transform duration-200 ${visibilityStates[index] ? 'rotate-180' : 'rotate-0'}`} alt="see answer" />
                </div>
                <div className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${visibilityStates[index] ? 'max-h-[400px]' : 'max-h-0'}`} >
                    <h6 className="text-base font-medium pt-[15px]"> {item.answer} </h6>
                </div>
            </div>
        )
    })

    return ReactDOM.createPortal(
        <div className={`fixed inset-0 bg-black bg-opacity-[0.35] flex justify-center items-center z-50 transition-opacity duration-150 ${animate ? 'opacity-100' : 'opacity-0'}`}>
            <div className={`p-1 bg-con-200 rounded-[10px] border-[3px] border-con-900 relative max-w-[480px] sm:w-[480px] md:w-[480px] lg:w-[480px] mx-[15px] transform transition-transform duration-150 ${animate ? 'scale-100' : 'scale-[0.87]'}`}>
                <div className='cursor-pointer absolute -top-[14px] -right-[14px] rounded-full border-[3px] border-con-900 z-15 bg-con-200' onClick={onClose} >
                    <img src="./close.svg" alt="Close" className=" w-[28px] h-[28px] " />
                </div>
                <div className='overflow-y-scroll max-h-[480px] pb-5 pl-7 pr-5 pt-7 '>
                    <div className="flex flex-col gap-[15px] justify-start items-left w-full">
                        <div className="flex justify-start items-center pb-[10px]">
                            <img alt="FAQ" src="./q-square.svg" className="w-[20px] h-[20px] mr-[10px]" />
                            <p className=" text-xl leading-none font-black">FAQ</p>
                        </div>
                        {faqList}
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById('modal-root')
    )
}