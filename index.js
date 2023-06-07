var miboton = document.getElementById("mybutton")
var mycolor = document.getElementById("mycolor")
var Mypicture = document.getElementById("Mypicture")

function changecolor(){
    Mypicture.style.backgroundColor = mycolor.value
}

miboton.addEventListener("click",changecolor)