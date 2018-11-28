const ServiceCarteJSON = require('./modele/ServiceCarteJSON');
const ServiceSocketIO = require('./modele/ServiceSocketIO');

let serveur = new ServiceCarteJSON();
let socketio = new ServiceSocketIO(serveur);

serveur.listen(8080);

console.log("Le serveur ecoute sur le port %d", serveur.address().port);