let PartieDAO = function () {
    const Requetes = require('./RequetePartieDAO');
    const connection = require('./ConnectionMariaDB');
    const mariadb = require('mariadb');
    const pool = mariadb.createPool(connection);

    listePartie = [];

    this.getListePartie = function(){
        return listePartie;
    }

    this.ajouter = async (partie) => {
        let baseDeDonnees;
        let resultat;
        let id;

        let { tempsDebat, nombreJoueurs, nombreLoups, nomVillage, couleurVillage, datePartie, codePartie } = partie;

        try {
            baseDeDonnees = await pool.getConnection();
            resultat = await baseDeDonnees.query(Requetes.SQL_AJOUTER, [nombreJoueurs, nombreLoups, tempsDebat, couleurVillage, datePartie, codePartie, nomVillage]);
            if (resultat){
                id = await baseDeDonnees.query(Requetes.SQL_RECUPERER_ID)[0]['LAST_INSERT_ID()'];
            }
        } catch (erreur) {
            throw erreur;
        } finally {
            if (baseDeDonnees)
                baseDeDonnees.end();
        }

        partie.id = id;
        listePartie.push(partie);
    }

    this.supprimer = function(id){
        try {
            baseDeDonnees = await pool.getConnection();
            resultat = await baseDeDonnees.query(Requetes.SQL_SUPPRIMER, [id]);
        } catch (erreur) {
            throw erreur;
        } finally {
            if (baseDeDonnees)
                baseDeDonnees.end();
        }

        if(resultat){
            listePartie.forEach(partie => {
                listePartie.splice(listePartie.indexOf(partie), 1);
            });
        }
    }
}
module.exports = PartieDAO;