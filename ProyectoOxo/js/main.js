window.onload = function () {
  if (Enabler.isInitialized()) {
    enablerInitHandler();
  } else {
    Enabler.addEventListener(
      studio.events.StudioEvent.INIT,
      enablerInitHandler
    );
  }
};

function enablerInitHandler() {
  if (Enabler.isVisible()) {
    startAd();
  } else {
    Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, startAd);
  }
}
var time = document.createElement("p");

function startAd() {
  Enabler.setFloatingPixelDimensions(1, 1);
  Enabler.queryFullscreenSupport();
  Enabler.addEventListener(
    studio.events.StudioEvent.FULLSCREEN_SUPPORT,
    fullscreenHandler
  );
  var loader = document.getElementById("loader-container");
  loader.style.display = "none";

  var juego = document.getElementById("playZone");
  juego.style.display = "block";

  var timer = 15;
  var interval = null;

  var checkSymbol1Flag = false;
  var checkSymbol2Flag = false;
  var checkSymbol3Flag = false;
  var checkSymbol4Flag = false;

  var time = document.createElement("p");
  time.className = "timer";
  time.style.position = "absolute";
  time.style.top = "10px";
  time.style.left = "0";
  time.style.right = "0";
  time.style.margin = "0 auto";
  time.style.textAlign = "center";
  time.style.color = "black";
  time.style.fontFamily = "Arial";

  var timer = 10;
  var interval = null;

  if (juego.style.display == "block") {
    startGame();
  }

  function startGame() {
    interval = setInterval(function () {
      --timer;
      const textTimer = `00:${timer >= 10 ? timer : `0${timer}`}`;
      time.innerHTML = textTimer;
      if (timer == 0) {
        winGame();
        clearInterval(interval);
        time.style.display = "none";
      }
    }, 1000);
    document.getElementById("container").appendChild(time);

    function checkSymbol1(coorX, coorY) {
      var simbolo8 = document
        .getElementById("simbolo8")
        .getBoundingClientRect();
      var simbolo16 = document
        .getElementById("simbolo16")
        .getBoundingClientRect();
      var limiteXIzq = simbolo8.x;
      var limiteXDer = simbolo16.x + simbolo16.width;
      var limiteYSup = simbolo8.y;
      var limiteYInf = simbolo16.y + simbolo16.height;

      if (
        coorX > limiteXIzq &&
        coorX < limiteXDer &&
        coorY > limiteYSup &&
        coorY < limiteYInf
      ) {
        console.log(checkSymbol1Flag + " Entre al flag1");
        var simbolo8El = document.getElementById("simbolo8");
        simbolo8El.style.opacity = "0.3";

        document.getElementById("simbolo12").style.opacity = "0.3";

        var matchLineVEl = document.getElementById("matchLineV1");
        matchLineVEl.style.opacity = "1";

        var simbolo12El = document.getElementById("simbolo12");
        simbolo12El.style.opacity = "0.3";

        var simbolo16El = document.getElementById("simbolo16");
        simbolo16El.style.opacity = "0.3";

        if (checkSymbol1Flag == false) {
          matchLineVEl.style.display = "block";

          setTimeout(function () {
            checkSymbol1Flag = true;
            console.log(checkSymbol1Flag);

            matchLineVEl.style.opacity = 0;
            simbolo8El.style.opacity = 1;
            simbolo8El.style.backgroundImage = "url(./Assets/atun.png)";
            simbolo8El.style.height = "20px";
            simbolo8El.style.width = "48px";
            simbolo8El.style.top = "260px";
            simbolo8El.style.right = "5px";

            simbolo12El.style.backgroundImage = "url(./Assets/leche.png";
            simbolo12El.style.height = "53px";
            simbolo12El.style.width = "34px";
            simbolo12El.style.opacity = 1;
            simbolo12El.style.top = "340px";
            simbolo12El.style.right = "10px";

            simbolo16El.style.backgroundImage = "url(./Assets/leche.png)";
            simbolo16El.style.height = "53px";
            simbolo16El.style.width = "34px";
            simbolo16El.style.opacity = 1;
            simbolo16El.style.top = "432px";
            simbolo16El.style.right = "10px";

            barraProgreso = document.getElementById("barraProgreso1");
            barraProgreso.style.opacity = "1";
          }, 500);
        }
      }
    }
    function checkSymbol2(coorX, coorY) {
      console.log("entre2");

      var simbolo6 = document
        .getElementById("simbolo6")
        .getBoundingClientRect();
      var simbolo8 = document
        .getElementById("simbolo8")
        .getBoundingClientRect();
      var limiteXIzq = simbolo6.x;
      var limiteXDer = simbolo8.x + simbolo8.width;
      var limiteYSup = simbolo6.y;
      var limiteYInf = simbolo8.y + simbolo8.height;

      if (
        coorX > limiteXIzq &&
        coorX < limiteXDer &&
        coorY > limiteYSup &&
        coorY < limiteYInf
      ) {
        var matchLineVEl2 = document.getElementById("matchLineV2");
        matchLineVEl2.style.opacity = "1";
        matchLineVEl2.style.display = "block";

        var simbolo6El = document.getElementById("simbolo6");
        simbolo6El.style.opacity = "0.3";

        var simbolo7El = document.getElementById("simbolo7");
        simbolo7El.style.opacity = "0.3";

        var simbolo8El = document.getElementById("simbolo8");
        simbolo8El.style.opacity = "0.3";

        if (checkSymbol2Flag == false) {
          setTimeout(function () {
            checkSymbol2Flag = true;
            matchLineVEl2.style.opacity = 0;
            simbolo6El.style.opacity = 1;
            simbolo6El.style.backgroundImage = "url(./Assets/aceite.png)";
            simbolo6El.style.height = "75px";
            simbolo6El.style.width = "25px";
            simbolo6El.style.top = "232px";
            simbolo6El.style.left = "85px";

            simbolo7El.style.backgroundImage = "url(./Assets/preciosBajos.png";
            simbolo7El.style.height = "50px";
            simbolo7El.style.width = "50px";
            simbolo7El.style.opacity = 1;
            simbolo7El.style.top = "245px";
            simbolo7El.style.left = "143px";

            simbolo8El.style.backgroundImage = "url(./Assets/preciosBajos.png";
            simbolo8El.style.height = "50px";
            simbolo8El.style.width = "50px";
            simbolo8El.style.opacity = 1;
            simbolo8El.style.top = "245px";
            simbolo8El.style.right = "1px";

            var simbolo2 = document.getElementById("simbolo2");
            simbolo2.style.backgroundImage = "url(./Assets/aceite.png)";
            simbolo2.style.height = "75px";
            simbolo2.style.width = "25px";
            simbolo2.style.top= "140px";
            simbolo2.style.left = "85px";

            document.getElementById("barraProgreso2").style.opacity = "1";
            document.getElementById("barraProgreso2").style.width = "70px";
          }, 500);
        }
      }
    }

    function checkSymbol3(coorX, coorY) {
      console.log("entre3");
      var simbolo8 = document
        .getElementById("simbolo8")
        .getBoundingClientRect();
      var simbolo16 = document
        .getElementById("simbolo16")
        .getBoundingClientRect();

      var limiteXIzq = simbolo8.x;
      var limiteXDer = simbolo16.x + simbolo16.width;
      var limiteYSup = simbolo8.y;
      var limiteYInf = simbolo16.y + simbolo16.height;

      if (
        coorX > limiteXIzq &&
        coorX < limiteXDer &&
        coorY > limiteYSup &&
        coorY < limiteYInf
      ) {
        var simbolo8El = document.getElementById("simbolo8");
        simbolo8El.style.opacity = "0.3";

        var simbolo12El = document.getElementById("simbolo12");
        simbolo12El.style.opacity = "0.3";

        var simbolo16El = document.getElementById("simbolo16");
        var matchLineVEl = document.getElementById("matchLineV1");
        matchLineVEl.style.display = "block";
        matchLineVEl.style.opacity = "1";
        simbolo16El.style.opacity = "0.3";
        if (checkSymbol3Flag == false) {
          setTimeout(function () {
            checkSymbol3Flag = true;
            document.getElementById("barraProgreso3").style.opacity = "1";
          }, 500);
        }
      }
    }

    function checkSymbol4(coorX, coorY) {
      checkSymbol4Flag = checkSymbol4Flag;
      var simbolo1 = document
        .getElementById("simbolo1")
        .getBoundingClientRect();
      var simbolo3 = document
        .getElementById("simbolo3")
        .getBoundingClientRect();
      var limiteXIzq = simbolo1.x;
      var limiteXDer = simbolo3.x + simbolo3.width;
      var limiteYSup = simbolo1.y;
      var limiteYInf = simbolo3.y + simbolo3.height;

      if (
        coorX > limiteXIzq &&
        coorX < limiteXDer &&
        coorY > limiteYSup &&
        coorY < limiteYInf
      ) {
        console.log(checkSymbol4Flag + " Entre al flag4");
        var simbolo1El = document.getElementById("simbolo1");
        simbolo1El.style.opacity = "0.3";

        document.getElementById("simbolo3").style.opacity = "0.3";

        var matchLineVEl4 = document.getElementById("matchLineV4");
        matchLineVEl4.style.opacity = "1";

        var simbolo2El = document.getElementById("simbolo2");
        simbolo2El.style.opacity = "0.3";

        var simbolo3El = document.getElementById("simbolo3");
        simbolo3El.style.opacity = "0.3";

        if (checkSymbol4Flag == false) {
          checkSymbol4Flag = true;
          matchLineVEl4.style.display = "block";

          setTimeout(function () {
            checkSymbol4Flag = true;

            console.log(checkSymbol4Flag);

            matchLineVEl4.style.opacity = 0;
            simbolo1El.style.opacity = 1;
            simbolo1El.style.backgroundImage = "url(./Assets/atun.png)";
            simbolo1El.style.height = "20px";
            simbolo1El.style.width = "48px";
            simbolo1El.style.top = "170px";
            simbolo1El.style.left = "5px";

            simbolo2El.style.backgroundImage = "url(./Assets/leche.png";
            simbolo2El.style.height = "53px";
            simbolo2El.style.width = "34px";
            simbolo2El.style.opacity = 1;
            simbolo2El.style.top = "160px";
            simbolo2El.style.right = "10px";

            simbolo3El.style.backgroundImage = "url(./Assets/leche.png)";
            simbolo3El.style.height = "53px";
            simbolo3El.style.width = "34px";
            simbolo3El.style.opacity = 1;
            simbolo3El.style.top = "160px";
            simbolo3El.style.right = "10px";

            var simbolo8El = document.getElementById("simbolo8");

            simbolo8El.style.backgroundImage = "url(./Assets/leche.png";
            simbolo8El.style.height = "53px";
            simbolo8El.style.width = "34px";
            simbolo8El.style.opacity = 1;
            simbolo8El.style.top = "245px";
            simbolo8El.style.right = "10px";

            barraProgreso = document.getElementById("barraProgreso1");
            barraProgreso.style.opacity = "1";
            barraProgreso.style.width = "150px";
          }, 500);
        }
      }
    }
    document.addEventListener("touchstart", (e) => callback("mobile", e), {
      passive: false,
    });
    document.addEventListener("mousedown", function () {
      document.addEventListener("mousemove", handlerDesk);
    });
    document.addEventListener("mouseup", function () {
      document.removeEventListener("mousemove", handlerDesk);
    });

    handlerDesk = (e) => callback("desktop", e);

    function callback(type, event) {
      event.preventDefault();
      var coordenadas =
        type === "desktop"
          ? {
              clientX: event.clientX,
              clientY: event.clientY,
            }
          : event.touches[0];
      var coorX = coordenadas.clientX;
      var coorY = coordenadas.clientY;

      //Primer flag
      if (checkSymbol1Flag == false) {
        checkSymbol1(coorX, coorY);
      }
      //Segundo flag
      if (checkSymbol1Flag == true && checkSymbol2Flag == false) {
        checkSymbol2(coorX, coorY);
      }
      //Tercer flag
      if (
        checkSymbol1Flag == true &&
        checkSymbol2Flag == true &&
        checkSymbol3Flag == false &&
        checkSymbol4Flag == true
      ) {
        checkSymbol3(coorX, coorY);
      }
      if (checkSymbol4Flag == false && checkSymbol2Flag == true) {
        checkSymbol4(coorX, coorY);
      }

      setTimeout(function () {
        if (
          checkSymbol1Flag &&
          checkSymbol2Flag &&
          checkSymbol3Flag &&
          checkSymbol4Flag
        ) {
          winGame();
        }
      }, 2000);
    }
  }

  function winGame() {
    clearInterval(interval);
    time.style.display = "none";
    document.getElementById("logoInicial").style.display = "none";

    juego.style.display = "none";
    document.getElementById("encuentra").style.display = "none";
    const bg = document.getElementById("background");
    bg.style.backgroundImage = "url(./Assets/fondofinal.png";

    var final = document.getElementById("contenedorFinal");
    final.style.display = "block";

    document.addEventListener("touchend", clickBG, false);
    document.addEventListener("click", clickBG, false);

    setTimeout(() => {
      final.style.display = "none";
      var final2 = document.getElementById("imagenFinal");
      final2.style.display = "block";
      

    }, 2000)
  }
  // function winGame() {
  //     clearInterval(interval)
  //     time.style.display = "none"
  //     document.getElementById("background").onclick = document.getElementById("background").ontouchstart = function () {
  //         Enabler.exit('HTML5_Background_Clickthrough', window.clickThrough);
  //     }
  //     document.getElementById('juego').style.display = "none"
  //     document.getElementById('contenedorFinal').style.display = "block"

  //     var video = document.getElementById('video');

  //     Enabler.loadModule(studio.module.ModuleId.VIDEO, function () {
  //         studio.video.Reporter.attach('video_1', video);
  //     });
  // }
}

function fullscreenHandler() {
  Enabler.requestFullscreenExpand();
}

function clickBG() {
  console.log("exit");
  
  Enabler.exit("HTML5_Background_Clickthrough", window.clickThrough);
  Enabler.requestFullscreenCollapse();
}
