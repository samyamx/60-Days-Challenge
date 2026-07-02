const addBtn = document.getElementById("addBtn");
const container = document.getElementById("container");

const stars = ["*"];

addBtn.addEventListener("click", () => {

    const star = document.createElement("div");

    star.classList.add("star");

    const randomStar = stars[Math.floor(Math.random() * stars.length)];

    star.textContent = randomStar;

    container.appendChild(star);

});

container.addEventListener("click", (event) => {

    if(event.target.classList.contains("star")){

        event.target.remove();

    }

});

document.body.addEventListener("click", () => {

    console.log("Body Clicked");

});