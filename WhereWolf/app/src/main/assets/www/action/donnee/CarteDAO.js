let CarteDAO = function () {
    let listeCarte;

    this.getListeCarte = function(){
        return listeCarte;
    }

    this.recuperer = function(id, actionRecupererCarte){
        var urlCarte = URL.RECUPERER_CARTE.replace(':id:', id);
        carte = effectuerRequete(urlCarte, actionRecupererCarte);
    }

    this.lister = function (actionListerCartes) {
        if(!listeCarte)
            listeCarte = [];

        resultat = effectuerRequete(URL.LISTER_CARTES, actionListerCartes);
        listeCarte = resultat;
    }

    function effectuerRequete(url, callback) {
        var requete = new XMLHttpRequest()
        requete.open('GET', url, true)
        requete.setRequestHeader('Content-Type', 'application/json')
        requete.send();

        requete.onreadystatechange = function () {
            if (requete.readyState === 4)
                callback(requete.responseText);
        }
    }
}