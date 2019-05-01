const readFile = (myFunc) => {
    let content
    
    // 파일을 읽어오는데 100ms 소모된다.
    setTimeout(()=>{
        content = "Hello World"
        myFunc(content)
    }, 100)
}

const log = (e)=>{
    console.log(e)
}

readFile(log)
// console.log(fileContent)
