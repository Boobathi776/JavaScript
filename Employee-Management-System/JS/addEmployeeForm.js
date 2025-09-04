//URL to json-server
const employeeURL = "http://localhost:3000/employees/";
const deparmentURL = "http://localhost:3000/departments/";

const nameInput = $("#name");
const emailInput = $("#email");
const department = $("#department-dropdown");
const joiningDate = $("#joiningDate");
const salary = $("#salary");
start();

// Department drop down option filler function
async function loadDepartment() {
    try {
        const response = await fetch(deparmentURL);
        const departments = await response.json();
        const option = $("<option></option>");
        option.attr("value", "0");
        option.text("Select your Department");
        $("#department-dropdown").append(option);
        departments.forEach(department => {
            $("#department-dropdown").append($("<option>", { value: department.id, text: department.name }));
        });
    } catch (error) {
        console.log(error);
        console.log("server error");
    }

}


async function start() {
    await loadDepartment();
    //IF the user try to update a data this part will work
    if (sessionStorage.getItem("isEdit") === "true") {
        const employee_data = sessionStorage.getItem("updating-employee");
        console.log(employee_data);
        const employee = await JSON.parse(employee_data);
        nameInput.val(employee.name);
        emailInput.val(employee.email);
        department.val(employee.departmentId);
        joiningDate.val(employee.joiningDate);
        salary.val(employee.salary);

        $("#submit-btn").addClass("d-none");
        $("#update-btn").removeClass("d-none");
        $("#update-btn").addClass("d-block");

        $("#update-btn").on("click", async function (e) {
            e.preventDefault();
            if (nameInput.val().trim().length === 0 || emailInput.val().trim().length === 0 || Number(department.val()) === 0 || joiningDate.val().trim() === 0 || Number(salary.val().trim()) < 0) {
                nameValidation();
                emailValidation();
                departmentValidation();
                dateValidation();
                salaryValidation();
            }
            else {
                // sessionStorage.removeItem("isEdit","true");
                sessionStorage.setItem("isEdit", "false");
                console.log(employee.id);
                try {
                    const response = await fetch(employeeURL + employee.id,
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
                    const data = await response.json();
                    console.log(data);
                    if (data != null) {
                        nameInput.val("");
                        emailInput.val("");
                        department.val("0");
                        joiningDate.val("");
                        salary.val("");
                        console.log("completed");
                        employeeUpdatedToastMessage();
                        setTimeout(() => {
                            window.location.href = "home.html";
                        }, 2000);
                    }
                    else {
                        console.log("error : unable to update an employee...");
                    }

                } catch (error) {
                    console.log(error);
                }
            }
        })

    }
}


//=====================================================
//              INPUT VALIDATION
//=====================================================

//Name input validation
nameInput.on("input", () => {
    nameValidation();
    console.log("yes");
})

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

//Email input validation
emailInput.on("input", async function () {
    await emailValidation();
})

async function isExistingEmail() {
    try {
        const response = await fetch(employeeURL);
        const employee_details = await response.json();
        return employee_details.some(emp => emp.email.trim() === emailInput.val().trim());
    }
    catch (error) {
        console.log(error);
        console.log("unable to fetch the user data ...");
        return false;
    }
}

async function emailValidation() {
    const emailPattern = /^[a-zA-Z0-9#$%&*]{3,}@[a-z]{3,}\.[a-z]{2,5}$/;
    const isExists = await isExistingEmail();
    if (emailPattern.test(emailInput.val().trim()) && !isExists) {
        emailInput.removeClass("is-invalid").addClass("is-valid");
    }
    else {
        emailInput.removeClass("is-valid").addClass("is-invalid");
    }
}

//Department input validation
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

//Date input validation
joiningDate.on("input", () => dateValidation());

function dateValidation() {
    const value = joiningDate.val().trim();
    const joiningDateInput = new Date(value);
    if (isNaN(joiningDateInput.getTime()) || joiningDateInput > new Date()) {
        joiningDate.removeClass("is-valid").addClass("is-invalid");
    }
    else {
        joiningDate.removeClass("is-invalid").addClass("is-valid");
    }
}

// Salary Input validation
salary.on("input", () => {
    salaryValidation();
})

function salaryValidation() {
    if (parseInt(salary.val().trim()) < 0 || salary.val().trim().length == 0) {
        salary.removeClass("is-valid");
        salary.addClass("is-invalid");
    }
    else {
        salary.removeClass("is-invalid");
        salary.addClass("is-valid");
    }

}

//=================================================
//     FORM FOR ADD AND UPDATE EMPLOYEE DATA
//=================================================

const form = $("#submit-btn");
form.on("click", async function (e) {
    e.preventDefault();
    if (nameInput.val().trim().length === 0 ||
        emailInput.val().trim().length === 0 ||
        department.val() === 0 ||
        joiningDate.val().trim().length === 0 ||
        Number(salary.val().trim()) <= 0
    ) {
        nameValidation();
        emailValidation();
        departmentValidation();
        dateValidation();
        salaryValidation();
    }
    else {
        if (nameInput.val().trim().length >= 3 && !(await isExistingEmail()) && department.val() != "0" && (salary.val().trim().length !== 0 || Number(salary.val().trim()) > 0)) {
            try {
                const response = await fetch(employeeURL,
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
                if (data != null) {
                    nameInput.val("");
                    emailInput.val("");
                    department.val("");
                    joiningDate.val("");
                    salary.val("");
                    employeeAddedToastMessage();
                    // setTimeout(() => {
                    //     window.location.href = "home.html";
                    // }, 3000);
                }
                else {
                    nameInput.val("");
                    emailInput.val("");
                    department.val("");
                    joiningDate.val("");
                    salary.val("");
                }
            }
            catch (error) {
                console.log("unable to add an employee....");
            }

        }
        else {
            console.log("invalid mail id....");
        }
    }
}
)


//======================================
//         Toast Messages
//======================================

//Department Added Toast
function employeeAddedToastMessage() {
    console.log("toast called..");
    $("#employeeAddedToast").fadeIn(500);
    setTimeout(() => {
        $("#employeeAddedToast").fadeOut(500);
    }, 3000);
}

$("#employeeAddedToastCloseBtn").on("click", () => {
    $("#employeeAddedToast").fadeOut();
});

//department data updated toast 
function employeeUpdatedToastMessage() {
    $("#employeeupdatedToast").fadeIn(500);
    setTimeout(() => {
        $("#employeeupdatedToast").fadeOut(500);
    }, 5000);
}

$("#employeeupdatedToastCloseBtn").on("click", () => {
    $("#employeeupdatedToast").fadeOut();
});