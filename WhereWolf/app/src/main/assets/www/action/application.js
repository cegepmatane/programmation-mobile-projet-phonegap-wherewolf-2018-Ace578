(function () {
    var connexion;

    // TODO : METTRE AUTRE PART
    
    
    
    var listeCartes;

    var initialiser = function () {
        carteDAO = new CarteDAO();
        carteDAO.lister(actionListerCartes);
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
            new ChangerChoixLoupJoueur();

        } else if (hash.match(/^#rejoindre-partie/)) {

            var rejoindrePartieVue = new RejoindrePartieVue(actionRejoindrePartie);
            rejoindrePartieVue.afficher();

        }
        else if (hash.match(/^#afficher-regles/)) {

            carteDAO.lister(actionListerCartes);
            //console.log("envoi vue regles :");
            //console.log(listeCartes);
            //console.log(typeof listeCartes);
            setTimeout(function(){
                var reglesVue = new ReglesVue(listeCartes);
                reglesVue.afficher();
            }, 1000);
                        
            

        }
        else if (hash.match(/^#afficher-vue-joueur-test/)) {

            var vueJoueur = new VueJoueur();
            vueJoueur.afficher();


        }
        else if(hash.match(/^#afficher-vue-carte-regle\/([0-9]+)/))
        {
            var navigation = hash.match(/^#afficher-vue-carte-regle\/([0-9]+)/);
            idCarte = navigation[1];
            //console.log(navigation[1]);
            var vueCarteRegle = new VueCarteRegle(actionModifierCarte,listeCartes[idCarte]);
            vueCarteRegle.afficher();
        }
        else if(hash.match(/^#ajouter-carte/))
        {
            var vueAjouterCarte = new VueAjouterCarte(actionAjouterCarte);
            vueAjouterCarte.afficher();
        }
    }

    var actionRejoindrePartie = function (pseudonyme, code) {
        connexion = SingletonConnexion.getInstance();
        connexion.rejoindrePartie(pseudonyme, code);
    }

    var actionCreerPartie = function (partie) {
        connexion = SingletonConnexion.getInstance();
        connexion.creerPartie(partie);
    }

    function actionListerCartes(resultat){

        listeCartes = JSON.parse(resultat);   
        
    }

    function actionRecupererCarte(resultat){
        //console.log("actionRecupererCarte " + JSON.parse(resultat));
    }

    var actionModifierCarte = function (carte)
    {
        //console.log(carte);
        carteDAO.modifierCarte(carte)
        window.location.hash = "#afficher-regles";
        
    }

    var actionAjouterCarte = function (carte)
    {
        //console.log(carte);
        carteDAO.ajouterCarte(carte)
        carteDAO.lister(actionListerCartes);
        window.location.hash = "#afficher-regles";
        
    }

    initialiser();

})();