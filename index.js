// Keyboard keys to musical notes
//  Q => C1
//  J => C5
//  Y => A1
//  M => A5
//  H => B1
//  W => D1
//  K => D5
//  E => E1
//  L => E5
//  R => F1
//  B => F5
//  T => G1
//  N => G5


function playSound(WAVfile) {
    let audio = new Audio(WAVfile);
    audio.play();
}

//Event listener to connect the click of a button to its WAV file
function keyClickEvent(key, WAVfile) {
    key.addEventListener("click", function () {
        playSound(WAVfile);
    })
}

function keyPress(key,WAVfile,originalColor, activeColor) {
    const delayInMilliseconds = 250; //1 second
    let sheet = document.createElement('style')
    sheet.innerHTML = `#${key} {background-color:${activeColor};}`;
    document.body.appendChild(sheet);
    playSound(WAVfile);
    setTimeout(function () {
       // let sheet = document.createElement('style')
        sheet.innerHTML = `#${key} {background-color:${originalColor};}`;
        document.body.appendChild(sheet);
    }, delayInMilliseconds);
}




//Every key has same name as HTML ID, so there is no need for 
//document.getElementById()
keyClickEvent(Q, "sounds/C1.wav");
keyClickEvent(W, "sounds/D1.wav");
keyClickEvent(E, "sounds/E1.wav");
keyClickEvent(R, "sounds/F1.wav");
keyClickEvent(T, "sounds/G1.wav");
keyClickEvent(Y, "sounds/A1.wav");
keyClickEvent(H, "sounds/B1.wav");
keyClickEvent(J, "sounds/C5.wav");
keyClickEvent(K, "sounds/D5.wav");
keyClickEvent(L, "sounds/E5.wav");
keyClickEvent(B, "sounds/F5.wav");
keyClickEvent(N, "sounds/G5.wav");
keyClickEvent(M, "sounds/A5.wav");



//Switch statement for each keypress
document.onkeydown = function (e) {
    switch (e.key) {
        // When Q or q is pressed
        case "q":
        case "Q":
            //playSound("sounds/C1.wav");
            keyPress("Q","sounds/C1.wav","lightcoral","rgb(255, 179, 179)");
            break;

        // When W or w is pressed
        case "w":
        case "W":
            playSound("sounds/D1.wav");
            break;

        case "e":
        case "E":
            playSound("sounds/E1.wav");
            break;

        // When R or r is pressed
        case "r":
        case "R":
            playSound("sounds/F1.wav");
            break;

        // When T or t is pressed
        case "t":
        case "T":
            playSound("sounds/G1.wav");
            break;

        // When Y or y is pressed
        case "y":
        case "Y":
            playSound("sounds/A1.wav");
            break;

        // When H or h is pressed
        case "h":
        case "H":
            playSound("sounds/B1.wav");
            break;

        // When J or j is pressed
        case "j":
        case "J":
            playSound("sounds/C5.wav");
            break;

        // When K or k is pressed
        case "k":
        case "K":
            playSound("sounds/D5.wav");
            break;

        // When L or l is pressed
        case "l":
        case "L":
            playSound("sounds/E5.wav");
            break;

        // When B or b is pressed
        case "b":
        case "B":
            playSound("sounds/F5.wav");
            break;

        // When N or n is pressed
        case "n":
        case "N":
            playSound("sounds/G5.wav");
            break;

        // When M or m is pressed
        case "m":
        case "M":
            playSound("sounds/A5.wav");
            break;
    }

}