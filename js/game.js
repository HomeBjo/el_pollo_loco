let canvas;
let world;
let keyboard = new Keyboard();
let intervallIds = [];
let muteBotton = false;
ARRAY = new Arrays();

function startGame() {
  changeScreen();
  initLevel();
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
}

function stopGame() {
  intervallIds.forEach(clearInterval);
  resetVariable();
}
function setStoppableInterval(fn, time) {
  let id = setInterval(fn, time);
  intervallIds.push(id);
}

function stopAllSounds() {
  world.sound.stopAllSounds();
}

function muteAllSoundsIngame() {
  world.sound.muteAllSounds();
}

function resetVariable() {
  world.hadFirstContact = false;
  world.intro_endboss_played = false;
}

function resultScreen(containerId, buttonId) {
  document.getElementById("mobileControler").classList.add("d-none");
  document.getElementById("canvas").classList.add("fade-out");
  document.getElementById(containerId).classList.remove("d-none");
  document.getElementById(containerId).classList.add("fade-in");
  setTimeout(() => {
    document.getElementById(buttonId).classList.add("fade-in");
  }, 600);
}

function gewonnenstart() {
  document.getElementById("winScreenContainer").classList.add("d-none");
  document.getElementById("canvas").classList.remove("d-none");
}

function changeScreen() {
  document.getElementById("startMenu").classList.add("d-none");
  document.getElementById("canvas").classList.remove("d-none");
  document.getElementById("muteBtN").classList.remove("d-none");
  document.getElementById("mobileControler").classList.remove("d-none");
}

function restart(id, id2) {
  document.getElementById(id).classList.add("d-none");
  document.getElementById("canvas").classList.remove("fade-out");
  document.getElementById(id2).classList.remove("fade-in");
  stopAllSounds();
  stopGame();
  startGame();
}

function toggleMuteButton(id) {
  var muteButton = document.getElementById(id);
  if (muteButton.innerHTML === "Sound Off") {
    muteButton.innerHTML = "Sound On";
  } else {
    muteButton.innerHTML = "Sound Off";
  }
}

window.addEventListener("keydown", (e) => {
  if (e.keyCode == 39) {
    keyboard.RIGHT = true;
  }
  if (e.keyCode == 37) {
    keyboard.LEFT = true;
  }
  if (e.keyCode == 38) {
    keyboard.UP = true;
  }
  if (e.keyCode == 40) {
    keyboard.DOWN = true;
  }
  if (e.keyCode == 32) {
    keyboard.SPACE = true;
  }
  if (e.keyCode == 68) {
    keyboard.D = true;
  }
});

window.addEventListener("keyup", (e) => {
  if (e.keyCode == 39) {
    keyboard.RIGHT = false;
  }
  if (e.keyCode == 37) {
    keyboard.LEFT = false;
  }
  if (e.keyCode == 38) {
    keyboard.UP = false;
  }
  if (e.keyCode == 40) {
    keyboard.DOWN = false;
  }
  if (e.keyCode == 32) {
    keyboard.SPACE = false;
  }
  if (e.keyCode == 68) {
    keyboard.D = false;
  }
});

document.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("BtN-R").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.RIGHT = false;
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("BtN-R").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.RIGHT = true;
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("BtN-L").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.LEFT = false;
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("BtN-L").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.LEFT = true;
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("BtN-S").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.SPACE = false;
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("BtN-S").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.SPACE = true;
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("BtN-D").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.D = false;
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("BtN-D").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.D = true;
  });
});
