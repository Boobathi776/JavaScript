// window in js     
//window is a browser tab/window 
console.log(window);
console.log(this);
console.log(self);
console.log(frames);


// important window properties 
window.innerHeight   // Height of the content area
window.innerWidth    // Width of the content area
window.location      // URL info (hostname, pathname, etc.)
window.history       // Browser's session history
window.navigator     // Info about the browser (userAgent, platform)
window.screen        // Info about the user’s screen
window.localStorage  // Persistent storage
window.sessionStorage // Session-based storage


// important methods
window.alert("Hi!");          // Shows alert box
window.confirm("Are you sure?"); // Confirm box
window.prompt("Enter name");  // Prompt input
window.open("https://...");   // Opens a new tab/window
window.setTimeout(fn, ms);    // Delays a function
window.setInterval(fn, ms);   // Repeats a function
window.clearTimeout(id);      // Clears timeout
window.clearInterval(id);     // Clears interval


// accessing document in the window
//object is a HTML content loaded on the window 
console.log(document); //  direct reference to the document 
console.log(window.document);
const path_arr=window.document.location.href.split("/");
console.log(path_arr[path_arr.length-1]);


// important properties 
document.title               // Title of the page
document.URL                 // Current page URL
document.body                // Access <body> element
document.head                // Access <head> element
document.forms               // All form elements
document.images              // All <img> elements
document.links               // All <a> with href


// important methods 
document.getElementById("id")               // Returns one element by ID
document.getElementsByClassName("class")    // Returns HTMLCollection
document.getElementsByTagName("tag")        // Returns HTMLCollection
document.querySelector("selector")          // Returns first match
document.querySelectorAll("selector")       // Returns NodeList
document.createElement("div")               // Creates a new element
document.createTextNode("Hello")            // Creates text node
document.appendChild(node)                  // Adds a node
document.removeChild(node)                  // Removes a node
document.write("<h1>Hello</h1>")            // Writes directly (not recommended)


