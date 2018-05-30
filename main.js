$( document ).ready(function() {
    console.log( "ready!" );
    
// -----------------------------------------start--------------------------------------- \\
let countdown = false;
let timer = false;
let time;
let numToGuess = 0;
let currentScore = 0;
let blueBtn = 0;                //Variables Used
let greenBtn = 0;
let redBtn = 0;
let yellowBtn = 0;
let win = 0;
let lose = 0;
let min = 0;
let sec = 0;

function start() {          //_This start function is to be called when startBtn is clicked.
    if(timer === false) {//_If timer is equal to Flase then, the following below.
    numToGuess = Math.floor(Math.random()*102+19);//_Sets target value
    blueBtn= Math.floor(Math.random()*12+1);//--------------//
    greenBtn= Math.floor(Math.random()*12+1);               //
    redBtn= Math.floor(Math.random()*12+1);                 // Sets all btn values
    yellowBtn= Math.floor(Math.random()*12+1);//------------//
    min = 1;
    sec = 31;
    if (numToGuess < 100) {//-------------------------------//
    $('#numToGuess').html('0'+numToGuess);                  // Changes numToGuess text to display the value
    } else {                                                // Also keeps numToGuess display triple digit
        $('#numToGuess').html(numToGuess);                  //
    };  //--------------------------------------------------//
    $('#currentScore').css("border", "1px dotted green");//-//
    $('#currentScore').css("color", "green");               // Resets currentScore & numToGuess border/text colors
    $('#numToGuess').css("border", "1px dotted #cf3d39");   //
    $('#numToGuess').css("color", "#cf3d39");//-------------//
    getScore();//_getScore is called to reset the text of currentScore to "000"
    console.log(numToGuess);
    console.log(blueBtn);
    console.log(greenBtn);
    console.log(redBtn);
    console.log(yellowBtn);
    timer = true;//_timer is set to true from its original false value so that start button can not reset values until win/lose condition has been met.
    timeStart();
    };
};

function reset() {      //_This reset function is to be called when a win/lose condition has been met
 countdown = false;     //-Function resets all values to 0/""/false until start button is pressed again & all values are randomly assigned again
 timer = false;
 time;
 numToGuess = 0;
 currentScore = 0;
 blueBtn = 0;
 greenBtn = 0;
 redBtn = 0;
 yellowBtn = 0;
};

//

function mainTime() {
    if(sec < 1 && min === 1) {
        sec = 60;
        min = 0;    
    };

    sec--;
    
    if(sec < 10) {
        $('#timer').html('0'+min+':0'+sec);
        console.log('0'+min+':0'+sec);
    } else {
        $('#timer').html('0'+min+':'+sec);
        console.log('0'+min+':'+sec);
    };

    if (sec === 0 && min === 0) {
    clearInterval(time);
    lose++;
    $('#currentScore').css("border", "1px dotted #cf3d39");        
    $('#currentScore').css("color", "#cf3d39");                     
    ltext();                                                        
    reset();                                                        
    alert("Sorry... You failed. Click start to play again!");
    console.log(timer);
    };
};

function timeStart() {
    time = setInterval(mainTime, 1000);
};

//

function blue() {                               //_This function is to be called when the blue button is clicked
    currentScore = blueBtn + currentScore;//_ Adds the value of bluBtn to currentScore
    getScore();                           //_ Prints the new value of currentScore to the "#curretScore" html element
};

function green() {                               //_This function is to be called when the green button is clicked
    currentScore = greenBtn + currentScore;//_ Adds the value of greenBtn to currentScore
    getScore();                           //_ Prints the new value of currentScore to the "#curretScore" html element
};

function red() {                               //_This function is to be called when the red button is clicked
    currentScore = redBtn + currentScore;//_ Adds the value of redBtn to currentScore
    getScore();                           //_ Prints the new value of currentScore to the "#curretScore" html element
};

function yellow() {                               //_This function is to be called when the yellow button is clicked
    currentScore = yellowBtn + currentScore;//_ Adds the value of yellowBtn to currentScore
    getScore();                           //_ Prints the new value of currentScore to the "#curretScore" html element
};

function getScore() {
    if(currentScore < 10) {
        $('#currentScore').html('00'+currentScore);
    } else if (currentScore < 100) {
        $('#currentScore').html('0'+currentScore);    //_ getScore Prints value of currentScore & makes sure the display is always triple digit
    } else {
        $('#currentScore').html(currentScore);
    };
};
function wtext() {
    if(win < 10) {
        $('#win').html('Win: 00'+win);
    } else if (win < 100) {
        $('#win').html('Win: 0'+win);                //_ wtext Prints win of currentScore & makes sure the display is always triple digit
    } else {
        $('#win').html('Win: '+win);
    };
};
function ltext() {
    if(lose < 10) {
        $('#lose').html('Lose: 00'+lose);
    } else if (lose < 100) {        
        $('#lose').html('Lose:0'+lose);              //_ ltext Prints lose of currentScore & makes sure the display is always triple digit
    } else {
        $('#lose').html(lose);
    };
};

function wonLost() {
    if (numToGuess === currentScore && timer === true) {//--------------//
        console.log('YOU WIN!');                                        //
        clearInterval(time);                                            //
        $('#numToGuess').css("border", "1px dotted green");             //
        $('#numToGuess').css("color", "green");                         // - If player wins changes color of numToGuess display to green & alerts player that they have won.
        win++;                                                          // - Also resets variables to starting values (0,false,"" etc..) & adds 1 to win variable & prints value to win display.
        wtext();                                                        //
        reset();                                                        //
        alert("YOU WERE SUCCESSFUL. Click start to play again!");//-----//  
    } else if (numToGuess < currentScore && timer === true) {//---------//
        console.log('YOU LOSE!');                                       //
        clearInterval(time);                                            //
        $('#currentScore').css("border", "1px dotted #cf3d39");         //
        $('#currentScore').css("color", "#cf3d39");                     // - If player loses changes color of current score display to red & alerts player that they have lost
        lose++;                                                         // - Also resets variables to starting values (0,false,"" etc..) & adds 1 to lose variable & prints value to lose display.
        ltext();                                                        //
        reset();                                                        //
        alert("Sorry... You failed. Click start to play again!");//-----//
    };
    

};
//---------------------------------- Button functions ----------------------------------\\
$('#btnOne').click(function(){
if (timer === true) {
console.log('BLUE BUTTON CLICKED')
blue();
wonLost();
};
});

$('#btnTwo').click(function(){
if (timer === true) {
console.log('GREEN BUTTON CLICKED')
green();
wonLost();
};
});

$('#btnThree').click(function(){
if (timer === true) {
console.log('RED BUTTON CLICKED')
red();
wonLost();
};
});

$('#btnFour').click(function(){
if (timer === true) {
console.log('YELLOW BUTTON CLICKED')
yellow();
wonLost();
};
});

$('#startBtn').click(function(){
console.log('START BUTTON CLICKED')
start();
});

// -----------------------------------------end--------------------------------------- \\
});