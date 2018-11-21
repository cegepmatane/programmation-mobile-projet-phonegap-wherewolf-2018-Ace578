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


     }

     initialiser();

})();