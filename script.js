function calculateAPS() {
  let english = document.getElementById("english").valueAsNumber;
  let homeLang = document.getElementById("home-language").valueAsNumber;
  let math = document.getElementById("math").valueAsNumber;
  let core1 = document.getElementById("core-1").valueAsNumber;
  let core2 = document.getElementById("core-2").valueAsNumber;
  let core3 = document.getElementById("core-3").valueAsNumber;
  let APS = english + homeLang + math + core1 + core2 + core3;
  console.log(APS);

  if (APS >= 30) {
    console.log("Congratulations on your hard work!");
  } else if (APS < 20) {
    console.log(
      "Congratulations on completing your matriculation! Consider rewriting for better tertiary education prospects.",
    );
  } else {
    console.log("Congratulations and best of luck!");
  }
}
function suggestCareer() {
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
  scienceSubjects = document.getElementById("science").value;
  commerceSubjects = document.getElementById("commerce").value;
  historySubjects = document.getElementById("history").value;
  let subjects = [scienceSubjects, commerceSubjects, historySubjects];
  let message = "Your career options include but are not limited to: ";
  switch (subjects) {
    case historySubjects:
      console.log(message);
    case commerceSubjects:
      console.log("You would excel in...");
    case scienceSubjects:
      console.log("People with your subject combination are eligible for...");
  }
}
