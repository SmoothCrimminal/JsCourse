const listElements = document.querySelectorAll('li');
const button = document.querySelector('button');

let defaultFontSize = 10;

button.addEventListener('click', () => {
    listElements.forEach(li => {
        if (!li.style.display) {
            li.style.display = 'block';
            li.style.fontSize = defaultFontSize + 'px';
        }
        else {
            li.style.fontSize = defaultFontSize + 'px'; 
        }
    })

    defaultFontSize++;
})

