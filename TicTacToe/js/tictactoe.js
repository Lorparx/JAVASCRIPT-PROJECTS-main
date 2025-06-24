//This variable keeps track of whose turn it is.
let activePlayer = 'X';
//This array stores an array of moves. We use this to determine win conditions.
let selectedSquares = [];

let gameOver = false; 
let computerTimeout = null; 
//This function is for placing an x or o in a square.

function placeXOrO(squareNumber) {
    if (gameOver) return false; // Prevent moves if game is over
    //This condition ensures a square hasn't been selected already.
    //The .some() method is used to check each element of the selectSquare array
    //to see if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //This variable retrieves the HTML element id that was clicked.
        let select = document.getElementById(squareNumber);
        //This condition checks who's turn it is.
        if (activePlayer === 'X') {
            //If activePlayer is equal to 'X', the x.png is placed in HTML
            select.style.backgroundImage = 'url("images/x.png")';
        } else {
            //If activePlayer is equal to 'O', the o.png is placed in HTML
            select.style.backgroundImage = 'url("images/o.png")';
        }
        //squareNumber and activePlayer are concatenated together and added to array.
        selectedSquares.push(squareNumber + activePlayer);
        //This calls a function to check for any win conditions.
        checkWinConditions();
        //This condition is for changing the active player.
        if (activePlayer === 'X') {
            //If active player is 'X' change it to 'O'.
            activePlayer = 'O';
        } else {
            //Change the activePlayer to 'X'
            activePlayer = 'X';
        }
        //This function plays placement sound.
        audio('./media/place.mp3');
        //This condition checks to see if it is the computers turn.
        if (activePlayer === 'O') {
            //This function disables clicking for computers turn.
            disableClick();
            computerTimeout = setTimeout(function () { computersTurn(); }, 1000);
        }

        //Returning true is needed for our computersTurn() function to work.
        return true;
    }
}

//This function results in a random square being selected by the computer.
function computersTurn() {
    if (gameOver) return;
    //This boolean is needed for our while loop.
    let success = false;
    //This variable stores a random number 0-8.
    let pickASquare;
    //This condition allows our while loop to keep trying if a square is selected already.
    while (!success) {
        //A random number between 0 and 8 is selected.
        pickASquare = String(Math.floor(Math.random() * 9));
        //If the random number evaluated returns true, the square hasn't been selected yet.
        if (placeXOrO(pickASquare)) {
            //This changes our boolean and ends the loop.
            success = true;
        }
        // Add this extra break just in case
        if (gameOver) break;
    }
}
//This function parses the selectedSquares array to search for win conditions.
//drawLine( ) function is called to draw a line on the screen if the condition is met.
function checkWinConditions() {
    // X0, 1, 2 condition.
    if (arrayIncludes('0X', '1X', '2X')) { gameOver = true; drawWinLine(50, 100, 558, 100) }
    // X 3, 4, 5 condition.
    else if (arrayIncludes('3X', '4X', '5X')) { gameOver = true; drawWinLine(50, 304, 558, 304) }
    // X 6, 7, 8 condition.
    else if (arrayIncludes('6X', '7X', '8X')) { gameOver = true; drawWinLine(50, 508, 558, 508) }
    // X0, 3, 6 condition.
    else if (arrayIncludes('0X', '3X', '6X')) { gameOver = true; drawWinLine(100, 50, 100, 558) }
    // X 1, 4, 7 condition.
    else if (arrayIncludes('1X', '4X', '7X')) { gameOver = true; drawWinLine(304, 50, 304, 558) }
    // X 2, 5, 8 condition.
    else if (arrayIncludes('2X', '5X', '8X')) { gameOver = true; drawWinLine(508, 50, 508, 558) }
    // X 6, 4, 2 condition.
    else if (arrayIncludes('6X', '4X', '2X')) { gameOver = true; drawWinLine(100, 508, 510, 90) }
    // X0, 4, 8 condition.
    else if (arrayIncludes('0X', '4X', '8X')) { gameOver = true; drawWinLine(100, 100, 520, 520) }
    // 00, 1, 2 condition.
    else if (arrayIncludes('0O', '1O', '2O')) { gameOver = true; drawWinLine(50, 100, 558, 100) }
    // O 3, 4, 5 condition.
    else if (arrayIncludes('3O', '4O', '5O')) { gameOver = true; drawWinLine(50, 304, 558, 304) }
    // O 6, 7, 8 condition.
    else if (arrayIncludes('6O', '7O', '8O')) { gameOver = true; drawWinLine(50, 508, 558, 508) }
    // 0O, 3O, 6O condition.
    else if (arrayIncludes('0O', '3O', '6O')) { gameOver = true; drawWinLine(100, 50, 100, 558) }
    // O 1, 4, 7 condition.
    else if (arrayIncludes('1O', '4O', '7O')) { gameOver = true; drawWinLine(304, 50, 304, 558) }
    // O 2, 5, 8 condition.
    else if (arrayIncludes('2O', '5O', '8O')) { gameOver = true; drawWinLine(508, 50, 508, 558) }
    // O 6, 4, 2 condition.
    else if (arrayIncludes('6O', '4O', '2O')) { gameOver = true; drawWinLine(100, 508, 510, 90) }
    // 0O, 4O, 8O condition.
    else if (arrayIncludes('0O', '4O', '8O')) { gameOver = true; drawWinLine(100, 100, 520, 520) }
    //This condition checks for a tie. If none of the above conditions are met and
    //9 squares are selected the code executes.
    else if (selectedSquares.length >= 9) {
        gameOver = true;
        audio('./media/tie.mp3');
        setTimeout(resetGame, 500);
    }
    //This function checks if an array includes 3 strings. It is used to check for
    //each win condition.
    function arrayIncludes(squareA, squareB, squareC) {
        // These 3 variables will be used to check for 3 in a row.
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        // If the 3 variables we pass are all included in our array then
        // true is returned and our else if condition executes the drawLine() function.
        if (a === true && b === true && c === true) { return true; }
    }
}

//This function makes our body element temporarily unclickable.
function disableClick() {
    //This makes our body unclickable.
    document.body.style.pointerEvents = 'none';
    //This makes our body clickable again after 1 second.
    setTimeout(function () { document.body.style.pointerEvents = 'auto'; }, 1000);
}

//This function takes a string parameter of the path you set earlier for
//placement sound(' ./media/place.mp3' )
function audio(audioURL) {
    //We create a new audio object and we pass the path as a parameter.
    let audio = new Audio(audioURL);
    //Play method plays our audio sound.
    audio.play();
}

//This function utilizes HTML canvas to draw win lines.
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;

    function animateLineDrawing() {
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect(0, 0, 608, 608);
        c.beginPath();
        c.moveTo(x1, y1);
        c.lineTo(x, y);
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        c.stroke();
        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) { x += 10; }
            if (y < y2) { y += 10; }
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }

    disableClick();
    audio('./media/winGame.mp3');
    animateLineDrawing();

    // Add this to reset the game after the animation and sound
    setTimeout(() => {
        resetGame();
        // Optionally, re-enable clicking here if needed
    }, 1000); // Adjust the delay to match your animation/sound length
}
//This function resets the game in the event of a tie or a win.
function resetGame() {
    if (computerTimeout) {
        clearTimeout(computerTimeout);
        computerTimeout = null;
    }
    console.log('resetGame called');
    // Clear the win line canvas
    const canvas = document.getElementById('win-lines');
    if (canvas) {
        const c = canvas.getContext('2d');
        c.clearRect(0, 0, canvas.width, canvas.height);
    }
    // Clear all squares
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i));
        if (square) square.style.backgroundImage = '';
    }
    // Reset game state
    selectedSquares = [];
    activePlayer = 'X';
    gameOver = false;
}

