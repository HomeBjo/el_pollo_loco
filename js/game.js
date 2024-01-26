let canvas;
let world;
let keyboard = new Keyboard();
let intervallIds = [];
let muteBotton = false;
// let sound = new Sounds();   //  damit es vorher geladen wird z.b. aber dann world = new World(canvas, keyboard, sound); soo und in der world setzen 

function startGame() {
  changeScreen();
  initLevel();
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard); // auslagern erste stufe video 9 charakter anzeigen
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
  // world.character.setVolume(0.0);
  // world.level.enemies[3].setVolume(0.0);     // einmal testen ob das noch so muss!!
}

function resetVariable() {
  world.hadFirstContact = false;
  world.intro_endboss_played = false;
}

// function clearAllIntervals() {
//     for (let i = 1; i < 9999; i++) window.clearInterval(i);
//   }                                                                         // dirty version

// function test(){
//   console.log('lol',this.sound)
// }

function changeScreen() {
  document.getElementById("startMenu").classList.add("d-none");
  document.getElementById("canvas").classList.remove("d-none");
  document.getElementById("muteBtN").classList.remove("d-none");
  document.getElementById("mobileControler").classList.remove("d-none");
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
  
