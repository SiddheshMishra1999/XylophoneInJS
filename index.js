const C1 = document.getElementById("Q");




function playSound(WAVfile) {
    let audio = new Audio(WAVfile);
    audio.play();
}

C1.addEventListener("click",function(){
    console.log("C1 clicked");
    playSound("sounds/C1.wav");

})


document.onkeydown = function(e){
    switch(e.key){
    case "q": 
    console.log("q");
    playSound("sounds/C1.wav");
    //play function with C1
    break;
    case "Q": 
    console.log("Q");
    playSound("sounds/C1.wav");
    //play function with C1
    break;
    
}

}