let speed = document.getElementById("speed")
let modal = document.getElementById("modal")
speed.onclick = function (event) {
    event.preventDefault()
    modal.style.opacity = 0
    createCircle()
    //setInterval(() => {
    //}, 1000);
}
function createCircle() {
    // делает елемент дива
    let circle = document.createElement("div")
    // добавляет диву класс серкл 
    circle.classList.add("circle")
    // добовлял серкл в боди
    document.body.appendChild(circle)
    // нужно для того чтобы кружочки появлялись на рандомном расстоянии
    circle.style.left = Math.random() *(window.innerWidth-50)  + "px"
    circle.style.top = Math.random() * (window.innerHeight-50)+ "px"
    circle.onclick = function (event) {
        circle.remove()
        createCircle()
    }
    setTimeout(() => {
        circle.remove()
    }, 2000);
}