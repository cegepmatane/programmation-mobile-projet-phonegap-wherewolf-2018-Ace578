const ServiceCarteJSON = require('./modele/ServiceCarteJSON');

let serveur = new ServiceCarteJSON();

/* const socketio = require('socket.io')(serveur, {
    path: '/test',
    serveClient: false,
    // below are engine.IO options
    pingInterval: 10000,
    pingTimeout: 5000,
    cookie: false
}); */

serveur.listen(8080);
console.log("Le serveur ecoute sur le port %d", serveur.address().port);