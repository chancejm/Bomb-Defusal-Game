let countdown = false;
let timer = false;
let time = ""
let numToGuess = 0;
let currentScore = 0;
let blueBtn = 0;
let greenBtn = 0;
let redBtn = 0;
let yellowBtn = 0;
let win = 0;
let lose = 0;

function start() {
    if(timer === false) {
    numToGuess = Math.floor(Math.random()*102+19);
    blueBtn= Math.floor(Math.random()*12+1);
    greenBtn= Math.floor(Math.random()*12+1);
    redBtn= Math.floor(Math.random()*12+1);
    yellowBtn= Math.floor(Math.random()*12+1);
    if (numToGuess < 100) {
    $('#numToGuess').html('0'+numToGuess);
    } else {
        $('#numToGuess').html(numToGuess);
    };
    console.log(numToGuess);
    console.log(blueBtn);
    console.log(greenBtn);
    console.log(redBtn);
    console.log(yellowBtn);
    timer = true;
    }
};

function reset() {
 countdown = false;
 timer = false;
 time = ""
 numToGuess = 0;
 currentScore = 0;
 blueBtn = 0;
 greenBtn = 0;
 redBtn = 0;
 yellowBtn = 0;
}

function blue() {
    currentScore = blueBtn + currentScore;
    getScore();
};

function green() {
    currentScore = greenBtn + currentScore;
    getScore();
};

function red() {
    currentScore = redBtn + currentScore;
    getScore();
};

function yellow() {
    currentScore = yellowBtn + currentScore;
    getScore();
};
function getScore() {
    if(currentScore < 10) {
        $('#currentScore').html('00'+currentScore);
    } else if (currentScore < 100) {
        $('#currentScore').html('0'+currentScore);
    } else {
        $('#currentScore').html(currentScore);
    };
};
function wtext() {
    if(win < 10) {
        $('#win').html('Win: 00'+win);
    } else if (win < 100) {
        $('#win').html('Win: 0'+win);
    } else {
        $('#win').html('Win: '+win);
    };
};
function ltext() {
    if(lose < 10) {
        $('#lose').html('Lose: 00'+lose);
    } else if (lose < 100) {
        $('#lose').html('Lose:0'+lose);
    } else {
        $('#lose').html(lose);
    };
};

function wonLost() {
    if (numToGuess === currentScore && timer === true) {
        console.log('YOU WIN!');
        win++;
        wtext();
        reset();
    } else if (numToGuess < currentScore && timer === true) {
        console.log('YOU LOSE!');
        lose++;
        ltext();
        reset();
    };
    

};

$('#btnOne').click(function(){
console.log('BLUE BUTTON CLICKED')
blue();
wonLost()
});

$('#btnTwo').click(function(){
console.log('GREEN BUTTON CLICKED')
green();
wonLost()
});

$('#btnThree').click(function(){
console.log('RED BUTTON CLICKED')
red();
wonLost()
});

$('#btnFour').click(function(){
console.log('YELLOW BUTTON CLICKED')
yellow();
wonLost()
});

$('#startBtn').click(function(){
console.log('START BUTTON CLICKED')
start();
});