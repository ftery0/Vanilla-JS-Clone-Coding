const toDoform=document.getElementById("todo_form");
const toDoinput=document.querySelector("#todo_form input");
//const toDoinput=toDoform.querySelector("input");  위에 코드랑 같은 말임 하지만 위에 코드가 더 클린 코드
const toDolist=document.getElementById("todo_list");
let todos=[];
const TODO_KEY="todos"

function saveToDo(){
    localStorage.setItem(TODO_KEY,JSON.stringify(todos));
}

function paintToDo(newtodo){
    const li=document.createElement("li");
    li.id=newtodo.id;
    const span=document.createElement("span");
    span.innerText=newtodo.text;
    const button=document.createElement("button");
    button.innerText="❌";
    button.addEventListener("click",deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    toDolist.appendChild(li);
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter(toDo => toDo.id !== parseInt(li.id)); // <-- Corrected typo.
    saveToDo();
}
 


function handtoSubmit(event){
    event.preventDefault();
    const newtodo=toDoinput.value;
    toDoinput.value = "";
    const newtodoOBJ={
        text:newtodo,
        id:Date.now(),
    };
    todos.push(newtodoOBJ);
    paintToDo(newtodoOBJ);
    saveToDo();
}


toDoform.addEventListener("submit", handtoSubmit);

const savedToDos = localStorage.getItem(TODO_KEY);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
