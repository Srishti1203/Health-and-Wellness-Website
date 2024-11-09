// wellness-quiz.js
let currentQuestion = 0;
const questions = document.querySelectorAll('.question');
const result = document.createElement('div'); 
result.id = 'result'; 
document.querySelector('main').appendChild(result); 

function showQuestion(index) {
    questions.forEach((question, i) => {
        question.classList.remove('active'); 
        if (i === index) {
            question.classList.add('active'); 
        }
    });
}
function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion(currentQuestion); 
    }
}
function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion(currentQuestion);
    }
}
document.getElementById('quiz-form').addEventListener('submit', function (e) {
    e.preventDefault(); 
    let score = 0; 
    const answers = [
        '7-8 hours', 'Vitamin D', '60%', 'Liver', 'Proteins',
        'Absorb water and electrolytes', 'Calcium', 'Neutralize free radicals',
        'Cortisol', '150 minutes'
    ];
    questions.forEach((question, index) => {
        const selected = question.querySelector('input[type="radio"]:checked');
        if (selected && selected.value === answers[index]) {
            score++;
        }
    });
    result.textContent = `You got ${score} out of ${questions.length} correct!`;
});
showQuestion(currentQuestion);