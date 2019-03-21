
// Ici, la requête sera émise de façon asynchrone.
const req = new XMLHttpRequest();
req.onreadystatechange = function(event) {
// XMLHttpRequest.DONE === 4
    if (this.readyState === XMLHttpRequest.DONE) {
        if (this.status === 200) {
            var myUrl = JSON.parse(this.responseText)[0];


                document.getElementById("myAvatar").setAttribute("src", myUrl.image_url);

                document.getElementById("myPseudo").innerHTML = myUrl.name;
                document.getElementById("myName").innerHTML = myUrl.description;

            console.log("Réponse reçu: %s", this.responseText);
        } else {
            console.log("Status de la réponse: %d (%s)", this.status, this.statusText);
        }
    }
};
req.open('GET', 'https://api.punkapi.com/v2/beers/1', true);
req.send(null);
