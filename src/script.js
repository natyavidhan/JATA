loadTodo();
function addTodo(){
    var todo = document.getElementById("item-name").value;
    if (todo == ""){
        return;
    }else{
        var alltodos = localStorage.getItem("todos") || "[]";
        var todos = JSON.parse(alltodos);
        todos.push([todo, false]);
        localStorage.setItem("todos", JSON.stringify(todos));
        document.getElementById("item-name").value = "";
        loadTodo();
    }
}

function loadTodo(){
    var alltodos = localStorage.getItem("todos") || "[]";
    var todos = JSON.parse(alltodos);
    var newInnerHTML = "";
    for(var i = 0; i < todos.length; i++){
        var todoText = todos[i][0]
        var todoState = todos[i][1]
        var todo = `
<div class="todo-item">
    <h3 class="todo-item-name${todoState? " done" : ""}">${todoText}</h3>
    <div class="buttons">
        <button class="todo-item-button" onclick="completeTodo(${i})">✅</button>
        <button class="todo-item-button" onclick="removeTodo(${i})">🗑️</button>
    </div>
</div>`;
        newInnerHTML += todo;
    }
    document.getElementById("todo-list").innerHTML = newInnerHTML;
}

function completeTodo(todo){
    try{
        var alltodos = localStorage.getItem("todos") || "[]";
        var todos = JSON.parse(alltodos);
        todos[todo][1] = true;
        localStorage.setItem("todos", JSON.stringify(todos));
    }catch(e){
        console.log(e);
    }
    loadTodo();
}

function removeTodo(todo){
    try{
        var alltodos = localStorage.getItem("todos") || "[]";
        var todos = JSON.parse(alltodos);
        todos.splice(todo, 1);
        localStorage.setItem("todos", JSON.stringify(todos));
    }catch(e){
        console.log(e);
    }
    loadTodo();
}