//select  the element
const clear = document.querySelector(".clear"); //refresh button icon
const list = document.getElementById("list"); //selects list
const input = document.getElementById("input"); //selects input
const testArea = document.getElementById("motivationalTextArea"); //selects input
const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

//classes names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

//Variables
let LIST,id;

// get item from localstorage
 let data = localStorage.getItem("TODO");

//check if data is not empty
if(data){
	LIST = JSON.parse(data);
	id = LIST.length;
	loadList(LIST);
} else {
	LIST = [];
	id = 0;
}

//load items to the user's interface
function loadList(array){
	array.forEach(function(item){
		addToDo(item.name, item.id, item.done, item.trash);
	}

)};
function addToDo(toDo,id,done,trash){

	const DONE = done ? CHECK : UNCHECK;
	const LINE = done ? LINE_THROUGH : "";
	

	//item
	const item = `<li class="item">
					<i class= "fa ${DONE} "style="padding-left: 5px; padding-top: 8px" job="complete" id="0"></i>
					<p class="text ${LINE}">${toDo}</p>
					<i class="fa fa-times de" job="delete" id="0"></i> 
				</li> `;

	const position = "beforeend";

	//call list to put the item
	list.insertAdjacentHTML(position,item);

} 
function addMotivation(words){

	const test = words;
	const temp = `<p class="motivational animate__animated animate__fadeIn animate__delay-3s" id="showMotivation"> 
					${words}</p>`;

	document.getElementById("motivationalTextArea").innerHTML = temp;
	
}

function completeToDo(element){
	element.classList.toggle(CHECK);
	element.classList.toggle(UNCHECK);

	element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

	LIST[element.id].done = LIST[element.id].done ? false :true ;
}

function removeToDo(element){
	element.parentNode.parentNode.removeChild(element.parentNode);

	LIST[element.id].trash = true;

}

function addMotivationalQuotes(quotes){

}