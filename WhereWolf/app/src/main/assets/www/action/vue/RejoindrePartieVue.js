var RejoindrePartieVue = (function () {

    var pageRejoindrePartie = document.getElementById("page-rejoindre-partie").innerHTML;

    return function () {

        this.afficher = function () {
            document.getElementsByTagName("body")[0].innerHTML = pageRejoindrePartie;
        }

    };

})();
