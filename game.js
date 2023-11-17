var num1 = Math.round(Math.random() * 100);
var num2 = Math.round(Math.random() * 100);

var num1div = document.getElementById("number1");
var num2div = document.getElementById("number2");

var operation;
var score=0;
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var mul = document.getElementById("mul");
var divide = document.getElementById("divide");
var modulus = document.getElementById("modulus");

var num3;
var num3div = document.getElementById("number3");

function randomise() {
    num1 = Math.round(Math.random() * 100);
    num2 = Math.round(Math.random() * 100);
    var temp;
    if (num1 < num2) {
        temp = num1;
        num1 = num2;
        num2 = temp;
    }

    var operation=Math.round(Math.random()*5);
    switch (operation) {
        case 1:
            num3 = num1 + num2;
            break;
        case 2:
            num3 = num1 - num2;
            break;
        case 3:
            num3 = num1 * num2;
            break;
        case 4:
            num3 = Math.floor(num1 / num2);
            break;
        case 5:
            num3 = num1 % num2;
            break;
        case 0:
            randomise();
    }

    num1div.innerHTML = num1;
    num2div.innerHTML = num2;
    num3div.innerHTML = num3;
}

randomise();



plus.addEventListener("click", () => {

    if (num1 + num2 === num3) {
        score++;
        // console.log(score)
        randomise();
        resetTime(timerId); 

    } else {
        // console.log("check")
        window.location.href = "gameover.html?score=" + score;
    }
});

minus.addEventListener("click", () => {
    if (num1 - num2 === num3) {
        score++;
        // console.log(score)

        randomise();
        resetTime(timerId);
    } else {
        // console.log("check1")

        window.location.href = "gameover.html?score=" + score;
    }
});

mul.addEventListener("click", () => {
    if (num1 * num2 === num3) {
        score++;
        // console.log(score)

        randomise();
        resetTime(timerId)
    } else {
        // console.log("check2")

        window.location.href = "gameover.html?score=" + score;
    }
});

divide.addEventListener("click", () => {
    if (Math.floor(num1 / num2) === num3) {
        score++;
        // console.log(score)

        randomise();
        resetTime(timerId);
    } else {
        // console.log("check3")

        window.location.href ="gameover.html?score=" + score;
    }
});

modulus.addEventListener("click", () => {
    if (num1 % num2 === num3) {
        score++;
        // console.log(score)

        randomise();
        resetTime(timerId);
    } else {
        // console.log("check4")

        window.location.href = "gameover.html?score=" + score;
    }
});

var time = 20;
var timerId;

function startTimer() {
  time = 20;
  timer.innerHTML = time;
  timerId = setInterval(() => {
    time--;
    if (time == 0) location.href = "./gameover.html?score=" + score;
    timer.innerHTML = time;
  }, 1000);
  localStorage.setItem("score",score);
}

function resetTime(intervalId) {
  clearInterval(intervalId);
  startTimer();
}

startTimer();
