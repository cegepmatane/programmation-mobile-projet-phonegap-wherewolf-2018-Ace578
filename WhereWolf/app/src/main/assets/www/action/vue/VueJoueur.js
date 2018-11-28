var VueJoueur = (function () {

    var pageVueJoueur = document.getElementById("page-vue-joueur").innerHTML;

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
            var dos = true;

            var tempsClic = 0;
            $(".contenant-cartes").doubletap(function () 
            {
                if (dos) 
                {
                    retournerCarteVueJoueurVersDescription()
                    dos = false;
                    console.log(dos);
                }
                else 
                {
                    retournerCarteVueJoueurVersDos()
                    dos = true;
                    console.log(dos);
                }
            });

        }
        var retournerCarteVueJoueurVersDescription = function () 
        {
            $(".contenant-cartes")[0].animation.play(0);
        }

        var retournerCarteVueJoueurVersDos = function () 
        {
            $(".contenant-cartes")[0].animation.reverse();
        }
    };

})();
