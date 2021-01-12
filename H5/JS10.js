fotoo = document.getElementById("placeholdor");
createFotoholder()
getImage()

function createFotoholder () {
    for (var i = 0; i < 9; i++) {
    hokje = document.createElement("div");
    hokje.className = "fotoo";
    hokje.id = "hokje-" + i;
    fotoo.appendChild(hokje);
    }
}

function getImage() {
    image = document.getElementById("fotoo");
    for (var i = 0; i < 9; i++) {
        imagee = document.createElement("img");
        imagee.src = "Turtle" + (i+1) + ".jpg";
        image[i].appendChild(imagee);
    }
}
