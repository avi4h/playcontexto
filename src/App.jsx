import React, { useState, useEffect } from 'react'

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

import { getTodaysGameId, randomTipDistance, nextTipDistance, halfTipDistance } from './store/utils'

const useLocalStorageState = (key, defaultValue) => {
    const [state, setState] = useState(() => {
        const saved = localStorage.getItem(key)
        return saved !== null ? JSON.parse(saved) : defaultValue
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [key, state])

    return [state, setState]
}

// Custom hook for managing modal state
const useModalState = () => {
    const [isOpen, setIsOpen] = useState(false)
    const open = useCallback(() => setIsOpen(true), [])
    const close = useCallback(() => setIsOpen(false), [])
    return [isOpen, open, close]
}

export default function App() {

    const [showInitialContent, setShowInitialContent] = useState(() => {
        const saved = localStorage.getItem('showInitialContent')
        return saved === null ? true : JSON.parse(saved)
    })
    const [difficulty, setDifficulty] = useState("easy")
    const [order, setOrder] = useState("similarity")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const [game, setGame] = useState({
        gameData: [],
        stage: 0,
        openGameId: null
    })

    const list = [
        {
            icon: "./q-rounded.svg",
            text: "How to play",
            click: function () {
                return handleHowToPlayClick()
            }
        },
        {
            icon: "./hint.svg",
            text: "Hint",
            click: function () {
                return handleHintClick()
            }
        },
        {
            icon: "./flag.svg",
            text: "Give up",
            click: function () {
                return handleGiveUpClick()
            }
        },
        {
            icon: "./calendar.svg",
            text: "Previous games",
            click: function () {
                return handlePrevClick()
            }
        },
        {
            icon: "./settings.svg",
            text: "Settings",
            click: function () {
                return handleSettingsClick()
            }
        },
        {
            icon: "./info.svg",
            text: "Credits",
            click: function () {
                return handleCreditsClick()
            }
        },
        {
            icon: "./message.svg",
            text: "Feedback",
            click: function () {
                return handleFeedbackClick()
            }
        },
        {
            icon: "./q-square.svg",
            text: "FAQ",
            click: function () {
                return handleFaqDetailedClick()
            }
        }
    ]

    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false)

    const [isHowToPlayOpen, setIsHowToPlayOpen] = React.useState(false)
    const [isGiveUpOpen, setIsGiveUpOpen] = React.useState(false)
    const [isPrevOpen, setIsPrevOpen] = React.useState(false)
    const [isSettingsOpen, setIsSettingsOpen] = React.useState(false)
    const [isFeedbackOpen, setIsFeedbackOpen] = React.useState(false)
    const [isCreditsOpen, setIsCreditsOpen] = React.useState(false)
    const [isFaqDetailedOpen, setIsFaqDetailedOpen] = useState(false)
    const [isWordsOpen, setIsWordsOpen] = React.useState(false)

    const todaysGameId = getTodaysGameId()

    useEffect(() => {
        if (loading) {
            setShowInitialContent(false)
            localStorage.setItem('showInitialContent', JSON.stringify(false))
        }
    }, [loading])
    useEffect(() => {
        const storedGame = localStorage.getItem('game')

        const gotGame = JSON.parse(storedGame)

        if (storedGame && gotGame.gameData.findIndex((currGame) => currGame.gameId === todaysGameId && (currGame.foundWord || currGame.gaveUp)) !== -1) {
            setGame(gotGame)
        }
        else if (storedGame && gotGame.gameData.findIndex((currGame) => currGame.gameId === todaysGameId) === -1) {
            gotGame.gameData.unshift({
                gameId: todaysGameId,
                foundWord: "",
                gaveUp: "",
                guessHistory: [],
                lastGuess: [],
                numberOfAttempts: 0,
                numberOfTips: 0,
                postGame: []
            })
            gotGame.openGameId = todaysGameId
            gotGame.stage = 1

            setGame(gotGame)
        }
        else {
            setGame({
                gameData: [
                    {
                        gameId: todaysGameId,
                        foundWord: "",
                        gaveUp: "",
                        guessHistory: [],
                        lastGuess: [],
                        numberOfAttempts: 0,
                        numberOfTips: 0,
                        postGame: []
                    }
                ],
                stage: 0,
                openGameId: todaysGameId
            })
        }
    }, [todaysGameId])
    useEffect(() => {
        if (game.gameData.length > 0) {
            localStorage.setItem('game', JSON.stringify(game))
        }
    }, [game])

    const onSelectGame = (newGameId) => {
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
    }

    const getGiveUp = async (newGameId) => {
        const response = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(`https://api.contexto.me/machado/en/giveup/${newGameId}`)}`)
        if (response.ok) {
            const data = await response.json()
            return { lemma: data.lemma, distance: data.distance }
        }
    }
    const handleGiveUpYesClick = () => {
        setIsGiveUpOpen(false)
        setLoading(true)
        getGiveUp(game.openGameId)
            .then((data) => {
                setError(null)
                const updatedGame = { ...game }
                updatedGame.gameData[0].gaveUp = data.lemma
                updatedGame.gameData[0].postGame.push(data)
                updatedGame.gameData[0].lastGuess = [data]
                updatedGame.stage = 3
                setGame(updatedGame)
                setLoading(false)
            })
            .catch((error) => {
                setError({ error: "Error, please try again" })
                setLoading(false)
            })
    }

    const getHint = async (gameId, distance) => {
        const response = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(`https://api.contexto.me/machado/en/tip/${gameId}/${distance}`)}`)
        if (response.ok) {
            const data = await response.json()
            return { lemma: data.lemma, distance: data.distance }
        }
    }
    function handleHintClick() {
        setIsDropdownOpen(false)
        setLoading(true)
        const distance = difficulty === "easy" ? halfTipDistance(game.gameData[0].guessHistory) :
            difficulty === "medium" ? nextTipDistance(game.gameData[0].guessHistory) :
                randomTipDistance(game.gameData[0].guessHistory)
        getHint(game.openGameId, distance)
            .then((data) => {
                setError(null)
                const updatedGame = { ...game }
                updatedGame.gameData[0].guessHistory.push(data)
                updatedGame.gameData[0].lastGuess = [data]
                updatedGame.gameData[0].numberOfTips += 1
                updatedGame.stage = 2
                setGame(updatedGame)
                setLoading(false)
            })
            .catch((error) => {
                setError({ error: "Error fetching the hint, please try again" })
                setLoading(false)
            })
    }

    function handleHowToPlayClick() {
        setIsHowToPlayOpen(true)
        setIsDropdownOpen(false)
    }
    function handleGiveUpClick() {
        setIsGiveUpOpen(true)
        setIsDropdownOpen(false)
    }
    function handlePrevClick() {
        setIsPrevOpen(true)
        setIsDropdownOpen(false)
    }
    function handleSettingsClick() {
        setIsSettingsOpen(true)
        setIsDropdownOpen(false)
    }
    function handleFeedbackClick() {
        setIsFeedbackOpen(true)
        setIsDropdownOpen(false)
    }
    function handleCreditsClick() {
        setIsCreditsOpen(true)
        setIsDropdownOpen(false)
    }
    function handleFaqDetailedClick() {
        setIsFaqDetailedOpen(true)
        setIsDropdownOpen(false)
    }

    function closeHowToPlayModal() { setIsHowToPlayOpen(false) }
    function closeGiveUpModal() { setIsGiveUpOpen(false) }
    function closePrevModal() { setIsPrevOpen(false) }
    function closeSettingsModal() { setIsSettingsOpen(false) }
    function closeFeedbackModal() { setIsFeedbackOpen(false) }
    function closeCreditsModal() { setIsCreditsOpen(false) }
    function closeFaqDetailedModal() { setIsFaqDetailedOpen(false) }
    function closeWordsModal() { setIsWordsOpen(false) }

    return (<main className="flex flex-col justify-center items-center w-full max-w-[480px] px-[15px]">
        
            <Header list={list} isDropdownOpen={isDropdownOpen} setIsDropdownOpen={setIsDropdownOpen} stage={game.stage} />
            {
                game.gameData.length > 0 && (
                    <>
                        { game.stage === 3 && <GaveUp game={game} setIsPrevOpen={setIsPrevOpen} setIsWordsOpen={setIsWordsOpen} /> }
                        { game.stage === 4 && <Won game={game} setIsPrevOpen={setIsPrevOpen} setIsWordsOpen={setIsWordsOpen} /> }
                        <Score game={game.gameData[0].gameId} guesses={game.gameData[0].numberOfAttempts} hints={game.gameData[0].numberOfTips} />
                        <Input game={game} setGame={setGame} loading={loading} error={error} setLoading={setLoading} setError={setError} />
                        { game.stage > 1 && <Rank gameData={game.gameData[0]} order={order}/> }
                        { showInitialContent && game.stage === 0 && <How /> }
                        { showInitialContent && game.stage === 0 && <Faq /> }
                        { showInitialContent && game.stage === 0 && <Foot setIsFaqDetailedOpen={setIsFaqDetailedOpen} stage={game.stage} /> }
                        <End />
                    </>
                )
            }

            <HowToPlay isOpen={isHowToPlayOpen} onClose={closeHowToPlayModal} />
            <GiveUp isOpen={isGiveUpOpen} onClose={closeGiveUpModal} yesGiveUp={handleGiveUpYesClick} />
            <Prev isOpen={isPrevOpen} onClose={closePrevModal} gameData={game.gameData} onSelectGame={onSelectGame} />
            <Settings isOpen={isSettingsOpen} onClose={closeSettingsModal} difficulty={difficulty} setDifficulty={setDifficulty} order={order} setOrder={setOrder} />
            <Feedback isOpen={isFeedbackOpen} onClose={closeFeedbackModal} />
            <Credits isOpen={isCreditsOpen} onClose={closeCreditsModal} />
            <FaqDetailed isOpen={isFaqDetailedOpen} onClose={closeFaqDetailedModal} />
            <Words isOpen={isWordsOpen} onClose={closeWordsModal} gameId={game.openGameId} />
        
        </main>
    )
}
