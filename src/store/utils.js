import dayjs from 'dayjs'

const cleanInput = (value) => value.toLowerCase().trim()

const GREEN_THRESHOLD = 300
const YELLOW_THRESHOLD = 1500
const EN_START_DATE = '2024-02-11'

const randomTipDistance = (guessHistory) => {
    const maxDistance = GREEN_THRESHOLD - 1
    let tipDistance = Math.floor(Math.random() * maxDistance - 1) + 1

    if (guessHistory.length > 0) {
        const distances = guessHistory.map((guess) => guess[1])
        while (distances.includes(tipDistance)) {
            tipDistance = Math.floor(Math.random() * maxDistance - 1) + 1
        }
    }
    return tipDistance
}

const nextTipDistance = (guessHistory) => {
    let tipDistance = GREEN_THRESHOLD - 1
    let lowestDistance = tipDistance

    if (guessHistory.length > 0) {
        const distances = guessHistory.map((guess) => guess[1])
        lowestDistance = Math.min(...distances, lowestDistance)
        if (lowestDistance > 1) {
            tipDistance = lowestDistance - 1
        } else {
            tipDistance = 2
            while (distances.includes(tipDistance)) {
                tipDistance += 1
            }
        }
    }

    return tipDistance
}

const halfTipDistance = (guessHistory) => {
    let tipDistance = GREEN_THRESHOLD - 1
    let lowestDistance = 2 * tipDistance

    if (guessHistory.length > 0) {
        const distances = guessHistory.map((guess) => guess[1])
        lowestDistance = Math.min(...distances, lowestDistance)
        if (lowestDistance > 1) {
            tipDistance = Math.floor(lowestDistance / 2)
        } else {
            tipDistance = 2
            while (distances.includes(tipDistance)) {
                tipDistance += 1
            }
        }
    }

    return tipDistance
}

const getInitialTime = () => {
    return dayjs(EN_START_DATE, 'YYYY-MM-DD').startOf('day')
}

const getCurrentTime = () => {
    return dayjs()
}

const getTodaysGameId = () => {
    const initialTime = getInitialTime()
    const currentTime = getCurrentTime().startOf('day')
    return currentTime.diff(initialTime, 'day') + 1
}

export {
    cleanInput,
    GREEN_THRESHOLD,
    YELLOW_THRESHOLD,
    randomTipDistance,
    nextTipDistance,
    halfTipDistance,
    getInitialTime,
    getCurrentTime,
    getTodaysGameId
}
