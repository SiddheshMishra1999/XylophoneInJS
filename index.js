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
        buttonAnimation(key);
    })
}

function keyPressEvent(key, WAVfile) {
    playSound(WAVfile);
    buttonAnimation(key);
}

// Gets the key being clicked or pressed and does the animation from the CSS class
function buttonAnimation(currentKey) {
    const delay = 100;
    currentKey.classList.add("pressed");
    setTimeout(function () {
        currentKey.classList.remove("pressed");
    }, delay);
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
            // playSound("sounds/C1.wav");
            // buttonAnimation(Q);
            keyPressEvent(Q, "sounds/C1.wav")

            break;

        // When W or w is pressed
        case "w":
        case "W":
            keyPressEvent(W, "sounds/D1.wav");
            break;

        case "e":
        case "E":
            keyPressEvent(E, "sounds/E1.wav");
            break;

        // When R or r is pressed
        case "r":
        case "R":
            keyPressEvent(R, "sounds/F1.wav");
            break;

        // When T or t is pressed
        case "t":
        case "T":
            keyPressEvent(T, "sounds/G1.wav");
            break;

        // When Y or y is pressed
        case "y":
        case "Y":
            keyPressEvent(Y, "sounds/A1.wav");
            break;

        // When H or h is pressed
        case "h":
        case "H":
            keyPressEvent(H, "sounds/B1.wav");
            break;

        // When J or j is pressed
        case "j":
        case "J":
            keyPressEvent(J, "sounds/C5.wav");
            break;

        // When K or k is pressed
        case "k":
        case "K":
            keyPressEvent(K, "sounds/D5.wav");
            break;

        // When L or l is pressed
        case "l":
        case "L":
            keyPressEvent(L, "sounds/E5.wav");
            break;

        // When B or b is pressed
        case "b":
        case "B":
            keyPressEvent(B, "sounds/F5.wav");
            break;

        // When N or n is pressed
        case "n":
        case "N":
            keyPressEvent(N, "sounds/G5.wav");
            break;

        // When M or m is pressed
        case "m":
        case "M":
            keyPressEvent(M, "sounds/A5.wav");
            break;
    }

}