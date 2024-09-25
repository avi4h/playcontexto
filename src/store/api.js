
const play = (word, gameId) => fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(`https://api.contexto.me/machado/en/game/${gameId}/${word}`)}`)

const tip = (distance, gameId) => fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(`https://api.contexto.me/machado/en/tip/${gameId}/${distance}`)}`)

const giveUp = (gameId) => fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(`https://api.contexto.me/machado/en/giveup/${gameId}`)}`)

const getClosestWords = (gameId) => fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(`https://api.contexto.me/machado/en/top/${gameId}`)}`)

export {
    play,
    tip,
    giveUp,
    getClosestWords,
}
