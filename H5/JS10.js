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
    image = document.getElementsByClassName("fotoo");
    for (var i = 0; i < 9; i++) {
        fav = document.createElement("div");
        fav.className = "ster";
        fav.id = "fav" + (i+1);
        imagee = document.createElement("img");
        imagee.src = "Turtle" + (i+1) + ".jpg";
        imagee.id = (i+1);
        imagee.addEventListener("click", function(){
            addSter(this.id);
        });
        image[i].appendChild(imagee);
        image[i].appendChild(fav);
    }
}


function addSter(id) {
    fav = document.getElementById("fav" + id);
    fav.style.backgroundImage ("Ster.png");
}