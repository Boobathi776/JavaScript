// This works in Node v18+
// const fetch = require("node-fetch"); // Only if using Node < 18

// fetch("http://localhost:3000/users")
//   .then(response => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     // console.log(JSON.parse(response));
//     // console.log(response.json());
//     return response.json(); // Also returns a Promise
//   })
//   .then(data => {
//     console.log("Users fetched:", data);
//   }) 
//   .catch(error => {
//     console.error("Error occurred:", error.message);
//   });

// console.log("Fetching users...");



// using async and await

async function getUsers() {
    try {
        console.log("Requesting users...");
        const response = await fetch("http://localhost:3000/users");

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json(); //instead of .json() response.text()   then ->  JSON.parse(response.text()) 
        console.log("Users fetched:", data);
    } catch (error) {
        console.error("Failed to fetch users:", error.message);
    }
}

getUsers();


async function postUsers() {
    try {
        const user_Data = {
            id: "3",
            name: 'naruto',
            email: 'naruto@example.com'
        }

        const response = await fetch('http://localhost:3000/users',
            {
                method: "Post",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(user_Data)
            });

        if (!response.ok) {
            throw new Error("unable to process the data..");
        }
        const data = await response.json();
        console.log("post created : " + data);
    }
    catch (error) {
        console.log(error);
    }
}

//  postUsers();


async function putUser() {
    const update_user =
    {
        id: 4,
        name: 'naruto uzumaki',
        email: 'uzumaki@gmail.com'
    }

    const response = await fetch("http://localhost:3000/users   ",
        {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(update_user)
        });

    const data = await response.json();
    console.log("data updated successfully"+data);
}

putUser();

async function deletePost() {
  const res = await fetch("http://localhost:3000/users/3", {
    method: "DELETE"
  });

  console.log("🗑️ Post deleted:", res.status); // Should be 200 or 204
}

// deletePost();