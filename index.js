const C1 = document.getElementById("Q");




function playSound(WAVfile) {
    
}

C1.addEventListener("click",function(){
    console.log("C1 clicked");
    //play sound for C1
})


document.onkeydown = function(e){
    switch(e.key){
    case "q": 
    console.log("q");
    //play function with C1
    break;
    case "Q": 
    console.log("Q");
    //play function with C1
    break;
}

}