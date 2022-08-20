window.onload = () => onloadFunc(startAd);

function onloadFunc(startFunction) {
  if (Enabler.isInitialized()) {
    enablerInitHandler();
  } else {
    Enabler.addEventListener(
      studio.events.StudioEvent.INIT,
      enablerInitHandler
    );
  }

  function enablerInitHandler() {
    if (Enabler.isVisible()) {
      startFunction();
    } else {
      Enabler.addEventListener(
        studio.events.StudioEvent.VISIBLE,
        startFunction
      );
    }
  }
}

const timer = (() => {
  let TIME = 15;
  let interval = null;
  let timeElement = document.createElement("p");
  timeElement.className = "timer";
  timeElement.style.position = "absolute";
  timeElement.style.top = "10px";
  timeElement.style.left = "0";
  timeElement.style.right = "0";
  timeElement.style.margin = "0 auto";
  timeElement.style.textAlign = "center";
  timeElement.style.color = "white";
  timeElement.style.fontFamily = "Arial";
  timeElement.style.fontSize = "20px";

  function starTimer(winFunction) {
    document.body.appendChild(timeElement);
    interval = setInterval(function () {
      const textTimer = `00:${TIME > 9 ? TIME : `0${TIME}`}`;
      timeElement.innerHTML = textTimer;
      if (TIME < 0) {
        winFunction();
        stopTimer();
      }
      --TIME;
    }, 1000);
  }

  function stopTimer() {
    clearInterval(interval);
    timeElement.style.display = "none";
  }

  return {
    starTimer,
    stopTimer,
  };
})();

function configAd() {
  Enabler.setFloatingPixelDimensions(1, 1);
  Enabler.queryFullscreenSupport();
  Enabler.addEventListener(
    studio.events.StudioEvent.FULLSCREEN_SUPPORT,
    fullscreenHandler
  );
}

function fullscreenHandler() {
  Enabler.requestFullscreenExpand();
}

function hideLoader() {
  var loader = document.getElementById("loader-container");
  loader.style.display = "none";
}

function displayPlayZone() {
  var juego = document.getElementById("playZone");
  juego.style.display = "flex";
}

function startAd() {
  configAd();
  displayPlayZone();
  startGame();
  timer.starTimer(winGame);
}

function showGame() {
  hideLoader();
  container.style.display = "flex";
}

function startGame() {
  const arrTiles = [];
  showGame();

  // Mobile
  document.addEventListener("touchstart", touchstartHandler);
  function touchstartHandler(e) {
    var coordenadas = e.changedTouches[0];
    var coorX = coordenadas.clientX;
    var coorY = coordenadas.clientY;
    drawer.startDrawLine(coorX, coorY);
  }
  document.addEventListener("touchmove", handleMobile, {
    passive: false,
  });
  document.addEventListener("touchend", touchendHandler);
  function touchendHandler(e) {
    arrTiles.length = 0;
    var coordenadas = e.changedTouches[0];
    var coorX = coordenadas.clientX;
    var coorY = coordenadas.clientY;
    drawer.endDrawLine(coorX, coorY);
  }

  document.addEventListener("mousedown", mousedownHandler);

  function mousedownHandler(e) {
    const coorX = e.clientX;
    const coorY = e.clientY;
    drawer.startDrawLine(coorX, coorY);
    document.addEventListener("mousemove", handlerDesk);
  }

  document.addEventListener("mouseup", mouseupHandler);
  function mouseupHandler(e) {
    arrTiles.length = 0;
    const coorX = e.clientX;
    const coorY = e.clientY;
    drawer.endDrawLine(coorX, coorY);
    document.removeEventListener("mousemove", handlerDesk);
  }

  function handlerDesk(e) {
    e.preventDefault();

    const coorX = e.clientX;
    const coorY = e.clientY;
    execGame(coorX, coorY);
  }

  function handleMobile(e) {
    e.preventDefault();
    var coordenadas = e.touches[0];
    var coorX = coordenadas.clientX;
    var coorY = coordenadas.clientY;
    execGame(coorX, coorY);
  }

  let tiles1 = ["simbolo12", "simbolo16", "simbolo8"];
  let tiles2 = ["simbolo14", "simbolo15", "simbolo16"];
  let tiles3 = ["simbolo10", "simbolo2", "simbolo6"];
  let tiles4 = ["simbolo2", "simbolo3", "simbolo4"];

  function execGame(coorX, coorY) {
    drawer.updateDrawLine(coorX, coorY);
    if (tiles1) {
      checkTiles(coorX, coorY, tiles1, (arr) => {
        nextTiles(arr, tiles1, ["papas", "papas", "hamburguesa"]);
        tiles1 = null;
        updateProgress(1);
      });
    } else if (tiles2) {
      checkTiles(coorX, coorY, tiles2, (arr) => {
        nextTiles(arr, tiles2, ["hamburguesa", "soda", "papas"]);
        changeSpecificTile(10, "aros");
        tiles2 = null;
        updateProgress(2);
      });
    } else if (tiles3) {
      checkTiles(coorX, coorY, tiles3, (arr) => {
        nextTiles(arr, tiles3, ["aros", "helado", "soda"]);
        changeSpecificTile(3, "helado");
        changeSpecificTile(4, "helado");
        tiles3 = null;
        updateProgress(3);
      });
    } else if (tiles4) {
      checkTiles(coorX, coorY, tiles4, (arr) => {
        nextTiles(arr, tiles4, ["aros", "helado", "soda"]);
        tiles4 = null;
        updateProgress(4);
      });
    } else {
      document.removeEventListener("touchstart", touchstartHandler);
      document.removeEventListener("mousedown", mousedownHandler);

      winGame();
    }
  }

  function changeSpecificTile(number, className) {
    const tile = document.getElementById("simbolo" + number);
    const classList = tile.className.split(" ");
    tile.className = classList[0] + " " + className;
  }
  function nextTiles(arr, tile, simbolList) {
    tile = null;
    arr.forEach((item, i) => {
      const classes = item.className.split(" ");
      item.className = [classes[0], simbolList[i]].join(" ");
    });
  }

  function checkTiles(coorX, coorY, tiles, changeFunction) {
    const currentTile = getCurrentTile(coorX, coorY);
    if (currentTile) {
      //console.log(currentTile.id);
      arrTiles.push(currentTile);
      const newArrTiles = arrTiles.filter(function (value, index, array) {
        return array.indexOf(value) === index;
      });
      if (newArrTiles.length === 3) {
        const arr = [];
        const myArray = tiles.sort();
        newArrTiles
          .sort((tile) => tile.id)
          .forEach(function (el) {
            myArray.forEach(function (el2) {
              if (el.id === el2) arr.push(el);
            });
          });
        if (arr.length === 3) {
          changeFunction(
            arr.sort((a, b) =>
              a.id.toLowerCase() < b.id.toLowerCase() ? -1 : 1
            )
          );
        }
      }
    }
  }

  function getCurrentTile(mouseX, mouseY) {
    const tiles = document.getElementsByClassName("simbolo");
    for (i = 0; i < tiles.length; i++) {
      const tileElement = tiles[i];
      //const tileType = tileElement.className.split("simbolo ")[1];
      const elementClientRect = tileElement.getBoundingClientRect();
      const minX = elementClientRect.left;
      const maxX = elementClientRect.right;
      const minY = elementClientRect.top;
      const maxY = elementClientRect.bottom;
      if (mouseX > minX && mouseX < maxX && mouseY > minY && mouseY < maxY) {
        return tileElement;
      }
    }
  }

  function updateProgress(number) {
    const progressBar = document.querySelector(".barraProgreso");
    progressBar.id = "barraProgreso" + number;
  }
}

const drawer = (() => {
  const line = document.getElementById("matchLine");
  let startX = 0;
  let startY = 0;

  function startDrawLine(x, y) {
    line.style.display = "block";
    startX = x;
    startY = y;
    line.style.left = x + "px";
    line.style.top = y + "px";
  }

  function updateDrawLine(x, y) {
    const direction =
      Math.abs(y - startY) > Math.abs(x - startX) ? "top-bottom" : "left-right";
    if (direction === "left-right") {
      line.style.transformOrigin = "center center";

      if (x < startX) {
        //console.log("izq");
        line.style.transform = "rotate(0deg)";
        line.style.width = startX - x + "px";
        line.style.left = x + "px";
      } else {
        //console.log("derecha");
        line.style.transform = "rotate(180deg)";
        line.style.width = x - startX + "px";
      }
    } else {
      line.style.transformOrigin = "left top";
      if (y > startY) {
        //console.log("abajo");
        line.style.transform = "rotate(-90deg)";
        line.style.width = Math.abs(startY - y) + "px";
        line.style.left = startX + "px";
        line.style.top = y + "px";
      } else {
        //console.log("arriba");
        line.style.transform = "rotate(90deg)";
        line.style.width = startY - y + "px";
        line.style.top = y + "px";
      }
    }
  }

  function endDrawLine() {
    line.style.transform = "rotate(0deg)";

    line.style.width = 0;
    line.style.left = 0;
    line.style.display = "none";
  }

  return {
    startDrawLine,
    endDrawLine,
    updateDrawLine,
  };
})();

function winGame() {
  timer.stopTimer();
  document.querySelector("#encuentra").style.display = "none";
  document.querySelector("#playZone").style.display = "none";
  document.querySelector("#logoInicial").style.height = "236px";
  document.querySelector("#logoInicial").style.width = "200px";
  document.querySelector("#progresoContainer").style.display = "none";

  document.querySelector("#ctaFinal").style.display = "block";

  document.onclick = clickBG;
}

function clickBG() {
  console.log("exit");

  Enabler.exit("HTML5_Background_Clickthrough", window.clickThrough);
  Enabler.requestFullscreenCollapse();
}
