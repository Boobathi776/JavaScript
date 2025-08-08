// import { getDepartmentDetail } from "./EmployeeDeatils.js"
// import {employee} from "./EmployeeDetails";

const nameInput = $("#name");
const emailInput = $("#email");
const department = $("#department-dropdown");
const joiningDate = $("#joiningDate");
const salary = $("#salary");

if (localStorage.getItem("isEdit") === "true") {
    const employee_data = localStorage.getItem("updating-employee");
    console.log(employee_data);
    const object =await JSON.parse(employee_data);

    nameInput.val(object.name);
    emailInput.val(object.email);
    department.val(Number(object.departmentId));
    joiningDate.val(object.joiningDate);
    salary.val(object.salary);
    $("#submit-btn").addClass("d-none");
    $("#update-btn").removeClass("d-none");
    $("#update-btn").addClass("d-block");

    $("#update-btn").on("click", async function () {
        if (nameInput.val().trim().length === 0 || emailInput.val().trim().length === 0 || Number(department.val()) === 0 || joiningDate.val().trim() === 0 || Number(salary.val().trim()) < 0) {
            nameValidation();
            emailValidation();
            departmentValidation();
            dateValidation();
            salaryValidation();
        }
        else {
            // localStorage.removeItem("isEdit","true");
            localStorage.setItem("isEdit","false");
            console.log(object.id);
            const response = await fetch("http://localhost:3000/employees/"+object.id,
                {
                    method: "PATCH",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(
                        {
                            name: nameInput.val().trim(),
                            email: emailInput.val().trim(),
                            departmentId: department.val(),
                            joiningDate: joiningDate.val().trim(),
                            salary: salary.val().trim()
                        }
                    )
                }
            )
            nameInput.val("");
            emailInput.val("");
            department.val("");
            joiningDate.val("");
            salary.val("");

            const data = await response.json();
            console.log(data);
            console.log("complteed");
           
            window.location.href = "home.html";
        }
    })

}




nameInput.on("input", () => {
    nameValidation();
    console.log("yes");
})

// const name_input = nameInput.val().trim();
function nameValidation() {
    const namePattern = /^[a-zA-Z \.]{3,}$/;
    nameInput.removeClass("is-valid", "is-invalid");
    if (namePattern.test(nameInput.val().trim())) {
        nameInput.removeClass("is-invalid");
        nameInput.addClass("is-valid");
    }
    else {
        nameInput.removeClass("is-valid");
        nameInput.addClass("is-invalid");
    }
}



emailInput.on("input", () => {
    emailValidation();
})

function emailValidation() {
    const emailPattern = /^[a-zA-Z0-9#$%&*]{3,}@[a-z]{3,}\.[a-z]{2,5}$/;
    if (emailPattern.test(emailInput.val().trim())) {
        emailInput.removeClass("is-invalid");
        emailInput.addClass("is-valid");
    }
    else {
        emailInput.removeClass("is-valid");
        emailInput.addClass("is-invalid");
    }
}

// Department
async function loadDepartment() {
    const response = await fetch("http://localhost:3000/departments");
    const departments = await response.json();
    // console.log(departments);
    departments.forEach(department => {
        const option = $("<option></option>");
        option.attr("value", department.id);
        option.text(department.name);
        $("#department-dropdown").append(option);
    });

}

loadDepartment();
// console.log(department_details);

department.on("input", () => {
    departmentValidation();
})

function departmentValidation() {
    if (department.val() == 0) {
        department.removeClass("is-valid");
        department.addClass("is-invalid");
    }
    else {
        department.removeClass("is-invalid");
        department.addClass("is-valid");
    }
}


joiningDate.on("input", () => {
    dateValidation();
})

function dateValidation() {
    const joiningInput = new Date(joiningDate.val().trim());
    if (joiningDate > new Date()) {
        joiningDate.removeClass("is-valid");
        joiningDate.addClass("is-invalid");
    }
    else {
        joiningDate.removeClass("is-invalid");
        joiningDate.addClass("is-valid");
    }
}

// salary

salary.on("input", () => {
    salaryValidation();
})

function salaryValidation() {
    if (parseInt(salary.val().trim()) < 0) {
        salary.removeClass("is-valid");
        salary.addClass("is-invalid");
    }
    else {
        salary.removeClass("is-invalid");
        salary.addClass("is-valid");
    }

}
const form = $("#submit-btn");
form.on("click", async function (e) {
    e.preventDefault();
    // console.log("nothing")
    if (nameInput.val().trim().length === 0 || emailInput.val().trim().length === 0 || department.val() === 0 || joiningDate.val().trim() === 0 || Number(salary.val().trim()) < 0) {
        nameValidation();
        emailValidation();
        departmentValidation();
        dateValidation();
        salaryValidation();
    }
    else {
        const response = await fetch("http://localhost:3000/employees",
            {
                method: "Post",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(
                    {
                        name: nameInput.val().trim(),
                        email: emailInput.val().trim(),
                        departmentId: department.val(),
                        joiningDate: joiningDate.val().trim(),
                        salary: salary.val().trim()
                    }
                )
            }
        )

        const data = await response.json();
        console.log(data);
    }
}
)
