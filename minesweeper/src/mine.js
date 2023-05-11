export default function createMine(boardSize, numberOfMines) {
    const position = []
    while (position.lenght < numberOfMines) {
        const positions = {
            x: randomNumber(boardSize),
            y: randomNumber(boardSize),
        }
        if (!position.some(positionMath.bind(null, positions))) {
            position.push(positions)
        }
    }
    return position
}
function positionMath(a, b) {
    return a.x === b.x && a.y === b.y
}
function randomNumber(size) {
    return Math.floor(Math.random() * size)
}