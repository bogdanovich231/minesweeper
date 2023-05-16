import { statusTile } from './board.js';
import { startTimerGame, timerClass } from './timerGame.js';

export function markTile(tile) {
    if (!timerClass) {
        startTimerGame();
    }
    if (tile.status !== statusTile.HIDDEN && tile.status !== statusTile.MARKED) {
        return
    }
    if (tile.status === statusTile.MARKED) {
        tile.status = statusTile.HIDDEN
    } else {
        tile.status = statusTile.MARKED
    }
}

export function openTile(board, tile) {
    if (!timerClass) {
        startTimerGame();
    }
    if (tile.status !== statusTile.HIDDEN) {
        return
    }
    if (tile.mine) {
        tile.status = statusTile.MINE
        return
    }
    tile.status = statusTile.NUMBER
    const nearbyTile = nearbyTiles(board, tile);
    const mines = nearbyTile.filter(tile => tile.mine)
    if (mines.length === 0) {
        nearbyTile.forEach(openTile.bind(null, board))
    } else {
        tile.elem.textContent = mines.length
    }


}

export function nearbyTiles(board, { x, y }) {
    const tiles = [];
    for (let xOff = -1; xOff <= 1; xOff++) {
        for (let yOff = -1; yOff <= 1; yOff++) {
            const tile = board[x + xOff]?.[y + yOff]
            if (tile) tiles.push(tile)
        }
    }
    return tiles;
}