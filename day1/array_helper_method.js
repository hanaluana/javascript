const posts = [
    {id: 1, title: "헤이 모두들 안녕?"},
    {id: 2, title: "자바 스크립트"},
    {id: 3, title: "조작됬어"},
]

// forEach를 통해 순회를 하여 id가 2번인 
// post를 찾으세요 
posts.forEach(post => {
    if (post.id==2){
        console.log(post.title)
    }
})

const images = [
    {height:10, width:30},
    {height:20, width:90},
    {height:50, width:40},
]

const area = []

//images에 들어가 있는 image들의 area를 계산해서 area에 넣어버려
images.forEach(image => {
    area.push(image.height*image.width)
})
console.log(area)


const numbers = [1,2,3,4,5,6]
let squaredNumbers = []

// 1. squaredNumbers 안에 numbers에 들어간 요소들을 제곱을 한 숫자들의 배열로 만든다.
// 2. forEach 에는 return이 없다.
numbers.forEach(x => {
    squaredNumbers.push(x*x)
})

// 2. map : return 값이 있따.
squaredNumbers = []
squaredNumbers = numbers.map(x => {return x*x})
console.log(squaredNumbers)

// 3. find
let users = [
    {id:1, username:'tony'},
    {id:2, username:'steve'},
    {id:3, username:'thor'},
    {id:4, username:'tony'},
    {id:5, username:'scarlett'}
]
var found = users.find(user=>user.username=='tony')
console.log(found)

// 4. filter
var result = users.filter(user => user.username=='tony');
console.log(result)

// 5. reject
function reject(array,func){
    return array.filter(function(x){
        return !func(x)
    });
}

const not_tonys = reject(users, function(user){
    return user.username==='tony'
})

console.log(not_tonys)

// 6. every
console.log(users.every(x=>x.username=='tony'))

// 7. some
console.log(users.some(x =>x.username=='tony'))




