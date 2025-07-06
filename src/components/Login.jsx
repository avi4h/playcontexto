import React, { useState } from 'react'
import { useAuth } from '../store/AuthContext'

export default function Login({ onSuccess }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const { login } = useAuth()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setIsLoading(true)

        try {
            if (!username.trim() || !password.trim()) {
                setError('Username and password are required')
                return
            }

            const success = login(username, password)
            
            if (success) {
                // Call the onSuccess callback to close the modal
                if (onSuccess) onSuccess()
            } else {
                setError('Invalid username or password')
            }
        } catch (err) {
            setError('An error occurred during login. Please try again.')
            console.error('Login error:', err)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <section className="flex flex-col justify-start items-center w-full my-[10px]">
            <div className="bg-con-600 w-full p-5 rounded-[5px]">
                <h2 className="text-xl font-black mb-4">Sign In</h2>

                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-base font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            className="bg-con-200 border-solid border-[1px] border-slate-900 w-full px-[15px] py-[10px] rounded-[5px] text-[18px] font-bold"
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            disabled={isLoading}
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-base font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="bg-con-200 border-solid border-[1px] border-slate-900 w-full px-[15px] py-[10px] rounded-[5px] text-[18px] font-bold"
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            disabled={isLoading}
                        />
                    </div>

                    <button
                        className={`bg-con-900 text-con-200 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Signing in...' : 'Sign In'}
                    </button>
                </form>
            </div>
        </section>
    )
}