import React, { useState, useEffect, useMemo } from 'react'
import Header from "./components/Header"
import Score from "./components/Score"
import Input from "./components/Input"
import How from "./components/How"
import Faq from "./components/Faq"
import Foot from "./components/Foot"
import prevGames from "./store/prevGames.js"

export default function App() {
  const [isFaqDetailedOpen, setIsFaqDetailedOpen] = React.useState(false)

  const getTodaysGameNumber = () => {  
    const today = new Date()
    const options = { weekday: 'short', month: 'short', day: 'numeric' }
    const formattedToday = today.toLocaleDateString('en-US', options)
    const todaysGame = prevGames.find((gameObj) => gameObj.day === formattedToday)
    return todaysGame.game
  }

  const [game, setGame] = useState([])

  const todaysGameNumber = getTodaysGameNumber()

  useEffect(() => {
    const storedGame = localStorage.getItem('game')

    if (storedGame) {
      setGame(JSON.parse(storedGame))
    } 
    else {
      setGame([
        {
          gameNumber: todaysGameNumber,
          stage: 1,
          guesses: [],
          hints: []
        },
      ])
    }
  }, [todaysGameNumber])

  useEffect(() => {
    if(game.length>0) {
      localStorage.setItem('game', JSON.stringify(game))
    }
  }, [game])

  return (
    <main className="flex flex-col justify-center items-center max-w-[480px] sm:w-[480px] md:w-[480px] lg:w-[480px] px-[15px]">
      <Header isFaqDetailedOpen={isFaqDetailedOpen} setIsFaqDetailedOpen={setIsFaqDetailedOpen} prevGames={prevGames} gameNum={todaysGameNumber} />
      {game.length > 0 && (
        <>
          <Score game={game[0].gameNumber} guesses={game[0].guesses.length} hints={game[0].hints.length} />
          <Input game={game} setGame={setGame} />
          {game[0].stage > 0 && <How />}
          {game[0].stage > 0 && <Faq />}
          {game[0].stage > 0 && <Foot setIsFaqDetailedOpen={setIsFaqDetailedOpen} />}
        </>
      )}
    </main>
  )
}
