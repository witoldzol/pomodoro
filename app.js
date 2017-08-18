
// ------- VARIABLES ------ JS


//time in minutes
let minPomodoro = 25 
let minBrake = 5

//convert time to seconds
let setTime = minPomodoro * 60

//timer switch
let timerRunning = false

//------ BUTTONS --- HTML

//start button
let startBtn = document.getElementById('start')

//reset button
let resetBtn = document.getElementById('reset')

//plus button
let plusBtn = document.getElementById('plus')

//minus button 
let minusBtn = document.getElementById('minus')

//element displaying main clock
let clock = document.getElementById("clock")

//element displaying brake time
let brake = document.getElementById('brake')

    
//add zeros to minutes in html
function updateTimeDisplay () {

    clock.textContent = minPomodoro + ':00'
    brake.textContent = minBrake + ':00'
    
}

//run initial update (add zeros lol)
updateTimeDisplay()


//----function for PLUS button 

plusBtn.onclick = () => {
    
    //if timer is not started, we can update time
    if(!timerRunning) {

        minPomodoro++
        updateTimeDisplay()       

    }
}

//----- function for START button
startBtn.onclick = () => {

    //start
    if(startBtn.textContent == 'START') {

        timerObject.start(setTime, clock)
        startBtn.textContent = 'PAUSE'
        timerRunning = true
    
    //pause    
    } else if( startBtn.textContent == 'PAUSE') {

       timerObject.pause()
       startBtn.textContent = 'RESUME' 
    
    //resume
    } else if ( startBtn.textContent == 'RESUME') {

       timerObject.start(minutes*60 + seconds, clock)
       startBtn.textContent = 'PAUSE'

    }

}


// ------ function for RESET button

resetBtn.onclick = () => {
    
    alarm('djflkd')
    timerObject.reset()

}

//--------- CLOCK FUNCTION --------------


//timerObject, with methods for play / pause / resume
let timerObject = {

    //duration is in seconds!
    start: function (duration, display) {

            let timer = duration
            //actual timer function
            this.interval = setInterval(function () {

                minutes = parseInt(timer / 60, 10)
                seconds = parseInt(timer % 60, 10)

                minutes = minutes < 10 ? "0" + minutes : minutes
                seconds = seconds < 10 ? "0" + seconds : seconds

                display.textContent = minutes + ":" + seconds

                if (--timer < 0) {
                    timer = duration
                }
            }, 1000)

    },

    pause: function () {

        clearInterval(this.interval)

        //not sure if this is needed (the deletion line)
        //delete this.interval
    },

    reset: function () {

        clearInterval(this.interval)
        delete this.interval
        //reset timers to default
        minPomodoro = 25 
        minBrake = 5
        //update display
        updateTimeDisplay()
    }


}