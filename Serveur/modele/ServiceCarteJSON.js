let ServiceCarteJSON = function(){
    const CarteDAO = require('../accesseur/CarteDAO');

    const serveur = require('http').createServer(async (requete, reponse) => {
        reponse.writeHead(200, { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Content-Type", "Access-Control-Allow-Methods": "GET" });
//        reponse.setHeader("Access-Control-Allow-Origin", "*");
//	reponse.setHeader("Access-Control-Allow-Headers", "Content-Type");
//	reponse.setHeader("Access-Control-Allow-Methods", "GET");

        requete.on('error', (erreur) => {
            console.error(erreur);
            reponse.statusCode = 400;
            reponse.end();
        });
    
        reponse.on('error', (erreur) => {
            console.error(erreur);
        });
    
        let carteDAO = new CarteDAO();
    
        if (requete.method === 'GET'){
            if(requete.url === '/cartes'){
                let cartes = await carteDAO.lister();
                reponse.write(cartes);
            } else if(idCarte = requete.url.match(/\/carte\/([0-9]+)?/)[1]){
                let carte = await carteDAO.recuperer(idCarte);
                reponse.write(carte ? carte : '{}');
            } else {
                reponse.statusCode = 404;
            }
        } else {
            reponse.statusCode = 404;
        }
        
        reponse.end();
    });

    return serveur;
}
module.exports = ServiceCarteJSON;
