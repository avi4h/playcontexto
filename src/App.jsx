import React, { useState, useEffect, useCallback } from 'react'
import { randomTipDistance, nextTipDistance, halfTipDistance, getGiveUp, getHint } from './store/utils'
import { Analytics } from "@vercel/analytics/react"

import Header from "./components/Header"
import Score from "./components/Score"
import Input from "./components/Input"
import How from "./components/How"
import Faq from "./components/Faq"
import Foot from "./components/Foot"
import GaveUp from './components/GaveUp'
import Won from './components/Won'
import Rank from "./components/Rank"
import End from "./components/End"

import GiveUp from "./modals/GiveUp"
import Prev from "./modals/Prev"
import Settings from "./modals/Settings"
import Feedback from "./modals/Feedback"
import Credits from "./modals/Credits"
import FaqDetailed from "./modals/FaqDetailed"
import HowToPlay from "./modals/HowToPlay"
import Words from "./modals/Words"
import AuthModal from './modals/Auth'
import LogoutConfirmModal from './modals/Logout'

import useLocalStorageState from './store/useLocalStorageState'
import useLocalStorage from './store/useLocalStorage'
import useModalState from './store/useModalState'
import useGameState from './store/useGameState'
import { AuthProvider, useAuth } from './store/AuthContext'

// Create a separate component for the content that needs auth context
function AppContent(props) {
    const {
        isDropdownOpen,
        setIsDropdownOpen,
        openHowToPlay,
        handleHintClick,
        openGiveUp,
        openPrev,
        openSettings,
        openCredits,
        openFeedback,
        openFaqDetailed,
        isAuthOpen,
        openAuth,
        closeAuth,
        isLogoutConfirmOpen,
        openLogoutConfirm,
        closeLogoutConfirm,
        stage,
        isHowToPlayOpen,
        closeHowToPlay,
        isGiveUpOpen,
        closeGiveUp,
        isPrevOpen,
        closePrev,
        isSettingsOpen,
        closeSettings,
        isFeedbackOpen,
        closeFeedback,
        isCreditsOpen,
        closeCredits,
        isFaqDetailedOpen,
        closeFaqDetailed,
        isWordsOpen,
        closeWords,
        handleGiveUpYesClick,
        onSelectGame,
        difficulty,
        setDifficulty,
        order,
        setOrder,
        loading,
        setLoading,
        error,
        setError,
        game,
        setGame
    } = props;

    const { isAuthenticated, user } = useAuth();

    // Create the dropdown list with conditional auth items
    const list = [
        { icon: "./q-rounded.svg", text: "How to play", click: openHowToPlay },
        { icon: "./hint.svg", text: "Hint", click: handleHintClick },
        { icon: "./flag.svg", text: "Give up", click: openGiveUp },
        { icon: "./calendar.svg", text: "PreviousGames", click: openPrev },
        { icon: "./settings.svg", text: "Settings", click: openSettings },
        { icon: "./info.svg", text: "Credits", click: openCredits },
        { icon: "./message.svg", text: "Feedback", click: openFeedback },
        { icon: "./q-square.svg", text: "FAQ", click: openFaqDetailed },
    ];

    // Add either Sign In or Log Out based on auth status
    if (isAuthenticated) {
        list.push({ icon: "./logout.svg", text: "Log Out", click: openLogoutConfirm });
    } else {
        list.unshift({ icon: "./user.svg", text: "Sign In", click: openAuth });
    }

    return (
        <main className="flex flex-col justify-center items-center w-full max-w-[480px] px-[15px]">
            <Header
                isDropdownOpen={isDropdownOpen}
                setIsDropdownOpen={setIsDropdownOpen}
                list={list}
                stage={stage}
            />

            <Score 
                game={game.openGameId} 
                guesses={game.gameData[0]?.numberOfAttempts || 0} 
                hints={game.gameData[0]?.numberOfTips || 0} 
            />

            {game.stage === 1 && (
                <Input 
                    game={game} 
                    setGame={setGame} 
                    loading={loading} 
                    setLoading={setLoading} 
                    error={error} 
                    setError={setError} 
                />
            )}

            {game.stage === 2 && (
                <>
                    <Input 
                        game={game} 
                        setGame={setGame} 
                        loading={loading} 
                        setLoading={setLoading} 
                        error={error} 
                        setError={setError} 
                    />
                    <Rank gameData={game.gameData[0]} order={order} />
                </>
            )}

            {game.stage === 3 && (
                <>
                    <GaveUp game={game.gameData[0]} />
                    <Rank gameData={game.gameData[0]} order={order} />
                </>
            )}

            {game.stage === 4 && (
                <>
                    <Won game={game.gameData[0]} />
                    <Rank gameData={game.gameData[0]} order={order} />
                </>
            )}

            <Foot />

            {/* Modals */}
            <AuthModal isOpen={isAuthOpen} onClose={closeAuth} />
            <LogoutConfirmModal isOpen={isLogoutConfirmOpen} onClose={closeLogoutConfirm} />
            <HowToPlay isOpen={isHowToPlayOpen} onClose={closeHowToPlay} />
            <GiveUp isOpen={isGiveUpOpen} onClose={closeGiveUp} yesGiveUp={handleGiveUpYesClick} />
            <Prev isOpen={isPrevOpen} onClose={closePrev} gameData={game.gameData} onSelectGame={onSelectGame} />
            <Settings isOpen={isSettingsOpen} onClose={closeSettings} difficulty={difficulty} setDifficulty={setDifficulty} order={order} setOrder={setOrder} />
            <Feedback isOpen={isFeedbackOpen} onClose={closeFeedback} />
            <Credits isOpen={isCreditsOpen} onClose={closeCredits} />
            <FaqDetailed isOpen={isFaqDetailedOpen} onClose={closeFaqDetailed} />
            <Words isOpen={isWordsOpen} onClose={closeWords} gameId={game.openGameId} />

            <Analytics />
        </main>
    );
}

export default function App() {
    const [showInitialContent, setShowInitialContent] = useLocalStorageState('showInitialContent', true)
    const [difficulty, setDifficulty] = useLocalStorage('difficulty', 'easy');
    const [order, setOrder] = useLocalStorage('order', 'similarity')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const [game, setGame] = useGameState()

    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const [isHowToPlayOpen, openHowToPlay, closeHowToPlay] = useModalState()
    const [isGiveUpOpen, openGiveUp, closeGiveUp] = useModalState()
    const [isPrevOpen, openPrev, closePrev] = useModalState()
    const [isSettingsOpen, openSettings, closeSettings] = useModalState()
    const [isFeedbackOpen, openFeedback, closeFeedback] = useModalState()
    const [isCreditsOpen, openCredits, closeCredits] = useModalState()
    const [isFaqDetailedOpen, openFaqDetailed, closeFaqDetailed] = useModalState()
    const [isWordsOpen, openWords, closeWords] = useModalState()
    const [isAuthOpen, openAuth, closeAuth] = useModalState()
    const [isLogoutConfirmOpen, openLogoutConfirm, closeLogoutConfirm] = useModalState()

    useEffect(() => {
        if (loading) {
            setShowInitialContent(false)
        }
    }, [loading, setShowInitialContent])

    const onSelectGame = useCallback((newGameId) => {
        setError(null)
        setGame((prevGame) => {
            let newGame = { ...prevGame }
            newGame.openGameId = newGameId

            const indi = newGame.gameData.findIndex((game) => game.gameId === newGameId)

            if (indi === -1) {
                newGame.gameData = [
                    {
                        gameId: newGameId,
                        foundWord: "",
                        gaveUp: "",
                        guessHistory: [],
                        lastGuess: [],
                        numberOfAttempts: 0,
                        numberOfTips: 0,
                        postGame: []
                    },
                    ...newGame.gameData
                ]
                newGame.stage = 1
            } else {
                let temp = newGame.gameData[indi]
                newGame.gameData[indi] = newGame.gameData[0]
                newGame.gameData[0] = temp
                if (newGame.gameData[0].guessHistory.length === 0) {
                    newGame.stage = 1
                } else if (newGame.gameData[0].foundWord) {
                    newGame.stage = 4
                } else if (newGame.gameData[0].gaveUp) {
                    newGame.stage = 3
                } else {
                    newGame.stage = 2
                }
            }
            return newGame
        })
    }, [setGame])

    const handleGiveUpYesClick = useCallback(async () => {
        closeGiveUp()
        setLoading(true)
        setError(null)
        try {
            const data = await getGiveUp(game.openGameId)
            if (data) {
                setGame((prevGame) => {
                    const updatedGame = { ...prevGame }
                    updatedGame.gameData[0].gaveUp = data.lemma
                    updatedGame.gameData[0].postGame.push(data)
                    updatedGame.gameData[0].lastGuess = [data]
                    updatedGame.stage = 3
                    return updatedGame
                })
            } else {
                setError({ error: "Failed to get give up data" })
            }
        } catch (error) {
            console.error("Error in handleGiveUpYesClick:", error)
            setError({ error: "Failed to get give up data" })
        } finally {
            setLoading(false)
        }
    }, [game.openGameId, setGame])

    const handleHintClick = useCallback(async () => {
        setIsDropdownOpen(false)
        setLoading(true)
        const distance = difficulty === "easy" ? halfTipDistance(game.gameData[0].guessHistory) :
            difficulty === "medium" ? nextTipDistance(game.gameData[0].guessHistory) :
                randomTipDistance(game.gameData[0].guessHistory)
        const data = await getHint(game.openGameId, distance, setError, setLoading)
        if (data) {
            setError(null)
            setGame((prevGame) => {
                const updatedGame = { ...prevGame }
                updatedGame.gameData[0].guessHistory.push(data)
                updatedGame.gameData[0].lastGuess = [data]
                updatedGame.gameData[0].numberOfTips += 1
                updatedGame.stage = 2
                return updatedGame
            })
            setLoading(false)
        }
    }, [difficulty, game])

    return (
        <AuthProvider>
            <AppContent
                isDropdownOpen={isDropdownOpen}
                setIsDropdownOpen={setIsDropdownOpen}
                openHowToPlay={openHowToPlay}
                handleHintClick={handleHintClick}
                openGiveUp={openGiveUp}
                openPrev={openPrev}
                openSettings={openSettings}
                openCredits={openCredits}
                openFeedback={openFeedback}
                openFaqDetailed={openFaqDetailed}
                isAuthOpen={isAuthOpen}
                openAuth={openAuth}
                closeAuth={closeAuth}
                isLogoutConfirmOpen={isLogoutConfirmOpen}
                openLogoutConfirm={openLogoutConfirm}
                closeLogoutConfirm={closeLogoutConfirm}
                stage={game.stage}
                isHowToPlayOpen={isHowToPlayOpen}
                closeHowToPlay={closeHowToPlay}
                isGiveUpOpen={isGiveUpOpen}
                closeGiveUp={closeGiveUp}
                isPrevOpen={isPrevOpen}
                closePrev={closePrev}
                isSettingsOpen={isSettingsOpen}
                closeSettings={closeSettings}
                isFeedbackOpen={isFeedbackOpen}
                closeFeedback={closeFeedback}
                isCreditsOpen={isCreditsOpen}
                closeCredits={closeCredits}
                isFaqDetailedOpen={isFaqDetailedOpen}
                closeFaqDetailed={closeFaqDetailed}
                isWordsOpen={isWordsOpen}
                closeWords={closeWords}
                handleGiveUpYesClick={handleGiveUpYesClick}
                onSelectGame={onSelectGame}
                difficulty={difficulty}
                setDifficulty={setDifficulty}
                order={order}
                setOrder={setOrder}
                loading={loading}
                setLoading={setLoading}
                error={error}
                setError={setError}
                game={game}
                setGame={setGame}
            />
        </AuthProvider>
    )
}
