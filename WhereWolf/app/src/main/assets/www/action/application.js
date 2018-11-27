(function () {
    var instance = this;
    var initialiser = function (){

       window.addEventListener("hashchange", naviguer);

       naviguer();


    }

     var naviguer = function() {

     var hash = window.location.hash;

     if (!hash) {
         var accueilVue = new AccueilVue();
         accueilVue.afficher();
        }

     else if(hash.match(/^#creer-partie/)) {

          }

     else if(hash.match(/^#rejoindre-partie/)) {
         var rejoindrePartieVue = new RejoindrePartieVue(actionRejoindrePartie);
         rejoindrePartieVue.afficher();
          }

     else if(hash.match(/^#afficher-regles/)) {
         var reglesVue = new ReglesVue();
         reglesVue.afficher();


          }


    }
    var actionRejoindrePartie = function (pseudonyme, code) {
        //Connexion à la partie
    }

    initialiser();

})();