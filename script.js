function calculateAPS() {
  let english = document.getElementById("english").valueAsNumber;
  let homeLang = document.getElementById("home-language").valueAsNumber;
  let math = document.getElementById("math").valueAsNumber;
  let core1 = document.getElementById("core-1").valueAsNumber;
  let core2 = document.getElementById("core-2").valueAsNumber;
  let core3 = document.getElementById("core-3").valueAsNumber;
  let APS = english + homeLang + math + core1 + core2 + core3;
  console.log(APS);
  let results = document.getElementById("aps");
  results.innerHTML = "APS: " + APS;
  let encouragement = document.getElementById("encouragement");

  if (APS >= 30) {
    console.log("Congratulations on your hard work!");
    encouragement.innerHTML = "Congratulations on your hard work!";
  } else if (APS < 20) {
    console.log(
      "Congratulations on completing your matriculation! Consider rewriting for better tertiary education prospects.",
    );
    encouragement.innerHTML =
      "Congratulations on completing your matriculation! Consider rewriting for better tertiary education prospects.";
  } else {
    console.log("Congratulations and best of luck!");
    encouragement.innerHTML = "Congratulations and best of luck!";
  }
}
function suggestCareer() {
  let science = document.getElementById("science");
  let technical = document.getElementById("technical");
  let commerce = document.getElementById("commerce");
  let history = document.getElementById("history");
  if (science.addEventListener("click")) {
    //was trying to distinguish clicked elements without having to code different functions. Crashed!
    console.log("Good choice! Here are some careers you can pursue.");
  } else if (technical.addEventListener("click")) {
    console.log("Great choice! people with your skill-set do well in...");
  } else if (commerce.addEventListener("click")) {
    console.log("You'd be a great fit at business school!");
  } else if (history.addEventListener("click")) {
    console.log("Most people with your subjects excel in ...");
  }
}
