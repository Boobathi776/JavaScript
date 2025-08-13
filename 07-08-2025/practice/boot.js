document.getElementById("toast-close-btn").addEventListener("click", () => {
    document.getElementById("toast").style.display = "none";
})

document.getElementById("toast-show-btn").addEventListener("click", function (){
    console.log("alutha patten");
    document.getElementById("toast").style.display = "block";
    setTimeout(() => {
        document.getElementById("toast").style.display = "none";
    }, 6000);
})


// const form = document.getElementById("form");
// const nameInvalidMessage = document.getElementById("name-invalid-message");
// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     console.log("form clicked");
//     form.classList.add("was-validated");

//     const name_input = document.getElementById("name");
//     if (name_input.value.trim().length === 0) {
//         console.log("i am showing error");
//         name_input.classList.add("is-invalid");
//         name_input.classList.remove("is-valid");
//         nameInvalidMessage.style.display = "block";
//     }
//     else {
//             // Mark input as valid (optional)
//             console.log("no error in name");
//             name_input.classList.remove("is-invalid");
//             name_input.classList.add("is-valid");
//             nameInvalidMessage.style.display = "none";
//     }

// })


const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const descriptionInput = document.getElementById("description");

  nameInput.addEventListener("input",()=>
{
  validateField(nameInput, "name-invalid-message");
})

  emailInput.addEventListener("input",()=>
{
  validateField(emailInput, "name-invalid-message");
})

  descriptionInput.addEventListener("input",()=>
{
  validateField(descriptionInput, "name-invalid-message");
})

  validateField(nameInput, "name-invalid-message");
  validateField(emailInput, "email-invalid-message");
  validateField(descriptionInput, "description-invalid-message");
});

function validateField(inputElement, errorId) {
  const errorElement = document.getElementById(errorId);
  if (inputElement.value.trim().length === 0) {
    inputElement.classList.remove("is-valid");
    inputElement.classList.add("is-invalid");
    errorElement.style.display = "block";
  } else {
    inputElement.classList.remove("is-invalid");
    inputElement.classList.add("is-valid");
    errorElement.style.display = "none";
  }
}
