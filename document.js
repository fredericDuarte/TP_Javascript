var app = {
    init: function () {
        console.log('Document title: ', document.title);
        document.title = 'Nouveau titre';
        console.log('Document title: ', document.title);
        console.log('Document H1: ', document.getElementsByTagName("h1"));
        console.log('Document class: ', document.getElementsByClassName("texte-red"));
        console.log('Document Id: ', document.getElementById("title"));





         }
};
app.init();

