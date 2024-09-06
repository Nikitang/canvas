const canvas = document.getElementById('cnv');
const ctx = canvas.getContext('2d');

canvas.width = 900;
canvas.height = 600;

let x = canvas.width / 2;
let y = canvas.height / 2;

let stepCount = 0;
let direction;
let time = 30;
let timer;
let mouseX = null;
let mouseY = null;

const persomImg = new Image();
persomImg.src = 'images/enemy.png';

const shipsImg = new Image();
shipsImg.src = 'images/shipss.png';

canvas.addEventListener('click', (e) => {
    mouseX = e.offsetX;
    mouseY = e.offsetY;
    time = 10;
})


function drowing() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (mouseX !== null && mouseY !== null) {
        let dx = mouseX - x;
        let dy = mouseY - y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > 0) {
            x += dx / distance;
            y += dy / distance;
        }
        if (Math.abs(dx) <= 1 && Math.abs(dy) <= 1) {
            mouseX = null;
            mouseY = null;
            time = 30;
        }
    }
    if (stepCount === 0) {
        stepCount = Math.floor(100 * Math.random());
        direction = Math.floor(8 * Math.random());
    } else {
        stepCount--;
    }

    switch (direction) {
        case 0: {
            y = y - 1;
            break;
        }
        case 1: {
            x = x + 1;
            break;
        }
        case 2: {
            y = y + 1;
            break;
        }
        case 3: {
            x = x - 1;
            break;
        }
        case 4: {
            x = x + 1;
            y = y - 1;
            break;
        }
        case 5: {
            x = x + 1;
            y = y + 1;
            break;
        }
        case 6: {
            x = x - 1;
            y = y + 1;
            break;
        }
        case 7: {
            x = x - 1;
            y = y - 1;
            break;
        }
    }
    if (x < 0 || x > canvas.width || y < 0 || y > canvas.height) stepCount = 0;
  
        const spriteWidth = 60;
        const spriteHeight = 70;
        const spriteX = 380;
        const spriteY = 130;
        ctx.drawImage(persomImg, spriteX, spriteY, spriteWidth, spriteHeight, x, y, spriteWidth, spriteHeight)
        ctx.drawImage(shipsImg, 10, 10, 100, 100)
        if (x === 100 && y === 100) drawImage(shipsImg, 10, 10, 100, 100)
    
    timer = setTimeout(drowing, time)
}

drowing();