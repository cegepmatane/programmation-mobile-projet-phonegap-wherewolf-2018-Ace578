var Connexion = function () {
    var connexion;

    function initialiser() {
        connexion = io.connect('http://158.69.192.249:8080');
    }

    this.getConnexion = function () {
        return connexion;
    }

    this.creerPartie = function (partie) {
        console.log("Connexion.creerPartie");
        connexion.emit('Creation Partie', JSON.stringify(partie));
    }

    this.rejoindrePartie = function (pseudonyme) {
        console.log("Connexion.rejoindrePartie");
        connexion.emit('Rejoindre Partie', pseudonyme);
    }

    initialiser();
};

Connexion.getInstance = function () {
    var instance;
    if (instance == null) {
        instance = new Connexion();
    }
    return instance;
}