const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const resetButton = document.getElementById('reset-btn')
let container = document.getElementById('container')
const questionContainerElement = document.getElementById('question-container')
let shuffledQuestions, currentQuestionIndex
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-button')
let score = document.getElementById('count')
let gameovernofi = document.getElementById('gameover')
const tryAgain = document.getElementById('endbutton')
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})
let countCorrect = 0;

function startGame() {
    startButton.classList.add('hide')
    resetButton.classList.remove('hide')
    questionContainerElement.classList.remove('hide')
    shuffledQuestions = questions.sort(() => Math.random() - 0.5)
    currentQuestionIndex = 0
    setNextQuestion()
}

function resetGame(){
    location.reload()
}

function setNextQuestion() {
    resetState()
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
        answerButtonElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}

function selectQuestion(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    if (correct) {
        countCorrect++;
    }
    score.innerText = countCorrect;
    setStatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        // startButton.innerText = 'Restart'
        // startButton.classList.remove('hide')
        gameovernofi.classList.remove('hide')
        alert('Chung mung ban da dat duoc' + "  " + countCorrect + " diem")
        showGameover()

        // location.reload();
    }
    nextButton.classList.remove('hide')

}

function setStatusClass(element, correct) {
    clearStatusClass(element)

    if (correct) {

        element.classList.add('correct');
        // countCorrect++;
        console.log(countCorrect)
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

function showGameover() {
    gameovernofi.classList.remove('hide')
    container.classList.add('hide')
    tryAgain.addEventListener("click", function () {
        location.reload()
    });
}

const questions = [
    {
        question: 'What???s the smallest country in the world? ?',
        answers: [
            {text: 'B???', correct: false},
            {text: 'Singapore', correct: false},
            {text: 'Vantican', correct: true},
            {text: 'Luxembourg', correct: false}
        ]
    },
    {
        question: '??? Nga c?? bao nhi??u m??i gi??? ?',
        answers: [
            {text: 11, correct: true},
            {text: 12, correct: false},
            {text: 6, correct: false},
            {text: 9, correct: false}
        ]
    },
    {
        question: 'Qu???c th?? c???a ??c l?? ?',
        answers: [
            {text: 'Kiwi', correct: false},
            {text: 'G???u tr??c', correct: false},
            {text: 'Kangaroo', correct: true},
            {text: 'G???u t??i', correct: false}
        ]
    },
    {
        question: 'Show ???????c xem nhi???u ng?????i xem nh???t Netflix n??m 2019 l?? ?',
        answers: [
            {text: 'Sex education', correct: false},
            {text: 'Mine', correct: false},
            {text: 'Stanger things', correct: true},
            {text: 'The Crown', correct: false}
        ]
    },
    {
        question: '?????i b??ng n??o ???????c m???nh danh l?? "Qu??? ????? ?',
        answers: [
            {text: 'Manchester United', correct: true},
            {text: 'Manchester City', correct: false},
            {text: 'Liverpool', correct: false},
            {text: 'West ham ', correct: false}
        ]
    },
    {
        question: 'S??? ki???n g?? x???y ra v??o ng??y 20 th??ng 7 n??m 1969 ?',
        answers: [
            {text: 'K???t th??c th??? chi???n II', correct: false},
            {text: 'Li??n X?? s???p ?????', correct: false},
            {text: 'Apollo 11 h??? c??nh tr??n m???t tr??ng', correct: true},
            {text: '?????i suy tho??i', correct: false}
        ]
    },
    {
        question: '"Lo???t s??ch b??n ch???y nh???t th??? k??? 21" l?? ?',
        answers: [
            {text: 'Game of throne', correct: false},
            {text: 'Lord of the rings', correct: false},
            {text: 'The hunger game', correct: false},
            {text: 'Harry Potter', correct: true}
        ]
    },
    {
        question: 'M???t bao nhi??u ng??y ????? tr??i ?????t quay h???t 1 v??ng quanh m???t tr???i?',
        answers: [
            {text: '90', correct: false},
            {text: '30,31', correct: false},
            {text: '365', correct: true},
            {text: '134', correct: false}
        ]
    },
    {
        question: 'World Wide Web ???????c ph??t minh v??o n??m n??o ?',
        answers: [
            {text: '1990', correct: true},
            {text: '2000', correct: false},
            {text: '1995', correct: false},
            {text: '1996', correct: false}
        ]
    },
    {
        question: 'Qu???c hoa c???a Nh???t B???n l?? ?',
        answers: [
            {text: 'Sen', correct: false},
            {text: 'C??c', correct: false},
            {text: 'Anh ????o', correct: true},
            {text: '?????i', correct: false}
        ]
    }
]

