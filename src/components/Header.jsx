import React from "react"
import Dropdown from "./Dropdown"
import { useAuth } from '../store/AuthContext'

export default function Header({ isDropdownOpen, setIsDropdownOpen, list, stage }) {
    const { isAuthenticated, user } = useAuth()

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen)
    const dropdownRef = React.useRef(null)

    // Function to get a random emoji for the user avatar
    const getUserEmoji = () => {
        const emojis = ["😎", "🚀", "🔥", "🌟", "🦄", "🐱", "🐶", "🦊", "🦁", "🐼"]
        // Use the username to generate a consistent emoji for each user
        const index = user?.username ? 
            user.username.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % emojis.length : 
            0
        return emojis[index]
    }

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false)
        }
    }

    React.useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <>
            <header className="grid grid-cols-12 align-center w-full p-1 mb-[5px] mt-[80px] sm:mt-[60px] md:mt-[40px] lg:mt-[20px] relative" ref={dropdownRef}>
                <h1 className="col-start-2 col-span-10 text-2xl font-black uppercase leading-normal text-center">PlayContexto</h1>
                <div className="col-start-12 col-span-1 justify-self-end self-center rounded-full hover:bg-con-600 p-[5px] cursor-pointer flex items-center" onClick={toggleDropdown}>
                    {isAuthenticated ? (
                        <div className="w-[28px] h-[28px] bg-con-600 rounded-full flex items-center justify-center">
                            {getUserEmoji()}
                        </div>
                    ) : (
                        <img className="w-[19px] h-[19px]" src="./drop.svg" alt="menu" />
                    )}
                </div>
                {isDropdownOpen && <Dropdown list={list} stage={stage} setIsDropdownOpen={setIsDropdownOpen} />}
            </header>
        </>
    )
}