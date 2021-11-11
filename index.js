const overlay = document.getElementById("overlay")
const jpg = document.getElementById("img1")
const olimg = document.getElementById("overimg")


function click1(){
    overlay.style.display="block";
    olimg.setAttribute('src',img1.src);
}
function click2(){
    overlay.style.display="block";
    olimg.setAttribute('src',img2.src);
}
function click3(){
    overlay.style.display="block";
    olimg.setAttribute('src',img3.src);
}
function click4(){
    overlay.style.display="block";
    olimg.setAttribute('src',img4.src);
}

function off(){
    overlay.style.display="none";
}