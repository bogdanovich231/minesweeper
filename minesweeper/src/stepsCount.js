import { sweeperSteps } from "./index.js";

let steps = 0;

export function updateStep() {
    sweeperSteps.textContent = `Open Tile: ${steps}`;
}

export function incrementStep() {
    steps++;
    updateStep();
}