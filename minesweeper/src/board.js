import { createMine, positionMatch } from './mine.js'

export const statusTile = {
    HIDDEN: "hidden",
    MINE: "mine",
    NUMBER: "number",
    MARKED: "marked",
}

export default function createBoard(boardSize, numberOfMines) {
    const board = [];
    const minePosition = createMine(boardSize, numberOfMines)
    for (let x = 0; x < boardSize; x++) {
        const row = [];
        for (let y = 0; y < boardSize; y++) {
            const elem = document.createElement("div");
            elem.dataset.status = statusTile.HIDDEN;
            const tile = {
                elem,
                x,
                y,
                mine: minePosition.some(positionMatch.bind(null, { x, y })),
                get status() {
                    return this.elem.dataset.status;
                },
                set status(value) {
                    this.elem.dataset.status = value;
                }
            };
            row.push(tile);
        }
        board.push(row);
    }
    return board;
}
