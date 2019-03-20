var title1 = document.getElementById('title-1');




var elementID = document.getElementById("texteRed");

var h1Event =  document.getElementById("title-1");

console.log(elementID);


elementID.addEventListener("mouseover", function (e) {

    var largeur = window.innerWidth / 2;
    console.log('screen X: ' + event.screenX + ', screen y ' + event.screenY);
    console.log('position x : ' + e.clientX);

    if (e.clientX < largeur) {

        console.log("GAUCHE");

        elementID.classList.remove("text-red");


    } else {
        console.log("DROITE");

        elementID.classList.add("text-red");
    }


});

elementID.addEventListener("mouseout", function (e) {


    console.log("OUT");
    screen.innerHTML = "OUT";
    elementID.classList.add("text-red");


});

h1Event.addEventListener("click", function (e) {

    var p = document.createElement("p");
    document.body.appendChild(p);
    p.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmd tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute  ";
    p.classList.add("text-red");
    p.setAttribute("id", "texteRed");
});


function supprimer() {
    var ele = document.getElementsByTagName("p");

    var elementsCount = ele.length;
    console.log("nb = " + ele.length);
    for (var i = elementsCount - 1; i >= 0; i--) {
        document.body.removeChild(ele[i]);
        console.log("***count i="+ i + " + " + ele.length);
    }

}






