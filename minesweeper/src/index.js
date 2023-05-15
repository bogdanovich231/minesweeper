import createBoard, { statusTile } from './board.js';
import './style.css';

const sweeperTitle = document.createElement("h1");
const sweeperSubtext = document.createElement("p");
const sweeperBoard = document.createElement("div");
const sweeperSpan = document.createElement("span");

const boardS = 10;
const boardMines = 2;

sweeperTitle.className = "sweeper_title";
sweeperSubtext.className = "sweeper_subtext";
sweeperSpan.classList.add("sweeper_span");
sweeperBoard.className = "sweeper_board";

sweeperTitle.innerHTML = "RSS Minesweeper";
sweeperSubtext.innerHTML = "Mines Left:";

document.body.append(sweeperTitle, sweeperSubtext, sweeperBoard);
sweeperSubtext.append(sweeperSpan);

const board = createBoard(boardS, boardMines);
board.forEach(row => {
    row.forEach(tile => {
        sweeperBoard.append(tile.elem)
        tile.elem.addEventListener('click', () => {
        })
        tile.elem.addEventListener("contextmenu", e => {
            e.preventDefault()
        })
    })
})

sweeperBoard.style.setProperty("--size", boardS);
sweeperSpan.textContent = boardMines;
console.log(board);