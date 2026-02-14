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
  results.innerText = "APS: " + APS;
  let encouragement = document.getElementById("encouragement");

  if (APS >= 30) {
    console.log("Congratulations on your hard work!");
    encouragement.innerText = "Congratulations on your hard work!";
  } else if (APS < 20) {
    console.log(
      "Congratulations on completing your matriculation! Consider rewriting for better tertiary education prospects.",
    );
    encouragement.innerText =
      "Congratulations on completing your matriculation! Consider rewriting for better tertiary education prospects.";
  } else {
    console.log("Congratulations and best of luck!");
    encouragement.innerText = "Congratulations and best of luck!";
  }
}

let scienceCareer = document.getElementById("science-careers");
function suggestScienceCareer() {
  console.log("Good choice! Here are some careers you can pursue.");
  scienceCareer.innerText =
    "Good choice! Here are some careers you can pursue.";
  let career1 = document.getElementById("choice-1");
  let career2 = document.getElementById("choice-2");
  let career3 = document.getElementById("choice-3");
  let career4 = document.getElementById("choice-4");
  let career5 = document.getElementById("choice-5");
  /* career1.innerText = "Civil Engineering";
  career2.innerText = "Electrical Engineering";
  career3.innerText = "Mining Engineering";
  career4.innerText = "Chemical Engineering";
  career5.innerText = "Medicine"; */
}
function suggestTechnicalCareer() {
  console.log("Great choice! people with your skill-set do well in...");
  scienceCareer.innerText =
    "Great choice! people with your skill-set do well in...";
}
function suggestCommerceCareer() {
  console.log("You'd be a great fit at business school!");
  scienceCareer.innerText = "You'd be a great fit at business school!";
}
function suggestHistoryCareer() {
  console.log("Most people with your subjects excel in ...");
  scienceCareer.innerText = "Most people with your subjects excel in ...";
}
