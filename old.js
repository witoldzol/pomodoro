
//------ BUTTONS ---

//start button
let startBtn = document.getElementById('start')

//plus button
let plusBtn = document.getElementById('plus')

//minus button 
let minusBtn = document.getElementById('minus')

//element displaying main clock
let clock = document.getElementById("clock")

//element displaying brake time
let brake = document.getElementById('brake')

// in minutes
let minPomodoro = 25 
let minBrake = 5

clock.textContent = minPomodoro + ':00'
brake.textContent = minBrake + ':00'

startBtn.onclick = () => {

    if(startBtn.textContent == 'START') {

        startTimer(minPomodoro, clock)
        startBtn.textContent = 'PAUSE'
        
    } else {

       

    }

}

//timer function
function startTimer(duration, display) {

    //we need to convert minutes to seconds
    let timer = duration * 60

    //actual timer function
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

    let pause = function pause() {

        clearInterval(timerFunction)
    }

}

