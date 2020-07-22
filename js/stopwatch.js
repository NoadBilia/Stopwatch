var h1 = document.querySelector("h1");
var secDOM = document.querySelector("#points5");
var sec = 60;
var timer = null;

h1.addEventListener("click", start);

function start() {
    startTimer();
}

function startTimer() {
    timer = setInterval(function () {
        if (sec == 0) {
            clearTimeout(timer);
            gameOver();
        } else {
            sec--;
            secDOM.innerHTML = sec;
        }
    }, 1000)
}

function gameOver() {
    alert("game over \n your score is: " + score);

    if (score > topUsers[4].score) {
        if (score > topUsers[3].score) {
            if (score > topUsers[2].score) {
                if (score > topUsers[1].score) {
                    if (score > topUsers[0].score) {
                        topUsers.pop();
                        topUsers.splice(0, 0, promte())
                        updateLS();
                        createHTML();
                    } else {
                        topUsers.splice(1, 0, promte())
                        updateLS();
                        createHTML();
                    }
                } else {
                    topUsers.splice(2, 0, promte())
                    updateLS();
                    createHTML();
                }
            } else {
                topUsers.splice(3, 0, promte())
                updateLS();
                createHTML();
            }
        } else {

        }
    }
}

function promte() {
    var prom = prompt("Enter your name");
    return prom;
}