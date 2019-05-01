const dooly = document.querySelector('#dooly')
console.log(dooly)

dooly.addEventListener('click', function(e){
    alert('옹동잉');
    console.log(e);
})

// Event listener: ('이벤트의 이름', 함수)

document.addEventListener('keydown',function(e){
    if (e.code=='Space'){
        alert("스페이스 누르셨네요");
    } else if (e.code=='ArrowDown'){
        dooly.style.marginTop = "100px";  
    } else if (e.code=='ArrowUp') {
        dooly.style.marginBottom = "100px";
    } else if (e.code=="ArrowLeft"){
        dooly.style.marginRight = "100px";
    } else if (e.code=="ArrowRight"){
        dooly.style.marginLeft = "100px";
    }
})