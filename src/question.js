// YOUR CODE HERE:
class Question {
    constructor(textValue, choicesValue, answerValue, difficultyValue) {
        this.text = textValue
        this.choices = choicesValue
        this.answer = answerValue
        this.difficulty = difficultyValue
    }
    shuffleChoices() {
        let currentIndex = this.choices.length

        while (currentIndex != 0) {

            let randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex--

            [this.choices[currentIndex], this.choices[randomIndex]] =
                [this.choices[randomIndex], this.choices[currentIndex]]
        }
    }
}