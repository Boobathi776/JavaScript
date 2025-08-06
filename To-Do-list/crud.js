let task_data;
// READ DATA FROM JSON-SERVER
async function showTask() {
    try {
        const response = await fetch("http://localhost:3000/tasks");
        if (!response.ok) {
            throw new Error("Nework error.....");
        }
        task_data = await response.json();
        console.log(task_data);
        show_in_dom(task_data);
    }
    catch (error) {
        console.log("unable to fetch from the server.......\nNetwork issue");
        document.getElementById("update-btn-for-task").setAttribute("disabled", "true");
        document.getElementById("submit-btn").setAttribute("disabled", "true");
    }

}
showTask();

document.getElementById("update-btn-for-task").style.display = "none";

//Show the task in the dom lively
const task_container = document.getElementById("task-container");
function show_in_dom(tasks) {
    document.getElementById("update-btn-for-task").style.display = "none";

    task_container.innerHTML = "";
    if (tasks.length !== 0) {

        document.getElementById("submit-btn").style.display = "block";
        tasks.forEach(task => {

            // document element creation
            const title = document.createElement("h5");
            const description = document.createElement("p");
            const priority = document.createElement("h5");
            const createdDate = document.createElement("h5");



            const isDone = document.createElement("input");
            isDone.setAttribute("type", "checkbox");
            isDone.classList.add("form-check-input", "bg-primary");
            isDone.style.transform = "scale(1.5)"; // 1.5 times larger
            isDone.checked = task.isDone;

            const toggle_holder = document.createElement("div");
            toggle_holder.classList.add("form-check", "form-switch", "w-100", "h-100", "d-flex", "justify-content-center", "align-items-center");
            toggle_holder.appendChild(isDone);

            isDone.addEventListener("input", function () {
                const task_status = isDone.checked;
                console.log(task_status);
                 $.ajax({
                    type: "patch",
                    url: "http://localhost:3000/tasks/"+task.id.trim(),
                    data: JSON.stringify(
                        {
                            isDone : task_status
                        }
                    ),
                    dataType: "dataType",
                    success: function (response) {
                        console.log("successfully updated the status  : "+response);
                        showTask();
                    },
                    error : function(error)
                    {
                        console.log("error occured while i send a patch for task status");
                    }
                 });
            })



            const updatedDate = document.createElement("h5");
            const update_btn = document.createElement("button");
            const delete_btn = document.createElement("button");


            title.classList.add("w-100", "text-break");
            description.classList.add("w-100");
            priority.classList.add("w-100", "text-center")
            update_btn.classList.add("bg-warning", "btn", "text-light", "fs-0.8", "m-3");
            delete_btn.classList.add("bg-danger", "btn", "text-light", "fs-0.8")
            // const horizontal_line = document.createElement("hr");
            update_btn.textContent = "EDIT";
            // update_btn.setAttribute("type","button"); 
            delete_btn.textContent = "DELETE";
            // delete_btn.setAttribute("type","button");

            //value added to the created elements
            console.log(task);
            title.textContent = task.title;
            description.textContent = task.description;
            priority.textContent = task.priority;
            let date = new Date(task.createdDate).toLocaleDateString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric"
            });
            createdDate.textContent = date;
            isDone.textContent = task.isDone;
            let update_date_sting = new Date(task.updatedDate).toLocaleDateString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric"
            });
            console.log(update_date_sting);

            if (update_date_sting !== "Invalid Date") {
                updatedDate.textContent = update_date_sting;
            }
            else {
                updatedDate.textContent = "----";
            }


            const task_holder = document.createElement("div");
            task_holder.classList.add("text-center", "fs-0.1");
            task_holder.append(title, description, priority, createdDate, updatedDate, toggle_holder, update_btn, delete_btn);
            task_holder.classList.add("task-holder");
            task_container.appendChild(task_holder);

            //  fill the input with the existing values
            update_btn.addEventListener("click", function () {

                document.getElementById("update-btn-for-task").style.display = "block";

                document.getElementById("submit-btn").style.display = "none";

                const input_title = document.getElementById("title");
                const input_description = document.getElementById("description");
                const input_priority = document.getElementById("priority");
                const input_done = document.getElementById("done");
                const priority_value = document.getElementById("priority-value");
                // const date = new Date();

                input_title.value = task.title;
                input_description.value = task.description;
                input_priority.value = task.priority;
                priority_value.textContent = task.priority;
                // let isDone;

                if (Boolean(task.isDone)) {
                    input_done.setAttribute("checked", "true");
                }

                // let task_done = task.isDone;
                // const task_done_checkbox = document.getElementById('input[type="checkbox"]:checked');
                // console.log(task_done_checkbox + " nothing to day");
                // if (task_done_checkbox) {
                //     console.log("task check box  " + true);
                //     task_done = true;
                // }
                // else
                // {
                //     task_done=false;
                // }
                // ------------------------------------------------------------------------------------------------------------------
                const checkbox = document.getElementById("done");

                // Set initial checkbox state from object
                checkbox.checked = task.isDone;
                let task_done;
                // Listen for checkbox changes
                checkbox.addEventListener("change", function () {
                    task.isDone = checkbox.checked;
                    task_done = task.isDone;
                    console.log("task.isDone:", task.isDone);
                });
                // --------------------------------------------------------------------------------------------------------------------

                //form update button which send the post request to the json server
                document.getElementById("update-btn-for-task").addEventListener("click", function (e) {
                    e.preventDefault();
                    console.log("i gonna call a update function")
                    if (input_title.value.length !== 0 && input_description.value.length !== 0) {
                        update_task(task.id, input_title.value, input_description.value, input_priority.value, task_done, task.createdDate);
                    }

                    clearForm(); // clear the input fields in the form

                    document.getElementById("submit-btn").style.display = "block";
                    document.getElementById("update-btn-for-task").style.display = "none";
                    showTask();

                })

            })

            // delete a task from the to-do list
            delete_btn.addEventListener("click", function (e) {
                e.preventDefault();
                e.stopPropagation();
                if (confirm("Are you sure do delete this task ?")) {
                    console.log(task.id);
                    let url = "http://localhost:3000/tasks/" + task.id;
                    fetch(url, {
                        method: "delete"
                    })
                        .then(response => response.json())
                        .then(data => {
                            console.log(data);
                            clearForm();
                            document.getElementById("submit-btn").style.display = "block";
                            showTask();

                        })
                        .catch(error => console.log(error));
                }
            }
            )
        }
        )
    }

    else {
        task_container.textContent = "oops! No Task is here";
        task_container.classList.add("text-center", "fw-bold");
        // document.getElementById("task-headings").innerHTML = ""
        // localStorage.setItem("isDataExist", "false");
    }
}

// for update priority in the window lively
const priority = $("#priority");
priority.on("input", () => {
    let priority_value = priority.val();
    if (priority_value < 6 && priority_value > 0) {
        $("#priority-value").text(priority_value);
    }
})


// CREATE A NEW TASK TO IN TO-DO LIST
const form = $("#task-add-form");
form.on("submit", function (e) {
    e.preventDefault();
    const title = $("#title").val().trim();
    let title_error_message = $("#title-error-message");
    if (title.length < 3) {
        title_error_message.text("The title must be filled with minimum 3 characters");
        title_error_message.css("color", "red");
    }
    else {
        title_error_message.text("");
    }

    const description = $("#description").val().trim();
    let description_error_message = $("#description-error-message");
    if (description.length === 0) {
        description_error_message.text("The description must be filled");
        description_error_message.css("color", "red");
    }
    else {
        description_error_message.text("");
    }

    const priority = $("#priority").val();
    console.log(priority);

    let task_done = false;
    const task_done_checkbox = $('input[type="checkbox"]:checked');
    if (task_done_checkbox.val() === "on") {
        console.log("task check box  " + true);
        task_done = true;
    }

    const date = new Date();
    console.log(date);

    if (title.length !== 0 && title.length > 2 && description.length !== 0) {
        Store_task(title, description, priority, task_done, date);
    }

    clearForm();
})

// ADD A NEW TASK IN THE TO-D0 LIST
async function Store_task(title, description, priority, task_done, createdDate, updated_date = "") {
    try {
        console.log(task_done);
        const response = await fetch("http://localhost:3000/tasks",
            {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(
                    {
                        title: title,
                        description: description,
                        priority: priority,
                        isDone: task_done,
                        createdDate: createdDate,
                        updatedDate: updated_date
                    }
                )
            }
        )

        const task_data = await response.json();
        // console.log(task_data);
        showTask();
        localStorage.setItem("added-task", JSON.stringify(task_data));
    }
    catch (error) {
        console.log("something went wrong while add a new task....!");
    }
}


//UPDATE THE TASK THAT ALREADY EXISTS USING PATCH
async function update_task(id, title, description, priority, work_done, created_Date) {
    try {
        console.log("here i reached");
        const updatedDate = new Date();

        let url = "http://localhost:3000/tasks/" + id;
        console.log(url);
        const response = await fetch(url.trim(),
            {
                method: "PATCH",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(
                    {
                        title: title,
                        description: description,
                        priority: priority,
                        isDone: work_done,
                        createdDate: created_Date,
                        updatedDate: updatedDate
                    }
                )
            }
        )

        const task_data = await response.json();
        // console.log(task_data);
        showTask();

        sessionStorage.setItem("updated task", JSON.stringify(task_data));
    }
    catch (error) {
        console.log("something went wrong while update the task.....!");
    }
}

// search based on the title
$("#search").on("input", function () {
    let input_value = $(this).val().trim();
    // console.log(input_value);
    const matched_tasks = [];
    task_data.forEach(task => {                // added a extra paranthesis () in it 
        let title = task.title;
        // console.log(title);
        if (title.includes(input_value)) {
            matched_tasks.push(task);
        }
    }
    )
    // console.log(matched_tasks);
    show_in_dom(matched_tasks);
});

$("#priority-finder").on("change", function () {
    let input_priority = $(this).val();
    if (input_priority > 0) {
        const matched_tasks = [];
        task_data.forEach(task => {
            let priority = task.priority;
            if (priority === input_priority) {
                matched_tasks.push(task);
            }
        }
        )
        show_in_dom(matched_tasks);
    }
    else {
        show_in_dom(task_data);
    }

});

function dom_headings() {
    const title = document.createElement("h5");
    const description = document.createElement("h5");
    const priority = document.createElement("h5");
    const createdDate = document.createElement("h5");
    const isDone = document.createElement("h5");
    const updatedDate = document.createElement("h5");
    const update_btn = document.createElement("h5");
    const delete_btn = document.createElement("h5");

    title.textContent = "TITLE";
    description.textContent = "DESCRIPTION";
    priority.textContent = "PRIORITY";
    createdDate.textContent = "CREATED DATE";
    isDone.textContent = "TASK STATUS";
    updatedDate.textContent = "UPDATED DATE";
    update_btn.textContent = "UPDATE";
    delete_btn.textContent = "DELETE";

    const task_headings = document.getElementById("task-headings");
    task_headings.append(title, description, priority, createdDate, updatedDate, isDone, update_btn, delete_btn);

}

function clearForm() {
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("priority").value = 3;
    document.getElementById("priority-value").textContent = 3;
    document.getElementById("done").checked = false;
}