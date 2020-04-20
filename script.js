var timer
var myQuestions = [
	{
		question: "Inside which HTML element do we put the javascript?",
		answers: {
			a: '<span>',
			b: '<script>',
			c: '<div>'
		},
		correctAnswer: 'b'
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