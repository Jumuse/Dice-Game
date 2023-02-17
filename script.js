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

// Change player name
document.querySelector('.editNames').addEventListener('click', () => {
    player1.innerHTML = prompt("Entrez le nom du Joueur 1");
    player2.innerHTML = prompt("Entrez le nom du Joueur 2");
    })