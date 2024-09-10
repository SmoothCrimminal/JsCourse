// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/

const gameSummary = {
    gameCount: 0,
    wins: 0,
    losses: 0,
    draws: 0
};

const game = {
    playerHand: null,
    aiHand: null
};

const hands = [...document.querySelectorAll('.select img')];

function handSelection() {
    game.playerHand = this.dataset.option;

    hands.forEach(h => h.style.boxShadow = '');
    this.style.boxShadow = '0 0 0 4px yellow';
}

hands.forEach(h => h.addEventListener('click', handSelection));

function aiChoice() {
    return hands[Math.floor(Math.random() * hands.length)].dataset.option;
}

function checkResult(player, ai) {
    if (player === ai) {
        return 'draw';
    }
    else if ((player === 'papier' && ai === 'kamień') || (player === 'kamień' && ai == 'nożyczki') || (player === 'nożyczki' && ai === 'papier'))
        return 'win';
    else
        return 'loss';
}

function publishResult(player, ai, result) {
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="ai-choice"]').textContent = ai;
    
    document.querySelector('p.numbers span').textContent = ++gameSummary.gameCount;

    if (result === 'win') {
        document.querySelector('p.wins span').textContent = ++gameSummary.wins;
        document.querySelector('[data-summary="who-win"]').textContent = 'Wygrałeś!';
    }
    else if (result === 'loss') {
        document.querySelector('p.losses span').textContent = ++gameSummary.losses;
        document.querySelector('[data-summary="who-win"]').textContent = 'Przegrałeś!';
    }
    else {
        document.querySelector('p.draws span').textContent = ++gameSummary.draws;
        document.querySelector('[data-summary="who-win"]').textContent = 'Remis!';
    }
}

function endGame() {
    document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow = '';
    game.playerHand = '';
    game.aiHand = '';
}

function startGame() {
    if (!game.playerHand) {
        alert('wybierz dłoń!')
        return;
    }

    game.aiHand = aiChoice();
    const gameResult = checkResult(game.playerHand, game.aiHand);
    publishResult(game.playerHand, game.aiHand, gameResult)
    endGame();
}

document.querySelector('.start').addEventListener('click', startGame);