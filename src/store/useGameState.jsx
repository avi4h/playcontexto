import { useState, useEffect } from 'react'
import { useAuth } from './AuthContext'
import { getTodaysGameId } from './utils'

export default function useGameState() {
    const { isAuthenticated, user } = useAuth()
    const [game, setGame] = useState(() => {
        // Initialize game state based on authentication
        try {
            // Always try to get the current game state first
            const currentGameState = localStorage.getItem('gameHistory')
            const parsedGameState = currentGameState ? JSON.parse(currentGameState) : null

            if (isAuthenticated && user) {
                // For authenticated users, get their specific game history
                const userData = JSON.parse(localStorage.getItem('users') || '[]')
                const currentUser = userData.find(u => u.username === user.username)
                const userGameState = currentUser?.gameHistory

                // If user has no game state but there's a current game, use that
                if (!userGameState && parsedGameState) {
                    return parsedGameState
                }
                // Otherwise use user's game state or initialize new one
                return userGameState || { openGameId: null, gameData: [], stage: 1 }
            } else {
                // For guest users, use the current game state or initialize with today's game
                if (parsedGameState) {
                    return parsedGameState
                }
                // Initialize with today's game
                const todaysGameId = getTodaysGameId()
                return {
                    openGameId: todaysGameId,
                    gameData: [{
                        gameId: todaysGameId,
                        foundWord: "",
                        gaveUp: "",
                        guessHistory: [],
                        lastGuess: [],
                        numberOfAttempts: 0,
                        numberOfTips: 0,
                        postGame: []
                    }],
                    stage: 1
                }
            }
        } catch (error) {
            console.error("Error initializing game state:", error)
            // Initialize with today's game on error
            const todaysGameId = getTodaysGameId()
            return {
                openGameId: todaysGameId,
                gameData: [{
                    gameId: todaysGameId,
                    foundWord: "",
                    gaveUp: "",
                    guessHistory: [],
                    lastGuess: [],
                    numberOfAttempts: 0,
                    numberOfTips: 0,
                    postGame: []
                }],
                stage: 1
            }
        }
    })

    useEffect(() => {
        // Save game state based on authentication
        try {
            if (isAuthenticated && user) {
                // Save to user-specific storage
                const userData = JSON.parse(localStorage.getItem('users') || '[]')
                const userIndex = userData.findIndex(u => u.username === user.username)
                if (userIndex !== -1) {
                    userData[userIndex].gameHistory = game
                    localStorage.setItem('users', JSON.stringify(userData))
                    // Also update currentUser in localStorage
                    const currentUser = { ...user, gameHistory: game }
                    localStorage.setItem('currentUser', JSON.stringify(currentUser))
                }
            }
            // Always save to general storage for both guest and authenticated users
            localStorage.setItem('gameHistory', JSON.stringify(game))
        } catch (error) {
            console.error("Error saving game state:", error)
        }
    }, [game, isAuthenticated, user])

    return [game, setGame]
}