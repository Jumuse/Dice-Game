var player1 = document.querySelector("h1.Player1");
var player2 = document.querySelector("h1.Player2");
let player1Turn = true;
let player2Turn;
let round1 = document.querySelector('.round1');
let global1 = document.querySelector('.globalOne');
let round2 = document.querySelector('.round2');
let global2 = document.querySelector('.globalTwo');
let rollBtn = document.querySelector('.roll');
let dotRight = document.getElementById('dotRight');
let dotLeft = document.getElementById('dotLeft');
let currentTemp = 0;
let currentGlobal = 0;
let scoreTable = [0, 0];

// Edit player name
const editNames = () => {
    player1.innerHTML = prompt("Entrez le nom du Joueur 1");
    player2.innerHTML = prompt("Entrez le nom du Joueur 2");
};

// New Game function
const resetGame = () => {
    rollBtn.disabled = false;
    scoreTable = [0, 0];
    global1.innerHTML = scoreTable[0];
    global2.innerHTML = scoreTable[1];
    currentTemp = 0;
    round1.innerHTML, round2.innerHTML = 0;
    editNames();
};

//Functions player1 & 2
const player1active = () => {
    round1.innerHTML = currentTemp;
    player1.style.fontWeight = "700";
    player2.style.fontWeight = "normal";
    dotRight.hidden = true;
    dotLeft.hidden = false;
};
const player2active = () => {
    round2.innerHTML = currentTemp;
    player2.style.fontWeight = "700";
    player1.style.fontWeight = "normal";
    dotRight.hidden = false;
    dotLeft.hidden = true;
};

// Function reset
const reset = () => {
    currentTemp = 0;
    currentGlobal = 0;
    player1Turn = !player1Turn;
};

//Roll the dice Player1
const rollDice = () => {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    document.querySelector(".img").setAttribute("src", "dice" + randomNumber + ".png");
        if(randomNumber === 1) {
        currentTemp = 0;
        round1.innerHTML, round2.innerHTML = 0;
        player1Turn = !player1Turn;

        } else {
        currentTemp = parseFloat(currentTemp) + randomNumber;
         
            if(player1Turn) {
            player1active();
            } else {
            player2active();
            }
        }
};

//Add currentScore to Global
 const hold = () => {
    currentGlobal = parseFloat(currentTemp) + parseFloat(currentGlobal);
    currentTemp = 0;
    if(player1Turn) {
        scoreTable[0] += currentGlobal;
        global1.textContent = scoreTable[0];
        round1.innerHTML = 0;
        player2active();

    } else {
        scoreTable[1] += currentGlobal;
        global2.textContent = scoreTable[1];
        round2.innerHTML = 0;
        player1active();
    }
    reset();
    if(scoreTable[0] >= 100){
        alert(`Félicitations ${player1.textContent}`);
        rollBtn.disabled = true;
        round1.innerHTML, round2.innerHTML = 0;
    } else if (scoreTable[1] >= 100){
        alert(`Félicitations ${player2.textContent}`);
        rollBtn.disabled = true;
        round1.innerHTML, round2.innerHTML = 0;
    }
};

document.querySelector('.editNames').addEventListener('click', () => {
    editNames();
});
document.querySelector('.newGame').addEventListener('click', () => {
    resetGame();
});
document.querySelector('.roll').addEventListener('click', () => {
    rollDice();
});

document.querySelector('.hold').addEventListener('click', () => {
    hold();
});

