let CarteDAO = function () {
    const Requetes = require('./RequeteCarteDAO');
    const connection = require('./ConnectionMariaDB');
    const mariadb = require('mariadb');
    const pool = mariadb.createPool(connection);

    this.lister = async function () {
        let baseDeDonnees;
        let resultat;

        try {
            baseDeDonnees = await pool.getConnection();
            resultat = await baseDeDonnees.query(Requetes.SQL_LISTER_CARTES);
            return JSON.stringify(resultat);
        } catch (erreur) {
            throw erreur;
        } finally {
            if (baseDeDonnees)
                baseDeDonnees.end();
        }
    }

    this.recuperer = async function (id) {
        let baseDeDonnees;
        let resultat;

        try {
            baseDeDonnees = await pool.getConnection();
            resultat = await baseDeDonnees.query(Requetes.SQL_RECUPERER_CARTE, [id]);
            return JSON.stringify(resultat[0]);
        } catch (erreur) {
            throw erreur;
        } finally {
            if (baseDeDonnees)
                baseDeDonnees.end();
        }
    }

    this.modifierCarte = async function(carte){
        let baseDeDonnees;

        try{
            baseDeDonnees = await pool.getConnection();
            resultat = await baseDeDonnees.query(Requetes.SQL_MODIFIER_CARTE, [carte.description, carte.id]);
        } catch (erreur) {
            throw erreur;
        } finally {
            if (baseDeDonnees)
                baseDeDonnees.end();
        }
    }

    this.ajouterCarte = async function(carte){
        let baseDeDonnees;

        try{
            baseDeDonnees = await pool.getConnection();
            resultat = await baseDeDonnees.query(Requetes.SQL_AJOUTER_CARTE, [carte.nom, carte.description]);
        } catch (erreur) {
            throw erreur;
        } finally {
            if (baseDeDonnees)
                baseDeDonnees.end();
        }
    }


}
module.exports = CarteDAO;
