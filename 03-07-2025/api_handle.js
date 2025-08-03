// async function getData() {
//     const users_promise = fetch("http://localhost:3000/users");
//     const posts_promise = fetch("http://localhost:3500/posts");
//     const projects_promise = fetch("http://localhost:4000/projects");
//     const orders_promise = fetch("http://localhost:4500/orders");

//     const promise_response = await Promise.all([users_promise, posts_promise, projects_promise, orders_promise]);
//     const result =await Promise.all(promise_response.map(value=>value.json()));

//     result.forEach((result) => {
//         console.log(result);
//     })
// }

// getData();

async function getData() {
    const users_promise = fetch("http://localhost:3000/users");
    const posts_promise = fetch("http://localhost:3500/posts");
    const projects_promise = fetch("http://localhost:4000/products");
    const orders_promise = fetch("http://localhost:4500/orders");

    const promise_response = await Promise.all([
        users_promise,
        posts_promise,
        projects_promise,
        orders_promise
    ]);

    // Await all .json() promises too
    const result = await Promise.all(promise_response.map(res => res.json()));

    result.forEach((data, index) => {
        console.log(`Response ${index + 1}:`, data);
    });
}

getData();



// async function getUser_Data() {
//     const response = await fetch("http://localhost:3000/users");
//     console.log(response);
//     const value =await response.json();

//     console.log(value);
// }

// getUser_Data();


async function put_user()
{
    fetch('http://localhost:3000/users',
        {
            method:"post",
            headers:
            {
               "content-type" : "application/json"
            },
            body:JSON.stringify({
                id:"12",
                name:"guhan",
                age : 23
            })
        }
    )
    .then(response=>response.json())
    .then(result=>console.log(result))
    .catch(error=>console.log(error.message));
}

// put_user();
