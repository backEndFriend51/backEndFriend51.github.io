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
      draw: function(progress) {
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

  function myTimer() {
    const date = new Date();
    document.getElementById("timer").innerHTML = date.toLocaleTimeString();
  
 //   const elements = imageholder;
 //  for (let i = 0; i < 8; i++) {
//     let elem = i.toString();
    let element = document.getElementById("7");
    let hidden = element.getAttribute("hidden");

    if (hidden) {
      element.removeAttribute("hidden");
      img.innerText = "Hide image";
   } else {
      element.setAttribute("hidden", "hidden");
      img.innerText = "Show image";
   }
//  } 
}
//    
 //     elements[element].add('hidden')