const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

function eventForm() {    
    const nameInputValue = nameInput.value.trim();

    if (nameInputValue === "") {        
        nameOutput.textContent = "Anonymous";
    }

    else {
        nameOutput.textContent = nameInputValue;
    }
}

nameInput.addEventListener("input", eventForm);