var fotos = document.getElementsByTagName("img");
var random = 0;
var getal = [];

while (getal.length < 9) {
    random = Math.floor(Math.random() * 9) + 1;
    if (getal.lastIndexOf(random) === -1) {
        getal.push(random);
    }
}

random = 0;

for ( var foto in fotos) {
   fotos[foto].src = "Turtle" + getal[random] + ".jpg";
   random++;
}

