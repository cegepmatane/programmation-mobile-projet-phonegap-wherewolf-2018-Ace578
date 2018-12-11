const ServiceCarteJSON = require('./modele/ServiceCarteJSON');
const ServiceSocketIO = require('./modele/ServiceSocketIO');

const PORT_SERVICE = 8080;
const PORT_SOCKETIO = 3000;

let serviceJSON = new ServiceCarteJSON();
let socketio = new ServiceSocketIO();

serviceJSON.listen(PORT_SERVICE);
socketio.listen(PORT_SOCKETIO);

console.log("Le service ecoute sur le port %d", PORT_SERVICE);
console.log("Socket.io ecoute sur le port %d", PORT_SOCKETIO);
