function Personne(nom , prenom, age) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;

}


function Stagiaire(nom, prenom, age, connaissances) {
    Personne(this,nom, prenom, age);
    this.connaissances = connaissances;

}