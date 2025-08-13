// $.ajax({
//   url: "https://api.example.com/data",  // URL to send request
//   method: "GET",                        // GET, POST, PUT, DELETE
//   dataType: "json",                     // expected response type
//   success: function(response) {
//     console.log("Success:", response);
//   },
//   error: function(xhr, status, error) {
//     console.error("Error:", error);
//   }
// });


// Get
// $.ajax({
//   url: "http://localhost:3000/users",
//   method: "GET",
//   dataType: "json",
//   success: function(users) {
//     users.forEach(user => {
//       console.log(user.username);
//     });
//   },
//   error: function(err) {
//     console.error("Failed to fetch users:", err);
//   }
// });


// post
// $.ajax({
//   url: "http://localhost:3000/users",
//   method: "POST",
//   contentType: "application/json",
//   data: JSON.stringify({
//     username: "Boobathi",
//     email: "boobathi@example.com",
//     age: 25
//   }),
//   success: function(response) {
//     console.log("User added:", response);
//   },
//   error: function(err) {
//     console.error("Failed to add user:", err);
//   }
// });


$.get("http://localhost:3000/users", function(data) {
  console.log(data);
});
