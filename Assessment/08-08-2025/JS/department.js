export async function getDepartmentDetail() {
    const response = await fetch("http://localhost:3000/departments");
    const departments = await response.json();
    // console.log(departments);
    ShowDepartmentInDom(departments);
}

getDepartmentDetail();

const nameInput = $("#name");
const codeInput = $("#code");

function ShowDepartmentInDom(department_details) {

    document.getElementById("employee-details");

    console.log("done 1");

    if (department_details !== null) {
        department_details.forEach(async function (department) {
            console.log(" i am rendering")
            const name = document.createElement("td");
            name.classList.add("text-center")
            const code = document.createElement("td");
            code.classList.add("text-center")

            name.textContent = department.name;
            code.textContent = department.code;

            const edit_button = document.createElement("button");
            edit_button.textContent = "EDIT";
            edit_button.classList.add("btn", "btn-primary", "bg-primary", "w-100", "text-light")
            const edit_button_holder = document.createElement("td");
            // edit_button_holder.classList.add("d-flex","justify-content-center","align-items-center");
            edit_button_holder.classList.add("text-center", "p-2");
            edit_button_holder.append(edit_button);

            const delete_button = document.createElement("button");
            delete_button.textContent = "DELETE";
            delete_button.classList.add("btn", "btn-danger", "bg-danger", "w-100", "text-light")
            const delete_button_holder = document.createElement("td");
            // delete_button_holder.classList.add("d-flex","justify-content-center","align-items-center");
            delete_button_holder.append(delete_button);

            const table_row = document.createElement("tr");
            table_row.append(name, code, edit_button_holder, delete_button_holder)

            const table = document.getElementById("employee-details");
            table.appendChild(table_row);

            edit_button.addEventListener("click", () => {

                nameInput.val(department.name);
                nameInput.val(department.code);

                $("#submit-btn").addClass("d-none");
                $("#update-btn").removeClass("d-none");
                $("#update-btn").addClass("d-block");

                $.ajax({
                    type: "Patch",
                    url: "http://localhost:3000/departments/" + department.id,
                    data: "json",
                    dataType: "application/json",
                    success: function (response) {
                        console.log(response);
                    }
                });

                 $("#update-btn").on("click",()=>
                {
                    
                })

            })


            delete_button.addEventListener("click", async function () {
                if (confirm("Are you sure you want to delete this?")) {
                    const response = await fetch("http://localhost:3000/departments/" + department.id,
                        {
                            method: "Delete"
                        }
                    )
                    const data = await response.json();
                    console.log(data);
                }
            }
            )


        }
        )
    }
    else {
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.textContent = "Oops! no data Exist";
        td.setAttribute("colspan", "7");
        tr.appendChild(td);
        const table = document.getElementById("employee-details");
        table.appendChild(tr);
    }

}




const form = $("#form");
form.on("submit", async function (e) {
    e.preventDefault();
    // console.log("nothing")
    if (nameInput.val().length === 0 || codeInput.val().length === 0) {
        // nameValidation();
        console.log("invalid data");
    }
    else {
        const response = await fetch("http://localhost:3000/departments",
            {
                method: "Post",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(
                    {
                        name: nameInput.val().trim(),
                        code: codeInput.val().trim()
                    }
                )
            }
        )
        console.log("posted");
        const data = await response.json();
        console.log(data);
    }
}
)