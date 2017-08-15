
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

let minPomodoro = 25
let minBrake = 5

clock.textContent = minPomodoro
brake.textContent = minBrake

startBtn.onclick = () => startTimer()

function startTimer () {

    //do here the timer function
}


