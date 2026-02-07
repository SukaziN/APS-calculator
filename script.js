let subjects = [scienceSubjects, commerceSubjects, historySubjects];
let scienceSubjects = [
  "Physical Sciences",
  "Life Sciences",
  "Geography / Accounting",
  "Agriculture",
  "Mathematics",
  "English",
  "Home language",
  "Life Orientation",
];
let commerceSubjects = [
  "Business Studies",
  "Consumer Studies / Accounting",
  "Mathematical Literacy",
  "Economics",
  "English",
  "Home language",
  "Life orientation",
];
let historySubjects = [
  "History",
  "Geography",
  "Life Sciences",
  "Mathematical Literacy",
  "English",
  "Home language",
  "Life Orientation",
];
let english = document.getElementById("english").valueAsNumber;
let homeLang = document.getElementById("home-language").valueAsNumber;
let math = document.getElementById("math").valueAsNumber;
let core1 = document.getElementById("core-1").valueAsNumber;
let core2 = document.getElementById("core-2").valueAsNumber;
let core3 = document.getElementById("core-3").valueAsNumber;
let message = "Your career options include but are not limited to: ";
function calculateAPS() {
  let APS = english + homeLang + math + core1 + core2 + core3;
  console.log(APS);
  switch (subjects) {
    case historySubjects:
      console.log("Your career options include but are not limited to: ");
    case commerceSubjects:
      console.log("Your career...");
  }
  if (APS >= 30) {
    console.log("Congratulations on your hard work!");
  } else if (APS < 20) {
    console.log(
      "Congratulations on completing your matriculation! Consider rewriting for better tertiary education prospects.",
    );
  }
}
