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
    ctx.fillRect(x, y, 50, 50);
    ctx.drawImage(persomImg, x - 25, y - 25, 50, 50);
    timer = setTimeout(drowing, time)
}

drowing();