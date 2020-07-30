//timer code

var sec = 60;
(function() {
    function startTimer(){
        console.log('timer suppose to go')
        var timer = setInterval(function(){
            sec--;
            document.getElementById('timerDisplay').innerHTML='00:'+sec;
            if (sec < 0) {
                clearInterval(timer);
                alert("Time is up!")
            }
        }, 1000);
    }
    document.getElementById('incorrect').addEventListener('click', function() {
        sec -= 5;
        document.getElementById('timerDisplay').innerHTML='00:'+sec;
    });
    startTimer();
})();



//list of questions
let questions = [
  {
    id: 1,
    question: "Which of the following is an advantage of using JavaScript?",
    answer: "All of the above",
    options: [
      "Immediate feedback from the users",
      "Increased interactivity",
      "Less server interaction",
      "All of the above"
    ]
  },
  {
    id: 2,
    question: "Which of the following is not a reserved word in JavaScript?",
    answer: "program",
    options: [
      "interface",
      "throws",
      "program",
      "short"
    ]
  },
  {
    id: 3,
    question: "Which of the following is the correct syntax to display “GeeksforGeeks” in an alert box using JavaScript?",
    answer: "alert(“GeeksforGeeks”)",
    options: [
      "alertbox(“GeeksforGeeks”)",
      "msg(“GeeksforGeeks”)",
      "msgbox(“GeeksforGeeks”)",
      "alert(“GeeksforGeeks”)"
    ]
  }
];
let question_count = 0;
let points = 0;
window.onload = function () {
  show(question_count);
};
function next() {
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("timerDisplay", sec);
  
    location.href = "end.html";
  }
  console.log(question_count);
  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
    
  } else {
    sec -= 5;
  }
  console.log(points);
  question_count++;
  show(question_count);
}
function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;
  question.innerHTML = `
    <h2>Q${count + 1}. ${questions[count].question}</h2>
     <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
  </ul> 
    `;
  toggleActive();
}
function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
