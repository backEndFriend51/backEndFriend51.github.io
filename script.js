console.log("hello world")
const name = "Rainer"
console.log(name)
const age = 19
if (age > 20) {
  console.log("welcome")
} else {
  console.log("Too young")
}
const buttonElement = document.getElementById("clickhandler")
buttonElement.addEventListener('click', function (e) {
  console.log(e)
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
  console.log(index);
  elements.forEach(ele => {

    ele.classList.add("hidden");
  }) 

  elements[index].classList.remove("hidden");
}



const element1 = document.getElementById("card1Toggle");
element.addEventListener("click", toggleFunction1);
const element2 = document.getElementById("card2Toggle");
element.addEventListener("click", toggleFunction2);
const element3 = document.getElementById("card3Toggle");
element.addEventListener("click", toggleFunction3);

function toggleFunction1() {
  element1.classList.toggle('hidden');
}
function toggleFunction2() {
  element2.classList.toggle('hidden');
}
function toggleFunction3() {
  element3.classList.toggle('hidden');
}
