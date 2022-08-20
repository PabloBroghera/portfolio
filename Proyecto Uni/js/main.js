window.onload = function () {
    if (Enabler.isInitialized()) {
        enablerInitHandler();
    } else {
        Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
    }
};

function enablerInitHandler() {
    if (Enabler.isVisible()) {
        startAd();
    } else {
        Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, startAd);
    }
};

function startAd() {
    var loader = document.getElementById("loader-container");
    loader.style.display = "none";

    var inicio = document.getElementById("inicio");
    inicio.style.display = "block";

    var juego = document.getElementById("juego");
    var btnJugar = document.getElementById("btnJugar");
    btnJugar.onclick = startGame;


    function startGame() {

        var score = 0;

        inicio.style.display = "none";
        juego.style.display = "block";
        var checkSymbol1Flag = false;
        var checkSymbol2Flag = false;
        var checkSymbol3Flag = false;
        var checkSymbol4Flag = false;
        var checkSymbol5Flag = false;

        function checkSymbol1(coorX, coorY) {
            var simbolo1 = document.getElementById("simbolo1").getBoundingClientRect();
            var simbolo3 = document.getElementById("simbolo3").getBoundingClientRect();
            var limiteXIzq = simbolo1.x;
            var limiteXDer = simbolo3.x + simbolo3.width;
            var limiteYSup = simbolo1.y;
            var limiteYInf = simbolo3.y + simbolo3.height;

            if (coorX > limiteXIzq && coorX < limiteXDer && coorY > limiteYSup && coorY < limiteYInf) {
                var simbolo1El = document.getElementById("simbolo1");
                simbolo1El.style.opacity = "0.3";

                document.getElementById("simbolo2").style.opacity = "0.3";


                var matchLineVEl = document.getElementById("matchLineV")
                matchLineVEl.style.opacity = "1";

                var simbolo2El = document.getElementById("simbolo2");
                simbolo2El.style.opacity = "0.3";

                var simbolo3El = document.getElementById("simbolo3");
                document.getElementById("simbolo3").style.opacity = "0.3";

                document.getElementById("trianguloC").style.opacity = "1";
                document.getElementById("V").style.opacity = "1";

                if (checkSymbol1Flag == false) {

                    setTimeout(function () {
                        checkSymbol1Flag = true;
                        matchLineVEl.style.opacity = 0;
                        simbolo1El.style.opacity = 1;
                        simbolo1El.style.backgroundImage = "url(./Assets/dosladospunto.png)"
                        simbolo1El.style.height = "26px";
                        simbolo1El.style.width = "33px";

                        simbolo2El.style.backgroundImage = "url(./Assets/cuadrado.png";
                        simbolo2El.style.height = "25px";
                        simbolo2El.style.width = "25px";
                        simbolo2El.style.opacity = 1;

                        simbolo3El.style.backgroundImage = "url(./Assets/doslados.png)";
                        simbolo3El.style.height = "25px";
                        simbolo3El.style.width = "25px";
                        simbolo3El.style.opacity = 1;
                    }, 500)
                }
            }
        }
        function checkSymbol2(coorX, coorY) {
            var simbolo8 = document.getElementById("simbolo8").getBoundingClientRect();
            var simbolo16 = document.getElementById("simbolo16").getBoundingClientRect();
            var limiteXIzq = simbolo8.x;
            var limiteXDer = simbolo16.x + simbolo16.width;
            var limiteYSup = simbolo8.y;
            var limiteYInf = simbolo16.y + simbolo16.height;

            if (coorX > limiteXIzq && coorX < limiteXDer && coorY > limiteYSup && coorY < limiteYInf) {

                var simbolo8El = document.getElementById("simbolo8");
                simbolo8El.style.opacity = "0.3";

                var matchLineVEl1 = document.getElementById("matchLineV2");
                matchLineVEl1.style.opacity = "1";

                var simbolo12El = document.getElementById("simbolo12");
                simbolo12El.style.opacity = "0.3";

                var simbolo16El = document.getElementById("simbolo16");
                simbolo16El.style.opacity = "0.3";

                document.getElementById("dosLadosC").style.opacity = "1";
                document.getElementById("A").style.opacity = "1";

                if (checkSymbol2Flag == false) {

                    setTimeout(function () {
                        checkSymbol2Flag = true;
                        matchLineVEl1.style.opacity = 0;
                        simbolo8El.style.opacity = 1;
                        simbolo8El.style.backgroundImage = "url(./Assets/doslados.png)"
                        simbolo8El.style.height = "25px";
                        simbolo8El.style.width = "25px";

                        simbolo12El.style.backgroundImage = "url(./Assets/treslados.png";
                        simbolo12El.style.height = "25px";
                        simbolo12El.style.width = "25px";
                        simbolo12El.style.opacity = 1;

                        simbolo16El.style.backgroundImage = "url(./Assets/dosladospunto.png";
                        simbolo16El.style.height = "25px";
                        simbolo16El.style.width = "25px";
                        simbolo16El.style.opacity = 1;
                    }, 500)
                }
            }

        }
        function checkSymbol3(coorX, coorY) {
            var simbolo10 = document.getElementById("simbolo10").getBoundingClientRect();
            var simbolo11 = document.getElementById("simbolo11").getBoundingClientRect();
            var simbolo12 = document.getElementById("simbolo12").getBoundingClientRect();

            var limiteXIzq = simbolo10.x;
            var limiteXDer = simbolo12.x + simbolo12.width;
            var limiteYSup = simbolo10.y;
            var limiteYInf = simbolo12.y + simbolo12.height;

            if (coorX > limiteXIzq && coorX < limiteXDer && coorY > limiteYSup && coorY < limiteYInf) {

                var matchLineVEl2 = document.getElementById("matchLineV3");
                matchLineVEl2.style.opacity = "1";

                var simbolo10El = document.getElementById("simbolo10");
                simbolo10El.style.opacity = "0.3";

                var simbolo11El = document.getElementById("simbolo11");
                simbolo11El.style.opacity = "0.3";

                var simbolo12El = document.getElementById("simbolo12");
                simbolo12El.style.opacity = "0.3";

                document.getElementById("tresLadosC").style.opacity = "1";
                document.getElementById("tresLadosC2").style.opacity = "1";
                document.getElementById("D").style.opacity = "1";
                document.getElementById("D2").style.opacity = "1";

                if (checkSymbol3Flag == false) {

                    setTimeout(function () {
                        checkSymbol3Flag = true;
                        matchLineVEl2.style.opacity = 0;
                        simbolo10El.style.opacity = 1;
                        simbolo10El.style.backgroundImage = "url(./Assets/doslados.png)";
                        simbolo10El.style.height = "25px";
                        simbolo10El.style.width = "25px";

                 /*        var cambio = document.getElementById("simbolo6");
                        cambio.style.backgroundImage = "url(./Assets/cuadrado.png)"
                        cambio.style.height = "25px";
                        cambio.style.width = "25px";
                        cambio.style.opacity = 1;

                        var cambio2 = document.getElementById("simbolo3");
                        cambio2.style.backgroundImage = "url(./Assets/doslados.png)"
                        cambio2.style.height = "25px";
                        cambio2.style.width = "25px";
                        cambio2.style.opacity = 1;
 */


                        simbolo11El.style.backgroundImage = "url(./Assets/cuadrado.png";
                        simbolo11El.style.height = "25px";
                        simbolo11El.style.width = "25px";
                        simbolo11El.style.opacity = 1;

                        simbolo12El.style.backgroundImage = "url(./Assets/cuadrado.png";
                        simbolo12El.style.height = "25px";
                        simbolo12El.style.width = "25px";
                        simbolo12El.style.opacity = 1;


                    }, 500)
                }

            }
        }
        function checkSymbol4(coorX, coorY) {
            var simbolo1 = document.getElementById("simbolo1").getBoundingClientRect();
            var simbolo9 = document.getElementById("simbolo9").getBoundingClientRect();

            var limiteXIzq = simbolo1.x;
            var limiteXDer = simbolo9.x + simbolo9.width;
            var limiteYSup = simbolo1.y;
            var limiteYInf = simbolo9.y + simbolo9.height;

            if (coorX > limiteXIzq && coorX < limiteXDer && coorY > limiteYSup && coorY < limiteYInf) {

                var matchLineVEl3 = document.getElementById("matchLineV4");
                matchLineVEl3.style.opacity = "1";

                var simbolo1El = document.getElementById("simbolo1");
                simbolo1El.style.opacity = "0.3";

                var simbolo5El = document.getElementById("simbolo5");
                simbolo5El.style.opacity = "0.3";

                var simbolo9El = document.getElementById("simbolo9");
                simbolo9El.style.opacity = "0.3";

                document.getElementById("R").style.opacity = "1";
                document.getElementById("dosLadosPuntoC").style.opacity = "1";
                if (checkSymbol4Flag == false) {

                    setTimeout(function () {

                        checkSymbol4Flag = true;
                        matchLineVEl3.style.opacity = 0;
                        simbolo1El.style.opacity = 1;
                        simbolo1El.style.backgroundImage = "url(./Assets/treslados.png)"
                        simbolo1El.style.height = "25px";
                        simbolo1El.style.width = "25px";

                        simbolo5El.style.backgroundImage = "url(./Assets/dosladospunto.png";
                        simbolo5El.style.height = "25px";
                        simbolo5El.style.width = "30px";
                        simbolo5El.style.opacity = 1;

                        simbolo9El.style.backgroundImage = "url(./Assets/cuadrado.png";
                        simbolo9El.style.height = "25px";
                        simbolo9El.style.width = "25px";
                        simbolo9El.style.opacity = 1;
                    }, 500)
                }
            }

        }
        function checkSymbol5(coorX,coorY){
            var simbolo7 = document.getElementById("simbolo7").getBoundingClientRect();
            var simbolo15= document.getElementById("simbolo15").getBoundingClientRect();
            
            var limiteXIzq = simbolo7.x;
            var limiteXDer = simbolo15.x + simbolo15.width;
            var limiteYSup = simbolo7.y;
            var limiteYInf = simbolo15.y + simbolo15.height;
            if (coorX > limiteXIzq && coorX < limiteXDer && coorY > limiteYSup && coorY < limiteYInf) {

                var matchLineVEl4 = document.getElementById("matchLineV5");
                matchLineVEl4.style.opacity = "1";

                var simbolo7El = document.getElementById("simbolo7");
                simbolo7El.style.opacity="0.3";
                
                var simbolo11El = document.getElementById("simbolo11");
                simbolo11El.style.opacity = "0.3";

                var simbolo15El = document.getElementById("simbolo15");
                simbolo15El.style.opacity = "0.3";

                document.getElementById("E").style.opacity = "1";
                document.getElementById("cuadradoC").style.opacity = "1";

                if (checkSymbol5Flag == false) {

                    setTimeout(function () {
                        checkSymbol5Flag = true;
                        matchLineVEl4.style.opacity = 0;
                        simbolo7El.style.opacity = 1;
                        simbolo7El.style.backgroundImage = "url(./Assets/dosladospunto.png)"
                        simbolo7El.style.height = "26px";
                        simbolo7El.style.width = "33px";

                        simbolo11El.style.backgroundImage = "url(./Assets/cuadrado.png";
                        simbolo11El.style.height = "25px";
                        simbolo11El.style.width = "25px";
                        simbolo11El.style.opacity = 1;

                        simbolo15El.style.backgroundImage = "url(./Assets/cuadrado.png";
                        simbolo15El.style.height = "25px";
                        simbolo15El.style.width = "25px";
                        simbolo15El.style.opacity = 1;
                    }, 500)
                }
                

            }

        }
        document.addEventListener("touchmove", function (event) {
            event.preventDefault();
            var coordenadas = event.touches[0];
            var coorX = coordenadas.clientX;
            var coorY = coordenadas.clientY;

            if (checkSymbol1Flag == true && checkSymbol4Flag == false) {
                checkSymbol4(coorX, coorY);
            }
            if (checkSymbol1Flag == false) {
                checkSymbol1(coorX, coorY);
            }

            if (checkSymbol2Flag == false) {

                checkSymbol2(coorX, coorY);
            }
            if (checkSymbol3Flag == false && checkSymbol2Flag == true) {

                checkSymbol3(coorX, coorY);
            }

            if (checkSymbol5Flag == false && checkSymbol3Flag == true) {
                checkSymbol5(coorX, coorY);
            }

            setTimeout(function (){
                if(checkSymbol1Flag && checkSymbol2Flag && checkSymbol3Flag && checkSymbol4Flag && checkSymbol5Flag) {
                    winGame();
                }
            }, 1000)

            

        }, { passive: false })


    }

    function winGame() {
        document.getElementById('juego').style.display = "none"
        document.getElementById('contenedorFinal').style.display = "block"
    }
}

