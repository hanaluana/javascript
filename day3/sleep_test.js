

function sleep(sec){
    let start = Date.now()
    while (Date.now()-start< sec){
    }
    console.log('쉬는 시간이에용')
}

function shinun(){
    setTimeout(()=>{
        console.log("이건 타임아웃")
    },5000)
    // setInterval(()=>{
    //     console.log("이건 인터벌")
    // },2000)
    // sleep(5000)
    return '이건 리턴'
}

console.log("쉬는시간 3초전")
console.log(shinun())
console.log("쉬는시간 다 됨")

