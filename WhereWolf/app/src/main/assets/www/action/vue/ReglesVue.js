var ReglesVue = (function () {

    var pageRegles = document.getElementById("page-regles").innerHTML;

    return function () {

        this.afficher = function () {
            document.getElementsByTagName("body")[0].innerHTML = pageRegles;

            var listeCategorie = document.getElementById("cartesRegle");

            var li="";
            for (var numeroCategorie in listeCategorieDonnee) {

                li += '<a href="#carte/'+nomcarte+'"><img src="../../image/CarteJeu/.png"></a>';
                
            listeCategorie.innerHTML = li;
			}

        }

    };
})();