const canvas = document.getElementById('diceCanvas') as HTMLCanvasElement;
const context = canvas.getContext('2d') as CanvasRenderingContext2D;

function drawDice(number: number): void {
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw dice border
    context.strokeStyle = 'black';
    context.lineWidth = 4;
    context.strokeRect(10, 10, 180, 180);

    // Draw dots based on the dice number
    context.fillStyle = 'black';
    const dotSize = 20;
    const positions: { [key: number]: [number, number][] } = {
        1: [[100, 100]],
        2: [[60, 60], [140, 140]],
        3: [[60, 60], [100, 100], [140, 140]],
        4: [[60, 60], [60, 140], [140, 60], [140, 140]],
        5: [[60, 60], [60, 140], [100, 100], [140, 60], [140, 140]],
        6: [[60, 60], [60, 100], [60, 140], [140, 60], [140, 100], [140, 140]]
    };

    positions[number].forEach(pos => {
        context.beginPath();
    }
}
       
