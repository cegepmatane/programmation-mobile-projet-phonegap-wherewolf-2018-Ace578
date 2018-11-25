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
}
module.exports = CarteDAO;
