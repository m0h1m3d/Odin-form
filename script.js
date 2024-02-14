const right = document.querySelector(".right");
const container = document.querySelector(".container");
const password = document.getElementById("password");
const btn = document.querySelector("button");
const confirmed = document.getElementById("confirm");

window.addEventListener("load", () => {
  container.style.transform = "translateX(0px)";
  right.style.transform = "translateX(0px)";
});

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (password && password.value !== confirmed.value) {
    console.log("Password Mismatched! try again");
    confirmed.style.border = "1px solid red";
  }
});