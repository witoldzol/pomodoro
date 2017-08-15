
//default values
let pomodoroTime = 25
let pomodoroBrake = 5

//duration in seconds
let duration = pomodoroTime * 60

//add time 
function addTime (){

    let value = clock.textContent
    value++
    clock.textContent = value
}

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

        startTimer(duration, clock)

}


//$('#start').click( startTimer(duration, clock) )
$('#start').on('click', starter() )

