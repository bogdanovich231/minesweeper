const soundClick = new Audio("./audio/click.mp3");
const soundLose = new Audio("./audio/lose.mp3");
const soundMarked = new Audio("./audio/tick.mp3");
const soundWin = new Audio("./audio/win.mp3");

export function playClickSound() {
    soundClick.play();
}

export function playLoseSound() {
    soundLose.play();
}

export function playMarkedSound() {
    soundMarked.play();
}

export function playWinSound() {
    soundWin.play();
}