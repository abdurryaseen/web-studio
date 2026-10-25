document.getElementById("year").textContent = new Date().getFullYear();

const nav = document.querySelector(".nav__links");
const toggle = document.querySelector(".nav__toggle");

toggle.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});

document.querySelector(".contact__form").addEventListener("submit", (e) => {
  e.preventDefault();
  const button = e.target.querySelector("button");
  button.textContent = "Sent ✓";
  button.disabled = true;
});
