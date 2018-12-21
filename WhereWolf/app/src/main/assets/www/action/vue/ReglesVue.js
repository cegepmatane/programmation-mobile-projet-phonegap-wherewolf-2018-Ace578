var ReglesVue = (function () {

    var pageRegles = document.getElementById("page-regles").innerHTML;

    return function (listeCartes) {

        this.afficher = function () {
            document.getElementsByTagName("body")[0].innerHTML = pageRegles;
            var contenantCarte = document.getElementById("contenant-carte");


            var li="";
            for(var numeroCarte in listeCartes) 
            {
                //console.log(numeroCarte);
                //console.log(listeCartes[numeroCarte]);
                li += '<a href="#afficher-vue-carte-regle/' + numeroCarte + '"><p>'+ listeCartes[numeroCarte].nom + '</p></a>';               
            }
            contenantCarte.innerHTML = li;

        }

    };
})();