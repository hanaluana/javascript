//axios: javascript의 requests

const URL = "https://jsonplaceholder.typicode.com/"

const XHR = new XMLHttpRequest()

// GET
/*
XHR.open('GET',URL+'posts') // 메소드, 인자
XHR.send()

XHR.addEventListener('load', function(e){
    const result = e.target.response
    // console.log(result)
    const jsObject = JSON.parse(result) // JSON을 Object로 변환
    console.log(jsObject)
    console.log(jsObject[0].title)

    //const jsonString = JSON.stringify(jsObject) // Object를 JSON으로 변환
    //console.log(jsonString)
    
})
*/

// POST
/*
XHR.open('POST',URL+'posts')
XHR.setRequestHeader(
    'Content-Type',
    'application/json;charset=UTF-8'
)

const data = {
    userId : 1,
    title : '이거시 제목',
    body: '이거시 바디'
}
XHR.send(JSON.stringify(data))
XHR.addEventListener('load',function(e){
    const result = e.target.response
    console.log(result)
})
*/

// PUT & PATCH
/*
XHR.open('PUT',URL+'posts/1')
XHR.setRequestHeader(
    'Content-Type',
    'application/json;charset=UTF-8'
)

const data = {
    userId : 1,
    title : '이거시 제목',
    body: '이거시 바디'
}
XHR.send(JSON.stringify(data))
XHR.addEventListener('load',function(e){
    const result = e.target.response
    console.log(result)
})
*/

// DELETE

XHR.open('DELETE',URL+'posts/1')
XHR.send()

XHR.addEventListener('load', function(e){
    const result = e.target.response
    // console.log(result)
    const jsObject = JSON.parse(result) // JSON을 Object로 변환
    console.log(jsObject)
})
