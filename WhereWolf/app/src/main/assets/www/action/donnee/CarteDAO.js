let CarteDAO = function () {
    let listeCarte;



    this.getListeCarte = function () {
        return listeCarte;
    }

    this.recuperer = function (id, actionRecupererCarte) {
        var urlCarte = URL.RECUPERER_CARTE.replace(':id:', id);
        carte = effectuerRequete(urlCarte, actionRecupererCarte);

    }

    this.lister = function (actionRecupererCarte) {
        if (!listeCarte)
            listeCarte = [];

        resultat = effectuerRequete(URL.LISTER_CARTES, actionRecupererCarte);
        listeCarte = resultat;

    }

    this.modifierCarte = function (carte) {
        envoyerRequete(URL.MODIFIER_CARTE,carte);
    }

    this.ajouterCarte = function (carte)
    {
        envoyerRequete(URL.AJOUTER_CARTE,carte);
    }

    function effectuerRequete(url, callback) {
        var requete = new XMLHttpRequest()
        requete.open('GET', url, true)
        requete.setRequestHeader('Content-Type', 'application/json')
        requete.send();


        requete.onreadystatechange = function () {
            if (requete.readyState === 4) {
                callback(requete.responseText);
            }

        }
    }


    function envoyerRequete(url,donnees) {
        xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type", "application/json");
       
        var data = JSON.stringify(donnees);
        console.log(data);

        xhr.send(data);

    }
}