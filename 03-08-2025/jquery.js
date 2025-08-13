// $(".hide").click(()=>{
//     $("p").hide(2000);
// });

// $(".show").click (()=>
// {
//     $("p").show(2000);
// });

$(".hide").on("dblclick",()=>{
    $("p").toggle(1000);  // instead of above code we can use like this 
})



localStorage.setItem("name","boobathi");
localStorage.setItem("password","boobathiraja");
// console.log(localStorage.getItem("name"));

document.cookie = "name=Boobathi;path=/;max-age=3600;secure";
console.log(document.cookie);

