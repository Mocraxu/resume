/** @format */
// config typed auto
const options = {
  stringsElement: "",
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
};
const preloadTyped = new Typed("#typing-loading", {
  ...options,
  stringsElement: "#typing-loader",
});

const typingDecsJob = new Typed("#typing-decs-job", {
  ...options,
  stringsElement: "#typing-job",
});

// preloader
window.onload = function () {
  document.querySelector(".preloader").style.display = "none";
}


let offset = 200;
let offsetOpacity = 20;
let offsetPos = 100;
let backToTop = document.getElementById('btn-backtotop');
let scollDown = document.getElementById('btn-scrolldown');

let header = document.getElementById("header")
let posAbt = document.getElementById("about").offsetTop;
let posExp = document.getElementById("experience").offsetTop;
let posKnowledge = document.getElementById("knowledge").offsetTop;
let posProduct = document.getElementById("products").offsetTop;
window.onscroll = function () { actionOnScoll() };

function actionOnScoll() {
  //effect button back-to-top and scoll-down
  if (document.body.scrollTop > offset || document.documentElement.scrollTop > offset) {
    backToTop.classList.add('cd-is-visible');
    scollDown.classList.remove('cd-is-visible', 'cd-fade-out')
  } else {
    backToTop.classList.remove('cd-is-visible', 'cd-fade-out');
    scollDown.classList.add('cd-is-visible', 'cd-fade-out')
  }
  if (document.body.scrollTop > offsetOpacity || document.documentElement.scrollTop > offsetOpacity) {
    backToTop.classList.add('cd-fade-out');
    scollDown.classList.remove('cd-fade-out')
  }
  //effect header
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.classList.add('header-fixed')
  } else {
    header.classList.remove('header-fixed')
  }
}

// press button back-to-top and scoll-down
backToTop.onclick = () => { window.scrollTo({ top: 0, behavior: 'smooth' }); }
scollDown.onclick = () => { window.scrollTo({ top: posAbt - 100, behavior: 'smooth' }); }


//effect navbar
function toggleNavbar() {
  document.querySelector('.toggle-btn').classList.toggle('active');
  let elBar = document.querySelectorAll('.bar');
  elBar.forEach(function(el){
    el.classList.toggle('change');
  });
  document.querySelector('.sidebar-menu').classList.toggle('open');
}


function sendEmail() {
  var sub = document.getElementById("subject").value;
  var mess = document.getElementById("message").value;
  window.open(`mailto:nvnhan93@gmail.com?subject=${sub}&body=${mess}`);
  alert("Thank you for contact! I will contact to you ASAP")
}