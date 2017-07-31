
//element displaying main clock
let clock = document.getElementById("clock")

let startDate = new Date()

let pomodoroClock = 25

let timer = startDate.setMinutes(pomodoroClock).setSeconds(0)

let sec = timer.getSeconds()
let min = timer.getMinutes()

alert(sec)
alert(min)
let counter = function () {

	sec--
	if(sec == 00) {
		sec = 60
		min--
	}
	clock.innerHTML = (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec)

	
}

counter()

setInterval(counter, 1000)	




