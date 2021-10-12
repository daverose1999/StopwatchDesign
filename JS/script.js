// imports the timer 'div' as a variable, using it's id, so we can modify it as we wish.
const timer = document.getElementById('stopwatch');

//we are creating the hour, minute and second variables and we are declaring that their initial value is 0.
var hr = 0;
var min = 0;
var sec = 0;

//verify if the stopwatch is running or not.
var stoptime = true;

//when we click the start button, if the stopwatch is not running, turn it on and go to the timerCycle() function.
function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}

//when you click the stop button, if the stopwatch is running, turn it off.
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function timerCycle() {
    if (stoptime == false) { //verify that the stopwatch is on.

    //these are used to parse a string into an integer.
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1; //add 1 to seconds.

    if (sec == 60) { // if seconds are equal to 60, minutes = 1 and seconds becomes 0 again.
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {  // if minutes are equal to 60, hours = 1 and seconds + minutes becomes 0 again.
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    //If seconds, minutes and/or hours are lower than 10, add a 0 in front. 
    //This is why we need to parse everything in the beginning: doing this operation they become strings.
    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }

    //Add everything to the timer
    timer.innerHTML = hr + ':' + min + ':' + sec;  

    //this will make sure there is a timeout of 1000 ms (1s) before repeating the 'timerCycle()'.
    //The JavaScript setTimeout() method is a built-in method that allows you to time the execution of a certain function . 
    setTimeout("timerCycle()", 1000);
  }
}

function resetTimer() {
    timer.innerHTML = '00:00:00';
}