let userInput = document.querySelector("#userInputContainer__input");
let addBtn = document.querySelector("#userInputContainer__btn--add");
let outputSection = document.querySelector("#todoItemsContainer");


function inputHandler() {

    if(userInput.value !== ""){
        // create li item
        let todoItem = document.createElement("li");
        todoItem.classList.add('todoItemContainer__item');

    // creating user value showing div in li item
        let todoItemValueSection = document.createElement('div');
        todoItem.classList.add('todoItemContainer__item__userValueContainer');
        todoItemValueSection.innerText = userInput.value;

    // creating btn div in li item
        let todoItemBtnSection = document.createElement('div');
        todoItem.classList.add('todoItemContainer__item__btn');

    // creating check btn 
        let todoItemCheckBtn = document.createElement('button');
        todoItemCheckBtn.classList.add('btn');
        todoItemCheckBtn.classList.add('todoItemContainer__item__btn--checked');
        todoItemCheckBtn.innerHTML = '<i class="fa fa-lg fa-check" aria-hidden="true"></i>';

    // creating delete btn
        let todoItemDeleteBtn = document.createElement('button');
        todoItemDeleteBtn.classList.add('btn');
        todoItemDeleteBtn.classList.add('todoItemContainer__item__btn--remove');
        todoItemDeleteBtn.innerHTML = '<i class="fa fa-lg fa-trash" aria-hidden="true"></i>';


    // appending check and delete buttons in btn div
        todoItemBtnSection.append(todoItemCheckBtn);
        todoItemBtnSection.append(todoItemDeleteBtn);

    // appending user value showing div in li
        todoItem.append(todoItemValueSection);

    // appending btn div in li    
        todoItem.append(todoItemBtnSection);

    // appending li item in ul    
        outputSection.append(todoItem);

    // clearing user input section
        userInput.value = "";
    }

}


function addDeleteHandler(event){
    let item = event.target;

    if(item.classList[1] === 'todoItemContainer__item__btn--remove'){
        item.parentElement.parentElement.remove();
    }

    if(item.classList[1] === 'todoItemContainer__item__btn--checked'){
        item.parentElement.parentElement.style.opacity = 0.5;
        item.parentElement.children[1].disabled = true;
        item.parentElement.children[0].disabled = true;
    }
}

addBtn.addEventListener('click', inputHandler);
outputSection.addEventListener('click' , addDeleteHandler);