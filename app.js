
//------OBJECTS

//start button
let startBtn = document.getElementById('start')
let flag = 0

//element displaying main clock
let clock = document.getElementById("clock")

//default values
let pomodoroTime = 25
let pomodoroBrake = 5

//duration in seconds
let duration = pomodoroTime * 60

//timer function
function startTimer(duration, display) {


    let timer = duration

    let timerFunction = setInterval(function () {

        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10)

        minutes = minutes < 10 ? "0" + minutes : minutes
        seconds = seconds < 10 ? "0" + seconds : seconds

        display.textContent = minutes + ":" + seconds

        if (--timer < 0) {
            timer = duration
        }
    }, 1000)
}

//start&pause timer and change button name 
function starter () {

    

    if (flag === 0) {

        flag = 1
        startTimer(duration, clock)
    } 
    else {

        flag = 0 
        clearInterval(timerFunction);
    }

}

//start button on click
startBtn.onclick = starter()

// to do:

-fix the pausing 
-do the name change on the  button
-make an loop between pomodoro timer and brake timer (transition and auto reset)
