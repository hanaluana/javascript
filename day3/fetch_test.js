
const URL =  "https://jsonplaceholder.typicode.com/posts"

const res = fetch(URL)
.then(response => response.json())
.then(obj => console.log(obj))

// console.log(res)