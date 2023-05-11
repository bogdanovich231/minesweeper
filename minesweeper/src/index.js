import createBoard, { statusTile } from './board.js';
import './style.css';

const sweeperTitle = document.createElement("h1");
const sweeperSubtext = document.createElement("p");
const sweeperBoard = document.createElement("div");
const boardS = 10;
const boardMines = 10;

sweeperTitle.className = "sweeper_title";
sweeperSubtext.className = "sweeper_subtext";

sweeperBoard.className = "sweeper_board";

sweeperTitle.innerHTML = "RSS Minesweeper";
sweeperSubtext.innerHTML = "Mines Left: 10";

document.body.append(sweeperTitle, sweeperSubtext, sweeperBoard);

const board = createBoard(boardS, boardMines);
console.log(board)
board.forEach(row => {
    row.forEach(tile => {
        sweeperBoard.append(tile.elem)
    })
})

sweeperBoard.style.setProperty("--size", boardS);
