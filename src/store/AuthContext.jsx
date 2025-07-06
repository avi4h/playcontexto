import { createContext, useState, useContext, useEffect } from 'react'

// Custom hook for localStorage
function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            console.error(error)
            return initialValue
        }
    })

    const setValue = (value) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value
            setStoredValue(valueToStore)
            window.localStorage.setItem(key, JSON.stringify(valueToStore))
        } catch (error) {
            console.error(error)
        }
    }

    return [storedValue, setValue]
}

const AuthContext = createContext({
    user: null,
    isAuthenticated: false,
    login: () => { },
    logout: () => { },
    register: () => { },
    updateProfile: () => { },
    incrementGamesPlayed: () => { }
})

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        // Check if user exists in localStorage
        const savedUser = localStorage.getItem('currentUser')
        return savedUser ? JSON.parse(savedUser) : null
    })
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        setIsAuthenticated(!!user)
        if (user) {
            // When user logs in, migrate game data to user-specific storage
            const generalGameHistory = localStorage.getItem('gameHistory')
            if (generalGameHistory) {
                try {
                    // Store general history in user's data
                    const userData = JSON.parse(localStorage.getItem('users') || '[]')
                    const currentUser = userData.find(u => u.username === user.username)
                    if (currentUser) {
                        // Merge existing user game history with general history
                        const userHistory = currentUser.gameHistory || { gameData: [] }
                        const generalHistory = JSON.parse(generalGameHistory)

                        // Merge game data, avoiding duplicates
                        const mergedGameData = [...userHistory.gameData]
                        generalHistory.gameData.forEach(game => {
                            if (!mergedGameData.some(g => g.gameId === game.gameId)) {
                                mergedGameData.push(game)
                            }
                        })

                        currentUser.gameHistory = {
                            ...userHistory,
                            gameData: mergedGameData,
                            openGameId: generalHistory.openGameId || userHistory.openGameId,
                            stage: generalHistory.stage || userHistory.stage
                        }

                        localStorage.setItem('users', JSON.stringify(userData))
                        // Update currentUser with merged game history
                        const updatedUser = { ...user, gameHistory: currentUser.gameHistory }
                        setUser(updatedUser)
                        localStorage.setItem('currentUser', JSON.stringify(updatedUser))
                        // Clear general game history after migration
                        localStorage.removeItem('gameHistory')
                    }
                } catch (error) {
                    console.error("Error migrating game data:", error)
                }
            }
        }
    }, [user])

    const login = (username, password) => {
        try {
            const users = JSON.parse(localStorage.getItem('users') || '[]')
            const foundUser = users.find(u => u.username === username && u.password === password)

            if (foundUser) {
                const userProfile = {
                    username: foundUser.username,
                    joinDate: foundUser.joinDate || new Date().toISOString(),
                    gamesPlayed: foundUser.gamesPlayed || 0,
                    gameHistory: foundUser.gameHistory || { openGameId: null, gameData: [], stage: 1 }
                }

                setUser(userProfile)
                localStorage.setItem('currentUser', JSON.stringify(userProfile))
                return true
            }
            return false
        } catch (error) {
            console.error("Error during login:", error)
            return false
        }
    }

    const logout = () => {
        try {
            // Save current game state before logout
            const currentGameState = localStorage.getItem('gameHistory')
            if (currentGameState) {
                localStorage.setItem('gameHistory', currentGameState)
            }

            setUser(null)
            localStorage.removeItem('currentUser')
        } catch (error) {
            console.error("Error during logout:", error)
        }
    }

    const register = (username, password) => {
        try {
            const users = JSON.parse(localStorage.getItem('users') || '[]')

            // Check if username already exists
            if (users.some(user => user.username === username)) {
                return false
            }

            // Get current game state if exists
            const currentGameState = localStorage.getItem('gameHistory')
            const parsedGameState = currentGameState ? JSON.parse(currentGameState) : null

            // Create new user with profile info
            const newUser = {
                username,
                password,
                joinDate: new Date().toISOString(),
                gamesPlayed: 0,
                gameHistory: parsedGameState || { openGameId: null, gameData: [], stage: 1 }
            }

            users.push(newUser)
            localStorage.setItem('users', JSON.stringify(users))

            // Auto login with profile info
            const userProfile = {
                username: newUser.username,
                joinDate: newUser.joinDate,
                gamesPlayed: newUser.gamesPlayed,
                gameHistory: newUser.gameHistory
            }

            setUser(userProfile)
            localStorage.setItem('currentUser', JSON.stringify(userProfile))
            return true
        } catch (error) {
            console.error("Error during registration:", error)
            return false
        }
    }

    const updateProfile = (updates) => {
        if (!user) return false

        try {
            // Update current user
            const updatedUser = { ...user, ...updates }
            setUser(updatedUser)
            localStorage.setItem('currentUser', JSON.stringify(updatedUser))

            // Also update in the users array
            const users = JSON.parse(localStorage.getItem('users') || '[]')
            const updatedUsers = users.map(u =>
                u.username === user.username ? { ...u, ...updates } : u
            )

            localStorage.setItem('users', JSON.stringify(updatedUsers))
            return true
        } catch (error) {
            console.error("Error updating profile:", error)
            return false
        }
    }

    const incrementGamesPlayed = () => {
        if (user) {
            updateProfile({ gamesPlayed: (user.gamesPlayed || 0) + 1 })
        }
    }

    return (
        <AuthContext.Provider value={{
            user,
            isAuthenticated,
            login,
            logout,
            register,
            updateProfile,
            incrementGamesPlayed
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}
