const square = document.querySelector('div');
let squareSize = 0;
let grow = true;

document.addEventListener('scroll', () => {

    if (window.innerWidth / 2 > squareSize && grow) {
        squareSize += 5;
    }
    else if (window.innerWidth / 2 === squareSize && grow) {
        grow = false;
    }
    else if (squareSize === 0) {
        grow = true;
        squareSize -= 5;
    } 
    else {
        squareSize -= 5;
    }

    square.style.width = squareSize + 'px';
    square.style.height = squareSize + 'px';
})