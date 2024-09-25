import React, { useState, useEffect, useMemo } from 'react'

import Header from "./components/Header"
import Score from "./components/Score"
import Input from "./components/Input"
import How from "./components/How"
import Faq from "./components/Faq"
import Foot from "./components/Foot"

import GiveUp from "./modals/GiveUp"
import Prev from "./modals/Prev"
import Settings from "./modals/Settings"
import Feedback from "./modals/Feedback"
import Credits from "./modals/Credits"
import FaqDetailed from "./modals/FaqDetailed"
import HowToPlay from "./modals/HowToPlay"
import Words from "./modals/Words"

import {getTodaysGameId} from './store/utils'

export default function App() {
    
    const [difficulty, setDifficulty] = useState("easy")
    const [order, setOrder] = useState("similarity")

    const [game, setGame] = useState({
        gameData: [],
        lastGameId: null,
        openGameId: null,
        tipSetting: difficulty
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
                return handleHowToPlayClick()
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
        const storedGame = localStorage.getItem('game')

        if (storedGame) {
            setGame(JSON.parse(storedGame))
        }
        else {
            setGame({
                gameData: [
                    {
                        gameId: todaysGameId,
                        foundWord: "",
                        gaveUp: "",
                        stage: 0,
                        guessHistory: [],
                        lastGuess: [],
                        numberOfAttempts: 0,
                        numberOfTips: 0
                    }
                ],
                lastGameId: todaysGameId,
                openGameId: todaysGameId,
                tipSetting: difficulty
            })
        }
    }, [todaysGameId])

    useEffect(() => {
        if (game.gameData.length > 0) {
            localStorage.setItem('game', JSON.stringify(game))
        }
    }, [game])


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

    return (
        <main className="flex flex-col justify-center items-center max-w-[480px] sm:w-[480px] md:w-[480px] lg:w-[480px] px-[15px]">
            <Header list={list} isDropdownOpen={isDropdownOpen} setIsDropdownOpen={setIsDropdownOpen}/>
            {game.gameData.length > 0 && (
                <>
                    <Score game={game.gameData[0].gameId} guesses={game.gameData[0].numberOfAttempts} hints={game.gameData[0].numberOfTips} />
                    <Input game={game} setGame={setGame} />
                    {game.gameData[0].stage===0 && <How />}
                    {game.gameData[0].stage===0 && <Faq />}
                    {game.gameData[0].stage===0 && <Foot setIsFaqDetailedOpen={setIsFaqDetailedOpen} />}
                </>
            )}

            <HowToPlay isOpen={isHowToPlayOpen} onClose={closeHowToPlayModal} />
            <GiveUp isOpen={isGiveUpOpen} onClose={closeGiveUpModal} />
            <Prev isOpen={isPrevOpen} onClose={closePrevModal} gameData={game.gameData} /*onSelectGame={onSelectGame}*//>
            <Settings isOpen={isSettingsOpen} onClose={closeSettingsModal} difficulty={difficulty} setDifficulty={setDifficulty} order={order} setOrder={setOrder} />
            <Feedback isOpen={isFeedbackOpen} onClose={closeFeedbackModal} />
            <Credits isOpen={isCreditsOpen} onClose={closeCreditsModal} />
            <FaqDetailed isOpen={isFaqDetailedOpen} onClose={closeFaqDetailedModal} />
            <Words isOpen={isWordsOpen} onClose={closeWordsModal}/>   
        </main>
    )
}
