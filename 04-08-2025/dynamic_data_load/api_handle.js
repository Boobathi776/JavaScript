async function get_post_Data()
{
    const  response = await fetch('http://localhost:4050/posts/');
    const  data = await response.json();
    // console.log(data);
    return data;
}

async function dynamic_showing()
{
const posts_data =await get_post_Data();
console.log(posts_data);
const container = document.getElementById("post-container");

posts_data.forEach(post => {
    const title = document.createElement("h2");
    const author = document.createElement("h3");
    const content = document.createElement("p");
    const date = document.createElement("span");

    title.textContent = post.title;
    author.textContent = post.author;
    content.textContent = post.content;
    date.textContent = post.date;

    const div = document.createElement("div");
    // div.setAttribute("class","box");
    div.classList.add("div-style");
    div.append(title,author,content,date);
    container.appendChild(div);
    // container.setAttribute("class","con");
    container.classList.add("container");
});
console.log(posts_data);
}

dynamic_showing();
