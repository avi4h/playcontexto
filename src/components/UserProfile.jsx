import React from 'react'
import { useAuth } from '../store/AuthContext'

export default function UserProfile() {
    const { user, logout } = useAuth()

    if (!user) return null

    return (
        <div className="bg-con-600 w-full p-5 rounded-[5px] mt-4">
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="text-lg font-bold">Welcome, {user.username}!</h3>
                </div>
                <button
                    onClick={logout}
                    className="bg-con-900 text-con-200 font-bold py-1 px-3 rounded text-sm"
                >
                    Sign Out
                </button>
            </div>
        </div>
    )
}