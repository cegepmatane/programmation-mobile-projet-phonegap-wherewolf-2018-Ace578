var VueCarteRegle = (function () {

    var pageCarte = document.getElementById("page-carte-regle").innerHTML;
    var champDescription;


    classe = function (actionEnregistrerCarte, carte) {
        this.afficher = function () {
            document.getElementsByTagName("body")[0].innerHTML = pageCarte;
            var contenantImage = document.getElementById("contenant-image-carte-regle");
            var h1 = document.getElementById("titre-carte");
            h1.innerHTML = carte.nom;

            contenantImage.innerHTML += '<img src="./image/CarteJeu/' + carte.nom + '.png">';
            


            var formulaireModifier = document.getElementById("formulaire-modifier");
            
            champDescription = document.getElementById("description-carte");

            //console.log(carte.description);
            champDescription.value = carte.description;

            formulaireModifier.addEventListener("submit",enregistrerCarte);
        }

        var enregistrerCarte = function (evenement) {
            evenement.preventDefault();
            //console.log(champDescription.value);
            descriptionModifiee = champDescription.value;
            var carteModifiee = {id:carte.id, nom: carte.nom, description: descriptionModifiee};
            //console.log(carteModifiee);
            actionEnregistrerCarte(carteModifiee);
        }

    };
    return classe;


})();