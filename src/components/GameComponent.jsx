import React from 'react'
import { useAuth } from '../store/AuthContext'

export default function GameComponent(props) {
  const { isAuthenticated, incrementGamesPlayed } = useAuth()
  
  // Game logic here
  
  // When game is completed, increment games played if user is logged in
  const handleGameComplete = () => {
    // Game completion logic
    
    // Only increment games played if user is authenticated
    if (isAuthenticated) {
      incrementGamesPlayed()
    }
  }
  
  return (
    <div>
      {/* Game UI */}
    </div>
  )
} 