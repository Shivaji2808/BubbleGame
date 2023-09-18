var timer = 60;
var score  = 0;
var hitrn = 0;
var timerClear = 60;
var highestScore = 0;
var gameStarted = false;

//parent bubble listener because we cannot possibly assign listener to every bubble

function startGame(){
    document.querySelector("#pbtm").addEventListener("click", function(dets){
    var clickedNum =Number(dets.target.textContent)
    if(clickedNum === hitrn){
        increaseScore();
        getNewHit();
        makeBubble();
        if(score>highestScore){
            highestScore = score;
        }
    }
});
}

function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent = hitrn; 
}

function makeBubble(){
    var cluster = "";
for(i = 1;i<181;i++){
    var a = Math.floor(Math.random()*10)
    cluster+=`<div class="bubble">${a}</div>`
}

document.querySelector("#pbtm").innerHTML = cluster
}

function runTimer(){
    timerClear = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timervalue").textContent = timer;
        }
        else{
            clearInterval(timerClear);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over...
            <br> Your Score: ${score} <br>
            Highest Score: ${highestScore}
            </h1>`;
        }   
    }, 1000);
}

function endGame(){
    document.querySelector("#pbtm").innerHTML= `<h1><center>Game Ended... <br>
        Your High Score: ${score} <br>
        Highest Score: ${highestScore}
     </h1>   
    `
    clearInterval(timerClear);
}

function resetGame() {
    score = 0;
    timer = 60;
    hitrn = 0;
    document.querySelector("#scoreval").textContent = score;
    document.querySelector("#timervalue").textContent = timer;
}

document.querySelector("#startBtn").addEventListener("click", function(){
    if(!gameStarted){
        startGame();
        resetGame();
        getNewHit();
        runTimer();
        makeBubble();
        gameStarted = true;
    }    
})

document.querySelector("#endBtn").addEventListener("click", function(){
    endGame();
    gameStarted = false;
})

//Event will be raised on the particular event which is clicked and in case of event listener not found, event will look for parent element for listener and if also not found there, then it will look for the listener on the parent's parent.