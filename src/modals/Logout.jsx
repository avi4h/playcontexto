import React from 'react'
import ReactDOM from 'react-dom'
import useModalAnimation from '../store/useModalAnimation'
import { useAuth } from '../store/AuthContext'

export default function LogoutConfirmModal({ isOpen, onClose }) {
  const { visible, animate } = useModalAnimation(isOpen)
  const { logout } = useAuth()

  if (!isOpen && !visible) return null

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleLogout = () => {
    // Save current game state before logout
    const currentGameState = localStorage.getItem('gameHistory')
    if (currentGameState) {
      localStorage.setItem('gameHistory', currentGameState)
    }
    
    logout()
    onClose()
  }

  return ReactDOM.createPortal(
    <div className={`fixed inset-0 bg-black bg-opacity-[0.35] flex justify-center items-center z-50 transition-opacity duration-150 ${animate ? 'opacity-100' : 'opacity-0'}`} onClick={handleOverlayClick} >
      <div className={`bg-con-200 pb-5 px-5 pt-7 rounded-[10px] border-[3px] border-con-900 relative max-w-[400px] w-full mx-[15px] transform transition-transform duration-150 ${animate ? 'scale-100' : 'scale-[0.87]'}`} >
        <div className='cursor-pointer absolute -top-[14px] -right-[14px] rounded-full border-[3px] border-con-900 z-15 bg-con-200' onClick={onClose} >
          <img src="./close.svg" alt="Close" className="w-[28px] h-[28px]" />
        </div>
        <h2 className="text-xl font-black mb-4 text-center">
          Confirm Logout
        </h2>
        <p className="mb-6 text-center">
          Are you sure you want to log out? Your progress will be saved and you can continue as a guest user.
        </p>
        <div className="flex justify-center space-x-4">
          <button onClick={onClose} className="bg-con-600 text-con-900 font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline" >
            Cancel
          </button>
          <button onClick={handleLogout} className="bg-con-900 text-con-200 font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline" >
            Yes, Log Out
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  )
} 