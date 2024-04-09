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
    alert("You clicked")
})