// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem 
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['tekst1', 'tekst2', 'tekst3']

let letterIndex = 0;

// Implementacja
const addLetter = (timeout, character, isLast) => {
 // Użyj w środku setTimeout
    setTimeout(() => {
        spnText.textContent += character;
        if (isLast) {
            spnText.textContent = '';
        }
    }, timeout)
}

let initialTimeout = 500;

txt.forEach(text => {
    [...text].forEach(c => {
        if ([...text].indexOf(c) === text.length - 1) {
            addLetter(initialTimeout, c, false);
            addLetter(initialTimeout + 500, '', true);
        }
        else {
            addLetter(initialTimeout, c, false);
        }

        initialTimeout += 500;
    })
})


// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
 spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);