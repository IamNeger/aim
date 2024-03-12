let tablo=document.getElementById("tablo")
let score=0
let timer=document.getElementById("timer")
let time=60
let speed = document.getElementById("speed")
let modal = document.getElementById("modal")
speed.onclick = function (event) {
    event.preventDefault()
    modal.style.opacity = 0
    createCircle()
    let timeInterval=setInterval(() => {
        console.log(1);
        time=time-1
        if (time<1) {
        clearInterval(timeInterval)
        modal.style.opacity=1    
        }
        timer.innerHTML="время: "+time
    }, 1000);
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
        if (time>0) {
        createCircle()
        }
        clearTimeout(circleTimeout)
        score=score+1
        tablo.innerHTML="счет: "+score
    }
    let circleTimeout=setTimeout(() => {
        circle.remove()
        if (time>0) {
        createCircle()    
        }
    }, 2000);
}