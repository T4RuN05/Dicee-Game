var randomVariable1 = Math.floor(Math.random()*6) + 1;

var randomDiceImage = "Dice" + randomVariable1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomVariable2 = Math.floor(Math.random()*6) + 1;

var randomDiceImage2 = "Dice" + randomVariable2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

if (randomVariable1 > randomVariable2)
{
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}

else if (randomVariable2 > randomVariable1) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}

else {
    document.querySelector("h1").innerHTML = "Draw!";
}