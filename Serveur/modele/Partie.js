let Partie = function (tempsDebat, nombreJoueurs, nombreLoups, nomVillage, couleurVillage, datePartie, codePartie) {
    this.tempsDebat = tempsDebat;
    this.nomVillage = nomVillage;
    this.couleurVillage = couleurVillage;
    this.datePartie = datePartie;
    this.nombreJoueurs = (nombreJoueurs) ? nombreJoueurs : null;
    this.nombreLoups = (nombreLoups) ? nombreLoups : null;
    this.codePartie = codePartie;

    this.id;
}
module.exports = Partie;