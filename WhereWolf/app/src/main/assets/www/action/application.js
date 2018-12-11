(function () {
    var carteDAO;
    var connexion;
    var res;

    // TODO : METTRE AUTRE PART
    carteDAO = new CarteDAO();
    carteDAO.lister(actionListerCartes);
    //

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

    var actionRejoindrePartie = function (pseudonyme) {
        connexion = Connexion.getInstance();
        connexion.rejoindrePartie(pseudonyme);
    }

    var actionCreerPartie = function (partie) {
        connexion = Connexion.getInstance();
        connexion.creerPartie(partie);
    }

    function actionListerCartes(resultat){
        console.log("actionListerCartes " + resultat);
        this.res = JSON.parse(resultat);
        alert(res);
    }

    function actionRecupererCarte(resultat){
        console.log("actionRecupererCarte " + resultat);
    }

    initialiser();

})();