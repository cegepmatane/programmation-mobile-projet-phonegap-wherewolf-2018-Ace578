var Connexion = (function () {
    var connexion;
    var instance;

    this.getInstance = function () {
        if (this.instance == null) {
            this.instance = new Connexion();
        }
        return this.instance;
    }

    function init() {
        console.log("Connexion effectu�e");
        connexion = io.connect('http://158.69.192.249:8080');
    }

    function creerPartie(salutation) {
        //Gestion cr�ation partie
    }

    init();
})();