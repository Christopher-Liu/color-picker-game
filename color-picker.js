var rgbTextDisplay = document.querySelector("#colorToGuess");
var colorBoxes = document.querySelectorAll(".gridItem");
var gameIsLive = true;

/* Function for generating the random color */
function getRandomHexColor(){
  var values = "0123456789ABCDEF";
  var hexColor = "#";

  for (var i=0; i<6; i++){
    hexColor += values[Math.floor(Math.random()*16)];
  }

  return hexColor;
}



/* The game will be running as long as the variable gameIsLive is set to true */
while (gameIsLive) {





  /* Selecting one of the color values to be the value to guess */
  var correctColorIndex = Math.floor(Math.random()*6);

  /* Giving all of the boxes a random color */
  for (var i=0; i<colorBoxes.length; i++){
    colorBoxes[i].style.backgroundColor = getRandomHexColor();

    if (i == correctColorIndex) {
      rgbTextDisplay.textContent = colorBoxes[i].style.backgroundColor;
    }
  }
}
