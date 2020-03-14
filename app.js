var currentQuestion = 0;
var score = 0;
var totalQues = questions.length;
var timer = 120;
var timeInterval;

var container = document.getElementById('quizContainer');
var quesEle = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

function loadQuestion(questionIndex) {
    var q = questions[questionIndex];
    quesEle.textContent = (questionIndex + 1) + '. ' + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;

};

function loadNextQuestion() {
    var selectedOption = document.querySelector('input[type=radio]:checked')
    if (!selectedOption) {
        alert('Please choose an answer');
        return;
    }

    var answer = selectedOption.value;
    if (questions[currentQuestion].answer === answer) {
        score++;
    }
    selectedOption.checked = false;
    currentQuestion++;
    if (currentQuestion === totalQues - 1) {
        nextButton.textContent = 'Finish';
    }
    if (currentQuestion === totalQues) {
        container.style.display = 'none';
        resultCont.style.display = '';
        resultCont.textContent = 'Your Score: ' + score + ' out of 15';
        clearInterval(timeInterval);
        return;
    }

    loadQuestion(currentQuestion);
}

function startGame(){
    timer = 120;
    score=0;
    currentQuestion=0;

    timeInterval = setInterval(function () { 
        if (timer > 0){
            timer--;
            document.getElementById('timer').textContent = timer;
        }
    
        else {
            container.style.display = 'none';
            resultCont.style.display = '';
            resultCont.textContent = 'Your Score: ' + score + ' out of 15';
            clearInterval(timeInterval);
        }
        
    }, 1000);

    loadQuestion(currentQuestion);
}

startGame();


// work on displaying results 
// add reset button --> call startGame(); in there to reset