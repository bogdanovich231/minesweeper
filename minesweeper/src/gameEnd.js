import { board, sweeperBoard, sweeperSubtext, sweeperTimer } from "./index.js";
import { statusTile } from "./board.js";
import { markTile, openTile } from "./tile.js";
import { startTimerGame, stopTimerGame } from "./timerGame.js";

export function gameEnd() {
    const win = checkWin(board);
    const lose = checkLose(board);
    if (win || lose) {
        sweeperBoard.addEventListener('click', stopProp, { capture: true });
        sweeperBoard.addEventListener('contextmenu', stopProp, { capture: true });
    }
    if (win) {
        sweeperSubtext.textContent = 'You Win'
    }
    if (lose) {
        const gameDuration = stopTimerGame();
        sweeperTimer.textContent = `Time: ${gameDuration}`;
        sweeperSubtext.textContent = 'You Lose'
        board.forEach(row => {
            row.forEach(tile => {
                if (tile.status === statusTile.MARKED) markTile(tile)
                if (tile.mine) openTile(board, tile)
            })
        })
    }
}
function checkWin(board) {
    return board.every(row => {
        return row.every(tile => {
            return tile.status === statusTile.NUMBER ||
                (tile.mine && (tile.status === statusTile.HIDDEN ||
                    tile.status === statusTile.MARKED))
        })
    })
}

function checkLose(board) {
    return board.some(row => {
        return row.some(tile => {
            return tile.status === statusTile.MINE
        })
    })
}

function stopProp(e) {
    e.stopImmediatePropagation()
}