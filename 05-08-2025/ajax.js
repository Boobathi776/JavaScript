// $.ajax({
//     method: "GET",
//     url: "http://localhost:3000/users",
//     contentType : "application/json",
//     success: function (response) {
//         console.log(response);
//     },
//     error : function(error){
//         console.log(error);
//     }
// });


// $.ajax({
//     method:"post",
//     url : "http://localhost:3000/users",
//     contentType : "application/json",
//     data:JSON.stringify({
//         username : "guru",
//         age : 30,
//         email : 'gooksguha47@gmil.com',
//         gender : 'female'
//     }),
//     success : function(response)
//     {
//         console.log(response);
//     },
//     error : function(error)
//     {
//         console.log(error);
//     }
// })



// $.ajax({
//     type: "patch",
//     url: "http://localhost:3000/users/4",
//     data: JSON.stringify({
//         username : "gooks guhan"
//     }),
//     dataType: "json",
//     success: function (response) {
//         console.log(response);
//     }
// });

document.cookie = "username=boobathi; path=/;max-age=60";
console.log(document.cookie);