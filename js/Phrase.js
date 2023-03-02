/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
        const phraseContainer = document.querySelector("#phrase");
        for(let i = 0; i < this.phrase.length; i++) {
            let currElement = this.phrase[i];
            if(currElement == " ") {
                phraseContainer.innerHTML += '<li class="space"> </li>';
            } else {
                phraseContainer.innerHTML += `<li class="hide letter ${currElement}">${currElement}</li>`;
            }
        }
    }

    checkletter(letter) {
        for(let i = 0; i < this.phrase.length; i++) {
            if(letter == this.phrase[i]) {
                return true;
            }
        }

        return false;
    }

    showMatchedLetter(letter) {
        let selectedElements = document.querySelectorAll(`.${letter}`);
        for(let i = 0; i < selectedElements.length; i++) {
            selectedElements[i].classList.remove("hide");
            selectedElements[i].classList.add("show");
        }
    }
}