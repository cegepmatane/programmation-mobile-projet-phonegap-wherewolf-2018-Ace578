this.Joueur = function(id, pseudonyme, estMort, idPartie){
    this.id = id;
    this.pseudonyme = pseudonyme;
    this.estMort = estMort;
    this.idPartie = idPartie;

    this.idCarte;
}
module.exports = Joueur;