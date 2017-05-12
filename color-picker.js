var rgbTextDisplay = document.querySelector("#colorToGuess");
var pageHeader = document.querySelector("header");
var newGameButton = document.querySelector("#newGameButton");
var gameStatusText = document.querySelector("#gameStatus");
var colorBoxes = document.querySelectorAll(".gridItem");
var selectedColor;

/* Function for generating the random color */
function getRandomHexColor(){
  var values = "0123456789ABCDEF";
  var hexColor = "#";

  for (var i=0; i<6; i++){
    hexColor += values[Math.floor(Math.random()*16)];
  }

  return hexColor;
}



/* Creating a reusable function to handle the creation of the colored grid */
function createBoxes() {
  /* Selecting one of the color values to be the value to guess */
  correctColorIndex = Math.floor(Math.random()*6);

  /* Giving all of the boxes a random color */
  for (var i=0; i<colorBoxes.length; i++){
    colorBoxes[i].style.backgroundColor = getRandomHexColor();

    if (i == correctColorIndex) {
      rgbTextDisplay.textContent = selectedColor = colorBoxes[i].style.backgroundColor;
    }
  }
}
createBoxes(); /* Calling createBoxes() right away to generate the boxes on the webpage */



function winningSelection() {
  for (var i=0; i<colorBoxes.length; i++){
    colorBoxes[i].classList.remove("incorrectClick");
    colorBoxes[i].style.backgroundColor = selectedColor;
  }

  pageHeader.style.backgroundColor = selectedColor;
  gameStatus.textContent = "Nice Job!";
}



/* Adding event handlers for behavior of boxes when clicked */
for (var i=0; i<colorBoxes.length; i++){
  colorBoxes[i].addEventListener("click", function(){
    /* The "incorrectClick" class will only be added if the user clicks the wrong box.
    If the user does select the correct class, we change all boxes and the header to
    the selected color */
    if (selectedColor != this.style.backgroundColor) {
      this.classList.add("incorrectClick");
      gameStatus.textContent = "Try Again";
    }
    else {
      winningSelection();
    }
  });
}



/* Adding behavior for the "New Game" button */
newGameButton.addEventListener("click", function() {
  pageHeader.style.backgroundColor = "#39B3DB";
  gameStatus.textContent = "";
  createBoxes();
})
