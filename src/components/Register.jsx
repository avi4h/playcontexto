import React, { useState } from 'react'
import { useAuth } from '../store/AuthContext'

export default function Register({ onSuccess }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const { register } = useAuth()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setSuccess(false)
        setIsLoading(true)

        try {
            if (!username.trim() || !password.trim() || !confirmPassword.trim()) {
                setError('All fields are required')
                return
            }

            if (password !== confirmPassword) {
                setError('Passwords do not match')
                return
            }

            if (password.length < 6) {
                setError('Password must be at least 6 characters long')
                return
            }

            if (username.length < 3) {
                setError('Username must be at least 3 characters long')
                return
            }

            // Register the user
            const registered = register(username, password)

            if (registered) {
                setSuccess(true)
                setUsername('')
                setPassword('')
                setConfirmPassword('')

                // Close the modal after successful registration
                if (onSuccess) {
                    setTimeout(() => {
                        onSuccess()
                    }, 1500) // Give user time to see success message
                }
            } else {
                setError('Username already exists')
            }
        } catch (err) {
            setError('An error occurred during registration. Please try again.')
            console.error('Registration error:', err)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <section className="flex flex-col justify-start items-center w-full my-[10px]">
            <div className="bg-con-600 w-full p-5 rounded-[5px]">
                <h2 className="text-xl font-black mb-4">Create Account</h2>

                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                        {error}
                    </div>
                )}

                {success && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                        Account created successfully!
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-base font-bold mb-2" htmlFor="register-username">
                            Username
                        </label>
                        <input
                            className="bg-con-200 border-solid border-[1px] border-slate-900 w-full px-[15px] py-[10px] rounded-[5px] text-[18px] font-bold"
                            id="register-username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            disabled={isLoading}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-base font-bold mb-2" htmlFor="register-password">
                            Password
                        </label>
                        <input
                            className="bg-con-200 border-solid border-[1px] border-slate-900 w-full px-[15px] py-[10px] rounded-[5px] text-[18px] font-bold"
                            id="register-password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            disabled={isLoading}
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-base font-bold mb-2" htmlFor="confirm-password">
                            Confirm Password
                        </label>
                        <input
                            className="bg-con-200 border-solid border-[1px] border-slate-900 w-full px-[15px] py-[10px] rounded-[5px] text-[18px] font-bold"
                            id="confirm-password"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            disabled={isLoading}
                        />
                    </div>

                    <button
                        className={`bg-con-900 text-con-200 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Creating Account...' : 'Create Account'}
                    </button>
                </form>
            </div>
        </section>
    )
}