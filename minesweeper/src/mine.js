export function createMine(boardSize, numberOfMines) {
    const position = []
    while (position.length < numberOfMines) {
        const positions = {
            x: randomNumber(boardSize),
            y: randomNumber(boardSize),
        }
        if (!position.some(positionMatch.bind(null, position))) {
            position.push(positions)
        }
    }
    return position
}
export function positionMatch(a, b) {
    return a.x === b.x && a.y === b.y
}
function randomNumber(size) {
    return Math.floor(Math.random() * size)
}