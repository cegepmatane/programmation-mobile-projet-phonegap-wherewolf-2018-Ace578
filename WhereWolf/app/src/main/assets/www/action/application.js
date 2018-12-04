(function () {

    var instance = this;

    var initialiser = function () {
        window.addEventListener("hashchange", naviguer);
        naviguer();
    }

    var naviguer = function () {

        var hash = window.location.hash;

        if (!hash) {

            var accueilVue = new AccueilVue();
            accueilVue.afficher();

        } else if (hash.match(/^#creer-partie/)) {

            var creerPartieVue = new CreerPartieVue(actionCreerPartie);
            creerPartieVue.afficher();

        } else if (hash.match(/^#rejoindre-partie/)) {

            var rejoindrePartieVue = new RejoindrePartieVue(actionRejoindrePartie);
            rejoindrePartieVue.afficher();

        }
        else if (hash.match(/^#afficher-regles/)) {

            var reglesVue = new ReglesVue();
            reglesVue.afficher();

        }
        else if (hash.match(/^#afficher-vue-joueur-test/)) {

            var vueJoueur = new VueJoueur();
            vueJoueur.afficher();

        }
    }

    var actionRejoindrePartie = function (pseudonyme, code) {
        //Connexion � la partie
    }

    var actionCreerPartie = function (tempsDebat, nombreLoups, nombreJoueurs, couleurVillage, datePartie, codePartie, nomVillage) {
        
    }

    initialiser();

})();