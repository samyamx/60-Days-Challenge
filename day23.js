const input = document.getElementById("commandInput");
const enterBtn = document.getElementById("enterBtn");
const resetBtn = document.getElementById("resetBtn");
const gif = document.getElementById("gifResult");

function checkCommand() {

    const command = input.value.trim().toLowerCase();

    if(command === "git push"){
        gif.src = "gif1.gif";
    }

    else if(command === "git pull"){
        gif.src = "gif2.gif";
    }

    else if(command === "error"){
        gif.src = "gif4.gif";
    }

    else{
        gif.src = "gif5.gif";
    }

    gif.style.display = "block";
}

enterBtn.addEventListener("click", checkCommand);

input.addEventListener("keydown", function(event){

    if(event.key === "Enter"){
        checkCommand();
    }

});

resetBtn.addEventListener("click", function(){

    input.value = "";
    gif.src = "";
    gif.style.display = "none";

});