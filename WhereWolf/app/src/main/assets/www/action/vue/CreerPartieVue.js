var CreerPartieVue = (function () {

    var pageCreerPartie = document.getElementById("page-creer-partie").innerHTML;

    return function () {

        this.afficher = function () {
            document.getElementsByTagName("body")[0].innerHTML = pageCreerPartie;
        }

    };
})();