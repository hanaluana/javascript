
// 1. function 키워드를 통해 함수를 정의
function sum1(a,b){
    return a+b;
}

// 2. 익명 함수를 선언 => 변수에 할당

let sum2 = function(a,b){
    return a+b
}

// 3. ES6 Arrow Function
let sum3 = (a,b) => {
    return a,b
}

let menu = ["짜장면","짬뽕","쌈밥","김밥"]

// for 문을 통해 배열 순회
for (let i=0;i<menu.length;i++){
    console.log(menu[i])
}

// forEach() 통해 순회
menu.forEach(food=>{
    console.log(food)
})




