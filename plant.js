let cart = 0;

const cartCount = document.getElementById("cartCount");
const addButtons = document.querySelectorAll(".addCart");

addButtons.forEach(button => {
    button.addEventListener("click", () => {
        cart++;
        cartCount.textContent = cart;
        alert("Plant added to cart!");
    });
});

