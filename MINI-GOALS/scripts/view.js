/*--MOTIVATIONAL--*/
function randomQuotes(items){	
	return items[Math.floor(Math.random()*items.length)];

} 

var mquotes = ["Focus on being productive instead of busy.", "Do the hard jobs first", 
				"Lost time is never found again.", "Action is the foundational key to all success.",
				"If you spend too much time thinking about a thing, you’ll never get it done",
				"Sometimes the best way to get through a roadblock is to just keep going.",
				"The sooner you get started, the sooner you’ll finish."];


/*--CLOCK--*/

setInterval(() => {

let day = new Date();
let hh = day.getHours() * 30;
let mm = day.getMinutes() * deg;
let ss = day.getSeconds() * deg;

hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
mn.style.transform = `rotateZ(${mm}deg)`;
sc.style.transform = `rotateZ(${ss}deg)`;

}); 