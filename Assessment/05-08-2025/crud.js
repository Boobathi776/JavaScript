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
        console.log(error.message);
    }

}
showTask();


//Show the task in the dom lively
const task_container = document.getElementById("task-container");
function show_in_dom(tasks) {

    task_container.innerHTML = "";
    if (tasks.length !== 0) {
        tasks.forEach(task => {

            // document element creation
            const title = document.createElement("h3");
            const description = document.createElement("p");
            const priority = document.createElement("h3");
            const createdDate = document.createElement("h3");
            const isDone = document.createElement("h3");
            const updatedDate = document.createElement("h3");
            const update_btn = document.createElement("button");
            const delete_btn = document.createElement("button");

            const horizontal_line = document.createElement("hr");
            update_btn.textContent = "EDIT";
            delete_btn.textContent = "DELETE";

            //value added to the created elements
            console.log(task);
            title.textContent = task.title;
            description.textContent = task.description;
            priority.textContent = task.priority;
            let date = new Date(task.createdDate).toDateString();
            createdDate.textContent = date;
            isDone.textContent = task.isDone;
            let update_date_sting = new Date(task.updatedDate).toDateString();
            console.log(update_date_sting);
            updatedDate.textContent = update_date_sting;

            //  fill the input with the existing values
            update_btn.addEventListener("click", function () {

                const input_title = document.getElementById("title");
                const input_description = document.getElementById("description");
                const input_priority = document.getElementById("priority");
                const input_done = document.getElementById("done");
                const priority_value = document.getElementById("priority-value");
                const date = new Date();

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
                document.getElementById("update-btn-for-task").addEventListener("click", function (e) {
                    // e.preventDefault();
                    console.log("i gonna call a update function")
                    if (input_title.value.length !== 0 && input_description.value.length !== 0) {
                        update_task(task.id, input_title.value, input_description.value, input_priority.value, task_done, task.createdDate);
                    }
                })
            })

            // delete a task from the to-do list
            delete_btn.addEventListener("click", function (e) {
                e.preventDefault();
                console.log(task.id);
                let url = "http://localhost:3000/tasks/" + task.id;
                fetch(url, {
                    method: "delete"
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                        showTask();
                    })
                    .catch(error => console.log(error));

            }
            )
            const task_holder = document.createElement("div");
            task_holder.append(title, description, priority, createdDate, updatedDate, isDone, update_btn, delete_btn);
            task_holder.classList.add("task-holder");
            task_container.appendChild(task_holder);
        }
        )
    }

    else {
        task_container.textContent = "There is nothing in the server check the url please";
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
    if (title.length === 0) {
        title_error_message.text("The title must be filled");
        title_error_message.css("color", "red");
    }
    else {
        title_error_message.remove();
    }

    const description = $("#description").val().trim();
    let description_error_message = $("#description-error-message");
    if (description.length === 0) {
        description_error_message.text("The description must be filled");
        description_error_message.css("color", "red");
    }
    else {
        description_error_message.remove();
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

    if (title.length !== 0 && description.length !== 0) {
        Store_task(title, description, priority, task_done, date);

    }
})

// ADD A NEW TASK IN THE TO-D0 LIST
async function Store_task(title, description, priority, task_done, createdDate, updated_date = " ") {
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
    const matched_tasks = [];
    task_data.forEach(task => {
        let priority = task.priority;
        if (priority === input_priority) {
            matched_tasks.push(task);
        }
    }
    )
    show_in_dom(matched_tasks);
});

