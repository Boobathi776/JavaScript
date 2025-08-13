$("#form-1").on("focusin",function()
{
    $(this).css({
        "background-color":"green"
    })
});

$("#form-1").on("focusout",function(){
        $(this).css({
        "background-color":"red"
    })
});

let username,age;

$("#username").on("change",function()
{
    username = $(this).val();
    console.log(username);
})

$("#age").on("change",function()
{
    age = $(this).val();
    console.log(age);
})


$("#form-1").on("submit",function(event)
{
    event.preventDefault();
    event.stopPropagation();
    console.log("Submitted values:", { username, age });
    post_user({
        name : username,
        age  : age
    })
})


async function post_user(details)
{
    console.log(details.name + " "+details.age);
}