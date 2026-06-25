const team = ["Pikachu", "Charizard", "Bulbasaur"];

const teamList = document.getElementById("teamList");
const message = document.getElementById("message");

const showBtn = document.getElementById("showBtn");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");

function displayTeam() {

    teamList.innerHTML = "";

    for (let pokemon of team) {

        teamList.innerHTML += `<li>${pokemon}</li>`;
    }

    console.log("Current Team:");
    console.log(team);
}

showBtn.addEventListener("click", () => {

    displayTeam();

    message.textContent = "Team displayed successfully!";

    console.log("Button Clicked: Show Team");
    console.log("Tag Name:", teamList.tagName);
});

addBtn.addEventListener("click", () => {

    team.push("Squirtle");

    displayTeam();

    message.textContent = "Squirtle added to the team!";

    console.log("Pokemon Added");
    console.log("Total Pokemon:", team.length);
});

removeBtn.addEventListener("click", () => {
    if (team.length > 0) {
        let removedPokemon = team.pop();
        displayTeam();
        message.textContent =
            `${removedPokemon} removed from the team!`;
        console.log("Pokemon Removed:", removedPokemon);
        console.log("Remaining Pokemon:", team.length);
    }
});