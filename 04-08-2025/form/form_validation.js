let user_details = null;
fetch('http://localhost:3000/users')
    .then(data => data.json())
    .then(result => {
        console.log(result);
        user_details = result;
    })
    .catch(error => console.log(error));

const form = document.getElementById("login-form");


form.addEventListener("submit", function (event) {
    event.preventDefault();

    let user_name = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let isSucess;
    const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!#@$%^&*()]).{8,}$/;
    const user_pattern = /^[a-zA-Z]{2,}(?:[ \.][a-zA-Z])*$/;
    if (user_name.length === 0 && !user_pattern.test(user_name)) {
        const warning_element = document.createElement("span");
        warning_element.textContent = "must fill the username";
        document.getElementById("username").after(warning_element);
        // warning_element.slideIn(2000);
    }
    else {
        console.log(user_name);
        if (!password_pattern.test(password))
        {
            const warning_element = document.createElement("span");
            warning_element.textContent = "must fill the password";
            document.getElementById("password").after(warning_element);
        }
        else 
        {
            console.log(password);
            isSucess = validate_user(user_name,password);
        }
    }

    if(isSucess)
    {
        console.log("the operation is success");
        localStorage.setItem("username",user_name);
        window.location.href = "user_details.html";
    }
    else 
    {
        console.log("there is no such user");
    }

});


function validate_user(user_name,password)
{
    for(let user of user_details){
        if(user.username === user_name && password === user.password)
        {
            console.log("valid user");
            return true;
        }
        else 
        {
            continue;
        }
    };
}


async function put_user(username, age, email, password) {
    const response = await fetch('http://localhost:3000/users',
        {
            method: "Post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(
                {
                    username: username,
                    age: age,
                    email: email,
                    password: password
                }
            )
        }
    );

    const result = await response.json();
    console.log(result);
}