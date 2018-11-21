var ReglesVue = (function () {

    var pageRegles = document.getElementById("page-regles").innerHTML;

    return function() {

        this.afficher = function() {
            document.getElementsByTagName("body")[0].innerHTML = pageRegles;
           }

    };

})();
