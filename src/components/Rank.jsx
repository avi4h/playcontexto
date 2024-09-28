import React from "react"
import { getBarWidth, getBarColor } from "../store/utils"

export default function Rank({ gameData }) {

    let words = []
    let curr = null
    if (gameData && gameData.guessHistory) {
        curr = gameData.lastGuess[0].distance
        words = gameData.guessHistory.sort((a, b) => a.distance - b.distance);
    }

    return (
        <div className="flex flex-col gap-[5px] justify-start items-start w-full">
            {words.length > 0 &&
                words.map((word) => {
                    let highlight = curr === word.distance  
                    return (
                        <div className={`relative w-full h-[40px] flex items-center justify-between ${highlight ? 'border-[3px] border-con-900 rounded-[8px]' : 'rounded-[5px]'}`} key={word.lemma}>
                            <div className="absolute w-full h-full bg-con-600 rounded-[5px]">
                                <div
                                    className={`min-w-[1%] h-full rounded-[5px] ${getBarColor(word.distance)} `}
                                    style={{
                                        width: getBarWidth(word.distance)
                                    }}
                                />
                            </div>
                            <div className="relative w-full flex items-center justify-between">
                                <span className='font-bold p-3 text-lg leading-none'>{word.lemma}</span>
                                <span className='font-bold p-3 text-lg leading-none'>{word.distance + 1}</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}