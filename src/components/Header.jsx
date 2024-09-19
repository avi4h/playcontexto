import React from "react"
import Dropdown from "./Dropdown"

import How from "../modals/How" 
import Prev from "../modals/Prev"
import Settings from "../modals/Settings"   
import Feedback from "../modals/Feedback"
import Credits from "../modals/Credits"
import FaqDetailed from "../modals/FaqDetailed"

export default function Header({ isFaqDetailedOpen, setIsFaqDetailedOpen}) {

    const list = [
        {
            icon: "./q-rounded.svg",
            text: "How to play",
            click: function () {
                return handleHowClick()
            }
        },
        {
            icon: "./hint.svg",
            text: "Hint",
            click: function () {
                return handleHowClick()
            }
        },
        {
            icon: "./flag.svg",
            text: "Give up",
            click: function () {
                return handleHowClick()
            }
        },
        {
            icon: "./calendar.svg",
            text: "Previous games",
            click: function () {
                return handlePrevClick()
            }
        },
        {
            icon: "./settings.svg",
            text: "Settings",
            click: function () {
                return handleSettingsClick()
            }
        },
        {
            icon: "./info.svg",
            text: "Credits",
            click: function () {
                return handleCreditsClick()
            }
        },
        {
            icon: "./message.svg",
            text: "Feedback",
            click: function () {
                return handleFeedbackClick()
            }
        },
        {
            icon: "./q-square.svg",
            text: "FAQ",
            click: function () {
                return handleFaqDetailedClick()
            }
        }
    ]

    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDropdown = () => setIsOpen(!isOpen)

    const dropdownRef = React.useRef(null)


    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    }

    React.useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    
    const [isHowOpen, setIsHowOpen] = React.useState(false)
    const [isPrevOpen, setIsPrevOpen] = React.useState(false)
    const [isSettingsOpen, setIsSettingsOpen] = React.useState(false)
    const [isFeedbackOpen, setIsFeedbackOpen] = React.useState(false)
    const [isCreditsOpen, setIsCreditsOpen] = React.useState(false)
    

    function handleHowClick() { 
        setIsHowOpen(true) 
        setIsOpen(false) 
    }
    function handlePrevClick() { 
        setIsPrevOpen(true) 
        setIsOpen(false)  
    }
    function handleSettingsClick() { 
        setIsSettingsOpen(true)  
        setIsOpen(false) 
    }
    function handleFeedbackClick() { 
        setIsFeedbackOpen(true)  
        setIsOpen(false) 
    }
    function handleCreditsClick() { 
        setIsCreditsOpen(true)  
        setIsOpen(false) 
    }
    function handleFaqDetailedClick() { 
        setIsFaqDetailedOpen(true)  
        setIsOpen(false) 
    }

    function closeHowModal() { setIsHowOpen(false) }
    function closePrevModal() { setIsPrevOpen(false) }
    function closeSettingsModal() { setIsSettingsOpen(false) }
    function closeFeedbackModal() { setIsFeedbackOpen(false) }
    function closeCreditsModal() { setIsCreditsOpen(false) }
    function closeFaqDetailedModal() { setIsFaqDetailedOpen(false) }

    return (
        <>
            <header className="grid grid-cols-12 align-center w-full p-1 mt-[80px] sm:mt-[60px] md:mt-[40px] lg:mt-[20px] relative" ref={dropdownRef}>
                <h1 className="col-start-2 col-span-10 text-2xl font-black uppercase leading-normal text-center">Contexto</h1>
                <div className={`col-start-12 col-span-1 justify-self-end self-center rounded-full hover:bg-con-600 p-[5px] cursor-pointer ${isOpen ? "bg-con-600" : ""}`} onClick={toggleDropdown}>
                    <img className=" w-[19px] h-[19px] " src='./drop.svg' alt="logo" />
                </div>
                {isOpen && <Dropdown list={list} />}
            </header>

            <How isOpen={isHowOpen} onClose={closeHowModal} />
            <Prev isOpen={isPrevOpen} onClose={closePrevModal}/>
            <Settings isOpen={isSettingsOpen} onClose={closeSettingsModal} />
            <Feedback isOpen={isFeedbackOpen} onClose={closeFeedbackModal} />
            <Credits isOpen={isCreditsOpen} onClose={closeCreditsModal} />
            <FaqDetailed isOpen={isFaqDetailedOpen} onClose={closeFaqDetailedModal} />
        </>

    )
}