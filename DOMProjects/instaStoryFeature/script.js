var arr = [
    {dp: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80&w=987&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1551024739-78e9d60c45ca?auto=format&fit=crop&q=80&w=987&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp: "https://images.unsplash.com/photo-1694334389520-8e39e13f2ac9?auto=format&fit=crop&q=80&w=1035&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1648994176530-f2821a75e45a?auto=format&fit=crop&q=80&w=1035&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp: "https://images.unsplash.com/photo-1693323818873-bcf90d64b1fe?auto=format&fit=crop&q=80&w=987&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1570964251416-6ae7f9b8db47?auto=format&fit=crop&q=80&w=993&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp: "https://images.unsplash.com/photo-1697660981480-f55beb296193?auto=format&fit=crop&q=80&w=987&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1697660033678-b3ad48deaeec?auto=format&fit=crop&q=80&w=987&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
] 

var clutter = ""
arr.forEach(function(elem, indx){
    clutter += `<div class="story">
    <img id="${indx}" src="${elem.dp}" alt="">
</div>`
})


var storiyan = document.querySelector("#storiyan");
storiyan.innerHTML = clutter;
var fullScreen = document.querySelector("#full-screen");

storiyan.addEventListener("click", function(dets){
    var storyImg = arr[dets.target.id].story;
    fullScreen.style.display = "block";
    fullScreen.style.backgroundImage = `url(${storyImg})`;

    setTimeout(function(){
        fullScreen.style.display = "none"
    }, 3000)
})

