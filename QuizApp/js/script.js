var questions = [
    {
    'question':'Jvavscript is a tool used in?', 
    'option1':'Painting', 
    'option2':'Playing', 
    'option3':'Drawing', 
    'option4':'Programing',
    'answer':'Programing'
    },
    {
    'question':'Whats is the founder of Microsoft?', 
    'option1':'Mark Zukerberg', 
    'option2':'Larry Page', 
    'option3':'Bill Gate', 
    'option4':'Jeff Beros',
    'answer':'Bill Gate'
    },	
    {
    'question':'HTML, CSS, and Javascript is used for?', 
    'option1':'Frontend development', 
    'option2':'Side development', 
    'option3':'Up development', 
    'option4':'Down development',
    'answer':'Frontend development'
    },	
    {
    'question':'Which is not an element in HTML?', 
    'option1':'"a"', 
    'option2':'"s"', 
    'option3':'"p"', 
    'option4':'"h1"',
    'answer':'"s"'
    },
    {
    'question':'_________ is not an event in Javascript?', 
    'option1':'Onclick', 
    'option2':'Mouseover', 
    'option3':'Keyup', 
    'option4':'HandsOn',
    'answer':'HandsOn'
    }
];

questionNumber = -1;
currentQuestion = 0;
questionIndex = 0;

function displayQuestions() {

var showQuestions = document.getElementById("showQuestions");
showQuestions.textContent = questions[questionNumber].question;

var showOptions = document.getElementById("showOptions");
  showOptions.innerHTML = 
  "<input type='radio' class='opt' name='options' value="+ questions[questionNumber].option1 +">" + questions[questionNumber].option1 + "<br>" +
  "<input type='radio' class='opt' name='options' value="+ questions[questionNumber].option2 +">" + questions[questionNumber].option2 + "<br>" +
  "<input type='radio' class='opt' name='options' value="+ questions[questionNumber].option3 +">" + questions[questionNumber].option3 + "<br>" +
  "<input type='radio' class='opt' name='options' value="+ questions[questionNumber].option4 +">" + questions[questionNumber].option4 + "<br>";
}

function showQuestions() {

    questionNumber++;
    


    if (questionNumber == 4) {
		console.log("submit");
		document.getElementById("nxtQuestion").innerHTML = 'Submit';	   
	}
	
	if (questionNumber == 1) {
	console.log("submit");
	document.getElementById("prevQuestion").style.visibility = 'visible';
	}

   if (questionNumber == 5) {
    console.log("Yes");  
    displayScore(); 
   }

   displayQuestions();
   checkAnswer();
	//var showOptions = document.getElementById("showOptions");
	//showOptions.innerHTML = 
   // "<input type='radio' id='option' name='options' value="+ questions[questionNumber].option1 +">" + questions[questionNumber].option1 + "<br>" + 
   // "<input type='radio' id='option' name='options' value="+ questions[questionNumber].option2 +">" + questions[questionNumber].option2 + "<br>" + 
   // "<input type='radio' id='option' name='options' value="+ questions[questionNumber].option3 +">" + questions[questionNumber].option3 + "<br>" +
   // "<input type='radio' id='option' name='options' value="+ questions[questionNumber].option4 +">" + questions[questionNumber].option4 + "<br>";


   // var showQuestions = document.getElementById("showQuestions");
   // showQuestions.innerHTML = [questionNumber + 1] + '. ' + questions[questionNumber].question; //FOR QUESTIONS ARRAY IN QUESTION.JS
    
  
}

var nextQuestion = document.getElementById("nxtQuestion");
nextQuestion.addEventListener("click", showQuestions);

var score = 0;
var percentage = 0;
var time = 30;

function checkAnswer() {
  var selectedOption = document.querySelector('input[type=radio]:checked');
    //var answer = selectedOption.value;
    //var option = document.getElementsByClassName("opt");
    //for (var i = 0; i < option.length; i++){
	  //  if (questions[currentQuestion].answer == answer) {
		//score ++;
    //}
    var option = document.getElementsByClassName("opt");
    for (var i = 0; i < option.length; i++){
        if (option[i].checked){
          optChosen = option[i].value;
          if (optChosen == Questions[questionNumber].answer) {
            score++;
          }
                
        	}
		}

	if (time == -1){
		displayScore();
    }
}
//	if (questions[questionNumber].answer == answer) {
	//}
            

//function to display score
function displayScore() {
    percentage = (score/5) * 100;
    document.write("You scored: " + percentage + "%");
}
showQuestions();
console.log(questions[4].question);
console.log(questions[4].option3);
console.log(questions[4].answer);
console.log(document.getElementsByClassName("opt").length);
console.log(document.getElementsByClassName("opt")[3].value);