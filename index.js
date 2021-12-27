const Q = document.getElementById("Q"); //C1
const J = document.getElementById("J"); //C5
const Y = document.getElementById("Y"); //A1
const M = document.getElementById("M"); //A5
const H = document.getElementById("H"); //B1
const W = document.getElementById("W"); //D1
const K = document.getElementById("K"); //D5
const E = document.getElementById("E"); //E1
const L = document.getElementById("L"); //E5
const R = document.getElementById("R"); //F1
const B = document.getElementById("B"); //F5


function playSound(WAVfile) {
    let audio = new Audio(WAVfile);
    audio.play();
}

Q.addEventListener("click",function(){
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