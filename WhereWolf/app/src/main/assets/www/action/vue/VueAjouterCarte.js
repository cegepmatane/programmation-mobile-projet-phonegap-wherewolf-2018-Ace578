var VueAjouterCarte = (function () {

    var pageAjouterCarte = document.getElementById("page-ajouter-carte").innerHTML;
    var champNom;
    var champDescription;


    classe = function (actionAjouterCarte) {
        this.afficher = function () {
            document.getElementsByTagName("body")[0].innerHTML = pageAjouterCarte;   


            var formulaireAjouter = document.getElementById("formulaire-ajouter-carte");
            
            champNom = document.getElementById("nom-carte");
            champDescription = document.getElementById("description-carte");

            formulaireAjouter.addEventListener("submit",ajouterCarte);
        }

        var ajouterCarte = function (evenement) {
            evenement.preventDefault();
            //console.log(champDescription.value);
            nomAjouter = champNom.value;
            descriptionAjouter = champDescription.value;
            var nouvelleCarte = {nom: nomAjouter, description: descriptionAjouter};
            //console.log(carteModifiee);
            actionAjouterCarte(nouvelleCarte);
        }

    };
    return classe;


})();