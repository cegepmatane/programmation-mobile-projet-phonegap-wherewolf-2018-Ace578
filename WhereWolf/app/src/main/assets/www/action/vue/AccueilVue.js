var AccueilVue = (function () {

    var pageAccueil = document.getElementById("page-accueil").innerHTML;

    return function() {

        this.afficher = function() {
            document.getElementsByTagName("body")[0].innerHTML = pageAccueil;
           }

    };

})();

