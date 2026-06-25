const ball = document.getElementById("ball");
const btn = document.getElementById("throwBtn");
const scoreText = document.getElementById("score");
const message = document.getElementById("message");

let score = 0;
let playing = false;

btn.addEventListener("click", throwBall);

function throwBall(){

    if(playing) return;

    playing = true;

    ball.style.transition = "none";
    ball.style.left = "60px";
    ball.style.bottom = "45px";

    setTimeout(()=>{

        ball.style.transition = "all 1.2s ease-in-out";

        // Random shot
        const success = Math.random() < 0.6;

        if(success){

            // Perfect Shot
            ball.style.left = "560px";
            ball.style.bottom = "250px";

            setTimeout(()=>{

                ball.style.left = "585px";
                ball.style.bottom = "150px";

                score++;
                scoreText.textContent = score;
                message.textContent = "🏀 Score!!";

                resetBall();

            },1200);

        }else{

            // Miss Shot
            let randomHeight = 180 + Math.random()*100;

            ball.style.left = "500px";
            ball.style.bottom = randomHeight+"px";

            setTimeout(()=>{

                ball.style.left = "630px";
                ball.style.bottom = "45px";

                message.textContent = "❌ Missed!";

                resetBall();

            },1200);

        }

    },50);

}

function resetBall(){

    setTimeout(()=>{

        ball.style.transition="none";
        ball.style.left="60px";
        ball.style.bottom="45px";

        playing=false;

    },700);

}