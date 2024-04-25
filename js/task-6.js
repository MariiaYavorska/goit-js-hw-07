'use strict'
const controls = document.getElementById('controls');
const boxesContainer = document.getElementById('boxes');
const input = controls.querySelector('input');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');

function createBoxes(amount) {
    boxesContainer.innerHTML = '';
    const newBoxes = [];
    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.style.width = `${30 + i * 10}px`;
        box.style.height = `${30 + i * 10}px`;
        box.style.backgroundColor = getRandomHexColor();
        newBoxes.push(box);
    }
    boxesContainer.append(...newBoxes);
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')}`;
}

function destroyBoxes() {
    boxesContainer.innerHTML = '';
}

createButton.addEventListener('click', () => {
    const amount = parseInt(input.value);

    if (amount >= 1 && amount <= 100) {
        createBoxes(amount);
        input.value = '';
    }
});

destroyButton.addEventListener('click', destroyBoxes);   

