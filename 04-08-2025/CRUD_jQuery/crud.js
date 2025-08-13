async function get_users()
{
    const response = await fetch("http://localhost:3000/users");
    const user_data = await response.json();
    return user_data;
}

//  let input_field = $("<input></input>").attr({
// "type" : "text",
// "id" : "username",
// "autocomplete" : "off"
// });

// $("body").append(input_field);

// $("#username").remove();

async function show_all_users()
{
    const all_users =await get_users();
    console.log(all_users);
    show(all_users);
}

// show_all_users();


$("#form").on("submit",(e)=>
{
    e.preventDefault();
    let username = $("#username").val();
    let age = $("#age").val();
    let email = $("#email").val();
    let gender = $("#gender").val();
    console.log(username,age,email,gender);
    post_users(username,age,email,gender);  
})


async function post_users(username,age,email,gender)
{
    const response = await fetch("http://localhost:3000/users",
        {
            method:"post",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(
                {
                    username : username,
                    age : age,
                    email : email,
                    gender : gender
                }
            )
        }
    )
    const result = await response.json();
    console.log(result);
}

//if enter a user input
$("#u-username").on("input",function()
{
    let value = $(this).val().trim();
    console.log(value);
    show_matching_user(value);
});

//if enter a user email
$("#u-email").on("input",function()
{
    let value = $(this).val().trim();
    console.log(value);
    show_matching_user(value);
});

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
    console.log(matched_users);
    show(matched_users);
}

async function show_matching_user_email(input) {
    const user_data = await get_users();
    // console.log(user_data);

    // console.log(input);
    const matched_users = user_data.filter(user => {
        let user_email = user.email;
        // console.log(user_name);
        if(user_email.includes(input))
        {
           return user;
        }
    });
    // console.log(matched_users);
    console.log(matched_users);
    show(matched_users);
}

function show(users_data)
{
    $("#container").empty();
    users_data.forEach(user => {
        let userID = $("<h3></h3>").text(user.id);
        let username = $("<h2></h2>").text(user.username);
        let email = $("<h3></h3>").text(user.email);
        let age = $("<h3></h3>").text(user.age);
        let gender = $("<h3></h3>").text(user.gender);
        let delete_user = $("<button></button>").text("delete");
        let update_user = $("<button></button>").text("Update");

        let div = $("<div></div>").attr("id","user-div");
        div.addClass("user-div");
        div.append(userID,username,email,age,gender,delete_user,update_user);
        $("#container").append(div);
    });
}