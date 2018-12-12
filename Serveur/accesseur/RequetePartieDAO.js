const Requetes = {
    SQL_AJOUTER : 'INSERT INTO partie(nombre_joueurs, nombre_lg, temps_debat, couleur, date_partie, code_partie, nom_village) VALUES(?, ?, ?, ?, ?, ?, ?);',
    SQL_RECUPERER_ID : 'SELECT LAST_INSERT_ID();',
    SQL_SUPPRIMER : 'DELETE FROM partie WHERE id = ?;'
};

module.exports = Requetes;