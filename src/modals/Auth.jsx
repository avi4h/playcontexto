import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import useModalAnimation from '../store/useModalAnimation'
import Login from '../components/Login'
import Register from '../components/Register'

export default function AuthModal({ isOpen, onClose }) {
    const { visible, animate } = useModalAnimation(isOpen)
    const [activeTab, setActiveTab] = useState('login')

    if (!isOpen && !visible) return null

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    return ReactDOM.createPortal(
        <div className={`fixed inset-0 bg-black bg-opacity-[0.35] flex justify-center items-center z-50 transition-opacity duration-150 ${animate ? 'opacity-100' : 'opacity-0'}`} onClick={handleOverlayClick}>
            <div className={`bg-con-200 pb-5 px-5 pt-7 rounded-[10px] border-[3px] border-con-900 relative max-w-[480px] w-full mx-[15px] transform transition-transform duration-150 ${animate ? 'scale-100' : 'scale-[0.87]'}`}>
                <div className='cursor-pointer absolute -top-[14px] -right-[14px] rounded-full border-[3px] border-con-900 z-15 bg-con-200' onClick={onClose} >
                    <img src="./close.svg" alt="Close" className="w-[28px] h-[28px]" />
                </div>
                <div className="flex border-b border-con-900 mb-4">
                    <button className={`py-2 px-4 font-bold ${activeTab === 'login' ? 'border-b-2 border-con-900' : ''}`} onClick={() => setActiveTab('login')} >
                        Sign In
                    </button>
                    <button className={`py-2 px-4 font-bold ${activeTab === 'register' ? 'border-b-2 border-con-900' : ''}`} onClick={() => setActiveTab('register')} >
                        Create Account
                    </button>
                </div>
                {activeTab === 'login' ? <Login onSuccess={onClose} /> : <Register onSuccess={onClose} />}
            </div>
        </div>,
        document.getElementById('modal-root')
    )
}