/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game = new Game();

document.querySelector("#btn__reset").addEventListener("click", (event) => {
    game.startGame();
})

document.addEventListener("keydown", (pushed) => {
    let button = document.querySelector(`#${pushed.key}`);
    console.log(button);
    game.handleInteraction(button);
}, false)

document.querySelector("#qwerty").addEventListener("click", (event) => {
    if(event.target.tagName == "BUTTON") {
        // let curr = event.target.innerHTML;
        game.handleInteraction(event.target);
    }
})