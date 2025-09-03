
//URL to json-server
const employeeURL = "http://localhost:3000/employees/";
const departmentURL = "http://localhost:3000/departments/";

//===============================
//      READ DATA
//===============================

//Get Department data from json-server
async function getDepartmentDetail() {
    const response = await fetch(departmentURL);
    const departments = await response.json();
    // console.log(departments);
    return departments;

}

//Get employee data from json-server
async function getEmployeeDetails() {
    try {
        const response = await fetch(employeeURL);
        const employee_data = await response.json();
        return employee_data;
    }
    catch (error) {
        console.log("unable to fetch the user data ....");
    }
}

let department_details;

async function start() {
    try {
        console.log("i am reached here...");
        department_details = await getDepartmentDetail();
        ShowDepartmentInDom(department_details);
    } catch (error) {
        noDataMessage("❌Server problem.....");
    }

}

start(); //program starting point


//=========================================
//     ADD OR UPDATE DEPARTMENT FORM
//=========================================
const nameInput = $("#name");
const codeInput = $("#code");

const form = $("#form");
form.on("submit", async function (e) {
    e.preventDefault();

    if (nameInput.val().length === 0 || codeInput.val().length === 0) {
        departmentNameValidation();
        departmentCodeValidation();
        console.log("invalid data");
    }
    else {
        let departmentName = nameInput.val().trim();
        let departmentCode = codeInput.val().trim();
        if (department_details.some(d => d.name.toLowerCase() == departmentName.toLowerCase()) || department_details.some(d => d.code.toLowerCase() == departmentCode.toLowerCase())) {
            nameInput.val("");
            codeInput.val("");
            departmentDataAlreadyExistToast();
        }
        else {
            const response = await fetch(departmentURL,
                {
                    method: "Post",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(
                        {
                            name: departmentName,
                            code: departmentCode
                        }
                    )
                }
            )
            console.log("posted");
            const data = await response.json();
            console.log(data);
            if (data != null) {
                nameInput.val("");
                codeInput.val("");
                start();
                departmentAddedToastMessage();
            }
            else {
                console.log("unable to add a new deparment");
            }
        }
    }
});


//FILL THE WINDOW 
function ShowDepartmentInDom(department_details) {
    document.getElementById("department-details").innerHTML = " ";
    if (department_details !== null) {
        department_details.forEach(async function (department) {
            const name = document.createElement("td");
            name.classList.add("text-center");
            const code = document.createElement("td");
            code.classList.add("text-center");

            name.textContent = department.name;
            code.textContent = department.code;

            const edit_button = document.createElement("button");
            edit_button.textContent = "EDIT";
            edit_button.classList.add("btn", "btn-primary", "bg-primary", "w-100", "text-light")
            const edit_button_holder = document.createElement("td");
            edit_button_holder.classList.add("text-center", "p-2");
            edit_button_holder.append(edit_button);

            const delete_button = document.createElement("button");
            delete_button.textContent = "DELETE";
            delete_button.classList.add("btn", "btn-danger", "bg-danger", "w-100", "text-light")
            const delete_button_holder = document.createElement("td");
            delete_button_holder.append(delete_button);

            const table_row = document.createElement("tr");
            table_row.append(name, code, edit_button_holder, delete_button_holder)

            const table = document.getElementById("department-details");
            table.appendChild(table_row);

            edit_button.addEventListener("click", () => {
                try {
                    nameInput.val(department.name);
                    codeInput.val(department.code);

                    $("#submit-btn").addClass("d-none");
                    $("#update-btn").removeClass("d-none");
                    $("#update-btn").addClass("d-block");

                    $("#update-btn").on("click", (e) => {
                        e.preventDefault();
                        $("#departmentUpdatedToast").fadeOut();
                        let changedDepartmentName = nameInput.val();
                        let changedDepartmentCode = codeInput.val();
                        console.log(changedDepartmentCode + " " + changedDepartmentName);
                        console.log("id is =" + department.id);
                        console.log("update button clicked....");

                        $.ajax({
                            type: "Patch",
                            url: departmentURL + department.id,
                            data: JSON.stringify({
                                "name": changedDepartmentName,
                                "code": changedDepartmentCode
                            }),
                            dataType: "application/json",
                            success: function (response) {
                                console.log("Success");
                                departmentDataUpdateToast();
                                nameInput.val("");
                                codeInput.val("");
                                $("#submit-btn").removeClass("d-none");
                                $("#submit-btn").addClass("d-block");
                                $("#update-btn").addClass("d-none");
                                start();
                            },
                            error: function (response) {
                                console.log("Response received after update...");
                                departmentDataUpdateToast();
                                nameInput.val("");
                                codeInput.val("");
                                $("#submit-btn").removeClass("d-none");
                                $("#submit-btn").addClass("d-block");
                                $("#update-btn").addClass("d-none");
                                start();
                            }
                        });
                    });
                }
                catch (error) {
                    console.log(error);
                }
            });

            delete_button.addEventListener("click", async function () {

                try {
                    let employee_details = await getEmployeeDetails();

                    if (employee_details.some(emp => emp.departmentId != null && emp.departmentId.toString() === department.id.toString())) {
                        console.log("you can't delete this department.....");
                        departmentCannotDeletedToast();
                    }
                    else if (confirm("Are you sure you want to delete this?")) {
                        const response = await fetch(departmentURL + department.id,
                            {
                                method: "Delete"
                            }
                        )
                        const data = await response.json();
                        console.log(data);
                        if (data != null) {
                            console.log("Response received after Delete...");
                            departmentDeletedToast();
                            nameInput.val("");
                            codeInput.val("");
                            start();
                        }
                        else {
                            console.log("error occured...");
                        }
                    }
                    else {
                        console.log("delete department operation aborted...")
                    }
                }
                catch (error) {
                    console.log("unable to fetch the user data ...");
                }
            });
        });
    }
    else {
        noDataMessage("No Department data found.....");
    }

}


//No department data message 
function noDataMessage(message) {
    document.getElementById("department-details").innerHTML = " ";
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.textContent = message;
    td.setAttribute("colspan", "7");
    td.classList.add("text-center", "fw-bold", "text-danger", "fs-2");
    tr.appendChild(td);
    const table = document.getElementById("department-details");
    table.appendChild(tr);
}

//======================================
//         Toast Messages
//======================================

//Department Added Toast
function departmentAddedToastMessage() {
    $("#departmentAddedToast").fadeIn(500);
    setTimeout(() => {
        $("#departmentAddedToast").fadeOut(500);
    }, 5000);
}

$("#departmentAddToastCloseBtn").on("click", () => {
    $("#departmentAddedToast").fadeOut();
});

//department data updated toast 
function departmentDataUpdateToast() {
    $("#departmentUpdatedToast").fadeIn(500);
    setTimeout(() => {
        $("#departmentUpdatedToast").fadeOut(500);
    }, 5000);
}

$("#departmentUpdatedToastCloseBtn").on("click", () => {
    $("#departmentUpdatedToast").fadeOut();
});

//Already Exist Data toast
function departmentDataAlreadyExistToast() {
    $("#departmentDataExist").fadeIn(500);
    setTimeout(() => {
        $("#departmentDataExist").fadeOut(500);
    }, 5000);
}

$("#departmentDataExistCloseBtn").on("click", () => {
    $("#departmentDataExist").fadeOut();
});

//Delete department data toast message
function departmentDeletedToast() {
    $("#departementDataDeleted").fadeIn(500);
    setTimeout(() => {
        $("#departementDataDeleted").fadeOut(500);
    }, 5000);
}

$("#departementDataDeletedCloseBtn").on("click", () => {
    $("#departementDataDeleted").fadeOut();
});

//can't Delete department data toast message
function departmentCannotDeletedToast() {
    $("#departementDataCannotDeleted").fadeIn(500);
    setTimeout(() => {
        $("#departementDataCannotDeleted").fadeOut(500);
    }, 5000);
}

$("#departementDataCannotDeletedCloseBtn").on("click", () => {
    $("#departementDataCannotDeleted").fadeOut();
});


//===============================================
//            INPUT VALIDATION
//===============================================

//Department Name input validation
nameInput.on("input", () => {
    departmentNameValidation();
})

function departmentNameValidation() {
    const namePattern = /^[a-zA-Z]{3,}$/;

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

//Department Code input validation
codeInput.on("input", () => {
    departmentCodeValidation();
})

function departmentCodeValidation() {
    const namePattern = /^[a-zA-Z \.]{3,5}$/;

    codeInput.removeClass("is-valid", "is-invalid");
    if (namePattern.test(codeInput.val().trim())) {
        codeInput.removeClass("is-invalid");
        codeInput.addClass("is-valid");
    }
    else {
        codeInput.removeClass("is-valid");
        codeInput.addClass("is-invalid");
    }
}