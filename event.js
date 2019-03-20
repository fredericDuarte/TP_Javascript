var title1 = document.getElementById('title-1');

title1.onclick = function () {
    alert('Hello title 1');
};


var elementID = document.getElementById("texteRed");
var screen = document.getElementById("screenID");

console.log(elementID);


elementID.addEventListener("mouseover", function(e) {


    console.log('screen: ' + event.screenX + ', ' + event.screenY);
    var largeur = window.innerWidth / 2;
    if(largeur > e.clientX)
    {

        console.log("GAUCHE");
        screen.innerHTML ="GAUCHE";
        elementID.classList.remove("text-red");



    }
    else
    {
        console.log("DROITE");
        screen.innerHTML ="DROITE";
        elementID.classList.add("text-red");
    }


});

elementID.addEventListener("mouseout", function(e) {


        console.log("OUT");
        screen.innerHTML ="OUT";
        elementID.classList.add("text-red");



});




