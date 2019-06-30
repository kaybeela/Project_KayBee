
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".form-group");
const menuBrand = document.querySelector(".menu-brand");
const navItems = document.querySelectorAll(".nav-item");

//set menu state
showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add("close");
        menu.classList.add("show");
		menuNav.classList.add("show");
		navItems.forEach(item => item.classList.add("show"));
		document.getElementById("instruction").style.visibility = 'hidden';


        //set menu state
        showMenu = true;
    }else {
        menuBtn.classList.remove("close");
        menu.classList.remove("show");
		menuNav.classList.remove("show");
		navItems.forEach(item => item.classList.remove("show"));
		document.getElementById("instruction").style.visibility = 'visible';

        //set menu state
        showMenu = false;
	}
}
//function to display student's details
function select() {
	

	menuBrand.classList.add("show");

		var txtTit = document.getElementById("txt-title").value;
		document.getElementById("tit-cont").innerHTML = txtTit;

		var txtCol = document.getElementById("txt-color").value;
		document.getElementById("tit-cont").style.color = txtCol;

		var titTxt = document.getElementById("tit-text").value;
		document.getElementById("txt-cont").innerHTML = titTxt;

		var titCol = document.getElementById("tit-color").value;
		document.getElementById("txt-cont").style.color = titCol;

}

//Quiz question
var questions = [
		['Jvavscript is a tool used in?', 
		'Painting', 
		'Playing', 
		'Drawing', 
		'Programing',
		'Programing'],

		['Whats is the founder of Microsoft?', 
		'Mark Zukerberg', 
		'Larry Page', 
		'Bill Gate', 
		'Jeff Beros',
		'Bill Gate'],	

		['HTML, CSS, and Javascript is used for?', 
		'Frontend development', 
		'Side development', 
		'Up development', 
		'Down development',
		'Frontend development'],	

		['Which is not an element in HTML?', 
		'(a)', 
		'(s)', 
		'(p)', 
		'(h1)',
		'(s)'],	

		['_________ is not an event in Javascript?', 
		'Onclick', 
		'Mouseover', 
		'Click', 
		'HandsOn',
		'HandsOn']
];

//function to display questions and the options
questionNumber = 0;
digits = 1;
score = 0;

var opt1 = document.getElementById('option1');
var opt2 = document.getElementById('option2');
var opt3 = document.getElementById('option3');
var opt4 = document.getElementById('option4');

//function to display quiz
function showQuestions() {

	if (questionNumber == 4) {
		console.log("submit");
		document.getElementById("nxtQuestion").innerHTML = 'Submit';	   
	}	

   if (questionNumber == 5) {  
	 displayScore();
   }
   
   
   	var showQuestions = document.getElementById("showQuestions");
	question = questions[questionNumber][0];
	firstOption = questions[questionNumber][1];
	secondOption = questions[questionNumber][2];
	thirdOption = questions[questionNumber][3];
	fourthOption = questions[questionNumber][4];

	// CREATING RADIO BUTTONS AND VALUES
	var showOptions = document.getElementById("showOptions");
	optionA = '<label class="radio-inline"><input type = "radio" class="option" id="inline1" name = "options" value = "'+firstOption+'"> '+firstOption+'</label>';
	optionB = '<label class="radio-inline"><input type = "radio" class="option" id="inline2" name = "options" value = "'+secondOption+'"> '+secondOption+'</label>';
	optionC = '<label class="radio-inline"><input type = "radio" class="option" id="inline3" name = "options" value = "'+thirdOption+'"> '+thirdOption+'</label>';
	optionD = '<label class="radio-inline"><input type = "radio" class="option" id="inline4" name = "options" value = "'+fourthOption+'"> '+fourthOption+'</label>';

	showQuestions.innerHTML = digits+'. '+ question;
	opt1.innerHTML = optionA;
	opt2.innerHTML = optionB;
	opt3.innerHTML = optionC;
	opt4.innerHTML = optionD;
}

//Event to display next question
var nextQuestion = document.getElementById("nxtQuestion");
nextQuestion.addEventListener("click", nextQuestions);




var score = 0;
var percentage = 0;
var time = 30;

//function to check for correct answer
function checkAnswer() {
	// STORING CHECKED OPTION INTO A VARIABLE
	let opt = document.getElementsByName('options');
	// CHECK IF THE OPTION CHOSEN IS CORRECT AND AWARD ONE MARK
	for (i = 0; i < opt.length; i++) {
		if (opt[i].checked && opt[i].value == questions[questionNumber][5]) {
			score++;
		}
	}
	if (time == -1) {
		displayScore(); 
	}
}

//function to navigate to next question
function nextQuestions() {
	
	var selectedOption = document.querySelector('input[type=radio]:checked');  
		//calling the radio button inside the html.
		if (!selectedOption) {
		alert('please select your answer!');
		return;
		}//if no options is selected, alert student.

	
	checkAnswer();
	questionNumber++;
	digits++;
	showQuestions();
}
//function to remove student details page and begin quiz
function startQuestions() {

menuBtn.classList.remove("close");
menu.classList.remove("show");
menuNav.classList.remove("show");
menuBrand.classList.remove("show");
navItems.forEach(item => item.classList.remove("show"));
document.getElementById("display").style.visibility = 'visible';
menuBtn.style.visibility = 'hidden';


var txtTit = document.getElementById("txt-title").value;
document.getElementById("cap").innerHTML = txtTit;

var txtCol = document.getElementById("txt-color").value;
document.getElementById("cap").style.color = txtCol;



showQuestions();

//function to display timer
function countDownTimer() {
	var showTime = document.getElementById("showTime");
	showTime.innerHTML = time--;

	if (time == -1){
		clearInterval(timer);
		checkAnswer();
	}
}

// Count down timer
var timer = setInterval(countDownTimer, 1000);
}

//function to display score
function displayScore() {
    
	var x = questions.length;
	var result = (score/5) * 100;
	if (result >= 50) {
		document.write('Your score is '+result.toFixed(2)+'%<br><br> Questions answered correctly = '+score+'<br><br> Total number of questions = '+x+'<br><br> You score above average<br><br> Please note that this deos not confirm if you meet up the cut-off. A mail will be sent to your e-mail provided within the next 24hrs to confirm if you meet our cut-off.<br><br>Good Luck!!!<br><br><br><br> <button onclick = "window.print()" id = "print-result ">Print Result</button>');
	}else if (result < 50) {
		document.write('Your score is '+result.toFixed(2)+'%<br><br> Questions answered correctly = '+score+'<br><br> Total number of questions = '+x+'<br><br> You score below average<br><br> Please note that this deos not confirm if you meet up the cut-off. A mail will be sent to your e-mail provided within the next 24hrs to confirm if you meet our cut-off.<br><br>Good Luck!!!<br><br><br><br> <button onclick = "window.print()" id = "print-result ">Print Result</button>');
	}
	
};


