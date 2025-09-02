
async function getEmployeeDetails() {
    try {
        const response = await fetch("http://localhost:3000/employees");
        const employee_data = await response.json();
        return employee_data;
    }
    catch (error) {
        console.log("unable to fetch the user data ...");
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.textContent = "Oops! no data Exist";
        td.setAttribute("colspan", "7");
        td.classList.add("text-center", "fw-bold", "mt-5");
        tr.appendChild(td);
        const table = document.getElementById("employee-details");
        table.appendChild(tr);
    }
}

async function getDepartmentDetail() {
    const response = await fetch("http://localhost:3000/departments");
    const departments = await response.json();
    // console.log(departments);
    return departments;
}

let employee_details;
let department_details;

async function initiator() {
    employee_details = await getEmployeeDetails();
    department_details = await getDepartmentDetail();
    dropDownFill();
    ShowEmployeeInDom(employee_details);
}

initiator();

const dropDownSort = document.getElementById("sort-dropdown");
function dropDownFill() {
    dropDownSort.innerHTML = "";
    const option = document.createElement("option");
    option.setAttribute("value", 0);
    option.setAttribute("label", "All Data");
    dropDownSort.append(option);

    department_details.forEach(department => {
        const option = document.createElement("option");
        option.setAttribute("value", department.id);
        option.setAttribute("label", department.name);
        dropDownSort.append(option);
    })
}

function ShowEmployeeInDom(employee_details) {

    document.getElementById("employee-details").innerHTML = " ";
    if (employee_details !== null) {
        employee_details.forEach(async function (employee) {
            const name = document.createElement("td");
            name.classList.add("text-center")
            const email = document.createElement("td");
            email.classList.add("text-center")

            const department = document.createElement("td");

            let department_name;
            department_details.forEach((department) => {
                if (employee.departmentId == department.id) {
                    department_name = department.name;
                }
            })
            if (department_name != null) {
                department.textContent = department_name;
            }
            else {
                department.textContent = "No Department";
                department.style.color = "red";
            }

            department.classList.add("text-center");

            const joiningDate = document.createElement("td");
            joiningDate.classList.add("text-center", "p-2");
            const salary = document.createElement("td");
            salary.classList.add("text-center", "p-2");


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


            name.textContent = employee.name;
            email.textContent = employee.email;
            joiningDate.textContent = employee.joiningDate;
            salary.textContent = employee.salary;

            const table_row = document.createElement("tr");
            table_row.append(name, email, department, joiningDate, salary, edit_button_holder, delete_button_holder)

            const table = document.getElementById("employee-details");
            table.appendChild(table_row);

            edit_button.addEventListener("click", () => {
                // fillForm(employee);
                localStorage.removeItem("isDataExist");
                localStorage.setItem("isEdit", "true");
                localStorage.setItem("updating-employee", JSON.stringify(employee));
                window.location.href = "employee-add.html";
            })


            delete_button.addEventListener("click", async function () {
                if (confirm("Are you sure you want to delete this?")) {
                    const response = await fetch("http://localhost:3000/employees/" + employee.id,
                        {
                            method: "Delete"
                        }
                    )
                    const data = await response.json();
                    console.log(data);
                    if (data != null) {
                        employeeDeletedToast();
                        initiator();
                    }
                    else {
                        console.log("unable to dlt an employee....");
                    }
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


// H -filters
const name_search = document.getElementById("name-search");
const email_search = document.getElementById("emali-search");
const date_search = document.getElementById("joiningDate-search");
const department_search = document.getElementById("department-search");
const salary_search = document.getElementById("salary-search");

//Search by name filter
name_search.addEventListener("input", function () {
    email_search.value = "";
    date_search.value = "";
    department_search.value = "";
    date_search.value = "";
    salary_search.value = "";

    let filteredArray = [];
    employee_details.forEach(employee => {
        if (employee.name.includes(name_search.value.trim())) {
            filteredArray.push(employee);
        }
    })
    ShowEmployeeInDom(filteredArray);
});


//Search by email 
email_search.addEventListener("input", function () {
    name_search.value = "";
    date_search.value = "";
    department_search.value = "";
    date_search.value = "";
    salary_search.value = "";

    let filteredArray = [];
    employee_details.forEach(employee => {
        if (employee.email.includes(email_search.value.trim())) {
            filteredArray.push(employee);
        }
    })
    ShowEmployeeInDom(filteredArray);
});

//search by salary
salary_search.addEventListener("input", async function () {
    name_search.value = "";
    email_search.value = "";
    department_search.value = "";
    date_search.value = "";
    let input = salary_search.value.trim();
    console.log(input.length);
    if (!input.length) {
        initiator();
    }
    else {
        console.log("triggerd");
        let filteredArray = [];
        employee_details.forEach(employee => {
            if (employee.salary == input) {
                filteredArray.push(employee);
            }
        })
        ShowEmployeeInDom(filteredArray);
    }
});

//Search by date (incomplete)
date_search.addEventListener("input", function () {
    name_search.value = "";
    department_search.value = "";
    salary_search.value = "";
    email_search.value = "";
    if (!date_search.value.trim().length) {
        initiator();
    }
    let filteredArray = [];
    employee_details.forEach(employee => {
        if (employee.joiningDate == date_search.value.trim()) {
            filteredArray.push(employee);
        }
    })
    ShowEmployeeInDom(filteredArray);
});

//search by department (in complete)
department_search.addEventListener("input", function () {
    name_search.value = "";
    date_search.value = "";
    salary_search.value = "";
    email_search.value = "";

    let filteredArray = [];
    employee_details.forEach(employee => {

        let department_name;
        department_details.forEach((department) => {
            if (employee.departmentId == department.id) {
                department_name = department.name;
            }
        })
        if (department_name.includes(email_search.value.trim())) {
            filteredArray.push(employee);
        }
    })
    ShowEmployeeInDom(filteredArray);
});

//dropdown filter
const drop_down_sort = document.getElementById("sort-dropdown");

drop_down_sort.addEventListener("input", function () {
    const departmentList = [];
    if (dropDownSort.value == 0) {
        initiator();
    }
    else {
        employee_details.forEach((employee) => {
            if (drop_down_sort.value == employee.departmentId) {
                departmentList.push(employee);
            }
        })
        if (departmentList != null)
            ShowEmployeeInDom(departmentList);
    }
}
)

//Delete department data toast message
function employeeDeletedToast() {
    $("#employeeDataDeleted").fadeIn(500);
    setTimeout(() => {
        $("#employeeDataDeleted").fadeOut(500);
    }, 5000);
}

$("#employeeDataDeletedCloseBtn").on("click", () => {
    $("#employeeDataDeleted").fadeOut();
});