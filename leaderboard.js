function saveScore(wpm) {
  const scores = JSON.parse(localStorage.getItem("scores")) || [];
  scores.push({ user: localStorage.getItem("user"), wpm });
  localStorage.setItem("scores", JSON.stringify(scores));
}

function loadLeaderboard() {
  const board = document.getElementById("leaderboard");
  board.innerHTML = "";
  const scores = JSON.parse(localStorage.getItem("scores")) || [];

  scores.sort((a,b) => b.wpm - a.wpm).slice(0,5)
    .forEach(s => board.innerHTML += `<p>${s.user} – ${s.wpm} WPM</p>`);
}

loadLeaderboard();
