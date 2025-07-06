import { useAuth } from '../store/AuthContext'

export default function Game() {
    const auth = useAuth() || { isAuthenticated: false, user: null }
    const { isAuthenticated, user } = auth

    const saveGameProgress = (gameData) => {
        try {
            if (isAuthenticated && user) {
                // Save to user's game history
                const userData = JSON.parse(localStorage.getItem('users') || '[]')
                const userIndex = userData.findIndex(u => u.username === user.username)
                if (userIndex !== -1) {
                    userData[userIndex].gameHistory = gameData
                    localStorage.setItem('users', JSON.stringify(userData))
                }
            } else {
                // Save to general game history
                localStorage.setItem('gameHistory', JSON.stringify(gameData))
            }
        } catch (error) {
            console.error("Error saving game progress:", error)
        }
    }

    // ... rest of your game component
} 