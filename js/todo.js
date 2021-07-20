window.onload = function(){
	let todoList = [];
		if(localStorage.getItem('todo')!=undefined){
			todoList = JSON.parse(localStorage.getItem('todo'));
			out();
		}
	let button = document.getElementById("add_button").addEventListener('click', function(){
		let input = document.getElementById("add_input").value;
		let temp = {};
		temp.todo = input;
		temp.check = false;
		let i = todoList.length;
		todoList[i] = temp;
		console.log(todoList);
		out();
		localStorage.setItem('todo', JSON.stringify(todoList));
	})
	function out(){
		let out = '';
		for (let key in todoList){
			if (todoList[key].check === true){
				out += '<input type = "checkbox" checked>';
			}
			else{
				out += '<input type = "checkbox">';
			}
			out += todoList[key].todo +'<br>';
		}
		document.getElementById("out").innerHTML = out;
	}
}










// let input = document.getElementById("add_input");
// let button = document.getElementById("add_button");
// let task = document.getElementById("out");

// let todoList = [];
// button.addEventListener('click', function(){
// 	// if(input.value ==''){
// 	// 	return false;
// 	// }else{
// 	// 	task.innerHTML = input;
// 	// }

// 	let newTodo = {
// 		todo: input.value,
// 		checked: false,
// 		important: false
// 	};
// 	todoList.push(newTodo);
// 	displayMessages();
// });
//   function displayMessages(){
//   	todoList.forEach(function(item, i){
//   		console.log(item);
//   	});

//   }