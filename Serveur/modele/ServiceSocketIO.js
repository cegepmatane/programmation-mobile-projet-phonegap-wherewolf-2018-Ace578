let ServiceSocketIO = function(serveurHTTP){
    const serveur = serveurHTTP;

    const socketio = require('socket.io')(serveur, {
        path: '/',
        serveClient: false,
        pingInterval: 10000,
        pingTimeout: 5000,
        cookie: false
    });
    
    socketio.on('connection', function(client){
        console.log('Nouvelle connection ' + client.id);
        client.emit('bonjour', "salutation");
        client.on('aaa', function(client){
            console.log(client);
        });
    });
}
module.exports = ServiceSocketIO;