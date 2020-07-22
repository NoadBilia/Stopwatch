var h1 = document.querySelector("h1"); // תופס את תגית איץ1 
var spinners = document.querySelector("#spinner"); // תופס את תגית ספינר
var points = document.querySelector("#points"); // תופס את תגית נקודות
var background = document.querySelector("#background"); // תופס את תגית איץ1 
var Timer = document.querySelector("#toggle");
var miss = document.querySelector("#points4");
var levelLVL = document.querySelector("#points3");
var Nlevel = document.querySelector("#points2");
var score = 0; // ניקוד שלך מתחיל באפס
var timer = 60;
var clicks = 0;
var level = 1;
var i = 0;
var n = 300;
var num = 2;



h1.addEventListener("click", startGame); // אם אתה לוחץ על איץ1 תשלח לפונקציה התחלת משחק
background.addEventListener("click", addMiss); // אם לוחצים על הדיב שולח אותי לפונקציה הוספת ניקוד

function startGame() { // פונקצית תחילת משחק
  h1.textContent = 'STOP GAME' // שינוי של הכותרת לסטוף
  spinner.style.animationDuration = num + "s"; // באיזה מהירות הסתובב הדיב
  spinners.addEventListener("mouseover", escape); // אם אתה עובר על הדיב תשלח לפונקצית בריחה
  background.addEventListener("click", reducePoint);
  spinner.addEventListener("click", addPoint); // אם לוחצים על הדיב שולח אותי לפונקציה הוספת ניקוד
}

function escape() { // פונקצית בריחה של הדיב
  setTimeout(function () {
    spinners.style.top = Math.floor(Math.random() * 640 + 10) + "px"; // מוקומות רנדומלי שהוא קופץ אליהם
    spinners.style.left = Math.floor(Math.random() * 1250 + 10) + "px"; // מוקומות רנדומלי שהוא קופץ אליהם
  }, n); // כל ריחוף מעל הדיב זה יברח אחרי 300 מילי שניות 
}

function reducePoint() { // פונקציה להוספה נקודות אם הצלחתי ללחוץ על הדיב
  score = score - (level * 1); // תוסיף 10 נקודות
  points.innerHTML = score; // מכניס את הערך שיש בציון לנקודות
}

function addPoint(e) {
  e.stopPropagation() // פונקציה להוספה נקודות אם הצלחתי ללחוץ על הדיב
  score = score + (level * 10); // תוסיף 10 נקודות
  points.innerHTML = score; // מכניס את הערך שיש בציון לנקודות
  i++;
  levelup();
  NextLevel();

}

function addMiss() { // פונקציה להוספה נקודות אם הצלחתי ללחוץ על הדיב
  clicks = clicks + 1; // תוסיף 10 נקודות
  miss.innerHTML = clicks;
}

function levelup() {
  if (i == 10) {
    if (level == 5) {
      alert("you win \n your score is: " + score);

      if (score > topUsers[4].score) {
        if (score > topUsers[3].score) {
          if (score > topUsers[2].score) {
            if (score > topUsers[1].score) {
              if (score > topUsers[0].score) {
                topUsers.pop();
                topUsers.splice(0, 0, username.prompt("Enter your name"))
              } else {
                topUsers.splice(1, 0, prompt("Enter your name"))
                updateLS();
              createHTML();              }
            } else {
              topUsers.splice(2, 0, prompt("Enter your name"))
            }
          } else {
            topUsers.splice(3, 0, prompt("Enter your name"))
          }
        } else {
          
        }
      }


    }
    level++;
    levelLVL.innerHTML = level; // מכניס את הערך שיש בציון לנקודות
    num = num - 0.25;
    sec = sec + 10;
    n = (n - 50)
    i = 0;
  }
}

function prompt() {

}

function NextLevel() {
  var j = (10 - i);
  Nlevel.innerHTML = j; // מכניס את הערך שיש בציון לנקודות
}



















var topUsers = [ // מערך של יוזרים שיש במערכת
  {
    username: "meir",
    /* 0 */
    date: "20/07/2020",
    score: 300
  },
  {
    username: "orel",
    /* 1 */
    date: "17/07/2020",
    score: 450
  },
  {
    username: "noad",
    date: "13/07/2020",
    score: 150
  },
  {
    username: "rivka",
    date: "10/07/2020",
    score: 100
  },
  {
    username: "riki",
    date: "01/07/2020",
    score: 200
  }];

function createHTML() { // יצירת אי טי אמ אל
  var toAppend = ""; // סטרינג ריק
  topUsers.forEach(toAppend); // תיגש למערך של האובייקטים . תעבור על המערך
  toAppend += ` 
  <div>${topUsers.username}</div>
  <div>${topUsers.date}</div>
  <div>${topUsers.score}</div>
  `;
  return toAppend;
}

class Car { //  c-tor יצירת 
  constructor(_username, _date, _score) {
    this.username = _username;
    this.date = _date;
    this.score = _score;
  }
}


function updateLS() {
  var carsJSON = JSON.stringify(topUsers);
  localStorage.setItem("LSCars", carsJSON);
}


var usersJSON = localStorage.getItem("users");
if (usersJSON != null) {
  users = JSON.parse(usersJSON);
}
TopPlayer.innerHTML = createHTML();


// function stopGame() {
//   h1.textContent = 'START GAME' // שינוי של הכותרת להתחיל את המשחק

// }