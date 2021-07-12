let input = document.getElementById("add_input");
let button = document.getElementById("add_button");
let task = document.getElementsByClassName("listTasks");

let todoList = [];
button.addEventListener('click', function(){
	// if(input.value ==''){
	// 	return false;
	// }else{
	// 	task.innerHTML = input;
	// }

	let newTodo = {
		todo: input.value,
		checked: false,
		important: false
	};
	todoList.push(newTodo);
	displayMessages();
});
  function displayMessages(){
  	todoList.forEach(function(item, i){
  		console.log(item);
  	});

  }