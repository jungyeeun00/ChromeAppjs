const images = ["0.jpg", "1.jpg", "2.jpg"]

const chosenImage = images[Math.floor(Math.random()*images.length)]

const url = `img/${chosenImage}`

document.body.style.backgroundImage = `url(${url})`
document.body.style.backgroundSize = `100%`
document.body.style.backgroundRepeat = 'no-repeat'