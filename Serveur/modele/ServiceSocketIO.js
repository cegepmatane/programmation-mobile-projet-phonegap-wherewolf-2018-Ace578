let ServiceSocketIO = function () {

    const socketio = require('socket.io')();
    const Partie = require('./Partie');
    const PartieDAO = require('../accesseur/PartieDAO');

    let partieDAO = new PartieDAO();

    socketio.on('connection', function (client) {
        console.log('Nouvelle connection ' + client.id);
        client.emit('bonjour', "salutation");

        client.on('creation-partie', creerPartie);
        client.on('rejoindre-partie', rejoindrePartie);
    });

    function creerPartie(informationCreationPartie) {
        let { tempsDebat, nombreJoueurs, nombreLoups, nomVillage, couleurVillage, datePartie } = JSON.parse(informationCreationPartie);
        codePartie = genererCodePartie();

        let partie = new Partie(tempsDebat, nombreJoueurs, nombreLoups, nomVillage, couleurVillage, datePartie, codePartie);
        partieDAO.ajouter(partie);

        this.emit('code-partie', JSON.stringify(codePartie));
    }

    function genererCodePartie() {
        let code = "";
        let characterPossible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let codeUnique = true;
        listePartie = partieDAO.getListePartie();

        do {
            for (let incrementation = 0; incrementation < 5; incrementation++) {
                code += characterPossible.charAt(Math.floor(Math.random() * characterPossible.length));
            }

            listePartie.forEach(partie => {
                if (code === listePartie.codePartie)
                    codeUnique = false;
            });
        } while (!codeUnique);

        return code;
    }

    function rejoindrePartie(informationRejoindrePartie) {
        const { pseudonyme, code } = JSON.parse(informationRejoindrePartie);
        console.log(pseudonyme + " " + code);
    }

    return socketio;
}
module.exports = ServiceSocketIO;
