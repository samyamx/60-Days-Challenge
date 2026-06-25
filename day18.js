const input = document.getElementById("input");
const result = document.getElementById("result");

input.addEventListener("keydown", (event) => {
    result.textContent = `Pressed Key: ${event.key}`;

    if (event.key === "Enter") {
        result.textContent = "You pressed Enter";
    }

    if (event.key === "Escape") {
        result.textContent = "You pressed Escape";
    }
});