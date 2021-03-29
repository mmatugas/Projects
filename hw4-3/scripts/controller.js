//press enter button to add
document.addEventListener("keyup",function(event){
	if(event.keyCode == 13){
		const toDo = input.value;
		if(toDo){
			addToDo(toDo, id, false, false);
			LIST.push({
				name : toDo,
				id : id,
				done : false,
				trash : false
			});

			localStorage.setItem("TODO", JSON.stringify(LIST));
			id++;
		}
		input.value = "";

		const randomQ = randomQuotes(mquotes);
		addMotivation(randomQ);
	}
})
//click the target element in the list and it will do its' job
list.addEventListener("click", function(){
	const element = event.target;
	const elementJob = element.attributes.job.value;

	if(elementJob == 'complete'){
		completeToDo(element);
	} else if(elementJob == "delete"){
		removeToDo(element);
	}

	//add item to the localstorage
	localStorage.setItem("TODO", JSON.stringify(LIST));
});

//for loadList array 
clear.addEventListener("click", function(){
	localStorage.clear();
	location.reload();
});