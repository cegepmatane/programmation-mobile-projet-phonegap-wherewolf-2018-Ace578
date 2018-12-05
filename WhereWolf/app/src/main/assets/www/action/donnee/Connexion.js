var Connexion = function () {
    var connexion;

    function initialiser() {
        console.log("Connexion effectuée");
        connexion = io.connect('http://158.69.192.249:8080');
    }

    this.getConnexion = function () {
        return connexion;
    }

    function creerPartie() {
        //Gestion création partie
    }

    initialiser();
};

Connexion.getInstance = function () {
    var instance;
    console.log("oui");
    if (instance == null) {
        instance = new Connexion();
    }
    return instance;
}