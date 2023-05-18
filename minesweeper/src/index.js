import createBoard from './board.js';
import './style.css';
import { markTile, openTile } from './tile.js'
import { statusTile } from "./board.js"
import { gameEnd } from './gameEnd.js';

const sweeperTitle = document.createElement("h1");
const sweeperSubtext = document.createElement("p");
const sweeperBoard = document.createElement("div");
const sweeperSpan = document.createElement("span");
const sweeperTimer = document.createElement("span");
const sweeperFields = document.createElement("div");
const sweeperSteps = document.createElement("span");
const sweeperRestart = document.createElement("button");
const sweeperMode = document.createElement("div");
const sweeperModeToggle = document.createElement("div");

const boardS = 10;
const boardMines = 10;

sweeperTitle.className = "sweeper_title";
sweeperSubtext.className = "sweeper_subtext";
sweeperSpan.classList.add("sweeper_span");
sweeperBoard.className = "sweeper_board";
sweeperTimer.className = "sweeper_timer";
sweeperFields.className = "sweeper_fields";
sweeperSteps.className = "sweeper_steps";
sweeperRestart.className = "sweeper_restart";
sweeperMode.className = "sweeper_mode_night"
sweeperModeToggle.className = "toggle_circle";

sweeperTitle.innerHTML = "RSS Minesweeper";
sweeperSubtext.innerHTML = "Mines Left: ";
sweeperTimer.innerHTML = "Time: ";
sweeperSteps.innerHTML = "Open Tile: ";
sweeperRestart.innerHTML = "Reset Game";


sweeperFields.append(sweeperTimer, sweeperSubtext, sweeperSteps);
document.body.append(sweeperTitle, sweeperMode, sweeperFields, sweeperBoard);
sweeperSubtext.append(sweeperSpan);
document.body.append(sweeperRestart);
sweeperMode.append(sweeperModeToggle);

export const board = createBoard(boardS, boardMines);
board.forEach(row => {
    row.forEach(tile => {
        sweeperBoard.append(tile.elem)
        tile.elem.addEventListener('click', () => {
            openTile(board, tile)
            gameEnd()
        })
        tile.elem.addEventListener("contextmenu", e => {
            e.preventDefault()
            markTile(tile)
            minesLeft()
        })
    })
})

sweeperBoard.style.setProperty("--size", boardS);
sweeperSpan.textContent = boardMines;

function minesLeft() {
    const markedTiles = board.reduce((count, row) => {
        return count + row.filter(tile => tile.status === statusTile.MARKED).length
    }, 0)
    sweeperSpan.textContent = boardMines - markedTiles
}

sweeperRestart.addEventListener("click", () => {
    location.reload();
});

sweeperMode.addEventListener('click', function () {
    sweeperModeToggle.classList.toggle('active');
    sweeperMode.classList.toggle('active');
    sweeperBoard.classList.toggle('active');
})

export { sweeperBoard, sweeperSubtext, sweeperTimer, sweeperSteps };