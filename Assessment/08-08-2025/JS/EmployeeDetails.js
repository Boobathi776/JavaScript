// import {fillForm} from "./addEmployeeForm.js";

let employee_data;
let department_data;
async function getEmployeeDetails() {
    try {
        const response = await fetch("http://localhost:3000/employees");
        const employee_data = await response.json();
        ShowEmployeeInDom(employee_data);
        // employee_data = employee_data;
        return employee_data;
        console.log(employee_data);
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

getEmployeeDetails();
// getDepartmentDetail();

export async function getDepartmentDetail() {
    const response = await fetch("http://localhost:3000/departments");
    const departments = await response.json();
    // console.log(departments);
    return departments;
}

function ShowEmployeeInDom(employee_details) {

    document.getElementById("employee-details");

    console.log("done 1")
    if (employee_details !== null) {
        employee_details.forEach(async function (employee) {
            console.log(" i am rendering")
            const name = document.createElement("td");
            name.classList.add("text-center")
            const email = document.createElement("td");
            email.classList.add("text-center")

            const department = document.createElement("td");
            const departments = await getDepartmentDetail();
            console.log(departments);
            let department_name;
            departments.forEach((department) => {
                console.log(department.id)
                if (employee.departmentId == department.id) {
                    department_name = department.name;
                    console.log(department_name);
                }
            })
            department.textContent = department_name;

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
                localStorage.setItem("isEdit","true");
                localStorage.setItem("updating-employee",JSON.stringify(employee));
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

const name_search =document.getElementById("name-search");
name_search.addEventListener("input",async function()
{
    console.log("yes");
    let filteredArray = [];
    const allEmployee = await getEmployeeDetails();
    // console.log(allEmployee);
    allEmployee.forEach(employee=>
    {
    if(employee.name.includes(name_search.value.trim()))
    {
        console.log(employee.name);
        filteredArray.push(employee);
    }
})

ShowEmployeeInDom(filteredArray);
});

const drop_down_sort =  document.getElementById("sort-dropdown");

drop_down_sort.addEventListener("input", async function()
    {
        const allEmployee = await getEmployeeDetails();
            const departmentList = [];
            allEmployee.forEach((employee) => {
                console.log(department.id)
                if (drop_down_sort.value == employee.id) {
                   departmentList.push(employee);
                }
            })
            departmentList.sort((a,b)=>b-a);
            ShowEmployeeInDom(departmentList);
    }
)