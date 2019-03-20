(function (window) {

    var nom = 'summer';
    var prenom = 'fred';

    console.log('auto invoquée');

    var contactService = {};


    contactService.contact = function (liste) {

        return liste;

    }

    window.contactService = contactService;


})(window);





