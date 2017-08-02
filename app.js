

//element displaying main clock
let clock = document.getElementById("clock")

let start = new Date()

let min = startDate.getMinutes()
let sec = startDate.getSeconds()

clock.innerHTML = min + ':' + sec

let counter = function () {

	sec--

	if(sec == 00) {

		sec = 60
		min--
	}

	clock.innerHTML = (min < 10 ? "0" + min : min)
	 + ":" + (sec < 10 ? "0" + sec : sec)
	clock.innerHTML = min + ':' + sec
	
}

counter()

setInterval(counter, 1000)	
