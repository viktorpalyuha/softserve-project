$("header .logo, .company-name").fadeIn(3000);
$("#main p").fadeIn(3000);
$("nav").fadeIn(3000);

document.querySelector(".burger-menu").addEventListener("click", openCloseBurgerMenu);

function openCloseBurgerMenu() {
  const selectorUl = document.querySelector("ul");
  if (selectorUl.style.display === "flex") {
    selectorUl.style.display = "none";
  } else {
    selectorUl.style.display = "flex";
  }
};

document.querySelector('.copyrights').addEventListener('click', getCopyrights);

function getCopyrights() {
    fetch('copyrights.html')
        .then(response => response.text())
        .then(html => document.querySelector('.copyrights').innerHTML = html);
};

const clock = document.querySelector(".clock");
setInterval(() => {
	clock.innerHTML = new Date().toLocaleTimeString();
}, 1000);