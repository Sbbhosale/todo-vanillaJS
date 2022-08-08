let userInput = document.querySelector("#input");
let addBtn = document.querySelector("#btn");
let outputSection = document.querySelector("#todosItems");

function inputHandler(){    

    let todoItem = document.createElement("li");
    todoItem.classList.add('todo-item');
    let todoItemValueSection = document.createElement('div');
    todoItemValueSection.innerText = userInput.value;

    let todoItemBtnSection = document.createElement('div');

    let todoItemCheckBtn = document.createElement('button');
    todoItemCheckBtn.classList.add('btn');
    todoItemCheckBtn.classList.add('check-btn');
    todoItemCheckBtn.innerText = "Check";

    let todoItemDeleteBtn = document.createElement('button');
    todoItemDeleteBtn.classList.add('btn');
    todoItemDeleteBtn.classList.add('remove-btn');
    todoItemDeleteBtn.innerText = "Delete";

    todoItemBtnSection.append(todoItemCheckBtn);

    todoItemBtnSection.append(todoItemDeleteBtn);

    todoItem.append(todoItemValueSection);
    
    todoItem.append(todoItemBtnSection);
    
    outputSection.append(todoItem);
    
    userInput.value = "";
}

function addDeleteHandler(event){
    let item = event.target;

    if(item.classList[1] === "remove-btn"){
        item.parentElement.parentElement.remove();
    }

    if(item.classList[1] === "check-btn"){
        item.parentElement.parentElement.style.opacity = 0.5;
        item.parentElement.children[1].disabled = true;
        item.parentElement.children[0].disabled = true;
    }
}

addBtn.addEventListener('click', inputHandler)
outputSection.addEventListener('click' , addDeleteHandler);