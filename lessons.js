const defaultLessons = [
  "asdf jkl;",
  "The quick brown fox jumps over the lazy dog",
  "Practice typing every day"
];

let lessons = JSON.parse(localStorage.getItem("lessons")) || defaultLessons;

const lessonList = document.getElementById("lessonList");

lessons.forEach((l, i) => {
  const btn = document.createElement("button");
  btn.textContent = "Lesson " + (i + 1);
  btn.onclick = () => startLesson(l);
  lessonList.appendChild(btn);
});
