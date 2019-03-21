var myUrl;


function callHttp(getParam, callback) {

    // Ici, la requête sera émise de façon asynchrone.
    const req = new XMLHttpRequest();
    req.onreadystatechange = function (event) {
        // XMLHttpRequest.DONE === 4
        if (this.readyState === XMLHttpRequest.DONE) {
            if (this.status === 200) {
                myUrl =  JSON.parse(this.responseText)[0];



                 console.log("Réponse reçu: %s", this.responseText);
                 callback(myUrl);
            } else {
                console.log("Status de la réponse: %d (%s)", this.status, this.statusText);
                return null;
            }
        }
    };
    req.open('GET', getParam, true);
    req.send(null);

}


function changePage() {

    window.location = 'page2.html?name=' + myUrl.name;


}

var app = {
    init: function () {

        callHttp('https://api.punkapi.com/v2/beers/1', function (myGet){
            console.log( "***GET " + myGet);

            if( myGet !=  null )
            {
                document.getElementById("myAvatar").setAttribute("src", myGet.image_url);

                document.getElementById("myPseudo").innerHTML = myGet.name;
                document.getElementById("myName").innerHTML = myGet.description;

            }
        });



    },
    swap : function () {

        // Récupération d'un paramètre dans une URL
        var url = new URL(window.location);
        var name = url.searchParams.get('name');


        callHttp('https://api.punkapi.com/v2/beers/1', function (myGet){
            console.log( "***GET " + myGet);

            if( myGet !=  null )
            {
                document.getElementById("myAvatar").setAttribute("src", myGet.image_url);

                document.getElementById("myPseudo").innerHTML = myGet.name;
                document.getElementById("myName").innerHTML = myGet.description;

            }
        });


    }




};
app.init();