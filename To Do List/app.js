/** Variables */

const toDoInput = document.getElementById("todo__input")
const toDoInputBtn = document.getElementById("todo__inputBtn")
let toDoListItems = document.getElementById("todo__list--items");

toDoInputBtn.addEventListener("click", addToDo); 

function addToDo(e) {
    e.preventDefault();

    const toDoDiv = documnet.createElement("div");
    toDoDiv.classList.add("todo__list--item");

    const newToDo = document.createElement("li");
    newToDo.classList.add(toDoListItems);

    toDoDiv.appendChild(newToDo);

}

