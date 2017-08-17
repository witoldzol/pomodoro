
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

        timer.go(25, clock)
        startBtn.textContent = 'PAUSE'
        
    } else if( startBtn.textContent == 'PAUSE') {

       timer.pause()
       startBtn.textContent = 'RESUME' 
    
    } else if ( startBtn.textContent == 'RESUME') {

       timer.go(this.interval, clock)
       startBtn.textContent = 'PAUSE'

    }

}

//timer function
let timer = {

    go: function (duration, display) {

            delete this.interval
            //we need to convert minutes to seconds
            let timer = duration * 60

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
        delete this.interval
    }

}