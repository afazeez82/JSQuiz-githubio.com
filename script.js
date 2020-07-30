//session storage code
function submitForm(e) {
    e.preventDefault();
    let name = document.forms["welcome_form"]["name"].value;
    //Store Player name
    sessionStorage.setItem("name", name);
    location.href = "quiz.html";

}

//stores user name

let user_name = sessionStorage.getItem("name");
let user_points = sessionStorage.getItem("points");
let user_time = sessionStorage.getItem("timerDisplay");
document.querySelector("span.name").innerHTML = user_name;
document.querySelector("span.points").innerHTML = user_points;
document.querySelector("span.time_taken").innerHTML = user_time;



const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = sessionStorage.getItem('mostRecentScore');
const highScores = JSON.parse(sessionStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});
saveHighScore = (e) => {
    e.preventDefault();
    const score = {
        score: user_points,
        name: username.value,
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);
    sessionStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('');
};

