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
time.style.position= "absolute";
time.style.left= "0";
time.style.right= "0";
time.style.margin= "0 auto";
time.style.textAlign= "center";
time.style.color = "white"

var timer = 15;
var interval = null
function startAd() {

    
    Enabler.setFloatingPixelDimensions(1, 1);
    Enabler.queryFullscreenSupport();
    Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_SUPPORT, fullscreenHandler);


    var inicio = document.getElementById("inicio");
    inicio.style.display = "block";

    var juego = document.getElementById("juego");

    setTimeout(function () {
        startGame();
    }, 3000);

    function startGame() {
        interval = setInterval(function () {
            --timer
            const textTimer = `00:${timer > 10 ? timer : `0${timer}`}`
            time.innerHTML = textTimer
            if(timer == 0) {
                winGame()
                clearInterval(interval)
                time.style.display = "none"
            }
        }, 1000)
        document.getElementById("container").appendChild(time)
        var parteA = document.getElementById("parteA");
        var parteB = document.getElementById("parteB");
        var parteC = document.getElementById("parteC");
        var parteD = document.getElementById("parteD");

        //Muestra el juego
        inicio.style.display = "none";
        juego.style.display = "block";
        //Evita que la pantalla se mueva
        document.addEventListener(
            "touchmove",
            (e) => e.preventDefault(),
            { passive: false }
        )
        //Parte de espuma
        var espuma = document.getElementById("espuma");
        //mobile
        espuma.addEventListener("touchstart", espumaTouchStartCallback)

        //desktop
        espuma.addEventListener("mousedown", espumaTouchStartCallback)

        function espumaTouchStartCallback() {

            espuma.style.display = "none";
            espuma2 = document.getElementById("espuma_2");
            espuma2.style.display = "block";

            //mobile
            espuma.addEventListener("touchmove", espumaTouchMoveCallback)

            //desktop
            espuma2.addEventListener("mousemove", espumaTouchMoveCallback)

            function espumaTouchMoveCallback(event) {

                var coordenadas = event.touches ? event.touches[0] : {clientX: event.clientX, clientY: event.clientY};
                var coorX = coordenadas.clientX;
                var coorY = coordenadas.clientY;

                var offsetY = espuma2.clientHeight / 2;
                var offsetX = espuma2.clientWidth / 2;

                espuma2.style.top = coorY - offsetY + "px";
                espuma2.style.left = coorX - offsetX + "px";
                var parteACoor = parteA.getBoundingClientRect();
                var parteBCoor = parteB.getBoundingClientRect();
                var parteCCoor = parteC.getBoundingClientRect();
                var parteDCoor = parteD.getBoundingClientRect();

                if (coorX >= parteACoor.x && coorY > parteACoor.y && coorX < parteACoor.width + parteACoor.x && coorY < parteACoor.height + parteACoor.y) {
                    parteA.style.opacity = "1";
                }
                if (coorX >= parteBCoor.x && coorY > parteBCoor.y && coorX < parteBCoor.width + parteBCoor.x && coorY < parteBCoor.height + parteBCoor.y) {
                    parteB.style.opacity = "1";
                }
                if (coorX >= parteCCoor.x && coorY > parteCCoor.y && coorX < parteCCoor.width + parteCCoor.x && coorY < parteCCoor.height + parteCCoor.y) {
                    parteC.style.opacity = "1";
                }
                if (coorX >= parteDCoor.x && coorY > parteDCoor.y && coorX < parteDCoor.width + parteDCoor.x && coorY < parteDCoor.height + parteDCoor.y) {
                    parteD.style.opacity = "1";
                }

            }

            //mobile
            espuma.addEventListener("touchend", espumaTouchEndCallback)
            //desktop
            espuma2.addEventListener("mouseup", espumaTouchEndCallback)

            function espumaTouchEndCallback(event) {

                espuma2.style.top = null;
                espuma2.style.left = null;
                espuma2.style.display = "none";
                espuma.style.display = "block";

                if (parteA.style.opacity == "1" && parteB.style.opacity == "1" && parteC.style.opacity == "1" && parteD.style.opacity == "1") {
                    espuma.style.opacity = "0.7";

                    //mobile
                    espuma.removeEventListener("touchstart", espumaTouchStartCallback)
                    espuma.removeEventListener("touchmove", espumaTouchMoveCallback)
                    espuma.removeEventListener("touchend", espumaTouchEndCallback)

                    //desktop
                    espuma.removeEventListener("mousedown", espumaTouchStartCallback)
                    espuma2.removeEventListener("mousemove", espumaTouchMoveCallback)
                    espuma2.removeEventListener("mouseup", espumaTouchEndCallback)

                    var rasura = document.getElementById("rasura");
                    //mobile
                    rasura.addEventListener("touchstart", rasuraTouchStartCallback)
                    //desktop
                    rasura.addEventListener("mousedown", rasuraTouchStartCallback)

                }

                function rasuraTouchStartCallback() {
                    rasura.style.display = "none";
                    rasura2 = document.getElementById("rasura_2");
                    rasura2.style.display = "block";

                    //mobile
                    rasura.addEventListener("touchmove", rasuraTouchMoveCallback)

                    //desktop
                    rasura2.addEventListener("mousemove", rasuraTouchMoveCallback)

                    function rasuraTouchMoveCallback(event) {
                        rasura2.style.right = "unset";

                        var coordenadas = event.touches ? event.touches[0] : {clientX: event.clientX, clientY: event.clientY};
                        var coorX = coordenadas.clientX;
                        var coorY = coordenadas.clientY;
                        var offsetY = rasura2.clientHeight / 2;
                        var offsetX = rasura2.clientWidth / 2;

                        rasura2.style.display = "block";
                        rasura2.style.top = coorY - offsetY + "px";
                        rasura2.style.left = coorX - offsetX + "px";

                        var parteACoor = parteA.getBoundingClientRect();
                        var parteBCoor = parteB.getBoundingClientRect();
                        var parteCCoor = parteC.getBoundingClientRect();
                        var parteDCoor = parteD.getBoundingClientRect();

                        if (coorX >= parteACoor.x && coorY > parteACoor.y && coorX < parteACoor.width + parteACoor.x && coorY < parteACoor.height + parteACoor.y) {
                            parteA.style.opacity = "0";
                            document.getElementById("barba_1").style.opacity = "0";
                        }
                        if (coorX >= parteBCoor.x && coorY > parteBCoor.y && coorX < parteBCoor.width + parteBCoor.x && coorY < parteBCoor.height + parteBCoor.y) {
                            parteB.style.opacity = "0";
                            document.getElementById("barba_2").style.opacity = "0";
                        }
                        if (coorX >= parteCCoor.x && coorY > parteCCoor.y && coorX < parteCCoor.width + parteCCoor.x && coorY < parteCCoor.height + parteCCoor.y) {
                            parteC.style.opacity = "0";
                            document.getElementById("barba_3").style.opacity = "0";
                        }
                        if (coorX >= parteDCoor.x && coorY > parteDCoor.y && coorX < parteDCoor.width + parteDCoor.x && coorY < parteDCoor.height + parteDCoor.y) {
                            parteD.style.opacity = "0";
                            document.getElementById("barba_4").style.opacity = "0";
                        }


                        //mobile
                        rasura.addEventListener("touchend", rasuraTouchEndCallback)

                        //desktop
                        rasura2.addEventListener("mouseup", rasuraTouchEndCallback)

                        function rasuraTouchEndCallback(event) {
                            rasura2.style.display = "none";
                            rasura.style.display = "block";
                            rasura2.style.right = null;
                            rasura2.style.top = null;
                            rasura2.style.left = null;


                            if (parteA.style.opacity == "0" && parteB.style.opacity == "0" && parteC.style.opacity == "0" && parteD.style.opacity == "0") {

                                rasura.style.opacity = "0.7";

                                //mobile
                                rasura.removeEventListener("touchstart", rasuraTouchStartCallback)
                                rasura.removeEventListener("touchmove", rasuraTouchMoveCallback)
                                rasura.removeEventListener("touchend", rasuraTouchEndCallback)



                                //desktop
                                rasura.removeEventListener("mousedown", rasuraTouchStartCallback)
                                rasura2.removeEventListener("mousemove", rasuraTouchMoveCallback)
                                rasura2.removeEventListener("mouseup", rasuraTouchEndCallback)



                                //Parte loción

                                var hidrata = document.getElementById("hidrata");
                                //mobile
                                hidrata.addEventListener("touchstart", hidrataTouchStartCallback)
                                //desktop
                                hidrata.addEventListener("mousedown", hidrataTouchStartCallback)
                            }
                            function hidrataTouchStartCallback() {
                                hidrata.style.display = "none";
                                hidrata2 = document.getElementById("hidrata_2");
                                hidrata2.style.display = "block";

                                //mobile
                                hidrata.addEventListener("touchmove", hidrataTouchMoveCallback);
                                //desktop
                                hidrata2.addEventListener("mousemove", hidrataTouchMoveCallback);

                                function hidrataTouchMoveCallback(event) {
                                    var coordenadas = event.touches ? event.touches[0] : {clientX: event.clientX, clientY: event.clientY};

                                    var coorX = coordenadas.clientX;
                                    var coorY = coordenadas.clientY;

                                    var offsetY = hidrata2.clientHeight / 2;
                                    var offsetX = hidrata2.clientWidth / 2;

                                    hidrata2.style.top = coorY - offsetY + "px";
                                    hidrata2.style.left = coorX - offsetX + "px";

                                    var parteACoor = parteA.getBoundingClientRect();
                                    var parteBCoor = parteB.getBoundingClientRect();
                                    var parteCCoor = parteC.getBoundingClientRect();
                                    var parteDCoor = parteD.getBoundingClientRect();

                                    if (coorX >= parteACoor.x && coorY > parteACoor.y && coorX < parteACoor.width + parteACoor.x && coorY < parteACoor.height + parteACoor.y) {

                                        document.getElementById("estrella1").style.opacity = "1";
                                        document.getElementById("estrella2").style.opacity = "1";
                                        document.getElementById("estrella3").style.opacity = "1";
                                        document.getElementById("estrella4").style.opacity = "1";
                                    }
                                    if (coorX >= parteBCoor.x && coorY > parteBCoor.y && coorX < parteBCoor.width + parteBCoor.x && coorY < parteBCoor.height + parteBCoor.y) {
                                        document.getElementById("estrella1").style.opacity = "1";
                                        document.getElementById("estrella2").style.opacity = "1";
                                        document.getElementById("estrella3").style.opacity = "1";
                                        document.getElementById("estrella4").style.opacity = "1";
                                    }
                                    if (coorX >= parteCCoor.x && coorY > parteCCoor.y && coorX < parteCCoor.width + parteCCoor.x && coorY < parteCCoor.height + parteCCoor.y) {
                                        document.getElementById("estrella1").style.opacity = "1";
                                        document.getElementById("estrella2").style.opacity = "1";
                                        document.getElementById("estrella3").style.opacity = "1";
                                        document.getElementById("estrella4").style.opacity = "1";
                                    }
                                    if (coorX >= parteDCoor.x && coorY > parteDCoor.y && coorX < parteDCoor.width + parteDCoor.x && coorY < parteDCoor.height + parteDCoor.y) {
                                        document.getElementById("estrella1").style.opacity = "1";
                                        document.getElementById("estrella2").style.opacity = "1";
                                        document.getElementById("estrella3").style.opacity = "1";
                                        document.getElementById("estrella4").style.opacity = "1";
                                    }


                                }
                                // mobile
                                hidrata.addEventListener("touchend", hidrataTouchEndCallback)
                                // desktop
                                hidrata2.addEventListener("mouseup", hidrataTouchEndCallback)

                                function hidrataTouchEndCallback(event) {
                                    hidrata2.style.top = null;
                                    hidrata2.style.left = null;
                                    hidrata2.style.display = "none";
                                    hidrata.style.display = "block";
                                    hidrata.style.opacity = "0.7";

                                    //mobile
                                    hidrata.removeEventListener("touchstart", hidrataTouchStartCallback)
                                    hidrata.removeEventListener("touchmove", hidrataTouchMoveCallback)
                                    hidrata.removeEventListener("touchend", hidrataTouchEndCallback)

                                    //desktop
                                    hidrata.removeEventListener("mousedown", hidrataTouchStartCallback)
                                    hidrata2.removeEventListener("mousemove", hidrataTouchMoveCallback)
                                    hidrata2.removeEventListener("mouseup", hidrataTouchEndCallback)

                                    setTimeout(function () {
                                        winGame();
                                    }, 3000);

                                }
                            }

                        }
                    }

                }

            }


        }


        



    }

function winGame() {
    juego.style.display = "none";
    document.getElementById("final").style.display = "block";
    console.log("ganaste");
}


}
function fullscreenHandler() {
    Enabler.requestFullscreenExpand();
}
