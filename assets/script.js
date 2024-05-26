const name = "Rainer"

const age = 41

const buttonElement = document.getElementById("clickhandler")
buttonElement.addEventListener('click', function () {
  alert("Soft Skills: 1. sense of duty, 2. punctual, 3. reliability")
})

function animateText(textArea) {
  let text = textArea.value;
  let to = text.length,
    from = 0;

  animate({
    duration: 5000,
    timing: bounce,
    draw: function (progress) {
      let result = (to - from) * progress + from;
      textArea.value = text.slice(0, Math.ceil(result))
    }
  });
}


function bounce(timeFraction) {
  for (let a = 0, b = 1; 1; a += b, b /= 2) {
    if (timeFraction >= (7 - 4 * a) / 11) {
      return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
    }
  }
}


setInterval(myTimer, 1000);
let index = 0;
function myTimer() {
  const date = new Date();
  document.getElementById("timer").innerHTML = date.toLocaleTimeString();
  
  const elements = [...document.querySelectorAll(".imageholder img")];
  index = (index + 1) % elements.length; 
  elements.forEach(ele => {
    ele.classList.add("hidden");
  }) 
  elements[index].classList.remove("hidden");
}

const acordeonTriggers = [...document.querySelectorAll(".accordion")]
acordeonTriggers.map(trigger => {
  trigger.addEventListener("click", (e) => {
    const sibling = e.target.nextElementSibling;
    sibling.classList.toggle("hidden");
  })
})

window.onscroll = function() {scrollUpFunction()};
const upElement = document.getElementById("move1");

function scrollUpFunction() {  
  if (window.scrollY > 800) {
    upElement.classList.remove("hidden"); 
  } else {
    upElement.classList.add("hidden");
  }
}

upElement.addEventListener("click", linkUp);

function linkUp() {  
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

upElement.addEventListener('click', (e) => {
  document.querySelector('#hi').scrollIntoView({
    behavior: 'smooth'
  });
})


window.onscroll = function() {scrolldownFunction()};
const downElement = document.getElementById("move2");

function scrolldownFunction() {  
  if (window.scrollY <= 800) {
    downElement.classList.remove("hidden"); 
  } else {
    downElement.classList.add("hidden");
  }
}

downElement.addEventListener("click", linkDown);

function linkDown() {  
  document.body.scrollY = 1000;
  document.documentElement.scrollY = 1000;
}