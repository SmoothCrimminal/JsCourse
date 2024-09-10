const button = document.querySelector('button');
const container = document.querySelector('.container');

let iterator = 1;

button.addEventListener('click', () => {
    const square = document.createElement('div');
    square.style.width = '50px';
    square.style.height = '50px';
    square.style.backgroundColor = 'black';
    square.style.margin = '10px';
    square.style.color = 'white';
    square.style.textAlign = 'center';
    square.style.lineHeight = '50px';
    square.innerText = iterator;

    if (iterator % 5 === 0) {
        square.style.borderRadius = '50%';
        square.style.border = '1px solid black';
        square.style.backgroundColor = 'white';
        square.style.color = 'black';
    }

    container.appendChild(square);
    iterator++;
})