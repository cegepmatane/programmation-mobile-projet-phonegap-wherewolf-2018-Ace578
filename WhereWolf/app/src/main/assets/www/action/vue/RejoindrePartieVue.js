var RejoindrePartieVue = (function () {

    var pageRejoindrePartie = document.getElementById("page-rejoindre-partie").innerHTML;

    return function (actionRejoindrePartie) {

        this.afficher = function () {
            document.getElementsByTagName("body")[0].innerHTML = pageRejoindrePartie;
            var formulaireRejoindrePartie = document.getElementById("formulaire-rejoindre-partie");
            formulaireRejoindrePartie.addEventListener("submit", rejoindrePartie);
        }

        var rejoindrePartie = function (evenement) {
            evenement.preventDefault();
            var pseudonyme = document.getElementById("nom-joueur");
            var codePartie = document.getElementById("code-partie");
            actionRejoindrePartie(pseudonyme, codePartie);
        }

    };
})();