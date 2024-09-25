import React, { useState } from "react"
import { play } from "../store/api"

export default function Input({ game, setGame }) {
    const [inputValue, setInputValue] = useState("")

    const handleKeyDown = async (event) => {
        if (event.key === "Enter" && inputValue.trim() !== "") {
            try {
                const response = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(`https://api.contexto.me/machado/en/game/${game.gameData[0].gameId}/${inputValue.trim()}`)}`);

                if (response.ok) {
                    const data = await response.json()
                    const updatedGame = { ...game }
                    updatedGame.gameData[0].guessHistory.push({
                        lemma: data.lemma,
                        distance: data.distance
                    })
                    updatedGame.gameData[0].lastGuess = {
                        lemma: data.lemma,
                        distance: data.distance
                    }
                    updatedGame.gameData[0].numberOfAttempts += 1
                    setGame(updatedGame)
                    setInputValue("") 
                } else {
                    console.error("Error fetching data:", response.statusText)
                }
            } catch (error) {
                console.error("Error fetching data:", error)
            }
        }
    }

    return (
        <>
            <section className="flex justify-start items-center w-full my-[10px]">
                <input
                    type="text"
                    className="bg-con-200 border-solid border-[1px] border-slate-900 w-full px-[15px] py-[10px] rounded-[5px] text-[22.5px] font-bold placeholder:text-slate-500 placeholder:text-[22.5px] placeholder:font-bold"
                    placeholder="type a word"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </section>
        </>
    )
}