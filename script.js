var myQuestions = [
	{
		question: "Inside which HTML element do we put the javascript?",
		answers: ['<span>','<script>','<div>'],
		correctAnswer: 1
	},
	{
		question: "How is a function created in javascript?",
		answers: {
			a: "function myfunction()",
			b: 'function=myfunction()',
			c: '<div>function=myfunction() </div>'
		},
		correctAnswer: 'a'
    },

    {
		question: "How do you start a for loop?",
		answers: {
			a: 'for=i; i++',
			b: 'for (i<=5;i++)',
			c: 'for(i=0; i<=5; i++)'
		},
		correctAnswer: 'c'
	},
	{
		question: "What is the correct way to write a javascript array?",
		answers: {
			a: "var colors= 1='red', 2='orange', 3='purple'",
			b: "var colors=['red', 'orange', 'purple']",
			c: "var colors={red,orange,purple}"
		},
		correctAnswer: 'b'
    },
    {
		question: "Where is the correct place to incert javascript?",
		answers: {
			a: "in the <head> section",
			b: "in the <body> section",
			c: "in both the <head> and <body> section"
		},
		correctAnswer: 'c'
	}
];

var questionEl = document.querySelector("#question");
var questionResultEl = document.querySelector("#question-result");
var timerEl = document.querySelector("#timer");

var questionIndex = 0;
var correctCount = 0;
var time = 20;
var intervalId;


// function to start quiz
//start the timer

function Questions (){
    var currentQuestion = myQuestions[questionIndex];
   //setting the question in the question div tage
    questionEl.textContent = currentQuestion.question;
   
    currentQuestion.answers.forEach(function(answers, i){
var answerBtn = document.createElement('button');
//class and a value
answerBtn.setAttribute("class", "answers");
answerBtn.setAttribute("value", answers);

//set text of button to show what the potiential answer is
answerBtn.textContent
    }
    // the array in the quest
 ///   for (i=0; i < questions.length; i++){

   // }
}
//call the first question

//call the questions->
///move throught


//choice document-
//choice.onclick = 


//function to occur (this function checks the answer) (if else)
//after you calculated based on if the users answer was right/wrong
//call next questions


///function to display if the user had the correct or incorrect question

//set time equal to time option 2 add the amount of time this screen is displaying to the time.
time = time;
//call a difernt timer to tell this screen how long it should display

//function to save high score

//get the user input for initials
var initals = intialsEl.value.trim();

//adding each new score to the scores array
score.push(newscore);

//save the high score to local storage
window.localStorage.setItem("highscores", JSON.stringify(score)); 