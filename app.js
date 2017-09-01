
// ------- VARIABLES ------ JS


    //time in minutes
    let minPomodoro = 0.030
    let minBrake = 0.03

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




//----------- ELEMENT FOCUS SWITCHES--------

    //switch for clock element
    let clockFocused = true
    //switch for brake timer element
    let brakeFocused = false

    //flip switches on focus

    $(clock).on('focus', () => {clockFocused = true; brakeFocused = false} )
    $(brake).on('focus', () => {clockFocused = false; brakeFocused = true} )


    
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

        //if we focused brake element last, it will update the brake timer
        if(brakeFocused){
            
            minBrake++

        } else {

            minPomodoro++
        }
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
        if( minPomodoro > 1 ){

            if(brakeFocused){
                
                if ( minBrake >= 1 ) {

                    minBrake--
                }

            } else {

                minPomodoro--
            }

            updateTimeDisplay()
        }
        
    }
    
}


function expand () {

    let elem
    let hideEle
    
    if(timerRunning){

        elem = clock
        hideEle = brake
        
    } else {

        elem = brake
        hideEle = clock
    }
    
    elem.style.left = '0vh'
    elem.style.borderRadius = '0'
    elem.style.width = '100%'

    if(timerRunning){

        elem.style.backgroundColor = '#ff8000'
        elem.style.display = 'initial'
        
    } else {

        elem.style.backgroundColor = '#008744'
        elem.style.display = 'initial'
    }
    

    hideEle.style.display = 'none' 

}


//----- function for START button
startBtn.onclick = () => {

    //START BUTTON
    if(startBtn.textContent == 'START') {

        timerObject.start(setTime(minPomodoro), clock)
        startBtn.textContent = 'PAUSE'
        timerRunning = true
        
        //transition element to expand on the whole screen 
        expand()

    //PAUSE BUTTON    
    } else if( startBtn.textContent == 'PAUSE') {

       timerObject.pause()
       startBtn.textContent = 'RESUME' 
    
    //RESUME BUTTON
    } else if ( startBtn.textContent == 'RESUME') {
       
       //use existing minutes variable
       // transform into seconds, add reminder and pass it in 

       //if statment to check which timer(main or brake) needs to be resumed
       if( timerRunning ) {

           timerObject.start(minutes*60 + seconds, clock)
        //brake timer
       } else {

           timerObject.start(minutes*60 + seconds, brake)

       }
       //change button name
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

                //--- TIMER SWITCH ---- When Timer runs out of time, we switch
                if (--timer < 0) {
                    //if our pomodoro is running, we switch to brake timer
                    if( timerRunning ){

                        timer = duration
                        timerObject.pause()
                        timerRunning = false
                        brakeRunning = true
                        play()
                        expand()
                        timerObject.start(setTime(minBrake),brake)

                    //if our brake timer runs out, we clear all
                    } else {

                        timer = duration
                        timerObject.pause()
                        timerRunning = true
                        brakeRunning = false
                        play()
                        expand()
                        timerObject.start(setTime(minPomodoro),clock)
                    }


                }
            }, 1000)

    },

    pause: function () {

        clearInterval(this.interval)

    }

}


// ------- Play sound function

function play() {
    
    let audio = document.getElementById('audio')
    audio.play()

}

