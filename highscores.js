const highScoresList = document.getElementById("highScoresList");
const highScore = JSON.parse(sessionStorage.highScores) || [];
//const highScores = JSON.parse(sessionStorage.getItem('highScores')) || [];
highScoresList.innerHTML = highScore
    .map(score => {
        return `<li class="high-score">${score.name} - ${score.score}</li>`;
    })
    .join("");