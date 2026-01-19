function login() {
  const user = document.getElementById("username").value;
  if (!user) return alert("Enter username");
  localStorage.setItem("user", user);
  location.href = "dashboard.html";
}

function logout() {
  localStorage.removeItem("user");
  location.href = "index.html";
}

if (!localStorage.getItem("user") && location.pathname.includes("dashboard")) {
  location.href = "index.html";
}
