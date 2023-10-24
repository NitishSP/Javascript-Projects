var mainDiv = document.querySelector("#main");
var cursor = document.querySelector(".cursor");

mainDiv.addEventListener("mousemove", function(moves){
    // console.log(moves.x);
    cursor.style.left = moves.x+"px";
    cursor.style.top = moves.y+"px";
})