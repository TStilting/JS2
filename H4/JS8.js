var fotos = [1,2,3];
var teller = 1;
var placeholder = document.getElementById("placeholder");

placeholder.style.backgroundImage = "url('Foto1.jpg')";

placeholder.addEventListener("click" ,function() {
    placeholder.style.backgroundImage = "url('Foto" + rotatie() + ".jpg')";
})

function rotatie() {
    teller++;
    if (teller >= 4) {
        teller = 1;
    }
    return teller;
}