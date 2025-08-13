async function get_users() {
    const response = await fetch("http://localhost:3000/users");
    const user_data = await response.json();
    return user_data;
}

const container = document.getElementById("user_details_container");

async function show_all_user() {
    const user_data = await get_users();
    console.log(user_data);

    show(user_data);
}

async function show_gender_users(gender) {
    const user_data = await get_users();
    console.log(user_data);

    const gender_users = user_data.filter(user => user.gender === gender);
    console.log(gender_users);

    show(gender_users);
}

async function show_matching_user(input) {
    const user_data = await get_users();
    // console.log(user_data);

    // console.log(input);
    const matched_users = user_data.filter(user => {
        let user_name = user.username;
        // console.log(user_name);
        if(user_name.includes(input))
        {
           return user;
        }
    });
    // console.log(matched_users);

    show(matched_users);
}

function show(users)
{
    const container = document.getElementById("user_details_container");
    container.innerHTML = "";

    users.forEach(user => {

        const id = document.createElement("h4");
        const username = document.createElement("h4");
        const age = document.createElement("h4");
        const email = document.createElement("p");
        const gender = document.createElement("h5");

        id.textContent = user.id;
        username.textContent = user.username;
        age.textContent = user.age;
        email.textContent = user.email;
        gender.textContent = user.gender;

        const div = document.createElement("div");
        div.append(id, username, age, email, gender);
        div.classList.add("div-design");
        // container.remove();
        container.appendChild(div);
    }
    )
}

// all users 
const all_user_btn = document.getElementById("all-user");
all_user_btn.addEventListener('click', show_all_user);


//male users
const male_user_btn = document.getElementById("male-user");
male_user_btn.addEventListener('click', () => {
    show_gender_users("male");
});

// female users
const female_user_btn = document.getElementById("female-user");
female_user_btn.addEventListener('click', () => {
    show_gender_users("female");
});

//based on user names
const user_input = document.getElementById("username");
user_input.addEventListener("input", () => show_matching_user(user_input.value));
