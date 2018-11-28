var VueJoueur = (function () {

    var pageVueJoueur = document.getElementById("page-vue-joueur").innerHTML;

    return function () {

        this.afficher = function () 
        {
            document.getElementsByTagName("body")[0].innerHTML = pageVueJoueur;
        }
    };
})();
