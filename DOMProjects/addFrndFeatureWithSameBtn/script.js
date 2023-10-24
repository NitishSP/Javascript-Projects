var state = document.getElementById("state");
var addFrndbtn = document.querySelector("#add");
var flag = 0;

addFrndbtn.addEventListener("click", function(){
    if(flag == 0){
        state.innerHTML = "Friends";
        state.style.color = "#4fa78d";
        state.style.borderColor = "#4fa78d";
        addFrndbtn.innerHTML = "Remove";
        addFrndbtn.style.backgroundColor = "#c6c6c6";
        flag = 1;
    }else{
        state.innerHTML = "Stranger";
        state.style.color = "#ec5b5b";
        state.style.borderColor = "#ec5b5b";
        addFrndbtn.innerHTML = "Add Friend";
        addFrndbtn.style.backgroundColor = "#4fa78d";
        flag = 0;
    }
})

