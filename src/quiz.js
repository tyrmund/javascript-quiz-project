class Quiz {
    constructor(questionsValue, timeLimitValue, timeRemainingValue) {
        this.questions = questionsValue
        this.timeLimit = timeLimitValue
        this.timeRemaining = timeRemainingValue
        this.correctAnswers = 0
        this.currentQuestionIndex = 0
    }
    getQuestion() {
        return this.questions[this.currentQuestionIndex]
    }

    moveToNextQuestion() {
        this.currentQuestionIndex++
    }

    shuffleQuestions() {

        let currentIndex = this.questions.length

        while (currentIndex != 0) {

            let randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex--

            [this.questions[currentIndex], this.questions[randomIndex]] =
                [this.questions[randomIndex], this.questions[currentIndex]]
        }

    }

    checkAnswer(answer) {
        if (answer === this.questions[this.currentQuestionIndex].answer) {
            this.correctAnswers++
        }
    }

    hasEnded() {
        if (this.currentQuestionIndex < this.questions.length)
            return false
        else return true
    }

    filterQuestionsByDifficulty(difficulty) {
        if (difficulty >= 1 && difficulty <= 3) {
            this.questions = this.questions.filter((question) => {
                question.difficulty === difficulty
            })
        }

    }

    averageDifficulty() {
        let totalDifficulty = 0
        this.questions.forEach(element => {
            totalDifficulty += element.difficulty
        })
        return totalDifficulty / this.questions.length
    }
}