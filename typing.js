let time = 60;
let timer;

function startLesson(text) {
  document.getElementById("typingSection").classList.remove("hidden");
  const display = document.getElementById("textDisplay");
  const input = document.getElementById("textInput");

  display.innerHTML = "";
  text.split("").forEach(c => {
    const span = document.createElement("span");
    span.textContent = c;
    display.appendChild(span);
  });

  input.value = "";
  time = 60;
  document.getElementById("time").textContent = time;

  clearInterval(timer);
  timer = setInterval(() => {
    time--;
    document.getElementById("time").textContent = time;
    if (time === 0) clearInterval(timer);
  }, 1000);

  input.oninput = () => checkTyping(display, input.value);
}
