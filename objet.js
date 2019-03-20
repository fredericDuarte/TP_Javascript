var formationJS = {
    nom: 'Module JavaScript',
    langage: 'JavaScript',
    dateDebut: '01/09/2017',
    dateFin: '05/09/2017',
    stagiaires : [{
        nom: 'Nom Exemple',
        prenom: 'Prenom Exemple'
    }

    ],
    description : function () { return this.nom + ' ' + this.dateDebut + ' - ' + this.dateFin; }
};