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
var time = document.createElement("p");

function startAd() {
    Enabler.setFloatingPixelDimensions(1, 1);
    Enabler.queryFullscreenSupport();
    Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_SUPPORT, fullscreenHandler);

    var loader = document.getElementById("loader-container");
    loader.style.display = "none";

    var inicio = document.getElementById("inicio");
    inicio.style.display = "block";

    var juego = document.getElementById("juego");
    var btnJugar = document.getElementById("btnJugar");
    btnJugar.onclick = startGame;

    var timer = 15;
    var interval = null;
    function startGame() {

        var score = 0;

        time.style.position = "absolute";
        time.style.left = time.style.right = "0";
        time.style.margin = "0 auto";
        time.style.top = "10px";
        time.style.color = "white";
        time.style.textAlign = "center";
        document.getElementById("background").appendChild(time);
        interval = setInterval(function () {
            time.innerHTML = timer > 9 ? `00:${timer}` : `00:0${timer}`;

            timer--;
            if (!timer) winGame();
        }, 1000)
        inicio.style.display = "none";
        juego.style.display = "block";

        var checkSymbol1Flag = false;
        var checkSymbol2Flag = false;
        var checkSymbol3Flag = false;
        var checkSymbol4Flag = false;
        var checkSymbol5Flag = false;
        var checkSymbol6Flag = false;

        function checkSymbol1(coorX, coorY) {
            var simbolo1 = document.getElementById("simbolo1").getBoundingClientRect();
            var simbolo9 = document.getElementById("simbolo9").getBoundingClientRect();
            var limiteXIzq = simbolo1.x;
            var limiteXDer = simbolo9.x + simbolo9.width;
            var limiteYSup = simbolo1.y;
            var limiteYInf = simbolo9.y + simbolo9.height;


            if (coorX > limiteXIzq && coorX < limiteXDer && coorY > limiteYSup && coorY < limiteYInf) {
                var simbolo1El = document.getElementById("simbolo1");
                simbolo1El.style.opacity = "0.3";

                var simbolo5El = document.getElementById("simbolo5");
                simbolo5El.style.opacity = "0.3";

                var simbolo9El = document.getElementById("simbolo9");
                simbolo9El.style.opacity = "0.3";

                var matchLineVEl1 = document.getElementById("matchLineV1");
                matchLineVEl1.style.opacity = "1";

                document.getElementById("cuadradoC").style.opacity = "1";
                document.getElementById("cuadradoC2").style.opacity = "1";

                document.getElementById("E").style.opacity = "1";
                document.getElementById("E2").style.opacity = "1";
                if (checkSymbol1Flag == false) {
                    setTimeout(function () {
                        checkSymbol1Flag = true;
                        matchLineVEl1.style.opacity = 0;
                        simbolo1El.style.opacity = 1;
                        simbolo1El.style.backgroundImage = "url(./Assets/cuadrado.png)";
                        simbolo5El.style.backgroundImage = "url(./Assets/doslados.png";
                        simbolo5El.style.opacity = 1;

                        simbolo9El.style.backgroundImage = "url(./Assets/tresladospunto.png)";
                        simbolo9El.style.opacity = 1;
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

                var simbolo12El = document.getElementById("simbolo12");
                simbolo12El.style.opacity = "0.3";

                var simbolo16El = document.getElementById("simbolo16");
                simbolo16El.style.opacity = "0.3";

                var matchLineVEl2 = document.getElementById("matchLineV2");
                matchLineVEl2.style.opacity = "1";

                document.getElementById("N").style.opacity = "1";
                document.getElementById("cuadradoPuntoC").style.opacity = "1";

                if (checkSymbol2Flag == false) {
                    setTimeout(function () {
                        checkSymbol2Flag = true;
                        matchLineVEl2.style.opacity = 0;

                        simbolo8El.style.opacity = 1;
                        simbolo8El.style.backgroundImage = "url(./Assets/cuadrado.png)";


                        simbolo12El.style.opacity = 1;

                        simbolo16El.style.backgroundImage = "url(./Assets/doslados.png)";
                        simbolo16El.style.opacity = 1;
                    }, 500)
                }
            }

        }
        function checkSymbol3(coorX, coorY) {
            var simbolo9 = document.getElementById("simbolo9").getBoundingClientRect();
            var simbolo11 = document.getElementById("simbolo11").getBoundingClientRect();

            var limiteXIzq = simbolo9.x;
            var limiteXDer = simbolo11.x + simbolo11.width;
            var limiteYSup = simbolo9.y;
            var limiteYInf = simbolo11.y + simbolo11.height;

            if (coorX > limiteXIzq && coorX < limiteXDer && coorY > limiteYSup && coorY < limiteYInf) {
                var simbolo9El = document.getElementById("simbolo9");
                simbolo9El.style.opacity = "0.3";

                var simbolo10El = document.getElementById("simbolo10");
                simbolo10El.style.opacity = "0.3";

                var simbolo11El = document.getElementById("simbolo11");
                simbolo11El.style.opacity = "0.3";

                var matchLineVEl3 = document.getElementById("matchLineV3");
                matchLineVEl3.style.opacity = "1";

                document.getElementById("O").style.opacity = "1";
                document.getElementById("tresLadosPuntoC").style.opacity = "1";

                if (checkSymbol3Flag == false) {
                    setTimeout(function () {
                        checkSymbol3Flag = true;
                        matchLineVEl3.style.opacity = 0;

                        simbolo9El.style.opacity = 1;
                        simbolo9El.style.backgroundImage = "url(./Assets/doslados.png)";

                        simbolo10El.style.backgroundImage = "url(./Assets/treslados.png)";
                        simbolo10El.style.opacity = 1;

                        simbolo11El.style.backgroundImage = "url(./Assets/V.png)";
                        simbolo11El.style.width = "40px";
                        simbolo11El.style.height = "25px";
                        simbolo11El.style.opacity = 1;
                        
                    }, 500)
                }
            }
        }
        function checkSymbol4(coorX, coorY) {
            var simbolo7 = document.getElementById("simbolo7").getBoundingClientRect();
            var simbolo11 = document.getElementById("simbolo11").getBoundingClientRect();

            var limiteXIzq = simbolo7.x;
            var limiteXDer = simbolo11.x + simbolo11.width;
            var limiteYSup = simbolo7.y;
            var limiteYInf = simbolo11.y + simbolo11.height;

            if (coorX > limiteXIzq && coorX < limiteXDer && coorY > limiteYSup && coorY < limiteYInf) {
                var simbolo7El = document.getElementById("simbolo7");
                simbolo7El.style.opacity = "0.3";

                var simbolo11El = document.getElementById("simbolo11");
                simbolo11El.style.opacity = "0.3";

                var simbolo15El = document.getElementById("simbolo15");
                simbolo15El.style.opacity = "0.3";

                var matchLineVEl4 = document.getElementById("matchLineV4");
                matchLineVEl4.style.opacity = "1";

                document.getElementById("S").style.opacity = "1";
                document.getElementById("trianguloC").style.opacity = "1";

                if (checkSymbol4Flag == false) {
                    setTimeout(function () {
                        checkSymbol4Flag = true;
                        matchLineVEl4.style.opacity = 0;

                        simbolo7El.style.opacity = 1;
                        simbolo7El.style.backgroundImage = "url(./Assets/tresladospunto.png)";
                        simbolo7El.style.width = "25px";
                        simbolo7El.style.height = "25px";

                        simbolo11El.style.backgroundImage = "url(./Assets/treslados.png)";
                        simbolo11El.style.width = "25px";
                        simbolo11El.style.height = "25px";
                        simbolo11El.style.opacity = 1;

                        simbolo15El.style.backgroundImage = "url(./Assets/cuadradopunto.png)";
                        simbolo15El.style.width = "25px";
                        simbolo15El.style.height = "25px";
                        simbolo15El.style.opacity = 1;
                    }, 500)

                }
            }

        }
        function checkSymbol5(coorX, coorY) {
            var simbolo2 = document.getElementById("simbolo2").getBoundingClientRect();
            var simbolo4 = document.getElementById("simbolo4").getBoundingClientRect();
            var limiteXIzq = simbolo2.x;
            var limiteXDer = simbolo4.x + simbolo4.width;
            var limiteYSup = simbolo2.y;
            var limiteYInf = simbolo4.y + simbolo4.height;

            if (coorX > limiteXIzq && coorX < limiteXDer && coorY > limiteYSup && coorY < limiteYInf) {
                var simbolo2El = document.getElementById("simbolo2");
                simbolo2El.style.opacity = "0.3";

                var simbolo3El = document.getElementById("simbolo3");
                simbolo3El.style.opacity = "0.3";

                var simbolo4El = document.getElementById("simbolo4");
                simbolo4El.style.opacity = "0.3";

                var matchLineVEl5 = document.getElementById("matchLineV5");
                matchLineVEl5.style.opacity = "1";

                document.getElementById("dosLadosC").style.opacity = "1";
                document.getElementById("C").style.opacity = "1";

                if (checkSymbol5Flag == false) {
                    setTimeout(function () {
                        checkSymbol5Flag = true;
                        matchLineVEl5.style.opacity = 0;
                        simbolo2El.style.opacity = 1;
                        simbolo2El.style.backgroundImage = "url(./Assets/treslados.png)";
                        simbolo3El.style.backgroundImage = "url(./Assets/cuadrado.png";
                        simbolo3El.style.opacity = 1;

                        simbolo4El.style.backgroundImage = "url(./Assets/tresladospunto.png)";
                        simbolo4El.style.opacity = 1;
                    }, 500)
                }

            }
        }
        function checkSymbol6(coorX, coorY) {
            var simbolo2 = document.getElementById("simbolo2").getBoundingClientRect();
            var simbolo10 = document.getElementById("simbolo10").getBoundingClientRect();
            var limiteXIzq = simbolo2.x;
            var limiteXDer = simbolo10.x + simbolo10.width;
            var limiteYSup = simbolo2.y;
            var limiteYInf = simbolo10.y + simbolo10.height;


            if (coorX > limiteXIzq && coorX < limiteXDer && coorY > limiteYSup && coorY < limiteYInf) {
                var simbolo2El = document.getElementById("simbolo2");
                simbolo2El.style.opacity = "0.3";

                var simbolo6El = document.getElementById("simbolo6");
                simbolo6El.style.opacity = "0.3";

                var simbolo10El = document.getElementById("simbolo10");
                simbolo10El.style.opacity = "0.3";

                var matchLineVEl6 = document.getElementById("matchLineV6");
                matchLineVEl6.style.opacity = "1";

                document.getElementById("D").style.opacity = "1";
                document.getElementById("tresLadosC").style.opacity = "1";

                if (checkSymbol6Flag == false) {
                    setTimeout(function () {
                        checkSymbol6Flag = true;

                        matchLineVEl6.style.opacity = "0";

                        simbolo2El.style.backgroundImage="url(./Assets/cuadrado.png)";
                        simbolo2El.style.opacity = "1";

                        simbolo6El.style.backgroundImage="url(./Assets/cuadradopunto.png)";
                        simbolo6El.style.opacity = "1";

                        simbolo10El.style.backgroundImage="url(./Assets/doslados.png)";
                        simbolo10El.style.opacity = "1";
                    }, 500)
                }
            }
        }
        document.addEventListener("touchstart", (e) => callback("mobile", e), {
            passive: false
        })
        document.addEventListener("mousedown", function () {
            document.addEventListener("mousemove", handlerDesk)
        })
        document.addEventListener("mouseup", function () {
            document.removeEventListener("mousemove", handlerDesk)
        })

        handlerDesk = (e) => callback("desktop", e)

        function callback(type, event) {
            event.preventDefault();
            var coordenadas = type === "desktop" ? { clientX: event.clientX, clientY: event.clientY } : event.touches[0];
            var coorX = coordenadas.clientX;
            var coorY = coordenadas.clientY;


            if (checkSymbol1Flag == false) {
                checkSymbol1(coorX, coorY);
            }
            if (checkSymbol2Flag == false) {
                checkSymbol2(coorX, coorY);
            }
            if (checkSymbol3Flag == false && checkSymbol1Flag == true) {
                checkSymbol3(coorX, coorY);
            }
            if (checkSymbol4Flag == false && checkSymbol3Flag == true) {
                checkSymbol4(coorX, coorY);
            }
            if (checkSymbol5Flag == false) {
                checkSymbol5(coorX, coorY);
            }
            if (checkSymbol6Flag == false && checkSymbol3Flag == true && checkSymbol5Flag == true) {
                checkSymbol6(coorX, coorY);
            }

            setTimeout(function () {
                if (checkSymbol1Flag && checkSymbol2Flag && checkSymbol3Flag && checkSymbol4Flag && checkSymbol5Flag && checkSymbol6Flag) {
                    winGame();
                }
            }, 2000)


        }

        function winGame() {
            clearInterval(interval)
            time.style.display = "none"
            document.getElementById("background").onclick = document.getElementById("background").ontouchstart = function () {
                Enabler.exit('HTML5_Background_Clickthrough', window.clickThrough);
            }
            document.getElementById('juego').style.display = "none"
            document.getElementById('contenedorFinal').style.display = "block"
        }
    }
}
function fullscreenHandler() {
    Enabler.requestFullscreenExpand();
}
