
//URL to json-server
const employeeURL = "http://localhost:3000/employees/";
const deparmentURL = "http://localhost:3000/departments/";

//==========================================
//              READ DATA FROM SERVER
//==========================================

//Get employee data from the json-server
async function getEmployeeDetails() {
    try {
        const response = await fetch(employeeURL);
        const employee_data = await response.json();
        return employee_data;
    }
    catch (error) {
        noDataMessage("⏸️ Oops server problem....");
    }
}

//Get department data from the json-server
async function getDepartmentDetail() {
    try {
        const response = await fetch(deparmentURL);
        const departments = await response.json();
        return departments;
    } catch (error) {
        noDataMessage("⏸️ Oops server problem....");
    }
}

let employee_details;
let department_details;

async function initiator() {
    employee_details = await getEmployeeDetails();
    department_details = await getDepartmentDetail();
    dropDownFill();
    // if (employee_details.length != 0)
        ShowEmployeeInDom(Array.from(employee_details));
    // else
    //     noDataMessage("❌Oops! No Employee data found...");
    if (name_search.value.trim().length != 0 || email_search.value.trim().length != 0 || departmentDropDownSearch.value.trim().length != 0 || date_search.value.trim().length != 0 || salary_search.value) 
    {
        searchFilter();
    }
}

//Execution starter
initiator();


//==================================================
//            POPULATE THE UI DYNAMICALLY
//==================================================
const departmentDropDownSearch = document.getElementById("department-dropdown-search");

//Search by department drop down fill function
function dropDownFill() {
    departmentDropDownSearch.innerHTML = "";
    const option = document.createElement("option");
    option.setAttribute("value", 0);
    option.setAttribute("label", "All Data");
    departmentDropDownSearch.append(option);

    department_details.forEach(department => {
        const option = document.createElement("option");
        option.setAttribute("value", department.id);
        option.setAttribute("label", department.name);
        departmentDropDownSearch.append(option);
    })
}

//SHOW THE EMPLOYEE DATA 
function ShowEmployeeInDom(employee_details = []) {
    try {
        document.getElementById("employee-details").innerHTML = " ";
        const lastSearch = JSON.parse(localStorage.getItem("lastSearch"));
        if (lastSearch) {
            name_search.value = lastSearch.name || "";
            email_search.value = lastSearch.email || "";
            departmentDropDownSearch.value = lastSearch.departmentId || "0";
            date_search.value = lastSearch.joiningDate || "";
            salary_search.value = lastSearch.salary || "";
        }

        if (employee_details !== null && employee_details.length > 0) {
            employee_details.forEach(employee => {
                const name = document.createElement("td");
                name.classList.add("text-center");
                const email = document.createElement("td");
                email.classList.add("text-center");

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
                edit_button_holder.classList.add("text-center", "p-2");
                edit_button_holder.append(edit_button);

                const delete_button = document.createElement("button");
                delete_button.textContent = "DELETE";
                delete_button.classList.add("btn", "btn-danger", "bg-danger", "w-100", "text-light")
                const delete_button_holder = document.createElement("td");
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
                    sessionStorage.removeItem("isDataExist");
                    sessionStorage.setItem("isEdit", "true");
                    sessionStorage.setItem("updating-employee", JSON.stringify(employee));
                    window.location.href = "employee-add.html";
                })

                delete_button.addEventListener("click", async function () {

                    try {
                        if (confirm("Are you sure you want to delete this?")) {
                        const response = await fetch(employeeURL + employee.id,
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
                    } catch (error) {
                        console.log(error+"error: unable to dlt an employee....");
                    }
                });
            });
        }
        else {
            noDataMessage("❌Oops! No Employee data found...");
        }
    }
    catch (e) {
        console.log(e);
    }

}

//No employee data message 
function noDataMessage(message) {
    document.getElementById("employee-details").innerHTML = " ";
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.textContent = message;
    td.setAttribute("colspan", "7");
    td.classList.add("text-center", "fw-bold", "text-danger", "fs-2");
    tr.appendChild(td);
    const table = document.getElementById("employee-details");
    table.appendChild(tr);
}

//==================================================
//              SEARCH FILTERS
//==================================================
const name_search = document.getElementById("name-search");
const email_search = document.getElementById("emali-search");
const date_search = document.getElementById("joiningDate-search");
const salary_search = document.getElementById("salary-search");

//clear the search fields
document.getElementById("search-reset").addEventListener("click", () => {
    name_search.value = "";
    email_search.value = "";
    departmentDropDownSearch.value = 0;
    date_search.value = "";
    salary_search.value = "";
    initiator();
    localStorage.removeItem("lastSearch");
});

let filteredArray = [];

//Search by name filter
name_search.addEventListener("input", function () {
    searchFilter();
});


//Search by email 
email_search.addEventListener("input", function () {
    searchFilter();
});

//search by salary
salary_search.addEventListener("input", async function () {
    searchFilter();
});

//Search by date (incomplete)
date_search.addEventListener("input", function () {
    searchFilter();
});

//dropdown filter for department search
departmentDropDownSearch.addEventListener("change", function () {
    searchFilter();
})

function searchFilter() {
    localStorage.removeItem("lastSearch");
    const nameQuery = name_search.value.trim().toLowerCase();
    const emailQuery = email_search.value.trim().toLowerCase();
    const deptQuery = departmentDropDownSearch.value;
    const joinDateQuery = date_search.value.trim();
    const salaryQuery = salary_search.value;

    localStorage.setItem("lastSearch", JSON.stringify({
        "name": nameQuery,
        "email": emailQuery,
        "departmentId": deptQuery,
        "joiningDate": joinDateQuery,
        "salary": salaryQuery
    }));

    filteredArray = employee_details.filter(emp => {
        let match = true;

        if (nameQuery && !emp.name.toLowerCase().includes(nameQuery)) match = false;

        if (emailQuery && !emp.email.toLowerCase().includes(emailQuery)) match = false;

        if (deptQuery !== "0" && emp.departmentId.toString() !== deptQuery.toString()) match = false;

        if (joinDateQuery) {
            const empDate = emp.joiningDate.toString();
            if (!empDate.includes(joinDateQuery)) match = false;
        }

        if (salaryQuery && emp.salary.toString() !== salaryQuery) match = false;

        return match;
    });

    if (filteredArray.length != 0 || filteredArray != null) {
        // console.log(filteredArray);
        ShowEmployeeInDom(filteredArray);
    } else {
        noDataMessage("🔎There is no matching record found‼️.....");
    }
}


//==========================================
//         SORT BASED ON DROP DOWN
//===========================================
const dropDownSortElement = document.getElementById("sort-dropdown");
const sortButton = document.getElementById("sort-btn");
const clearSortButton = document.getElementById("clear-sort-btn");

sortButton.addEventListener("click", () => {
    try {
        let value = dropDownSortElement.value;
        let sortedEmployeeData;
        // console.log(filteredArray);
        if (value === "0") {
            initiator();
        }
        else if (value === "1") {
            if (filteredArray.length != 0)
                sortedEmployeeData = filteredArray.sort((a, b) => a.name.localeCompare(b.name));
            else
                sortedEmployeeData = employee_details.sort((a, b) => a.name.localeCompare(b.name));
        }
        else if (value === "2") {
            if (filteredArray.length != 0)
                sortedEmployeeData = filteredArray.sort((a, b) => a.email.localeCompare(b.email));
            else
                sortedEmployeeData = employee_details.sort((a, b) => a.email.localeCompare(b.email));
        }
        else if (value === "3") {
            let employeeWithDepartmentName;
            if (filteredArray.length != 0) {
                employeeWithDepartmentName = filteredArray.map(emp => {
                    let dept = department_details.find(d => d.id === emp.departmentId);
                    return {
                        ...emp,
                        departmentName: dept ? dept.name : "No department"
                    }
                });
            }
            else {
                employeeWithDepartmentName = employee_details.map(emp => {
                    let dept = department_details.find(d => d.id === emp.departmentId);
                    return {
                        ...emp,
                        departmentName: dept ? dept.name : "No department"
                    }
                });
            }
            sortedEmployeeData = employeeWithDepartmentName.sort((a, b) => a.departmentName.localeCompare(b.departmentName));
        }
        else if (value === "4") {
            if (filteredArray.length != 0)
                sortedEmployeeData = filteredArray.sort((a, b) => new Date(a.joiningDate) - new Date(b.joiningDate));
            else
                sortedEmployeeData = employee_details.sort((a, b) => new Date(a.joiningDate) - new Date(b.joiningDate));
        }
        else if (value === "5") {
            if (filteredArray.length != 0)
                sortedEmployeeData = filteredArray.sort((a, b) => a.salary - b.salary);
            else
                sortedEmployeeData = employee_details.sort((a, b) => a.salary - b.salary);
        }
        else {
            // sortedEmployeeData = employee_details.sort((a, b) => a.name.localeCompare(b.name));
            console.log("error....");
        }
        ShowEmployeeInDom(sortedEmployeeData);
    }
    catch (e) {
        console.log(e);
    }
});

clearSortButton.addEventListener("click", () => {
    dropDownSortElement.value = 0;
    initiator();
});


// =============================================
//            TOAST MESSAGES
//==============================================

//Department data deleted toast message
function employeeDeletedToast() {
    $("#employeeDataDeleted").fadeIn(500);
    setTimeout(() => {
        $("#employeeDataDeleted").fadeOut(500);
    }, 5000);
}

$("#employeeDataDeletedCloseBtn").on("click", () => {
    $("#employeeDataDeleted").fadeOut();
});



//search by department based on the word entered
// department_search.addEventListener("input", function () {
//     name_search.value = "";
//     date_search.value = "";
//     salary_search.value = "";
//     email_search.value = "";

//     let serachValue = department_search.value.trim().toLowerCase();
//     if(!serachValue)
//     {
//         initiator();
//     }
//     let matchingDepartmentIds = department_details
//                               .filter(department=>department.name.toLowerCase().includes(serachValue))
//                               .map(dept=>dept.id);

//     let filteredArray = employee_details.filter(emp=> emp.departmentId !=null && matchingDepartmentIds.includes(emp.departmentId.toString()));

//     ShowEmployeeInDom(filteredArray);
//     console.log(filteredArray);
// });
