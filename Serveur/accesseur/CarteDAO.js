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
        } catch (erreur) {
            throw erreur;
        } finally {
            if (baseDeDonnees)
                baseDeDonnees.end();
            return JSON.stringify(resultat);
        }
    }

    this.recuperer = async function (id) {
        let baseDeDonnees;
        let resultat;

        try {
            baseDeDonnees = await pool.getConnection();
            resultat = await baseDeDonnees.query(Requetes.SQL_RECUPERER_CARTE, [id]);
        } catch (erreur) {
            throw erreur;
        } finally {
            if (baseDeDonnees)
                baseDeDonnees.end();
            return JSON.stringify(resultat[0]);
        }
    }
}
module.exports = CarteDAO;
