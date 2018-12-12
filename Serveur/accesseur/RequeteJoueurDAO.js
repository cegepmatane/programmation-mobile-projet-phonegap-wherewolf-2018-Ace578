const Requetes = {
    SQL_AJOUTER : 'INSERT INTO joueur(pseudo, id_partie, est_mort) VALUES(?, ?, ?);',
    SQL_RECUPERER_ID : 'SELECT LAST_INSERT_ID();',
    SQL_MODIFIER : 'UPDATE joueur SET pseudo = ?, id_carte = ?, id_partie = ?, est_mort = ? WHERE id = ?;'
};

module.exports = Requetes;