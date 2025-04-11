var counterC = 0;
var counterW = 0;



let questions = [
    "What is the speed of light in a vacuum?",
    "What is the unit of force in physics?",
    "What is the acceleration due to gravity on Earth?",
    "What is the primary source of energy for the Earth?",
    "What is the formula for calculating force in physics?",
];

function selected(){
    document.getElementById("a1").style.backgroundColor = "#afafaf";
    document.getElementById("a2").style.backgroundColor = "#afafaf";
    document.getElementById("a3").style.backgroundColor = "#afafaf";
    document.getElementById("a0").style.backgroundColor = "#606060";
    document.getElementById("a0").style.scale = "105%";
    document.getElementById("a1").style.scale = "100%";
    document.getElementById("a2").style.scale = "100%";
    document.getElementById("a3").style.scale = "100%";
}
function selected2(){
    document.getElementById("a0").style.backgroundColor = "#afafaf";
    document.getElementById("a2").style.backgroundColor = "#afafaf";
    document.getElementById("a3").style.backgroundColor = "#afafaf";
    document.getElementById("a1").style.backgroundColor = "#606060";
    document.getElementById("a1").style.scale = "105%";
    document.getElementById("a0").style.scale = "100%";
    document.getElementById("a2").style.scale = "100%";
    document.getElementById("a3").style.scale = "100%";
}
function selected3(){
    document.getElementById("a1").style.backgroundColor = "#afafaf";
    document.getElementById("a0").style.backgroundColor = "#afafaf";
    document.getElementById("a3").style.backgroundColor = "#afafaf";
    document.getElementById("a2").style.backgroundColor = "#606060";
    document.getElementById("a2").style.scale = "105%";
    document.getElementById("a1").style.scale = "100%";
    document.getElementById("a0").style.scale = "100%";
    document.getElementById("a3").style.scale = "100%";
}
function selected4(){
    document.getElementById("a1").style.backgroundColor = "#afafaf";
    document.getElementById("a2").style.backgroundColor = "#afafaf";
    document.getElementById("a0").style.backgroundColor = "#afafaf";
    document.getElementById("a3").style.backgroundColor = "#606060";
    document.getElementById("a3").style.scale = "105%";
    document.getElementById("a1").style.scale = "100%";
    document.getElementById("a2").style.scale = "100%";
    document.getElementById("a0").style.scale = "100%";
}

let answers = [
    "150,000 km/s",
    "1,000 km/s",
    "300,000 km/s", // Correct answer
    "30,000 km/s"
];

let answers2 = [
    "Joule",
    "Watt",
    "Pascal",
    "Newton" // Correct answer
];

let answers3 = [
    "9.8 m/s²", // Correct answer
    "10 m/s²",
    "8.5 m/s²",
    "12 m/s²"
];

let answers4 = [
    "The Sun", // Correct answer
    "The Moon",
    "Wind",
    "Geothermal Energy"
];
let answers5 = [
    "Force = Mass ÷ Acceleration",
    "Force = Mass × Acceleration", // Correct answer
    "Force = Mass + Acceleration",
    "Force = Mass - Acceleration"
];

function backQuestion(){
    document.getElementById("backButtonA").style.display = "flex";
    if(counterC = 1){
        counterC--;
    }
    if(counterC<=0){
        counterC = 0;
    }
    document.getElementById("quizScoreText").innerHTML = (counterC) + "/5";
    document.getElementById("quizScoreCounterPhy").value = (counterC);
    for(var i=0; i<answers.length; i++){
        document.getElementById("a"+i).innerHTML = answers[i];
        document.getElementById("q0").innerHTML = questions[0];
        document.getElementById("questionHeaderText").innerHTML = "Question " + [1] +":";
        document.getElementById("quizButton").setAttribute("onclick", "checkAnswers1()");

    }
}
function backQuestion2(){
    if(counterC = 2){
        counterC--;
    }
    if(counterC<=0){
        counterC = 0;
    }
    document.getElementById("quizScoreText").innerHTML = (counterC) + "/5";
    document.getElementById("quizScoreCounterPhy").value = (counterC);
    for(var i=0; i<answers2.length; i++){

        document.getElementById("a"+i).innerHTML = answers2[i];
        document.getElementById("q0").innerHTML = questions[1];
        document.getElementById("questionHeaderText").innerHTML = "Question " + [2] +":";
        document.getElementById("quizButton").setAttribute("onclick", "checkAnswers2()");
        document.getElementById("backButtonA").setAttribute("onclick", "backQuestion()");
    }
}
function backQuestion3(){
    if(counterC = 3){
        counterC--;
    }
    if(counterC<=0){
        counterC = 0;
    }
    document.getElementById("quizScoreText").innerHTML = (counterC) + "/5";
    document.getElementById("quizScoreCounterPhy").value = (counterC);
    for(var i=0; i<answers3.length; i++){

        document.getElementById("a"+i).innerHTML = answers3[i];
        document.getElementById("q0").innerHTML = questions[2];
        document.getElementById("questionHeaderText").innerHTML = "Question " + [3] +":";
        document.getElementById("quizButton").setAttribute("onclick", "checkAnswers3()");
        document.getElementById("backButtonA").setAttribute("onclick", "backQuestion2()");
    }
}
function backQuestion4(){
    if(counterC = 4){
        counterC--;
    }
    if(counterC<=0){
        counterC = 0;
    }
    document.getElementById("quizScoreText").innerHTML = (counterC) + "/5";
    document.getElementById("quizScoreCounterPhy").value = (counterC);
    for(var i=0; i<answers4.length; i++){
        document.getElementById("a"+i).innerHTML = answers4[i];
        document.getElementById("q0").innerHTML = questions[3];
        document.getElementById("questionHeaderText").innerHTML = "Question " + [4] +":";
        document.getElementById("quizButton").setAttribute("onclick", "checkAnswers4()");
        document.getElementById("backButtonA").setAttribute("onclick", "backQuestion3()");
    }
}
function backQuestion5(){
    if(counterC = 5){
        counterC--;
    }
    if(counterC<=0){
        counterC = 0;
    }
    document.getElementById("quizScoreText").innerHTML = (counterC) + "/5";
    document.getElementById("quizScoreCounterPhy").value = (counterC);
    for(var i=0; i<answers5.length; i++){
        document.getElementById("a"+i).innerHTML = answers5[i];
        document.getElementById("q0").innerHTML = questions[4];
        document.getElementById("questionHeaderText").innerHTML = "Question " + [5] +":";
        document.getElementById("quizButton").setAttribute("onclick", "checkAnswers5()");
        document.getElementById("backButtonA").setAttribute("onclick", "backQuestion4()");
    }
}



function flash(){
    document.getElementById("feedbackFlash").style.display = "none";
    document.getElementById("answerFeedback").style.height = "0px"
    document.getElementById("answerFeedback").style.opacity = "0"
}
function flash2(){
    document.getElementById("feedbackFlash2").style.display = "none";
        document.getElementById("answerFeedback2").style.height = "0px"
    document.getElementById("answerFeedback2").style.opacity = "0"
}
function flash3(){
    document.getElementById("feedbackFlash3").style.display = "none";
        document.getElementById("answerFeedback3").style.height = "0px"
    document.getElementById("answerFeedback3").style.opacity = "0"
}
function flash4(){
    document.getElementById("feedbackFlash4").style.display = "none";
        document.getElementById("answerFeedback4").style.height = "0px"
    document.getElementById("answerFeedback4").style.opacity = "0"
}
function flash5(){
    document.getElementById("feedbackFlash5").style.display = "none";
        document.getElementById("answerFeedback5").style.height = "0px"
    document.getElementById("answerFeedback5").style.opacity = "0"
}
function setAnswers1(){

    for(var i=0; i<answers.length; i++){
        document.getElementById("a"+i).innerHTML = answers[i];
        document.getElementById("q0").innerHTML = questions[0];
        document.getElementById("questionHeaderText").innerHTML = "Question " + [1] +":";
        document.getElementById("quizScoreText").innerHTML = (counterC) + "/5";
    }
}
function setAnswers2(){

    for(var i=0; i<answers2.length; i++){
        document.getElementById("a"+i).innerHTML = answers2[i];
        document.getElementById("q0").innerHTML = questions[1];
        document.getElementById("questionHeaderText").innerHTML = "Question " + [2] +":";
    }
    setTimeout(flash, 1)
}
function setAnswers3(){
    for(var i=0; i<answers3.length; i++){
        document.getElementById("a"+i).innerHTML = answers3[i];
        document.getElementById("q0").innerHTML = questions[2];
        document.getElementById("questionHeaderText").innerHTML = "Question " + [3] +":";
    }
    setTimeout(flash2, 1)
}
function setAnswers4(){
    for(var i=0; i<answers4.length; i++){
        document.getElementById("a"+i).innerHTML = answers4[i];
        document.getElementById("q0").innerHTML = questions[3];
        document.getElementById("questionHeaderText").innerHTML = "Question " + [4] +":";
    }
    setTimeout(flash3, 1)
}
function setAnswers5(){
    for(var i=0; i<answers5.length; i++){
        document.getElementById("a"+i).innerHTML = answers5[i];
        document.getElementById("q0").innerHTML = questions[4];
        document.getElementById("questionHeaderText").innerHTML = "Question " + [5] +":";
    }
    setTimeout(flash4, 1)
}

function checkAnswers1(){

    for(var i=0; i<questions.length; i++){
        var checkboxes = document.querySelectorAll('input[name="q' + i + '"]:checked');

        if(checkboxes.length > 0){
            var correctAnswers = getCorrectAnswers1(i);
            var userAnswers = [];

            checkboxes.forEach(function(checkbox){
                userAnswers.push(checkbox.value);
            });

            if(correctAnswers.every(answer => userAnswers.includes(answer))){
                counterC++;
                document.querySelector('input[name="q0"]:checked').checked = false;
                document.getElementById("q" + i).style.backgroundColor = "transparent";
                document.getElementById("quizButton").setAttribute("onclick", "checkAnswers2()")
                document.getElementById("a0").style.scale = "100%";
                document.getElementById("a1").style.scale = "100%";
                document.getElementById("a2").style.scale = "100%";
                document.getElementById("a3").style.scale = "100%";
                document.getElementById("a0").style.backgroundColor = "#afafaf";
                document.getElementById("a1").style.backgroundColor = "#afafaf";
                document.getElementById("a2").style.backgroundColor = "#afafaf";
                document.getElementById("a3").style.backgroundColor = "#afafaf";
                document.getElementById("feedbackFlash").style.display = "flex";
                document.getElementById("feedbackFlash").style.backgroundColor = "green";
                document.getElementById("backButtonA").style.display = "none";
                document.getElementById("quizScoreText").innerHTML = (counterC) + "/5";
                document.getElementById("quizScoreCounterPhy").value = (counterC);
                document.getElementById("answerFeedback").style.height = "40px"
                document.getElementById("answerFeedback").style.opacity = "1"
                document.getElementById("answerFeedback").style.animationPlayState = "running"
                document.getElementById("answerFeedback").style.color = "green"
                document.getElementById("feedbackh3").innerHTML = "Correct! The answer was " + answers[2];
                setAnswers2();
            }
            else{
                counterW++;
                document.querySelector('input[name="q0"]:checked').checked = false;
                document.getElementById("q" + i).style.backgroundColor = "transparent";
                document.getElementById("quizButton").setAttribute("onclick", "checkAnswers2()")
                document.getElementById("a0").style.scale = "100%";
                document.getElementById("a1").style.scale = "100%";
                document.getElementById("a2").style.scale = "100%";
                document.getElementById("a3").style.scale = "100%";
                document.getElementById("a0").style.backgroundColor = "#afafaf";
                document.getElementById("a1").style.backgroundColor = "#afafaf";
                document.getElementById("a2").style.backgroundColor = "#afafaf";
                document.getElementById("a3").style.backgroundColor = "#afafaf";
                document.getElementById("feedbackFlash").style.display = "flex";
                document.getElementById("feedbackFlash").style.backgroundColor = "red";
                document.getElementById("backButtonA").style.display = "none";
                document.getElementById("quizScoreText").innerHTML = (counterC) + "/5";
                document.getElementById("quizScoreCounterPhy").value = (counterC);
                document.getElementById("answerFeedback").style.height = "40px"
                document.getElementById("answerFeedback").style.opacity = "1"
                document.getElementById("answerFeedback").style.animationPlayState = "running"
                document.getElementById("answerFeedback").style.color = "red"
                document.getElementById("feedbackh3").innerHTML = "Incorrect! The answer was " + answers[2];
                setAnswers2();
            }
        }
    }
}

function checkAnswers2(){
    
    for(var i=0; i<questions.length; i++){
        var checkboxes = document.querySelectorAll('input[name="q' + i + '"]:checked');

        if(checkboxes.length > 0){
            var correctAnswers = getCorrectAnswers2(i);
            var userAnswers = [];

            checkboxes.forEach(function(checkbox){
                userAnswers.push(checkbox.value);
            });

            if(correctAnswers.every(answer => userAnswers.includes(answer))){
                counterC++;
                document.querySelector('input[name="q0"]:checked').checked = false;
                document.getElementById("q" + i).style.backgroundColor = "transparent";
                document.getElementById("quizButton").setAttribute("onclick", "checkAnswers3()")
                document.getElementById("a0").style.scale = "100%";
                document.getElementById("a1").style.scale = "100%";
                document.getElementById("a2").style.scale = "100%";
                document.getElementById("a3").style.scale = "100%";
                document.getElementById("a0").style.backgroundColor = "#afafaf";
                document.getElementById("a1").style.backgroundColor = "#afafaf";
                document.getElementById("a2").style.backgroundColor = "#afafaf";
                document.getElementById("a3").style.backgroundColor = "#afafaf";
                document.getElementById("feedbackFlash2").style.display = "flex";
                document.getElementById("feedbackFlash2").style.backgroundColor = "green";
                document.getElementById("quizScoreText").innerHTML = (counterC) + "/5";
                document.getElementById("quizScoreCounterPhy").value = (counterC);
                document.getElementById("answerFeedback2").style.height = "40px"
                document.getElementById("answerFeedback2").style.opacity = "1"
                document.getElementById("answerFeedback2").style.animationPlayState = "running"
                document.getElementById("answerFeedback2").style.color = "green"
                document.getElementById("feedbackh32").innerHTML = "Correct! The answer was " + answers2[3];
                setAnswers3();
            }
            else{
                counterW++;
                document.querySelector('input[name="q0"]:checked').checked = false;
                document.getElementById("q" + i).style.backgroundColor = "transparent";
                document.getElementById("quizButton").setAttribute("onclick", "checkAnswers3()")
                document.getElementById("a0").style.scale = "100%";
                document.getElementById("a1").style.scale = "100%";
                document.getElementById("a2").style.scale = "100%";
                document.getElementById("a3").style.scale = "100%";
                document.getElementById("a0").style.backgroundColor = "#afafaf";
                document.getElementById("a1").style.backgroundColor = "#afafaf";
                document.getElementById("a2").style.backgroundColor = "#afafaf";
                document.getElementById("a3").style.backgroundColor = "#afafaf";
                document.getElementById("feedbackFlash2").style.display = "flex";
                document.getElementById("feedbackFlash2").style.backgroundColor = "red";
                document.getElementById("quizScoreText").innerHTML = (counterC) + "/5";
                document.getElementById("quizScoreCounterPhy").value = (counterC);
                document.getElementById("answerFeedback2").style.height = "40px"
                document.getElementById("answerFeedback2").style.opacity = "1"
                document.getElementById("answerFeedback2").style.animationPlayState = "running"
                document.getElementById("answerFeedback2").style.color = "red"
                document.getElementById("feedbackh32").innerHTML = "Incorrect! The answer was " + answers2[3];
                setAnswers3();
            }
        }
    }
}
function checkAnswers3(){

    for(var i=0; i<questions.length; i++){
        var checkboxes = document.querySelectorAll('input[name="q' + i + '"]:checked');

        if(checkboxes.length > 0){
            var correctAnswers = getCorrectAnswers3(i);
            var userAnswers = [];

            checkboxes.forEach(function(checkbox){
                userAnswers.push(checkbox.value);
            });

            if(correctAnswers.every(answer => userAnswers.includes(answer))){
                counterC++;
                document.querySelector('input[name="q0"]:checked').checked = false;
                document.getElementById("q" + i).style.backgroundColor = "transparent";
                document.getElementById("quizButton").setAttribute("onclick", "checkAnswers4()")
                document.getElementById("a0").style.scale = "100%";
                document.getElementById("a1").style.scale = "100%";
                document.getElementById("a2").style.scale = "100%";
                document.getElementById("a3").style.scale = "100%";
                document.getElementById("a0").style.backgroundColor = "#afafaf";
                document.getElementById("a1").style.backgroundColor = "#afafaf";
                document.getElementById("a2").style.backgroundColor = "#afafaf";
                document.getElementById("a3").style.backgroundColor = "#afafaf";
                document.getElementById("feedbackFlash3").style.display = "flex";
                document.getElementById("feedbackFlash3").style.backgroundColor = "green";
                document.getElementById("quizScoreText").innerHTML = (counterC) + "/5";
                document.getElementById("quizScoreCounterPhy").value = (counterC);
                document.getElementById("answerFeedback3").style.height = "40px"
                document.getElementById("answerFeedback3").style.opacity = "1"
                document.getElementById("answerFeedback3").style.animationPlayState = "running"
                document.getElementById("answerFeedback3").style.color = "green"
                document.getElementById("feedbackh33").innerHTML = "Correct! The answer was " + answers3[0];
                setAnswers4();
            }
            else{
                counterW++;
                document.querySelector('input[name="q0"]:checked').checked = false;
                document.getElementById("q" + i).style.backgroundColor = "transparent";
                document.getElementById("quizButton").setAttribute("onclick", "checkAnswers4()")
                document.getElementById("a0").style.scale = "100%";
                document.getElementById("a1").style.scale = "100%";
                document.getElementById("a2").style.scale = "100%";
                document.getElementById("a3").style.scale = "100%";
                document.getElementById("a0").style.backgroundColor = "#afafaf";
                document.getElementById("a1").style.backgroundColor = "#afafaf";
                document.getElementById("a2").style.backgroundColor = "#afafaf";
                document.getElementById("a3").style.backgroundColor = "#afafaf";
                document.getElementById("feedbackFlash3").style.display = "flex";
                document.getElementById("feedbackFlash3").style.backgroundColor = "red";
                document.getElementById("quizScoreText").innerHTML = (counterC) + "/5";
                document.getElementById("quizScoreCounterPhy").value = (counterC);
                document.getElementById("answerFeedback3").style.height = "40px"
                document.getElementById("answerFeedback3").style.opacity = "1"
                document.getElementById("answerFeedback3").style.animationPlayState = "running"
                document.getElementById("answerFeedback3").style.color = "red"
                document.getElementById("feedbackh33").innerHTML = "Incorrect! The answer was " + answers3[0];
                setAnswers4();
            }
        }
    }
}
function checkAnswers4(){

    for(var i=0; i<questions.length; i++){
        var checkboxes = document.querySelectorAll('input[name="q' + i + '"]:checked');

        if(checkboxes.length > 0){
            var correctAnswers = getCorrectAnswers4(i);
            var userAnswers = [];

            checkboxes.forEach(function(checkbox){
                userAnswers.push(checkbox.value);
            });

            if(correctAnswers.every(answer => userAnswers.includes(answer))){
                counterC++;
                document.querySelector('input[name="q0"]:checked').checked = false;
                document.getElementById("q" + i).style.backgroundColor = "transparent";
                document.getElementById("quizButton").setAttribute("onclick", "checkAnswers5()")
                document.getElementById("a0").style.scale = "100%";
                document.getElementById("a1").style.scale = "100%";
                document.getElementById("a2").style.scale = "100%";
                document.getElementById("a3").style.scale = "100%";
                document.getElementById("a0").style.backgroundColor = "#afafaf";
                document.getElementById("a1").style.backgroundColor = "#afafaf";
                document.getElementById("a2").style.backgroundColor = "#afafaf";
                document.getElementById("a3").style.backgroundColor = "#afafaf";
                document.getElementById("feedbackFlash4").style.display = "flex";
                document.getElementById("feedbackFlash4").style.backgroundColor = "green";
                document.getElementById("quizScoreText").innerHTML = (counterC) + "/5";
                document.getElementById("quizScoreCounterPhy").value = (counterC);
                document.getElementById("answerFeedback4").style.height = "40px"
                document.getElementById("answerFeedback4").style.opacity = "1"
                document.getElementById("answerFeedback4").style.animationPlayState = "running"
                document.getElementById("answerFeedback4").style.color = "green"
                document.getElementById("feedbackh34").innerHTML = "Correct! The answer was " + answers4[0];
                setAnswers5();
            }
            else{
                counterW++;
                document.querySelector('input[name="q0"]:checked').checked = false;
                document.getElementById("q" + i).style.backgroundColor = "transparent";
                document.getElementById("quizButton").setAttribute("onclick", "checkAnswers5()")
                document.getElementById("a0").style.scale = "100%";
                document.getElementById("a1").style.scale = "100%";
                document.getElementById("a2").style.scale = "100%";
                document.getElementById("a3").style.scale = "100%";
                document.getElementById("a0").style.backgroundColor = "#afafaf";
                document.getElementById("a1").style.backgroundColor = "#afafaf";
                document.getElementById("a2").style.backgroundColor = "#afafaf";
                document.getElementById("a3").style.backgroundColor = "#afafaf";
                document.getElementById("feedbackFlash4").style.display = "flex";
                document.getElementById("feedbackFlash4").style.backgroundColor = "red";
                document.getElementById("quizScoreText").innerHTML = (counterC) + "/5";
                document.getElementById("quizScoreCounterPhy").value = (counterC);
                document.getElementById("answerFeedback4").style.height = "40px"
                document.getElementById("answerFeedback4").style.opacity = "1"
                document.getElementById("answerFeedback4").style.animationPlayState = "running"
                document.getElementById("answerFeedback4").style.color = "red"
                document.getElementById("feedbackh34").innerHTML = "Incorrect! The answer was " + answers4[0];
                setAnswers5();
            }
        }
    }
}
function checkAnswers5(){

    for(var i=0; i<questions.length; i++){
        var checkboxes = document.querySelectorAll('input[name="q' + i + '"]:checked');

        if(checkboxes.length > 0){
            var correctAnswers = getCorrectAnswers5(i);
            var userAnswers = [];

            checkboxes.forEach(function(checkbox){
                userAnswers.push(checkbox.value);
            });

            if(correctAnswers.every(answer => userAnswers.includes(answer))){
                counterC++;
                document.querySelector('input[name="q0"]:checked').checked = false;
                document.getElementById("q" + i).style.backgroundColor = "transparent";
                document.getElementById("quizButton").setAttribute("onclick", "quizComplete()")
                document.getElementById("quizButton").id = "quizButton1";
                document.getElementById("a0").style.scale = "100%";
                document.getElementById("a1").style.scale = "100%";
                document.getElementById("a2").style.scale = "100%";
                document.getElementById("a3").style.scale = "100%";
                document.getElementById("a0").style.backgroundColor = "#afafaf";
                document.getElementById("a1").style.backgroundColor = "#afafaf";
                document.getElementById("a2").style.backgroundColor = "#afafaf";
                document.getElementById("a3").style.backgroundColor = "#afafaf";
                document.getElementById("feedbackFlash5").style.display = "flex";
                document.getElementById("feedbackFlash5").style.backgroundColor = "green";
                document.getElementById("quizScoreText").innerHTML = (counterC) + "/5";
                document.getElementById("quizScoreCounterPhy").value = (counterC);
                document.getElementById("answerFeedback5").style.height = "40px"
                document.getElementById("answerFeedback5").style.opacity = "1"
                document.getElementById("answerFeedback5").style.animationPlayState = "running"
                document.getElementById("answerFeedback5").style.color = "green"
                document.getElementById("feedbackh35").innerHTML = "Correct! The answer was " + answers5[1];
                quizComplete();
            }
            else{
                counterW++;
                document.querySelector('input[name="q0"]:checked').checked = false;
                document.getElementById("q" + i).style.backgroundColor = "transparent";
                document.getElementById("quizButton").setAttribute("onclick", "quizComplete()")
                document.getElementById("quizButton").id = "quizButton1";
                document.getElementById("a0").style.scale = "100%";
                document.getElementById("a1").style.scale = "100%";
                document.getElementById("a2").style.scale = "100%";
                document.getElementById("a3").style.scale = "100%";
                document.getElementById("a0").style.backgroundColor = "#afafaf";
                document.getElementById("a1").style.backgroundColor = "#afafaf";
                document.getElementById("a2").style.backgroundColor = "#afafaf";
                document.getElementById("a3").style.backgroundColor = "#afafaf";
                document.getElementById("feedbackFlash5").style.display = "flex";
                document.getElementById("feedbackFlash5").style.backgroundColor = "red";
                document.getElementById("quizScoreText").innerHTML = (counterC) + "/5";
                document.getElementById("quizScoreCounterPhy").value = (counterC);
                document.getElementById("answerFeedback5").style.height = "40px"
                document.getElementById("answerFeedback5").style.opacity = "1"
                document.getElementById("answerFeedback5").style.animationPlayState = "running"
                document.getElementById("answerFeedback5").style.color = "red"
                document.getElementById("feedbackh35").innerHTML = "Incorrect! The answer was " + answers5[1];
                quizComplete();
            }
        }
    }
}




function quizComplete(){
    if(counterC >= 3){
        setTimeout(flash5, 1)
        document.getElementById("questionHeaderText").innerHTML = "Quiz Complete!";
        document.getElementById("question").style.display = "none";
        document.getElementById("answerCon").style.display = "none";
        document.getElementById("completeImg").style.display = "flex";
        document.getElementById("feedbackCon").style.display = "flex";
        document.getElementById("correctImg").style.display = "flex";
        document.getElementById("feedbackText").innerHTML = "You Passed with " + counterC + " / 5 correct!";
        document.getElementById("quizButton1").setAttribute("onclick", "returnHome()");
        document.getElementById("quizButtonText").innerHTML = "Return to Home Page";
        document.getElementById("backButton").src = "images/rotate-right-solid.svg";
        document.getElementById("backButtonC").style.display = "flex";
        document.getElementById("quizScoreText").style.display = "none";
    }
    else{
        setTimeout(flash5, 1)
        document.getElementById("questionHeaderText").innerHTML = "Quiz Complete!";
        document.getElementById("question").style.display = "none";
        document.getElementById("answerCon").style.display = "none";
        document.getElementById("completeImg").style.display = "flex";
        document.getElementById("feedbackCon").style.display = "flex";
        document.getElementById("incorrectImg").style.display = "flex";
        document.getElementById("feedbackText").innerHTML = "You Failed with " + counterC + " / 5 correct!";
        document.getElementById("quizButton1").setAttribute("onclick", "returnHome()");
        document.getElementById("quizButtonText").innerHTML = "Return to Home Page";
        document.getElementById("backButtonC").style.display = "flex";
        document.getElementById("quizScoreText").style.display = "none";
        }

}
function returnHome(){
    window.location.href = "index.html";
}
function refreshPage(){
    window.location.reload();
}
function getCorrectAnswers1(questionIndex){
    switch (questionIndex){
        case 0:
            return ["3"];
            default:
                return [];
    }
}
function getCorrectAnswers2(question2Index){
    switch (question2Index){
        case 0:
            return ["4"];
            default:
                return [];
    }
}
function getCorrectAnswers3(question3Index){
    switch (question3Index){
        case 0:
            return ["1"];
            default:
                return [];
    }
}
function getCorrectAnswers4(question4Index){
    switch (question4Index){
        case 0:
            return ["1"];
            default:
                return [];
    }
}
function getCorrectAnswers5(question5Index){
    switch (question5Index){
        case 0:
            return ["2"];
            default:
                return [];
    }
}