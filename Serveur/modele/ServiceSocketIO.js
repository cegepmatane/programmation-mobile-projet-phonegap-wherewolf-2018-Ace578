let ServiceSocketIO = function(){

    const socketio = require('socket.io')();
    
    socketio.on('connection', function(client){
        console.log('Nouvelle connection ' + client.id);
        client.emit('bonjour', "salutation");
        
        client.on('creation-partie', creerPartie);
        client.on('rejoindre-partie', rejoindrePartie);
    });

    function creerPartie(informationCreationPartie){
        console.log(informationCreationPartie);
    }

    function rejoindrePartie(informationRejoindrePartie){
        const {pseudonyme, code} = JSON.parse(informationRejoindrePartie);
        console.log(pseudonyme + " " + code);
    }

   return socketio;
}
module.exports = ServiceSocketIO;
