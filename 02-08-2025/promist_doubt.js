// function promise_return_function() {


//     return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 // console.log("welcome");
//                 // resolve("i resolved");
//                 reject(new Error("welcome the Error~.."));
//                 // throw new Error("hey this is error");
//             }, 3000);

//         console.log("i have done the work buddy");
//     });
// }


// async function call_the_promise() {
//     try {
//         console.log("i am inside the calling async function....");
//         const promise_response = await promise_return_function();
//         console.log(promise_response);
//     }
//     catch (error) {
//         console.log("Error : --- ",error.message);
//     }
// }

// call_the_promise();


// This function makes a GET request to a real API
async function fetchUserData() {
    try {
        console.log("🌍 Sending request to API...");

        // API call using fetch (returns a Promise)
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

        console.log(response);
        // Check if the response is OK (status 200–299)
        if (!response.ok) {
            throw new Error(`❌ HTTP error! status: ${response.status}`);
        }

        // Convert response body to JSON (also async)
        const userData = await response.json();

        // Use the data
        console.log("✅ Data received from API:");
        console.log(userData);
    } catch (error) {
        console.log("💥 Error fetching user data:", error.message);
    }
}

// Call the function
fetchUserData();
