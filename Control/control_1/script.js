function clickFigure() {
    var red = getRandomArbitrary(0, 255);
    var green = getRandomArbitrary(0, 255);
    var blue = getRandomArbitrary(0, 255);
    console.log("#clickFigure", red, green, blue, borderRadiusFirst, borderFirst, widthFirst, heigthFirst);

    var stringBoxShadow = "0 0 5px rgb(" + red + "," + green + " ," + blue + ")," +
    "0 0 25px rgb(" + red + "," + green + " ," + blue + ")," +
    "0 0 50px rgb(" + red + "," + green + " ," + blue + ")," +
    "0 0 75px rgb(" + red + "," + green + " ," + blue + ")," +
    "0 0 100px rgb(" + red + "," + green + " ," + blue + ")," +
    "0 0 200px rgb(" + red + "," + green + " ," + blue + ")";

    var borderRadiusFirst = getRandomArbitrary(1, 100);
    var borderFirst = getRandomArbitrary(2, 12);
    var widthFirst = getRandomArbitrary(150, 400);
    var heigthFirst  = getRandomArbitrary(150, 400);

    document.getElementById("figure").style.backgroundColor = "rgb(" + red + "," + green + " ," + blue + ")";
    document.getElementById("figure").style.boxShadow = stringBoxShadow;
    document.getElementById("figure").style.borderRadius = borderRadiusFirst + "px";
    document.getElementById("figure").style.border = borderFirst + "px solid";
    document.getElementById("figure").style.width = widthFirst + "px";
    document.getElementById("figure").style.height = heigthFirst + "px";
}

function getRandomArbitrary(min, max) {
    return Math.floor (Math.random() * (max - min) + min);
  }