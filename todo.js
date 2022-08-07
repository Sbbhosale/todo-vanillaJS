let userInput = document.querySelector("#input");
let addBtn = document.querySelector("#btn");
let outputSection = document.querySelector("#todosItems");

function inputHandler(){
    let userValue = userInput.value;
    outputSection.innerHTML += `<li>Item ${userValue}</li>`
}
addBtn.addEventListener('click', inputHandler)