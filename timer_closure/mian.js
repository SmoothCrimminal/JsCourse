const span = document.querySelector('.time');

function time(counter = 0) {
    return () => {
        counter++;
        span.textContent = counter.toString();
    }
}

const timeCount = time();

setInterval(timeCount, 1000);