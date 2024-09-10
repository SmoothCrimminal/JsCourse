let possibilities = ['walcz', 'przemyś to jeszcze raz'];
const addButton = document.querySelector('.add');
const resetButton = document.querySelector('.clean');
const showAdviceButton = document.querySelector('.showAdvice');
const showOptionsButton = document.querySelector('.showOptions');
const input = document.querySelector('input');
const advice = document.querySelector('h1');

let currentInput = '';

input.addEventListener('input', (e) => {
    currentInput = e.target.value
});

addButton.addEventListener('click', () => {
    if (currentInput === '')
        return;

    possibilities.push(currentInput);
    currentInput = '';
    input.value = '';
});

resetButton.addEventListener('click', () => {
    possibilities = [];
    currentInput = '';
    input.value = '';
});

showOptionsButton.addEventListener('click', () => {
    alert(possibilities.join(', '));
});

showAdviceButton.addEventListener('click', () => {
    const index = Math.floor(Math.random() * possibilities.length);
    advice.textContent = possibilities[index];

    input.value = '';
});

