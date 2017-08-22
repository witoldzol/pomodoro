
// ------- VARIABLES ------ JS


//time in minutes
let minPomodoro = 0.1 
let minBrake = 0.1

//convert time to seconds
let setTime = (x) => x*60

//timer switch
let timerRunning = false

//brake timer switch
let brakeRunning = false

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
        //recalculate dependent variable
        //setTime=minPomodoro*60
        updateTimeDisplay()       

    }
}

//-----function for MINUS button

minusBtn.onclick = () => {

    //if timer is not started, we can update time
    if(!timerRunning) {

        //set minimum limit, so we won't run into negative values
        if(minPomodoro > 1){

            minPomodoro--
            updateTimeDisplay()
        }
        
    }
    
}


//----- function for START button
startBtn.onclick = () => {

    //start
    if(startBtn.textContent == 'START') {

        timerObject.start(setTime(minPomodoro), clock)
        startBtn.textContent = 'PAUSE'
        timerRunning = true
    
    //pause    
    } else if( startBtn.textContent == 'PAUSE') {

       timerObject.pause()
       startBtn.textContent = 'RESUME' 
    
    //resume
    } else if ( startBtn.textContent == 'RESUME') {
       //use existing minutes variable
       // transform into seconds, add reminder and pass it in 
       timerObject.start(minutes*60 + seconds, clock)
       startBtn.textContent = 'PAUSE'

    }

}


// ------ function for RESET button

resetBtn.onclick = function() {
    
    window.location.reload()

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

                //Timer runs out of time, we switch
                if (--timer < 0) {
                    //if our pomodoro is running, we switch to brake timer
                    if( timerRunning ){

                        timer = duration
                        timerObject.pause()
                        timerRunning = false
                        brakeRunning = true
                        //PLAY SOUND
                        timerObject.start(setTime(minBrake),brake)

                    //if our brake timer runs out, we clear all
                    } else {

                        timer = duration
                        timerObject.pause()
                        timerRunning = true
                        brakeRunning = false
                        //PLAY SOUND
                        timerObject.start(setTime(minPomodoro),clock)
                    }


                }
            }, 1000)

    },

    pause: function () {
        clearInterval(this.interval)

        //not sure if this is needed (the deletion line)
        //delete this.interval
    }

}