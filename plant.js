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

const search = document.getElementById("search");
const cards = document.querySelectorAll(".card");

search.addEventListener("keyup", () => {

    const value = search.value.toLowerCase();

    cards.forEach(card => {

        const plantName = card.dataset.name.toLowerCase();

        if (plantName.includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});