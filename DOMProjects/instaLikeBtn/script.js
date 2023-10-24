var container = document.querySelector("#container");
var love = document.querySelector("#loveIcon");
var likeBtn = document.querySelector("#likeBtn");
var bookmarkBtn = document.querySelector("#bookmark");

var likeFlag = 0;
var bookmarkFlag = 0;

container.addEventListener("dblclick", function(){
    love.style.transform = 'translate(-50%, -50%) scale(1)';
    love.style.opacity = 0.8;
    likeBtn.className = 'ri-heart-3-fill';

    setTimeout(function(){
        love.style.opacity = '0';
    }, 600)
    setTimeout(function(){
        love.style.transform = 'translate(-50%, -50%) scale(0)';
    }, 1000)
})

likeBtn.addEventListener("click", function(){
    if(likeFlag == 0){
        likeBtn.className = 'ri-heart-3-fill';
        likeFlag = 1;
    }else{
        likeBtn.className = 'ri-heart-3-line';
        likeFlag = 0;
    }
})

bookmarkBtn.addEventListener("click", function(){
    if(bookmarkFlag == 0){
        bookmarkBtn.className = 'ri-bookmark-fill';
        bookmarkFlag = 1;
    }else{
        bookmarkBtn.className = 'ri-bookmark-line';
        bookmarkFlag = 0;
    }
})