// Function we use to create an object 
function Stopwatch(elem) { //constructor function
    var time = 0.60; // reset
    var interval; // Pause
    var offset; //

    function update() {
        if (this.isOn) {
            time += delta();
        }

        elem.textContent = timeFormatter(time);
    }

    function delta() {
        var now = Date.now();
        var timePassed = now - offset;

        offset = now;

        return timePassed;
    }

    function timeFormatter(time) {
        time = new Date(time);

        var minutes = time.getMinutes().toString();
        var seconds = time.getSeconds().toString();
        var milliseconds = time.getMilliseconds().toString();
// Smaller than two zeros
        if (minutes.length < 2) {
            minutes = '0' + minutes; //Add zero
        }
// Smaller than two zeros
        if (seconds.length < 2) {
            seconds = '0' + seconds; //Add zero
        }
// Smaller than three zeros
        while (milliseconds.length < 3) {
            milliseconds = '0' + milliseconds; //Add zero
        }
// Give back in that way
        return minutes + ' : ' + seconds + ' : ' + milliseconds;
    }
// Function to get started
    this.start = function () {
        interval = setInterval(update.bind(this), 10);
        offset = Date.now();
        this.isOn = true; // Start the clock
    };

    this.stop = function () {
        clearInterval(interval);
        interval = null;
        this.isOn = false; // Stop the clock
    };

    this.reset = function () {
// If the clock has stopped then you will enter
        if (!this.isOn) { 
            time = 0; // reset
            update(); 
        }
    };

    this.isOn = false; // Stop the clock
}