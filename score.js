// Iteration 8: Making scoreboard functional
var scorediv = document.getElementById("score-board");

let score = localStorage.getItem("score");

const playagain = document.getElementById('play-again-button');
scorediv.innerHTML = score;
playagain.addEventListener("click", () => {
    location.href = "./game.html";
});



