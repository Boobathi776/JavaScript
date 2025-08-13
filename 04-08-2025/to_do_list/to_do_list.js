
const add_btn = document.getElementById("add-btn");
add_btn.addEventListener("click", () => {
    let text_input = document.getElementById("user-input");
    let task = text_input.value.trim();
    if (task.length !== 0) {
        const element = document.createElement("li");
        const list_of_task = document.getElementById("list");
        element.textContent = task;

        //creating a remove button
        const remove_button = document.createElement("button");
        remove_button.textContent = "remove";
        remove_button.style.marginLeft = "20px";
        remove_button.style.cursor = "pointer";

        remove_button.addEventListener("click",
            () => {
                element.remove();
            }
        )
        element.appendChild(remove_button);
        list_of_task.appendChild(element);

        text_input.value = "";
    }

    else {
        alert("the input field must be with value");
    }



})
console.log(element);