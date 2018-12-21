let ServiceCarteJSON = function(){
    const CarteDAO = require('../accesseur/CarteDAO');

    const serveur = require('http').createServer(async (requete, reponse) => {
        reponse.writeHead(200, { 'Content-Type': 'application/json', 
                        "Access-Control-Allow-Origin": "*", 
                        "Access-Control-Allow-Headers": "Content-Type", 
                        "Access-Control-Allow-Methods": "GET" });

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
            } else if(idCarte = requete.url.match(/\/carte\/([0-9]+)/)[1]){
                let carte = await carteDAO.recuperer(idCarte);
                reponse.write(carte ? carte : '{}');
            } else {
                reponse.statusCode = 404;
            }
        } else if (requete.method === 'POST'){
            if(requete.url === '/modifierCarte'){
                console.log("if(requete.url === '/modifierCarte')");
                requete.on('data', async function(event){
                    carteModifiee = JSON.parse(event.toString());
                    await carteDAO.modifierCarte(carteModifiee);
                });
            }
            else if(requete.url === '/ajouterCarte')
            {
                console.log("if(requete.url === '/ajouterCarte')");
                requete.on('data', async function(event){
                    nouvelleCarte = JSON.parse(event.toString());
                    await carteDAO.ajouterCarte(nouvelleCarte);
                });
            }

        }           
        else {
            reponse.statusCode = 404;
        }
        
        reponse.end();
    });

    return serveur;
}
module.exports = ServiceCarteJSON;
