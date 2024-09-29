import React, { useState } from "react"
import { getBarWidth, getBarColor } from "../store/utils"

export default function Input({ game, setGame, loading, setLoading, error, setError }) {
    const [inputValue, setInputValue] = useState("")
    let stage = game.stage

    const handleKeyDown = async (event) => {
        if (event.key === 'Enter' && /^[a-zA-Z\s]+$/.test(inputValue.trim()) && /\s/.test(inputValue.trim())) {
            setError({ error: "Please enter a single word without spaces" })
            setInputValue("")
            setLoading(false)
        }
        else if (event.key === 'Enter' && /[^a-zA-Z]/.test(inputValue.trim())) {
            setError({ error: "Please enter a valid word" })
            setInputValue("")
            setLoading(false)
        }
        else if (event.key === "Enter" && inputValue.trim() !== "") {
            const cleanInput = (value) => value.toLowerCase().trim()
            const finalWord = cleanInput(inputValue)
            try {
                setLoading(true)
                if (game.gameData[0].guessHistory.findIndex((currWord) => currWord.lemma === finalWord) !== -1) {
                    setError({ word: finalWord })
                    setInputValue("")
                    setLoading(false)
                }
                else {
                    const cacheBuster = `?_=${new Date().getTime()}`
                    const response = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(`https://api.contexto.me/machado/en/game/${game.gameData[0].gameId}/${finalWord}`)}${cacheBuster}`)
                    if (response.ok) {
                        const data = await response.json()
                        if (data.error) {
                            setError({ error: data.error })
                            setInputValue("")
                            setLoading(false)
                        }
                        else if (game.gameData[0].gaveUp || game.gameData[0].foundWord) {
                            setError(null)
                            const word = {
                                lemma: data.lemma,
                                distance: data.distance
                            }
                            setGame(prevGame => {
                                prevGame.gameData[0].postGame.push(word)
                                prevGame.gameData[0].lastGuess = [word]
                                return prevGame
                            })
                            setInputValue("")
                            setLoading(false)
                        }
                        else {
                            const word = {
                                lemma: data.lemma,
                                distance: data.distance
                            }
                            if (game.gameData[0].guessHistory.findIndex((currWord) => currWord.distance === word.distance) !== -1) {
                                setError({ word: currWord.lemma })
                                setInputValue("")
                                setLoading(false)
                            }
                            else {
                                setError(null)
                                const updatedGame = { ...game }
                                updatedGame.gameData[0].lastGuess = [word]
                                if (data.distance === 0) {
                                    updatedGame.stage = 4
                                    updatedGame.gameData[0].foundWord = data.lemma
                                    updatedGame.gameData[0].postGame.push(word)
                                }
                                else if (data.foundWord) {
                                    updatedGame.stage = 4
                                    updatedGame.gameData[0].postGame.push(word)
                                }
                                else if (data.gaveUp) {
                                    updatedGame.stage = 3
                                    updatedGame.gameData[0].postGame.push(word)
                                }
                                else {
                                    updatedGame.stage = 2
                                    updatedGame.gameData[0].guessHistory.push(word)
                                    updatedGame.gameData[0].numberOfAttempts += 1
                                }
                                setGame(updatedGame)
                                setInputValue("")
                                setLoading(false)
                            }
                        }
                    }
                    else {
                        setError({ error: "Error fetching the word, please try again" });
                        setInputValue("")
                        setLoading(false)
                    }
                }
            } catch (error) {
                setError({ error: "Error fetching the word, please try again" })
                setInputValue("")
                setLoading(false)
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
                    maxLength={20}
                />
            </section>
            {
                loading && (
                    <div className="w-full h-[45px] flex flex-col items-left justify-center mt-4 mb-5 pl-2" >
                        <div className="loading-text mr-auto p-1">
                            <span className='font-bold text-con-900 text-lg' style={{ '--i': 1 }}>C</span>
                            <span className='font-bold text-con-900 text-lg' style={{ '--i': 2 }}>a</span>
                            <span className='font-bold text-con-900 text-lg' style={{ '--i': 3 }}>l</span>
                            <span className='font-bold text-con-900 text-lg' style={{ '--i': 4 }}>c</span>
                            <span className='font-bold text-con-900 text-lg' style={{ '--i': 5 }}>u</span>
                            <span className='font-bold text-con-900 text-lg' style={{ '--i': 6 }}>l</span>
                            <span className='font-bold text-con-900 text-lg' style={{ '--i': 7 }}>a</span>
                            <span className='font-bold text-con-900 text-lg' style={{ '--i': 8 }}>t</span>
                            <span className='font-bold text-con-900 text-lg' style={{ '--i': 9 }}>i</span>
                            <span className='font-bold text-con-900 text-lg' style={{ '--i': 10 }}>n</span>
                            <span className='font-bold text-con-900 text-lg' style={{ '--i': 11 }}>g</span>
                            <span className='font-bold text-con-900 text-lg' style={{ '--i': 12 }}>.</span>
                            <span className='font-bold text-con-900 text-lg' style={{ '--i': 13 }}>.</span>
                            <span className='font-bold text-con-900 text-lg' style={{ '--i': 14 }}>.</span>
                        </div>
                    </div>
                )
            }
            {
                stage > 1 && !loading && error && error.word && (
                    <div className="w-full h-[45px] flex flex-col items-left justify-center mt-4 mb-5" >
                        <p className="text-con-900 font-bold text-lg pl-2" >The word <span className="font-black" >{error.word}</span> was already guessed.</p>
                    </div>
                )
            }
            {
                !loading && error && error.error && (
                    <div className="w-full h-[45px] flex flex-col items-left justify-center mt-4 mb-5" >
                        <p className="text-con-900 font-bold text-lg pl-2" >{error.error}</p>
                    </div>
                )
            }
            {
                stage > 1 && !error && !loading && game.gameData[0].lastGuess[0] && (
                    <div className={`relative w-full h-[45px] flex items-center justify-between mt-4 mb-5`} key={game.gameData[0].lastGuess[0].lemma}>
                        <div className={`absolute w-full h-full overflow-hidden  bg-con-600 rounded-[8px] border-[3px] border-con-900`}>
                            <div
                                className={`min-w-[1%] h-full rounded-[5px] ${getBarColor(game.gameData[0].lastGuess[0].distance)} `}
                                style={{
                                    width: getBarWidth(game.gameData[0].lastGuess[0].distance)
                                }}
                            />
                        </div>
                        <div className="relative w-full flex items-center justify-between">
                            <span className={`font-black px-3 text-lg leading-none`}>{game.gameData[0].lastGuess[0].lemma}</span>
                            <span className={`font-black px-3 text-lg leading-none`}>{game.gameData[0].lastGuess[0].distance + 1}</span>
                        </div>
                    </div>
                )
            }
        </>
    )
}