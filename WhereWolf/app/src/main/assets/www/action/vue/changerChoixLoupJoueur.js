(function () {
    var pageCreerPartie = document.getElementById("page-creer-partie").innerHTML;
    document.getElementsByTagName("body")[0].innerHTML = pageCreerPartie;
    var changerFormulaire = document.getElementById('choisir-loup');
    changerFormulaire.onclick = function () {
        if (changerFormulaire.checked) {
            document.getElementById('choix-nombre').type = "number";
            document.getElementById('choix-nombre').max = 6;
            document.getElementById('choix-nombre').min = 1;
            document.getElementById('legende-choix').textContent = "Nombre de loup-garous :";
            document.getElementById('valeur-nombre').style.visibility = 'hidden';
        } else {
            document.getElementById('choix-nombre').type = "range";
            document.getElementById('choix-nombre').max = 20;
            document.getElementById('choix-nombre').min = 4;
            document.getElementById('legende-choix').textContent = "Nombre de joueurs :";
            document.getElementById('valeur-nombre').innerHTML = "Valeur : " + document.getElementById('choix-nombre').value;
            document.getElementById('valeur-nombre').style.visibility = 'visible';
        }
    };
})();