const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: "Paris"
    },
    {
        question: "Which language is used for web development?",
        options: ["Python", "C++", "JavaScript", "Java"],
        answer: "JavaScript"
    },
    {
        question: "What does CSS stand for?",
        options: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
        answer: "Cascading Style Sheets"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");

function loadQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    optionsEl.innerHTML = "";
    
    currentQuestion.options.forEach(option => {
        let button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsEl.appendChild(button);
    });
}

function checkAnswer(selected) {
    let correct = questions[currentQuestionIndex].answer;
    if (selected === correct) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz").classList.add("hidden");
    resultEl.classList.remove("hidden");
    scoreEl.textContent = `${score} / ${questions.length}`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultEl.classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");
    loadQuestion();
}

loadQuestion();
