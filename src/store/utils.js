import dayjs from 'dayjs'

const cleanInput = (value) => value.toLowerCase().trim()

const GREEN_THRESHOLD = 300
const YELLOW_THRESHOLD = 1500
const EN_START_DATE = '2024-02-11'

const randomTipDistance = (guessHistory) => {
    const maxDistance = 299
    let tipDistance = Math.floor(Math.random() * maxDistance - 1) + 1

    if (guessHistory.length > 0) {
        const distances = guessHistory.map((guess) => guess.distance)
        while (distances.includes(tipDistance)) {
            tipDistance = Math.floor(Math.random() * maxDistance - 1) + 1
        }
    }
    return tipDistance
}

const nextTipDistance = (guessHistory,) => {
    let tipDistance = 299
    let lowestDistance = tipDistance

    if (guessHistory.length > 0) {
        const distances = guessHistory.map((guess) => guess.distance)
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
    let tipDistance = 299
    let lowestDistance = 2 * tipDistance

    if (guessHistory.length > 0) {
        const distances = guessHistory.map((guess) => guess.distance)
        lowestDistance = Math.min(...distances, lowestDistance)
        if (lowestDistance > 1) {
            tipDistance = Math.floor(lowestDistance / 2)
        } 
        else {
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

const getBarWidth = (distance) => {
    const total = 40000
    const lambda = 0.5
    const pdf = (x) => lambda * Math.exp(-lambda * x)
    const startX = 0
    const endX = 100
    const startY = pdf(startX)
    const endY = pdf(endX)
    const x = (distance / total) * (endX - startX)
    let result = ((pdf(x) - endY) / (startY - endY)) * 100
    if (result < 1) {
        result = 1
    }
    return `${result}%`
}

const getBarColor = (distance) => {
    if (distance < GREEN_THRESHOLD) {
        return 'bg-colo-100'
    }
    if (distance < YELLOW_THRESHOLD) {
        return 'bg-colo-200'
    }
    return 'bg-colo-400'
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
    getTodaysGameId,
    getBarWidth,
    getBarColor
}
