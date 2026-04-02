console.log("test");

const questions = [
    {
        id: 1,
        question: "1. Vad används let till i JavaScript?",
        answers: ["För att deklarera en konstant", "För att deklarera en variabel", "För att skapa en funktion", "För att skriva ut text"],
        correct: 1
    },
    {
        id: 2,
        question: "2. Vad returnerar typeof 'Hello'?",
        answers: ["string", "text", "object", "char"],
        correct: 0
    },
    {
        id: 3,
        question: "3. Hur skriver man en kommentar på en rad i JavaScript?",
        answers: ["<!-- kommentar -->", "# kommentar", "// kommentar", "** kommentar **"],
        correct: 2
    },
    {
        id: 4,
        question: "4. Vad blir resultatet av 2 + 2?",
        answers: [4, 22, NaN, undefined],
        correct: 1
    },
    {
        id: 5,
        question: "5. Vad är true i JavaScript?",
        answers: ["En tal", "En text", "En boolean", "En array"],
        correct: 2,
    },
    {
        id: 6,
        question: "6. Vad är en array i JavaScript?",
        answers: ["En funktion", "En lista med värden", "Ett tal", "En loop"],
        correct: 1
    },
    {
        id: 7,
        question: "7. Vad är en variabel?",
        answers: ["Ett fast värde som aldrig ändras", "Ett sätt att lagra data", "En typ av kommentar", "En operator"],
        correct: 1
    },
    {
        id: 8,
        question: "8. Vad betyder === i JavaScript?",
        answers: ["Tilldelning", "Jämförelse av värde", "Jämförelse av värde och typ", "Inte lika med"],
        correct: 2
    }

];

let points = 0;
let showCurrentQuestion = 0;
let showResult = false;
let IsApproved = false;
let selectedAnswer = null;

// function showResult() 
// {
//     if(currentQuestion > 7) 
//         {

//         }
// }

function IsQuizApproved(points) {

    if (points > 5) {//Godkänd

    }
    else {
        //Icke godkänd
    }
}
function userSelectedAnswer()
{
  document.querySelector(".question-area").addEventListener('click', function(event) 
   {
    if(event.target.checked === true) 
        {
           selectedAnswer = event.target.id;
           console.log(event.target.id);
           console.log(selectedAnswer);
        }
    console.log(event.target.checked)
   });
}
function nextQuestion() {
 let button = document.getElementById("next-question").addEventListener("click", function (){
if(selectedAnswer===null ) {
   document.getElementById("user-error-message").textContent = "*Du måste välja ett svarsalternativ";
  
}
// else if() { 
// showCurrentQuestion++
// showQuestion();
// console.log(showCurrentQuestion)
// }
 })
   

    //if (currentQuestionIndex < questions.length) {
    //     visa nästa fråga
    //  }
    //  else {
    //     show result
    //  }
}


function showQuestion(showCurrentQuestion) {
    const currentQuestion = questions[showCurrentQuestion].question;
    console.log(currentQuestion);

    const showAnswer1 = questions[showCurrentQuestion].answers[0];
    const showAnswer2 = questions[showCurrentQuestion].answers[1];
    const showAnswer3 = questions[showCurrentQuestion].answers[2];
    const showAnswer4 = questions[showCurrentQuestion].answers[3];

    var testtext = document.getElementById("question-text").textContent = currentQuestion;

    document.getElementById("answer-text-1").textContent = showAnswer1;
    document.getElementById("answer-text-2").textContent = showAnswer2;
    document.getElementById("answer-text-3").textContent = showAnswer3;
    document.getElementById("answer-text-4").textContent = showAnswer4;

}
//skapa en funktion för att räkna poäng
//spara i LocalStorage för att behålla statet och vilketn fråga de är på samt hur många poäng man har.
//När vi bockar i ett svar ska rätt svar komma upp (och om man har svarat rätt eller fel)

showQuestion(showCurrentQuestion);
console.log(questions);
nextQuestion();
userSelectedAnswer();