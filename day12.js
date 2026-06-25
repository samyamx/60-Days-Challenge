console.log("\n==Tapaeko Janma miti aansar Tapaeko Category==");

let birthYear = 2002;
let currentYear = new Date().getFullYear();

let trainerAge = currentYear - birthYear;

console.log(`Trainer Age: ${trainerAge}`);

if (trainerAge >= 13 && trainerAge <= 19) {
  console.log("Category: Teenager Trainer");
} else if (trainerAge >= 20 && trainerAge <= 29) {
  console.log("Category: Young Adult Trainer");
} else {
  console.log("Category: Adult Trainer");
}
