const ninja = document.getElementById("ninja");
const obstacle = document.getElementById("obstacle");
const scoreText = document.getElementById("score");
const gameOver = document.getElementById("gameOver");

let score = 0;
let speed = 6;
let obstacleX = 900;
let playing = true;

function jump(){

    if(ninja.classList.contains("jump")) return;

    ninja.classList.add("jump");

    setTimeout(()=>{
        ninja.classList.remove("jump");
    },600);

}

document.addEventListener("keydown",(e)=>{

    if(e.code==="Space" || e.code==="ArrowUp"){
        jump();
    }

});

function gameLoop(){

    if(!playing) return;

    obstacleX-=speed;

    obstacle.style.right=(900-obstacleX)+"px";

    if(obstacleX<-40){
        obstacleX=900;

        score++;
        scoreText.innerText=score;

        if(score%5===0){
            speed+=0.5;
        }
    }

    let ninjaBottom=parseInt(getComputedStyle(ninja).bottom);

    if(obstacleX<150 && obstacleX>60 && ninjaBottom<100){
        playing=false;
        gameOver.style.display="flex";
    }

    requestAnimationFrame(gameLoop);

}

gameLoop();

function restart(){

    score=0;
    speed=6;
    obstacleX=900;
    playing=true;

    scoreText.innerText=0;
    gameOver.style.display="none";

    gameLoop();

}