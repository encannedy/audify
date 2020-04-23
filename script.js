var myQuestions = [
	{
		question: "Inside which HTML element do we put the javascript?",
		answers: ['<span>', '<script>', '<div>'],
		correctAnswer: 1
	},
	{
		question: "How is a function created in javascript?",
		answers: ['function myfunction()', 'function=myfunction()', '<div>function=myfunction() </div>'],
		correctAnswer: 0
	},

	{
		question: "How do you start a for loop?",
		answers: ['for=i; i++', 'for (i<=5;i++)', 'for(i=0; i<=5; i++)'],
	correctAnswer: 2
	},
{
	question: "What is the correct way to write a javascript array?",
		answers: ["var colors= 1='red', 2='orange', 3='purple'","var colors=['red', 'orange', 'purple']","var colors={red,orange,purple}"],
		correctAnswer: 1
	
},
{
	question: "Where is the correct place to incert javascript?",
		answers: ["in the <head> section","in the <body> section","in both the <head> and <body> section" ],
	correctAnswer: 2
}
];

var questionEl = document.querySelector("#question");
var optionListEl = document.querySelector("#option-list");
var questionResultEl = document.querySelector("#question-result");
var timerEl = document.querySelector("#timer");

var questionIndex = 0;
var correctCount = 0;
var time = 20;
var intervalId;


// function to start quiz
//start the timer

function Questions() {
	var currentQuestion = myQuestions[questionIndex];
	//setting the question in the question div tage
	questionEl.textContent = currentQuestion.question;

	for (i=0; i < myquestions.length; i++) {

	currentQuestion.answers.forEach(function (answers, i) {
		var answerBtn = document.createElement('button');
		//class and a value
		answerBtn.setAttribute("class", "answers");
		answerBtn.setAttribute("value", answers);
	}
		//set text of button to show what the potiential answer is
		// answerBtn.textContent
	
//call a difernt timer to tell this screen how long it should display

//function to save high score

//get the user input for initials
var initals = intialsEl.value.trim();

//adding each new score to the scores array
score.push(newscore);

//save the high score to local storage
window.localStorage.setItem("highscores", JSON.stringify(score)); 

///function to display if the user had the correct or incorrect question
//function to occur (this function checks the answer) (if else)
//after you calculated based on if the users answer was right/wrong
//call next questions
function checkAnswer(event) {
	clearInterval(intervalId);
	if (event.target.matches("li")) {
	  var answer = event.target.textContent;
	  if (answer === questions[questionIndex].answer) {
		questionResultEl.textContent = "Correct";
		correctCount++;
	  } else {
		questionResultEl.textContent = "Incorrect";
		time = time - 2;
		timerEl.textContent = time;
	  }
	}
	setTimeout(nextQuestion, 2000);
  }
  
  renderQuestion();
  optionListEl.addEventListener("click", checkAnswer);