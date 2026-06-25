const onBtn = document.getElementById("onBtn");
const offBtn = document.getElementById("offBtn");
const statusText = document.getElementById("status");
const zzz = document.getElementById("zzz");

const leftEye = document.querySelector(".left-eye");
const rightEye = document.querySelector(".right-eye");

onBtn.addEventListener("click", () => {
    document.body.classList.remove("dark");
    document.body.classList.add("light");

    leftEye.classList.remove("closed");
    rightEye.classList.remove("closed");

    statusText.textContent = "La uthnu paryo ava ta! :)";
    zzz.classList.add("hidden");
});

offBtn.addEventListener("click", () => {
    document.body.classList.remove("light");
    document.body.classList.add("dark");

    leftEye.classList.add("closed");
    rightEye.classList.add("closed");

    statusText.textContent = "(T-T) Aja lai suteko hai ta...";
    zzz.classList.remove("hidden");
    
});