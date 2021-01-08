var tellir = 1;
var placeholdir = document.getElementById("placeholdir");

placeholder.style.backgroundImage = "url('Foti1.jpg')";

placeholder.addEventListener("click" ,function() {
    placeholder.style.backgroundImage = "url('Foti" + rotatien() + ".jpg')";
})

function rotatien() {
    tellir++;
    if (tellir >= 4) {
        tellir = 1;
    }
    return tellir;
}

var tellar = 1;
var placeholdar = document.getElementById("placeholdar");

placeholdar.style.backgroundImage = "url('Fota1.jpg')";

placeholdar.addEventListener("click" ,function() {
    placeholdar.style.backgroundImage = "url('Fota" + rotation() + ".jpg')";
})

function rotation() {
    tellar++;
    if (tellar >= 4) {
        tellar = 1;
    }
    return tellar;
}

var tellur = 1;
var placehulder = document.getElementById("placehulder");

placehulder.style.backgroundImage = "url('Fotu1.jpg')";

placehulder.addEventListener("click" ,function() {
    placehulder.style.backgroundImage = "url('Fotu" + rotate() + ".jpg')";
})

function rotate() {
    tellur++;
    if (tellur >= 4) {
        tellur = 1;
    }
    return tellur;
}