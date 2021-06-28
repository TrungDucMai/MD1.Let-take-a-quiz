const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
let shuffledQuestions, currentQuestionIndex
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-button')
startButton.addEventListener('click', startGame)


function startGame() {
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    shuffledQuestions = questions.sort(() => Math.random() - 0.5)
    currentQuestionIndex = 0
    setNextQuestion()

}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectQuestion)
    })
}

function selectQuestion() {


}

const questions = [
    {
        question: 'WHat is 2+2 ?',
        answers: [
            {text: 2, correct: true},
            {text: 3, correct: false}
        ]
    },
    {
        question: 'WHat is 2+6 ?',
        answers: [
            {text: 8, correct: true},
            {text: 3, correct: false}
        ]
    },
    {
        question: 'WHat is 2+25 ?',
        answers: [
            {text: 26, correct: true},
            {text: 3, correct: false}
        ]
    }
]



