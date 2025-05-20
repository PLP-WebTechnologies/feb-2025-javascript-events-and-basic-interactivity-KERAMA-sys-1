// 1. Event Handling
document.getElementById("clickBtn").addEventListener("click", () => {
  alert("Button clicked!");
});

document.getElementById("hoverBox").addEventListener("mouseover", () => {
  document.getElementById("hoverBox").style.backgroundColor = "#d1f7c4";
});
document.getElementById("hoverBox").addEventListener("mouseout", () => {
  document.getElementById("hoverBox").style.backgroundColor = "#f0f0f0";
});

document.getElementById("keyInput").addEventListener("keypress", (e) => {
  console.log(`You pressed: ${e.key}`);
});

document.getElementById("secretBtn").addEventListener("dblclick", () => {
  alert("Double-click detected! 🎉");
});

// 2. Interactive Elements
document.getElementById("colorChangeBtn").addEventListener("click", function () {
  this.style.backgroundColor = "#ffcccb";
  this.textContent = "Color Changed!";
});

const tabs = document.querySelectorAll(".tabBtn");
tabs.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tabContent").forEach(tab => tab.classList.add("hidden"));
    document.getElementById(btn.dataset.tab).classList.remove("hidden");
  });
});

let currentSlide = 0;
const images = [
  "https://via.placeholder.com/300?text=Slide+1",
  "https://via.placeholder.com/300?text=Slide+2",
  "https://via.placeholder.com/300?text=Slide+3"
];
document.getElementById("nextSlide").addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % images.length;
  document.getElementById("slideImage").src = images[currentSlide];
});

// 3. Form Validation
const form = document.getElementById("myForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailValid) {
    alert("Invalid email format.");
    return;
  }

  if (password.length < 8) {
    alert("Password must be at least 8 characters.");
    return;
  }

  alert("Form submitted successfully!");
});

// Real-time password feedback
document.getElementById("password").addEventListener("input", function () {
  const feedback = document.getElementById("passwordFeedback");
  if (this.value.length < 8) {
    feedback.textContent = "Password too short.";
  } else {
    feedback.textContent = "Looks good!";
    feedback.style.color = "green";
  }
});
