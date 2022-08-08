let userInput = document.querySelector("#input");
let addBtn = document.querySelector("#btn");
let outputSection = document.querySelector("#todosItems");

function inputHandler(){    
    let todoItem = document.createElement("li");
    let todoItemValueSection = document.createElement('div');
    todoItemValueSection.innerText = userInput.value;
    let todoItemCheckBtn = document.createElement('button');
    todoItemCheckBtn.innerText = "Check";
    let todoItemDeleteBtn = document.createElement('button');
    todoItemDeleteBtn.innerText = "Delete";
    todoItem.append(todoItemValueSection);
    todoItem.append(todoItemCheckBtn);
    todoItem.append(todoItemDeleteBtn);
    outputSection.append(todoItem);
    userInput.value = "";
}
addBtn.addEventListener('click', inputHandler)