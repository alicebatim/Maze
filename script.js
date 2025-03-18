const maze = document.getElementById('maze');
const mazeLayout = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 0, 0, 1],
    [1, 1, 1, 1, 1, 0, 1, 0, 1, 1],
    [1, 0, 0, 0, 1, 0, 1, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

let characterPosition = { x: 1, y: 1 };

function createMaze() {
    maze.innerHTML = '';
    mazeLayout.forEach((row, y) => {
        row.forEach((cell, x) => {
            const div = document.createElement('div');
            div.classList.add('cell');
            if (cell === 1) div.classList.add('wall');
            else if (x === characterPosition.x && y === characterPosition.y) div.classList.add('character');
            else div.classList.add('path');
            maze.appendChild(div);
        });
    });
}

function moveCharacter(dx, dy) {
    const newX = characterPosition.x + dx;
    const newY = characterPosition.y + dy;

    if (mazeLayout[newY][newX] === 0) {
        characterPosition.x = newX;
        characterPosition.y = newY;
        createMaze();
    }
}

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            moveCharacter(0, -1);
            break;
        case 'ArrowDown':
            moveCharacter(0, 1);
            break;
        case 'ArrowLeft':
            moveCharacter(-1, 0);
            break;
        case 'ArrowRight':
            moveCharacter(1, 0);
            break;
    }
});

createMaze();
