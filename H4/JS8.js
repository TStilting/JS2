var fotos = [1,2,3];
var placeholder = document.getElementById("placeholder");

placeholder.style.backgroundImage = "url('Foto1.jpg')";

placeholder.addEventListener("click" ,function() {
    placeholder.style.backgroundImage = "url('Foto2.jpg')";
})