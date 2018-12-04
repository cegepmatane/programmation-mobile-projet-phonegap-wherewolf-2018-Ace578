let CarteDAO = function () {
    const LISTER_CARTES = 'http://158.69.192.249:8080/cartes';
    const RECUPERER_CARTE = 'http://158.69.192.249:8080/carte/:id:';

    this.recuperer = function(id){
        var urlCarte = RECUPERER_CARTE.replace(':id:', id);
        carte = effectuerRequete(urlCarte);
    }

    this.lister = function () {
        listeCarte = effectuerRequete(LISTER_CARTES);
        // console.log(listeCarte);
    }

    function effectuerRequete(url) {
        var resultat;

        var requete = new XMLHttpRequest()
        requete.open('GET', url, true)
        requete.setRequestHeader('Content-Type', 'application/json')
        requete.send();

        requete.onreadystatechange = async function () {
            if (requete.readyState === 4){
                // return requete.responseText;
                console.log(requete.responseText);
            }
        }
    }
}