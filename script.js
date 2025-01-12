const inputbox=document.getElementById('inputbox');
const addbtn=document.getElementById('addbtn');
const todolist=document.getElementById('todolist');


let editTodo = null; //making a global var to use in the fn addtodo and updatetodo as weel

//fn addtodo to add list

const addtodo =() => {
    const inputText=inputbox.value.trim();
    if(inputText.length<=0){
        alert("type something");
        return false; //nhi toh ye khali blank ko bhi addd kr dega
    }
    
    if(addbtn.value === "Edit"){ //in updatetodo fn we change the btn value from Add to Edit
        editTodo.target.previousElementSibling.innerHTML=inputText;
        addbtn.value="Add";
        inputbox.value="";

    }else{

    
    // creating p and li tag
    const li=document.createElement("li");
    const p=document.createElement("p");

    p.innerHTML=inputText;
    li.appendChild(p);

    // creating Edit button
    const editbtn=document.createElement("button");
    editbtn.innerHTML="Edit";
    editbtn.classList.add("btn","editBtn");
    li.appendChild(editbtn);

    // creating delete btn
    const deletebtn=document.createElement("button")
    deletebtn.innerHTML="Remove";
    deletebtn.classList.add("btn","deleteBtn");
    li.appendChild(deletebtn);

    todolist.appendChild(li);
    inputbox.value="";

    saveLocalTodos(inputText); //to save the todos in local browser
    }
}

// fn updateTodo to edit and remove the list 

const updatetodo =(e) =>{
    if(e.target.innerHTML==="Remove"){
        todolist.removeChild(e.target.parentElement);
        deleteLocalTodos(e.target.parentElement);

    }

    if(e.target.innerHTML==="Edit"){
        inputbox.value = e.target.previousElementSibling.innerHTML;
        inputbox.focus();  //after clicking on edit, the todolist goes to inputbox(innerText) then we edit it and the value of btn also change to edit then 
        addbtn.value="Edit";
        editTodo=e;
    }

}

// save todo in local storage
// The agenda of saving items in local storage in JavaScript is to provide a way 
// to persist data in a user's browser so that it remains accessible even after the page is refreshed or the browser is closed.
//stores the data in key value pair



// Function to save local todo
const saveLocalTodos = (todo) => {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos")); //JSON.parse hmare string ko object mein convert kr dega 
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));  //JSON.stringify isse string mein convert kr dega qki hmara local storage usse object mein store krta hai
    //local storage mein 2 item hoti hai get item and set item
}

// Function to get local todo
const getLocalTodos = () => {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
        todos.forEach(todo => {

            // creating p and li tag
            const li=document.createElement("li");
            const p=document.createElement("p");

            p.innerHTML=todo;
            li.appendChild(p);

            // creating Edit button
            const editbtn=document.createElement("button");
            editbtn.innerHTML="Edit";
            editbtn.classList.add("btn","editBtn");
            li.appendChild(editbtn);

            // creating delete btn
            const deletebtn=document.createElement("button")
            deletebtn.innerHTML="Remove";
            deletebtn.classList.add("btn","deleteBtn");
            li.appendChild(deletebtn);

            todolist.appendChild(li);
           
        });
    }
}

// Function to delete local todo
const deleteLocalTodos = (todo) => {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    let todoText = todo.children[0].innerHTML;
    let todoIndex = todos.indexOf(todoText);
    todos.splice(todoIndex, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    // Array functions : slice / splice
    console.log(todoIndex);
}

const editLocalTodos = (todo) => {
    let todos = JSON.parse(localStorage.getItem("todos"));
    let todoIndex = todos.indexOf(todo);
    todos[todoIndex] = inputbox.value;
    localStorage.setItem("todos", JSON.stringify(todos));
}

document.addEventListener('DOMContentLoaded', getLocalTodos);
addbtn.addEventListener('click', addtodo); //addtodo is a fn, we have to init it first before call/declare
todolist.addEventListener('click', updatetodo);