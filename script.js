//let subject = prompt(
// "Enter your score for a subject (e.g. if you got level 4, enter 4."
//);
//subject = Number(subject);
//let maximum = 6 + 1;
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
let message = "Your career options include but are not limited to: ";
function calculateAPS() {
  let APS; //the sum of all categorized subjects - Life orientation;
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
      "Congratulations on completing your matriculation! Consider rewriting for better tertiary education prospects."
    );
  }
}
