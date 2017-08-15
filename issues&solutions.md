1#

issue: button autofired when page loaded

ans: if you pass value to the function ex. 

	let test = function(x,y) {do something};

it will first evaluate the function, and THEN assign it to the 'test' variable

example solution:

	//use anonymous function
	startBtn.onclick = () => alert('dlfkjd')
	