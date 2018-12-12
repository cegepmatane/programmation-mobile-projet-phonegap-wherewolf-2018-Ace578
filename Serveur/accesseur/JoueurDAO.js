let JoueurDAO = function () {
    const Requetes = require('./RequeteJoueurDAO');
    const connection = require('./ConnectionMariaDB');
    const mariadb = require('mariadb');
    const pool = mariadb.createPool(connection);
    const Joueur = require('../modele/Joueur');
    const PartieDAO = require('../accesseur/PartieDAO');

    let partieDAO = new PartieDAO();

    listeJoueur = [];

    this.getListeJoueur = function () {
        return listeJoueur;
    }

    this.ajouter = function (pseudonyme, codePartie) {
        let baseDeDonnees;
        let resultat;
        let id;
        let estMort = false;
        let idPartie;

        let listePartie = partieDAO.getListePartie();
        listePartie.forEach(partie => {
            if (partie.codePartie === codePartie)
                idPartie = partie.id;
        });

        try {
            baseDeDonnees = await pool.getConnection();
            resultat = await baseDeDonnees.query(Requetes.SQL_AJOUTER, [pseudonyme, idPartie, estMort]);
            if (resultat)
                id = await baseDeDonnees.query(Requetes.SQL_RECUPERER_ID)[0]['LAST_INSERT_ID()'];
        } catch (erreur) {
            throw erreur;
        } finally {
            if (baseDeDonnees)
                baseDeDonnees.end();
        }

        let joueur = new Joueur(id, pseudonyme, estMort, idPartie);
        listeJoueur.push(joueur);
    }

    this.modifier = function (joueur) {
        let { pseudonyme, idCarte, idPartie, estMort, id } = joueur;

        try {
            baseDeDonnees = await pool.getConnection();
            resultat = await baseDeDonnees.query(Requetes.SQL_MODIFIER, [pseudonyme, idCarte, idPartie, estMort, id]);
        } catch (erreur) {
            throw erreur;
        } finally {
            if (baseDeDonnees)
                baseDeDonnees.end();
        }

        if (resultat)
            listeJoueur.forEach(joueurRecherche => {
                if (joueur.id === joueurRecherche.id)
                    listeJoueur[listeJoueur.indexOf(joueurRecherche)] = joueur;
            });
    }
}
module.exports = JoueurDAO;