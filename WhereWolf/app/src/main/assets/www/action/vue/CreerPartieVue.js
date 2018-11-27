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
            var nombreLoups = null;
            var nombreJoueurs = null;
            var tempsDebat = document.getElementById("temps-debat").value;
            if (document.getElementById("choisir-loup").checked) {
                nombreLoups = document.getElementById("choix-nombre").value;
            } else {
                nombreJoueurs = document.getElementById("choix-nombre").value;
            }
            var couleurVillage = document.getElementById("couleur-village").value;
            var datePartie = document.getElementById("date-partie").value;
            var codePartie = document.getElementById("code-creation-partie").value;
            actionCreerPartie(tempsDebat, nombreLoups, nombreJoueurs, couleurVillage, datePartie, codePartie);
        }

    };
})();