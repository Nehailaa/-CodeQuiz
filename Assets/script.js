const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["a. <js>", "b. <javascript>", "c. <scripting>", "d. <script>"],
        answer: "d. <script>"
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        choices: ["a. Both the <head> section and the <body> section are correct ", "b. The <head> section", "c. The <body> section" ,"d. The <footer> section"],
        answer: "a. Both the <head> section and the <body> section are correct "
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        choices: ["a. <script src='xxx.js'>", "b. <script href='xxx.js'>", "c. <script name='xxx.js'", "d. <script rel='xxx.js"],
        answer: "c. <script name='xxx.js'"
    },
    {
        question: "The external JavaScript file must contain the ----- tag.",
        choices: ["a. <link>", "b. <script>", "c. <href>", "d. <div>"],
        answer: "b. <script>"
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        choices: ["a. msg('Hello World');", "b.msgBox('Hello World');", "c. alertBox('Hello World');", "d. alert('Hello World');"],
        answer: "d.alert('Hello World');"
    },
    {
        question: "How do you create a function in JavaScript?",
        choices: ["a.function:myFunction()", "b. function = myFunction()", "c. function myFunction()", "d. function(myFunction)()"],
        answer: "c. function myFunction()"
    },
    {
        question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        choices: ["a. if (i <> 5)", "b. if i =! 5 then", "c. if i <> 5", "d. if (i != 5)"],
        answer: "d. if (i != 5)"
    },
    {
        question: "How does a WHILE loop start?",
        choices: ["a. while i = 1 to 10", "b. while (i <= 10; i++)", "c. while (i <= 10)", "d. while i ===10"],
        answer: "c. while (i <= 10)"
    },
    {
        question: "How do you round the number 9.25, to the nearest integer?",
        choices: ["a. rnd(9.25)", "b. Math.round(9.25)", "c. Math.rnd(9.25)", "d. round(9.25)"],
        answer: "b. Math.round(9.25)"
    },
    {
        question: "What is the correct JavaScript syntax for opening a new window called 'w2' ?",
        choices: ["a. w2 = window.new('http://www.CodingQuiz.com');", "b. w2 = window.open('http://www.CodingQuiz.com');",
        "c. w2 = window.start('http://www.CodingQuiz.com');", "d. w2 = open.window('http://www.CodingQuiz.com');"],
        answer: "b. w2 = window.open('http://www.CodingQuiz.com');"
    },
    {
        question: "What will the following code return: Boolean(10 > 9)",
        choices: ["a. fasle", "b. NaN", "c. true", "d. Undefined"],
        answer: "c. true"
    },
]


// select references to elements by Id & assign variables
var temps = document.getElementById("temps");
var timeRemaining = document.getElementById("timeRemaining");
var timeIsUp = document.getElementById("timeIsUp");

var beginDiv = document.getElementById("begin");
var beginQuiz = document.getElementById("begin-quiz");

var questionPourToiDiv = document.getElementById("questionPourToi");
var questionTitre = document.getElementById("questionTitre");
var choiceA = document.getElementById("btnNumero0");
var choiceB = document.getElementById("btnNumero1");
var choiceC = document.getElementById("btnNumero2");
var choiceD = document.getElementById("btnNumero3");
var rightAnswerCheck = document.getElementById("rightAnswerCheck");

var conclusion = document.getElementById("conclusion");
var initialBtn = document.getElementById("initialBtn");
var initialInfo = document.getElementById("initialInfo");
var introduction = document.getElementById("introduction");

var highScoresGroup = document.getElementById("highScoresGroup");
var finalScoreresults = document.getElementById("finalScoreresults");

var previousBtn = document.getElementById("previousBtn");
var clearHighScoresBtn = document.getElementById("clearHighScoresBtn");
var highscores = document.getElementById("highscores");
var highScoresGroup = document.getElementById("highScoresGroup");

// set other variables
var rightAns = 0;
var questionsNum = 0;
var scoreResults;
var questionsIndex = 0;



//Insert Functions

// WHEN I click the start button, timer starts
var timeTotal = 151;
function quizTime() {
    questionsIndex = 0;
    timeTotal = 170;
    timeRemaining.textContent = timeTotal;
    initialInfo.textContent = "";

    beginDiv.style.display = "none";
    questionPourToiDiv.style.display = "block";
    temps.style.display = "block";
    timeIsUp.style.display = "none";

    var beginTimer = setInterval(function () {
        timeTotal--;
        timeRemaining.textContent = timeTotal;
        if (timeTotal <= 0) {
            clearInterval(beginTimer);
            if (questionsIndex < questions.length - 1) {
                gameOver();
            }
        }
    }, 1000);

    showQuiz();
};

// Presented with questions & choices
function showQuiz() {
    nextQuestion();
}

function nextQuestion() {
    questionTitre.textContent = questions[questionsIndex].question;
    choiceA.textContent = questions[questionsIndex].choices[0];
    choiceB.textContent = questions[questionsIndex].choices[1];
    choiceC.textContent = questions[questionsIndex].choices[2];
    choiceD.textContent = questions[questionsIndex].choices[3];
}

// when question is answered, show if correct || wrong
function checkAnswer(answer) {

    var line = document.getElementById("line");
    line.style.display = "block";
    rightAnswerCheck.style.display = "block";

    if (questions[questionsIndex].answer === questions[questionsIndex].choices[answer]) {
        // correct answer, add 1 score to final score
        rightAns++;
        rightAnswerCheck.textContent = "Correct!";
    } else {
        // wrong answer, deduct 10 seconds from timer
        timeTotal -= 10;
        timeRemaining.textContent = timeTotal;
        rightAnswerCheck.textContent = "Incorrect! The correct answer is: " + questions[questionsIndex].answer;
    }

    questionsIndex++; // add timeout  *highscore go down*
    // repeat using If & Else Statements
    if (questionsIndex < questions.length) {
        nextQuestion();
    } else {
        // if no more questions, run game over ()
        gameOver();
    }
}

function chooseA() { checkAnswer(0); }

function chooseB() { checkAnswer(1); }

function chooseC() { checkAnswer(2); }

function chooseD() { checkAnswer(3); }

// when all questions are answered || timer reaches 0, game is over
function gameOver() {
    conclusion.style.display = "block";
    questionPourToiDiv.style.display = "none";
    beginDiv.style.display = "none";
    temps.style.display = "none";
    timeIsUp.style.display = "block";

    //  Sinal scores
    finalScoreresults.textContent = rightAns;
}

// Type initials and store highscores in the local storage
function storeHighScores(event) {
    event.preventDefault();

    // If initial is blank then stop function
    if (initialInfo.value === "") {
        alert("Please Enter Your Initials!");
        return;
    }

    beginDiv.style.display = "none";
    temps.style.display = "none";
    timeIsUp.style.display = "none";
    conclusion.style.display = "none";
    highScoresDiv.style.display = "block";

    //  Scores saved into the local storage
    var highScoresSaved = localStorage.getItem("high scores");
    var scoresArraySaved;

    if (highScoresSaved === null) {
        scoresArraySaved = [];
    } else {
        scoresArraySaved = JSON.parse(highScoresSaved)
    }

    var scores4User = {
        initials: initialInfo.value,
        score: finalScoreresults.textContent
    };

    console.log(scores4User);
    scoresArraySaved.push(scores4User);

    // stringify array to store in local storage
    var savedScoresString = JSON.stringify(scoresArraySaved);
    window.localStorage.setItem("high scores", savedScoresString);

    // show current highscores
    showHighScores();
}

// function to show high scores
var i = 0;
function showHighScores() {

    beginDiv.style.display = "none";
    temps.style.display = "none";
    questionPourToiDiv.style.display = "none";
    timeIsUp.style.display = "none";
    conclusion.style.display = "none";
    highScoresDiv.style.display = "block";

    var highScoresSaved = localStorage.getItem("high scores");

    // check if there is any in local storage
    if (highScoresSaved === null) {
        return;
    }
    console.log(highScoresSaved);

    var highScoresStored = JSON.parse(highScoresSaved);

    for (; i < highScoresStored.length; i++) {
        var everyNewHighScoreOnly = document.createElement("p");
        everyNewHighScoreOnly.innerHTML = highScoresStored[i].initials + ": " + highScoresStored[i].score;
        highScoresGroup.appendChild(everyNewHighScoreOnly);
    }
}

//Event Listeners

beginQuiz.addEventListener("click", quizTime);
choiceA.addEventListener("click", chooseA);
choiceB.addEventListener("click", chooseB);
choiceC.addEventListener("click", chooseC);
choiceD.addEventListener("click", chooseD);

initialBtn.addEventListener("click", function (event) {
    storeHighScores(event);
});

highscores.addEventListener("click", function (event) {
    showHighScores(event);
});

previousBtn.addEventListener("click", function () {
    beginDiv.style.display = "block";
    highScoresDiv.style.display = "none";
});

clearHighScoresBtn.addEventListener("click", function () {
    window.localStorage.removeItem("high scores");
    highScoresGroup.innerHTML = "High Scores Cleared!";
    highScoresGroup.setAttribute("style", "font-family: 'Nova', sans-serif; font-style: italic;")
});