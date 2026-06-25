const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");
const wordCount = document.getElementById("wordCount");
const lastKey = document.getElementById("lastKey");

textInput.addEventListener("input", () => {
    const text = textInput.value;

    charCount.textContent = text.length;

    const words = text.trim().split(/\s+/);

    wordCount.textContent =
        text.trim() === ""
            ? 0
            : words.length;
});

textInput.addEventListener("keydown", (event) => {
    lastKey.textContent = event.key;
});

textInput.addEventListener("focus", () => {
    textInput.classList.add("active");
});

textInput.addEventListener("blur", () => {
    textInput.classList.remove("active");
});