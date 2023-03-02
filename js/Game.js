/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = ["Slow down", "Carpe diem", "Dream big", "free bird", "twerk king"];
        this.activePhrase = null;
    }

    startGame() {
        this.missed = 0;
        let oldPhrase = document.querySelector("#phrase");
        oldPhrase.innerHTML = "<ul></ul>";
        let oldButtons = document.querySelectorAll(".chosen, .wrong");
        oldButtons.forEach((button) => {
            button.classList.remove("chosen");
            button.classList.remove("wrong");
            button.classList.add("key");
            button.disabled = false;
        })
        let lives = document.querySelectorAll('[src="images/lostHeart.png"]');
        lives.forEach((life) => {
            life.src = "images/liveHeart.png";
        })
        const overlay = document.querySelector("#overlay");
        overlay.style.display = "none";
        let phraseToAdd = this.getRandomPhrase();
        console.log(phraseToAdd, "HERE");
        this.activePhrase = new Phrase(phraseToAdd);
        this.activePhrase.addPhraseToDisplay();
    }

    getRandomPhrase() {
        // console.log(this.phrases[Math.random()], "PHRASES");
        return this.phrases[Math.floor(Math.random() * 5)];
    }

    handleInteraction(item) {
        // item.style.display = "none";
        item.disabled = true;
        console.log(this.activePhrase.phrase);
        let letter = item.innerHTML;
        let status = false;
        for(let i = 0; i < this.activePhrase.phrase.length; i++) {
            if(this.activePhrase.phrase[i] == letter) {
                status = true;
            }
        }

        if(status == false) {
            item.classList.add("wrong");
            this.removeLife();
        } else {
            item.classList.add("chosen");
            this.activePhrase.showMatchedLetter(letter);
            if(this.checkForWin()) {
                this.gameOver();
            }
        }
    }

    removeLife() {
        let lives = document.querySelectorAll('[src="images/liveHeart.png"]');
        lives[lives.length - 1].src = "images/lostHeart.png";
        this.missed++;
        if(this.missed == 5) {
            this.gameOver();
        }
    }

    checkForWin() {
        let status = true;
        for(let i = 0; i < this.activePhrase.phrase.length; i++) {
            // console.log(this.activePhrase.phrase[i]);
            if(this.activePhrase.phrase[i] != " ") {
                let curr = document.querySelector(`.${this.activePhrase.phrase[i]}`);
                if(!curr.classList.contains("show")) {
                    status = false;
                }
            }
        }

        return status;
    }

    gameOver() {
        const overlay = document.querySelector("#overlay");
        overlay.style.display = "block";
        let h1Element = document.querySelector("#game-over-message");
        console.log(overlay.classList);
        overlay.classList.remove("start");
        overlay.classList.remove("win");
        overlay.classList.remove("lose");
        if(this.checkForWin()) {
            h1Element.innerHTML = "YOU WON!";
            overlay.classList.add("win");
        } else {
            h1Element.innerHTML = "YOU LOST!";
            overlay.classList.add("lose");
        }
    }
}