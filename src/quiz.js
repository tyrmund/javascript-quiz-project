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

    checkAnswer(answerToCheck) {
        const currentQuestion = this.getQuestion()
        const currentAnswer = currentQuestion.answer

        if (answerToCheck === currentAnswer) {
            this.correctAnswers++
        }
    }

    hasEnded() {
        if (this.currentQuestionIndex < this.questions.length) return false
        else return true
    }

    filterQuestionsByDifficulty(difficulty) {

        if (isNaN(difficulty) || !(difficulty >= 1 && difficulty <= 3) || !(typeof difficulty === 'number')) {
            return
        }

        const filteredQuestions = this.questions.filter(eachQuestion => {
            return eachQuestion.difficulty === difficulty
        })

        this.questions = filteredQuestions

    }

    averageDifficulty() {

        const totalDifficulty = this.questions.reduce((acc, question) => {
            return acc + question.difficulty
        }, 0)

        return totalDifficulty / this.questions.length
    }
}