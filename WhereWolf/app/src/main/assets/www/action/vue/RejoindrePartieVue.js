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
            var pseudonyme = document.getElementById("nom-joueur").value;
            var codePartie = document.getElementById("code-partie").value;
            if (pseudonyme == "" || codePartie == "") {
                window.alert("Merci de renseigner tous les champs");
            } else {
                actionRejoindrePartie(pseudonyme, codePartie);
            }
        }

    };
})();