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
    if(correct){
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
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
        gameovernofi.classList.remove('hide')
        alert('Chung mung ban da dat duoc'+ "  "+countCorrect+" diem")
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
        console.log ( countCorrect)
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
function showGameover (){
    gameovernofi.classList.remove('hide')
    container.classList.add('hide')
   tryAgain.addEventListener("click", function() {
location.reload()});
}

const questions = [
    {
        question: 'What’s the smallest country in the world? ?',
        answers: [
            {text: 'Bỉ', correct: false},
            {text: 'Singapore', correct: false},
            {text: 'Vantican', correct: true},
            {text: 'Luxembourg', correct: false}
        ]
    },
    {
        question: 'Ở Nga có bao nhiêu múi giờ ?',
        answers: [
            {text: 11, correct: true},
            {text: 12, correct: false},
            {text: 6, correct: false},
            {text: 9, correct: false}
        ]
    },
    {
        question: 'Quốc thú của Úc là ?',
        answers: [
            {text: 'Kiwi', correct: false},
            {text: 'Gấu trúc', correct: false},
            {text: 'Kangaroo', correct: true},
            {text: 'Gấu túi', correct: false}
        ]
    },
    {
        question: 'Show được xem nhiều người xem nhất Netflix năm 2019 là ?',
        answers: [
            {text: 'Sex education', correct: false},
            {text: 'Mine', correct: false},
            {text: 'Stanger things', correct: true},
            {text: 'The Crown', correct: false}
        ]
    },
    {
        question: 'Đội bóng nào được mệnh danh là "Quỷ đỏ ?',
        answers: [
            {text: 'Manchester United', correct: true},
            {text: 'Manchester City', correct: false},
            {text: 'Liverpool', correct: false},
            {text: 'West ham ', correct: false}
        ]
    },
    {
        question: 'Sự kiện gì xảy ra vào ngày 20 tháng 7 năm 1969 ?',
        answers: [
            {text: 'Kết thúc thế chiến II', correct: false},
            {text: 'Liên Xô sụp đổ', correct: false},
            {text: 'Apollo 11 hạ cánh trên mặt trăng', correct: true},
            {text:'Đại suy thoái', correct: false}
        ]
    },
    {
        question: '"Loạt sách bán chạy nhất thế kỷ 21" là ?',
        answers: [
            {text: 'Game of throne', correct: false},
            {text: 'Lord of the rings', correct: false},
            {text: 'The hunger game', correct: false},
            {text: 'Harry Potter', correct: true}
        ]
    },
    {
        question: 'Mất bao nhiêu ngày để trái đất quay hết 1 vòng quanh mặt trời?',
        answers: [
            {text: '90', correct: false},
            {text: '30,31', correct: false},
            {text: '365', correct: true},
            {text: '134', correct: false}
        ]
    },
    {
        question: 'World Wide Web được phát minh vào năm nào ?',
        answers: [
            {text: '1990', correct: true},
            {text: '2000', correct: false},
            {text: '1995', correct: false},
            {text: '1996', correct: false}
        ]
    },
    {
        question: 'Quốc hoa của Nhật Bản là ?',
        answers: [
            {text: 'Sen', correct: false},
            {text: 'Cúc', correct: false},
            {text: 'Anh đào', correct: true},
            {text: 'Đại', correct: false}
        ]
    }
]

