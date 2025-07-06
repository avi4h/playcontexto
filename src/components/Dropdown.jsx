import React from "react"
import { useAuth } from '../store/AuthContext'

export default function Dropdown({ list, stage, setIsDropdownOpen }) {
    const { isAuthenticated, user } = useAuth()

    // Function to get a random emoji for the user avatar
    const getUserEmoji = () => {
        const emojis = ["😎", "🚀", "🔥", "🌟", "🦄", "🐱", "🐶", "🦊", "🦁", "🐼"]
        // Use the username to generate a consistent emoji for each user
        const index = user?.username ?
            user.username.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % emojis.length :
            0
        return emojis[index]
    }

    // Format join date
    const formatJoinDate = (dateString) => {
        if (!dateString) return "Unknown"
        const date = new Date(dateString)
        return date.toLocaleDateString()
    }

    return (
        <div className="absolute top-[45px] right-0 bg-con-200 border-[3px] border-con-900 rounded-[10px] p-[10px] z-10 w-[200px]">
            {/* User Profile Section (only shown when authenticated) */}
            {isAuthenticated && (
                <div className="border-b border-con-900 pb-3 mb-3">
                    <div className="flex items-center mb-2">
                        <div className="w-10 h-10 rounded-full bg-con-600 flex items-center justify-center text-xl mr-3">
                            {getUserEmoji()}
                        </div>
                        <div>
                            <div className="font-bold">{user.username}</div>
                            <div className="text-xs text-gray-600">Joined: {formatJoinDate(user.joinDate)}</div>
                        </div>
                    </div>
                    <div className="text-xs text-gray-600">
                        Games played: {user.gamesPlayed || 0}
                    </div>
                </div>
            )}

            {/* Menu Items */}
            <ul>
                {list.map((item, index) => {
                    // Skip the Sign In option if user is authenticated
                    if (isAuthenticated && item.text === "Sign In") {
                        return null;
                    }

                    // Skip the Log Out option if user is not authenticated
                    if (!isAuthenticated && item.text === "Log Out") {
                        return null;
                    }

                    return (
                        <li
                            key={index}
                            className="flex items-center py-[5px] px-[10px] hover:bg-con-600 rounded-[5px] cursor-pointer"
                            onClick={() => {
                                // First close the dropdown
                                setIsDropdownOpen(false);
                                // Then execute the click handler with a small delay to ensure dropdown closes first
                                setTimeout(() => {
                                    if (typeof item.click === 'function') {
                                        item.click();
                                    }
                                }, 10);
                            }}
                        >
                            <img className="w-[19px] h-[19px] mr-[10px]" src={item.icon} alt={item.text} />
                            <span className="text-[14px] font-bold">{item.text}</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

