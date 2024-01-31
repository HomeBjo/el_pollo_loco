let canvas;
let world;
let keyboard = new Keyboard();
let intervallIds = [];
let muteBotton = false;
ARRAY = new Arrays();

/**
 * Starts the game by initializing the level and creating the world.
 */
function startGame() {
  changeScreen();
  initLevel();
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
}

/**
 * Stops the game by clearing all intervals and resetting variables.
 */
function stopGame() {
  intervallIds.forEach(clearInterval);
  resetVariable();
}

/**
 * Sets an interval that can be stopped using the returned interval ID.
 * @param {Function} fn - The function to be executed in the interval.
 * @param {number} time - The interval duration in milliseconds.
 */
function setStoppableInterval(fn, time) {
  let id = setInterval(fn, time);
  intervallIds.push(id);
}

/**
 * Stops all sounds in the game.
 */
function stopAllSounds() {
  world.sound.stopAllSounds();
}

/**
 * Mutes all sounds in the game.
 */
function muteAllSoundsIngame() {
  world.sound.muteAllSounds();
}

/**
 * Resets the game-related variables.
 */
function resetVariable() {
  world.hadFirstContact = false;
  world.intro_endboss_played = false;
}

/**
 * Displays the result screen with the given container and button IDs.
 * @param {string} containerId - The ID of the result screen container.
 * @param {string} buttonId - The ID of the result screen button.
 */
function resultScreen(containerId, buttonId) {
  document.getElementById("mobileControler").classList.add("d-none");
  document.getElementById("canvas").classList.add("fade-out");
  document.getElementById(containerId).classList.remove("d-none");
  document.getElementById(containerId).classList.add("fade-in");
  setTimeout(() => {
    document.getElementById(buttonId).classList.add("fade-in");
  }, 600);
}

/**
 * Removes the win screen and displays the game screen.
 */
function gewonnenstart() {
  document.getElementById("winScreenContainer").classList.add("d-none");
  document.getElementById("canvas").classList.remove("d-none");
}

/**
 * Displays the game screen and hides the start menu.
 */
function changeScreen() {
  document.getElementById("startMenu").classList.add("d-none");
  document.getElementById("canvas").classList.remove("d-none");
  document.getElementById("muteBtN").classList.remove("d-none");
  document.getElementById("mobileControler").classList.remove("d-none");
}

/**
 * Restarts the game by hiding the result screen and starting a new game.
 * @param {string} id - The ID of the result screen container to be hidden.
 * @param {string} id2 - The ID of the result screen button to be hidden.
 */
function restart(id, id2) {
  document.getElementById(id).classList.add("d-none");
  document.getElementById("canvas").classList.remove("fade-out");
  document.getElementById(id2).classList.remove("fade-in");
  stopAllSounds();
  stopGame();
  startGame();
}

/**
 * Toggles the mute button by changing its inner HTML.
 * @param {string} id - The ID of the mute button.
 */
function toggleMuteButton(id) {
  var muteButton = document.getElementById(id);
  if (muteButton.innerHTML === "Sound Off") {
    muteButton.innerHTML = "Sound On";
  } else {
    muteButton.innerHTML = "Sound Off";
  }
}

/**
 * Handles keydown events to set keyboard properties based on key codes.
 * @param {KeyboardEvent} e - The keydown event object.
 */
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

/**
 * Handles keyup events to reset keyboard properties based on key codes.
 * @param {KeyboardEvent} e - The keyup event object.
 */
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

/**
 * Initializes touch event listeners for the touch controls.
 */
document.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("BtN-R").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.RIGHT = false;
  });

  document.getElementById("BtN-R").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.RIGHT = true;
  });

  document.getElementById("BtN-L").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.LEFT = false;
  });

  document.getElementById("BtN-L").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.LEFT = true;
  });

  document.getElementById("BtN-S").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.SPACE = false;
  });

  document.getElementById("BtN-S").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.SPACE = true;
  });

  document.getElementById("BtN-D").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.D = false;
  });

  document.getElementById("BtN-D").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.D = true;
  });
});