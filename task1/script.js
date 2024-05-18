const canvas = document.getElementById('diceCanvas');
const context = canvas.getContext('2d');

function drawDice(number) {
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw dice border
    context.strokeStyle = 'black';
    context.lineWidth = 4;
    context.strokeRect(10, 10, 180, 180);

    // Draw dots based on the dice number
    context.fillStyle = 'black';
    const dotSize = 20;
    const positions = {
        1: [[100, 100]],
        2: [[60, 60], [140, 140]],
        3: [[60, 60], [100, 100], [140, 140]],
        4: [[60, 60], [60, 140], [140, 60], [140, 140]],
        5: [[60, 60], [60, 140], [100, 100], [140, 60], [140, 140]],
        6: [[60, 60], [60, 100], [60, 140], [140, 60], [140, 100], [140, 140]]
    };

    positions[number].forEach(pos => {
        context.beginPath();
        context.arc(pos[0], pos[1], dotSize / 2, 0, Math.PI * 2);
        context.fill();
    });
}

function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        const randomNumber = getRandomNumber();
        drawDice(randomNumber);
    }
});

// Initial draw
drawDice(getRandomNumber());
