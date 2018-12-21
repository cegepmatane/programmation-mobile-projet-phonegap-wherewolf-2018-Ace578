var VueJoueur = (function () {

    var pageVueJoueur = document.getElementById("page-vue-joueur").innerHTML;
    var dos;
    

    return function () 
    {
        this.afficher = function () 
        {
            document.getElementsByTagName("body")[0].innerHTML = pageVueJoueur;
            preparerDoubleTap();
            CSSPlugin.defaultTransformPerspective = 1000;

            //Set du dos de la carte
            TweenMax.set($("div.carte-vue-joueur"), { rotationY: -180 });

            $.each($("div.contenant-cartes"), function (i, element) 
            {
                var descriptionCarte = $(this).children("div.description-carte-vue-joueur"),
                    dosCarte = $(this).children("div.carte-vue-joueur"),
                    tl = new TimelineMax({ paused: true });

                tl
                    .to(descriptionCarte, 1, { rotationY: 180, ease: Linear.easeNone })
                    .to(dosCarte, 1, { rotationY: 0, ease: Linear.easeNone }, 0);

                element.animation = tl;
            });
        }

        var preparerDoubleTap = function () 
        {
            dos = true;
            console.log(dos);
            $(".contenant-cartes").doubletap(function () 
            {
                if (dos) 
                {
                    retournerCarteVueJoueurVersDescription();
                    dos = false;
                    console.log(dos);
                    afficherDescriptionCarte();            
                }
                else if(!dos) 
                {
                    retournerCarteVueJoueurVersDos();
                    dos = true;
                    console.log(dos);                 
                }
            });

        }
        var retournerCarteVueJoueurVersDescription = function () 
        {
            $(".contenant-cartes").css('opacity','0.6');
            $(".contenant-cartes")[0].animation.play(0);
            /*setInterval(function()
            {
                if(!dos)
                {
                    retournerCarteVueJoueurVersDos();
                    this.dos = true;
                    console.log(dos);
                }
            },10000);*/
        }

        var retournerCarteVueJoueurVersDos = function () 
        {
            $(".contenant-cartes")[0].animation.reverse();
        }

        var afficherDescriptionCarte = function ()
        {
            var titreCarte = "La Sorciere";
            var texteDescriptionCarte = "Elle sait concocter 2 potions extrèmement puissantes: une potion de guérison, pour ressusciter le joueur tué par les Loups-Garous et une potion d'empoisonnement, utilisée la nuit pour éliminer un joueur. La sorcière ne peut utiliser chaque potion qu'une seule fois dans la partie. Elle peut se servir de ses 2 potions dans la même nuit. Le matin suivant il pourra, suivant l'usage de ce pouvoir, y avoir 0 mort, 1 mort ou 2 morts. La sorcière peut utiliser les potions à son profit, et donc se guérir elle-même.";
            swal(titreCarte,texteDescriptionCarte).then((value) => {$(".contenant-cartes").css('opacity','1');});
            $(".swal-modal").css('background-color', '#FF000000');
            $(".swal-overlay").css('background-color', '#FF000000');
            $(".swal-title").css('color', 'black');
            $(".swal-text").css('color', 'black');
        }
        
    };

})();
