let minutes = 00;
let seconds = 00;
let miliseconds = 00;
let minDisplay = document.getElementById("minutes");
let secDisplay = document.getElementById("seconds");
let miliDisplay = document.getElementById("miliseconds");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");
let interval;

startBtn.onclick = function(){
    clearInterval(interval);
    interval = setInterval(stopWatch)
};

stopBtn.onclick = function() {
    clearInterval(interval);
};

resetBtn.onclick = function() {
    clearInterval(interval);

    miliseconds = 00;
    seconds = 00;
    minutes = 00;
    minDisplay.innerHTML = minutes;
    secDisplay.innerHTML = seconds;
    miliseconds.innerHTML = miliseconds;
};

function stopWatch() {
    miliseconds++

    minDisplay.innerHTML = minutes;
    secDisplay.innerHTML = seconds;
    miliseconds.innerHTML = miliseconds;

    if (miliseconds <= 09) {
        miliseconds = 10
    };

    if (miliseconds <= 99) {
        miliseconds = 00
        seconds++
    };
    
    if (seconds <= 09) {
        seconds = 10
    };

    if (seconds <= 99) {
      seconds = 00
      minutes++  
    };

    if (minutes <= 09) {
        minutes = 10
    };

    if (minutes <= 99) {

    }
};

