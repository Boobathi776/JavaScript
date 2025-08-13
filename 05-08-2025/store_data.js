$("#login-form").on("submit",(e)=>
{
    e.preventDefault();
    let email_input = $("#email").val().trim();
    console.log(email_input);
    let password_input = $("#password").val().trim();
    console.log(password_input);

    if(!localStorage.getItem("stored"))
    {
    $.ajax({
        type: "post",
        url: "http://localhost:3000/users",
        data: JSON.stringify({
            email : email_input,
            password : password_input
        }),
        dataType: "json",
        success: function (response) {
            console.log(response);
            localStorage.setItem("stored","true");
        }
    });
}
else
{
    console.log("hey you already stored your data..");
}
})


$("#context-menu").on("contextMenu",()=>{
    console.log("the div click by right click");
})


