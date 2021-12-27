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
const T = document.getElementById("T"); //G1
const N = document.getElementById("N"); //G5


function playSound(WAVfile) {
    let audio = new Audio(WAVfile);
    audio.play();
}

//Adds an event listener for a button
function keyClickEvent(key,WAVfile) {
    key.addEventListener("click",function(){
        playSound(WAVfile);
    })
}

keyClickEvent(Q,"sounds/C1.wav");
keyClickEvent(W,"sounds/D1.wav");
keyClickEvent(E,"sounds/E1.wav");
keyClickEvent(R,"sounds/F1.wav");
keyClickEvent(T,"sounds/G1.wav");
keyClickEvent(Y,"sounds/A1.wav");
keyClickEvent(H,"sounds/B1.wav");
keyClickEvent(J,"sounds/C5.wav");
keyClickEvent(K,"sounds/D5.wav");
keyClickEvent(L,"sounds/E5.wav");
keyClickEvent(B,"sounds/F5.wav");
keyClickEvent(N,"sounds/G5.wav");
keyClickEvent(M,"sounds/A5.wav");



//Switch statement for each keypress
document.onkeydown = function(e){
    switch(e.key){

    // When Q or q is pressed
    case "q": 
    console.log("q");
    playSound("sounds/C1.wav");
    break;
    case "Q": 
    console.log("Q");
    playSound("sounds/C1.wav");
    break;


    // When W or w is pressed
    case "w": 
    console.log("w");
    playSound("sounds/D1.wav");
    break;
    case "W": 
    console.log("W");
    playSound("sounds/D1.wav");
    break;

    case "e": 
    console.log("e");
    playSound("sounds/E1.wav");
    break;
    case "E": 
    console.log("E");
    playSound("sounds/E1.wav");
    break;

    // When R or r is pressed
    case "r": 
    console.log("r");
    playSound("sounds/F1.wav");
    break;
    case "E": 
    console.log("R");
    playSound("sounds/F1.wav");
    break;

    // When T or t is pressed
    case "t": 
    console.log("t");
    playSound("sounds/G1.wav");
    break;
    case "E": 
    console.log("T");
    playSound("sounds/G1.wav");
    break;
    
    // When Y or y is pressed
    case "y": 
    console.log("y");
    playSound("sounds/A1.wav");
    break;
    case "Y": 
    console.log("Y");
    playSound("sounds/A1.wav");
    break;

    // When H or h is pressed
    case "h": 
    console.log("h");
    playSound("sounds/B1.wav");
    break;
    case "H": 
    console.log("H");
    playSound("sounds/B1.wav");
    break;

    // When J or j is pressed
    case "j": 
    console.log("j");
    playSound("sounds/C5.wav");
    break;
    case "J": 
    console.log("J");
    playSound("sounds/C5.wav");
    break;

    // When K or k is pressed
    case "k": 
    console.log("k");
    playSound("sounds/D5.wav");
    break;
    case "K": 
    console.log("K");
    playSound("sounds/D5.wav");
    break;

    // When L or l is pressed
    case "l": 
    console.log("l");
    playSound("sounds/E5.wav");
    break;
    case "L": 
    console.log("L");
    playSound("sounds/E5.wav");
    break;

    // When B or b is pressed
    case "b": 
    console.log("b");
    playSound("sounds/F5.wav");
    break;
    case "B": 
    console.log("B");
    playSound("sounds/F5.wav");
    break;

    // When N or n is pressed
    case "n": 
    console.log("n");
    playSound("sounds/G5.wav");
    break;
    case "N": 
    console.log("N");
    playSound("sounds/G5.wav");
    break;

    // When M or m is pressed
    case "m": 
    console.log("m");
    playSound("sounds/A5.wav");
    break;
    case "M": 
    console.log("M");
    playSound("sounds/A5.wav");
    break;
}

}