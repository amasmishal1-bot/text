function addLesson() {
  const text = document.getElementById("newLesson").value;
  const lessons = JSON.parse(localStorage.getItem("lessons")) || [];
  lessons.push(text);
  localStorage.setItem("lessons", JSON.stringify(lessons));
  alert("Lesson added");
}
