var CreerPartieVue = (function () {

    var pageCreerPartie = document.getElementById("page-creer-partie").innerHTML;

    return function (actionCreerPartie) {

        this.afficher = function () {
            document.getElementsByTagName("body")[0].innerHTML = pageCreerPartie;
            var formulaireCreerPartie = document.getElementById("formulaire-creer-partie");
            formulaireCreerPartie.addEventListener("submit", creerPartie);
        }

        var creerPartie = function (evenement) {
            evenement.preventDefault();
            //Récupérer champs
            actionCreerPartie();
        }

    };
})();