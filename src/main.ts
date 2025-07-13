import { World } from './game/world';
import { Player } from './game/player';

const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
const context = canvas.getContext('2d');

const world = new World();
const player = new Player();

function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    world.update();
    world.render(context);
    
    player.update();
    player.render(context);
    
    requestAnimationFrame(gameLoop);
}

function init() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    world.load();
    player.spawn();
    
    gameLoop();
}

window.onload = init;