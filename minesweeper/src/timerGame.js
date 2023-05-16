import { sweeperTimer } from "./index.js";

let sec = 0;
export let timerClass;

export function startTimerGame() {
    timerClass = setInterval(updateTimerGame, 1000);
}
export function stopTimerGame() {
    clearInterval(timerClass);
}

export function updateTimerGame() {
    sec++;
    sweeperTimer.textContent = `Time: ${sec}`;
}