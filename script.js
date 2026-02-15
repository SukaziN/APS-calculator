function calculateAPS() {
  let english = document.getElementById("english").valueAsNumber;
  let homeLang = document.getElementById("home-language").valueAsNumber;
  let math = document.getElementById("math").valueAsNumber;
  let core1 = document.getElementById("core-1").valueAsNumber;
  let core2 = document.getElementById("core-2").valueAsNumber;
  let core3 = document.getElementById("core-3").valueAsNumber;
  let APS = english + homeLang + math + core1 + core2 + core3;
  let results = document.getElementById("aps");
  results.innerText = "APS: " + APS;
  let encouragement = document.getElementById("encouragement");

  if (APS >= 30) {
    encouragement.innerText = "Congratulations on your hard work!";
  } else if (APS < 20) {
    encouragement.innerText =
      "Congratulations on completing your matriculation! Consider rewriting for better tertiary education prospects.";
  } else {
    encouragement.innerText = "Congratulations and best of luck!";
  }
}
let career1 = document.getElementById("choice-1");
let career2 = document.getElementById("choice-2");
let career3 = document.getElementById("choice-3");
let career4 = document.getElementById("choice-4");
let career5 = document.getElementById("choice-5");

let career = document.getElementById("careers");
let title = document.getElementById("subject-title");
function suggestScienceCareer() {
  title.innerText = "Science";
  career.innerHTML =
    "<em>Your career options include, but are NOT limited to:<em> ";

  career1.innerText =
    "Engineering: Civil, Electrical, Mining, Chemical, Mechanical, Metallurgy, Industrial";
  career2.innerText = "Medicine";
  career3.innerText = "Pharmacy";
  career4.innerText = "Computer Science";
  career5.innerText = "Optometry";
}
function suggestTechnicalCareer() {
  title.innerText = "Science with technical subjects";
  career.innerHTML =
    "<em>Your career options include, but are not limited to:<em> ";

  career1.innerText = "Information Systems";
  career2.innerText = "Information Technology";
  career3.innerText = "Financial Services Operations";
  career4.innerText = "Mine Surveying";
  career5.innerText = "Sport and Exercise Sciences";
}
function suggestCommerceCareer() {
  title.innerText = "Commerce";
  career.innerHTML =
    "<em>Your career options include, but are not limited to:<em> ";

  career1.innerText = "Accountancy";
  career2.innerText = "Human Resource Management";
  career3.innerText = "Logistics";
  career4.innerText = "Industrial Psychology";
  career5.innerText = "Tourism Development and Management";
}
function suggestHistoryCareer() {
  title.innerText = "History";
  career.innerHTML =
    "<em>Your career options include, but are not limited to:<em> ";

  career1.innerText = "Education";
  career2.innerText = "Social Work";
  career3.innerText = "Public Relations and Communication";
  career4.innerText = "LLB Law";
  career5.innerText = "Information Management";
}
