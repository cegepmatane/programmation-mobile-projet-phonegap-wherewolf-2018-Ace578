var Connexion = function () {
    var connexion;

    function initialiser() {
        console.log("Connexion");
        connexion = io.connect('http://158.69.192.249:3000');
    }

    this.getConnexion = function () {
        return connexion;
    }

    this.creerPartie = function (partie) {
        console.log("Connexion.creerPartie");
        connexion.emit('creation-partie', JSON.stringify(partie));
    }

    this.rejoindrePartie = function (pseudonyme, code) {
        console.log("Connexion.rejoindrePartie");
        connexion.emit('rejoindre-partie', JSON.stringify({ pseudonyme, code }));
    }

    initialiser();
};

var SingletonConnexion = (function () {
    var instance;
 
    function createInstance() {
        var connexion = new Connexion();
        return connexion;
    }
 
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();