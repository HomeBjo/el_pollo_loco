let canvas;
let world; 
let keyboard = new Keyboard();
let intervallIds=[];


function startGame(){
    changeScreen();
    initLevel();
    canvas= document.getElementById('canvas');
    world = new World(canvas, keyboard);                                                  // auslagern erste stufe video 9 charakter anzeigen
 
} 

function stopGame() {
    intervallIds.forEach(clearInterval);
    resetVariable()
    
    
}
function setStoppableInterval(fn,time){
    let id = setInterval(fn,time);
    intervallIds.push(id);

}

function stopAllSounds() {
    world.sound.stopAllSounds();
}

function resetVariable() {
    world.hadFirstContact=false;
    world.intro_endboss_played=false;
}



// function clearAllIntervals() {
//     for (let i = 1; i < 9999; i++) window.clearInterval(i);
//   }  // dirty version 

function changeScreen(){
document.getElementById('startMenu').classList.add('d-none');
document.getElementById('canvas').classList.remove('d-none');
}

window.addEventListener("keydown", (e) => {
   
   
    if (e.keyCode == 39) {
        keyboard.RIGHT=true;
    }
    if (e.keyCode == 37) {
        keyboard.LEFT=true;
    }
    if (e.keyCode == 38) {
        keyboard.UP=true;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN=true;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE=true;
    }
    if (e.keyCode == 68) {
        keyboard.D=true;
       
    }
});

window.addEventListener("keyup", (e) => {
    
   
    if (e.keyCode == 39) {
        keyboard.RIGHT=false;
    }
    if (e.keyCode == 37) {
        keyboard.LEFT=false;
    }
    if (e.keyCode == 38) {
        keyboard.UP=false;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN=false;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE=false;
    }
    if (e.keyCode == 68) {
        keyboard.D=false;
  
    }
    
});
