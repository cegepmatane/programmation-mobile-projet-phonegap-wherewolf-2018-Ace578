const Requetes = {
    SQL_LISTER_CARTES : 'SELECT * FROM carte;',
    SQL_RECUPERER_CARTE : 'SELECT * FROM carte WHERE id = ?;',
    SQL_MODIFIER_CARTE : 'UPDATE carte SET description = ? WHERE id = ?',
    SQL_AJOUTER_CARTE : 'INSERT INTO carte (nom, description) VALUES(?, ?)'
};

module.exports = Requetes;
