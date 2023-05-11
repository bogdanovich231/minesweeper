import { answer } from './module.js'
import './style.css'

const sweeperTitle = document.createElement("h1");
const sweeperSubtext = document.createElement("p");
const sweeperBoard = document.createElement("div");


sweeperTitle.className = "sweeper_title";
sweeperSubtext.className = "sweeper_subtext";
sweeperBoard.className = "sweeper_board";

sweeperTitle.innerHTML = "RSS Minesweeper"
sweeperSubtext.innerHTML = "Mines Left: 10"



document.body.append(sweeperTitle, sweeperSubtext, sweeperBoard);
