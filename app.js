const game = document.getElementById('game'),
      start = document.getElementById('start'),
      gameArea = document.getElementById('gameArea'),
      car = document.createElement('div');

const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
}

const settings = {
    start: false,
    score: 0,
    speed: 3
}

car.classList.add('car');

start.addEventListener('click',startGame);
document.addEventListener('keydown', startRun);
document.addEventListener('keyup', stopRun);

function startGame() {
    start.classList.add('hide');
    settings.start = true;
    gameArea.appendChild(car);
    requestAnimationFrame(playGame);
}

function playGame() {
    console.log('play');
    if(settings.start) requestAnimationFrame(playGame);
}

function startRun(e) {
    e.preventDefault();
    keys[e.key] = true;
}

function stopRun(e) {
    e.preventDefault();
    keys[e.key] = false;
}

