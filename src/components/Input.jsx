import React, { useState } from "react"
export default function Input({ game, setGame }) {
    const [inputValue, setInputValue] = useState("")

    const handleKeyDown = async (event) => {
        if (event.key === "Enter" && inputValue.trim() !== "") {
            try {

                if (game.gameData[0].guessHistory.findIndex((currWord) => currWord.lemma === inputValue.trim()) !== -1) {
                    setInputValue("")
                }
                else {
                    const response = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(`https://api.contexto.me/machado/en/game/${game.gameData[0].gameId}/${inputValue.trim()}`)}`);

                    if (response.ok) {
                        const data = await response.json()
                        const word = {
                            lemma: data.lemma,
                            distance: data.distance
                        }
                        if (game.gameData[0].guessHistory.findIndex((currWord) => currWord.lemma === word.lemma) !== -1) {
                            setInputValue("")
                        } 
                        else {
                            const updatedGame = { ...game }
                            updatedGame.gameData[0].guessHistory.push(word)
                            updatedGame.gameData[0].lastGuess = [word]
                            updatedGame.gameData[0].numberOfAttempts += 1
                            if (data.distance === 0) {
                                updatedGame.stage = 4
                                updatedGame.gameData[0].foundWord = data.lemma
                            }
                            else {
                                updatedGame.stage = 2
                            }
                            setGame(updatedGame)
                            setInputValue("")
                        }
                    } else {
                        console.error("Error fetching data:", response.statusText)
                    }
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
                    id="input"
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