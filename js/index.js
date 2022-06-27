const game = document.getElementById('canvas')

const ctx = game.getContext('2d')

game.setAttribute('width', getComputedStyle(game)['width'])
game.setAttribute('height', getComputedStyle(game)['height'])

const cars = []

const dodger = []

// class for Yellow Car
class YellowCar{
    constructor(x, y, width, height){
        this.x = x,
        this.y = y,
        this.height= height,
        this.width = width,
        this.velocityX =0,
        this.friction = 0.9,
        this.alive = true,
        this.speed = 5,
        this.direction = {
            left: false,
            right: false
        }
    }
    
    setDirection = function (key) {
        console.log('this is the key that was pressed', key)
        if (key.toLowerCase() == 'a') { this.direction.left = true }
        ctx.clearRect(0,0,game.width, game.height)
        requestAnimationFrame(gameLoop,120)
        if (key.toLowerCase() == 'd') { this.direction.right = true }
        ctx.clearRect(0,0,game.width, game.height)
        requestAnimationFrame(gameLoop,120)
    }

    unSetDirection = function (key) {
        console.log('this is the key that was pressed', key)
        if (key.toLowerCase() == 'a') { this.direction.left = false }
        if (key.toLowerCase() == 'd') { this.direction.right = false }
    }
    moveYellowCar = function () {
        if (this.direction.left) {
            this.x -= this.speed
            this.velocityX *= this.friction
            this.x += this.velocityX

        if (this.x <= 0) {
            this.x = 0
        }
        }
        if (this.direction.right) {
            this.x += this.speed
            this.velocityX *= this.friction
            this.x += this.velocityX
        if (this.x + this.width >= game.width) {
            this.x = game.width - this.width
        }
        }
    
    }
    render= function(){
        const yellowCar = new Image()
            yellowCar.src= "images/yellowcar.png"
            yellowCar.onload=()=>{
                ctx.drawImage(yellowCar, this.x, this.y)
                
        }
    }
}



class RedCar{
    constructor(x, y, width, height){
        this.x = x,
        this.y = y,
        this.height= width,
        this.width = height,
        this.speed = Math.random() * 4 - 2,
        this.alive = true 
    } 
    update(){
        this.y +=1
        if (this.y === 90) {
            addNewCar()
        }
        
    } 
    
    render(){
        const redCar = new Image()
            redCar.src= "images/Redcar.png"
            redCar.onload=()=>{
                ctx.drawImage(redCar, this.x, this.y)
            }
    }
}

class DodgerSign{
    constructor(x,y, width, height){
    this.x=x,
    this.y=y,
    this.width= width,
    this.height=height,
    this.alive = true
    }
    update(){
        setTimeout( ()=>{
            this.y +=1
        },
        15000
        )        
    }
    render(){
        const dodgerSign = new Image()
        dodgerSign.src= "images/Welcome to Dodger Stadium3.png"
        dodgerSign.onload=()=>{
            ctx.drawImage(dodgerSign, this.x, this.y)
        }
    }
}

class Go {
    constructor(x,y,width,height){
        this.x=x,
        this.y=y,
        this.width=width,
        this.height=height
    }
    update(){
        setTimeout( ()=>{
            this.y +=1
        },
        250
        )    
    }
    render(){
        const go = new Image()
        go.src= "images/Go!.png"
        go.onload=()=>{
            ctx.drawImage(go, this.x, this.y)
        }
    }
}

class One {
    constructor(x,y,width,height){
        this.x=x,
        this.y=y,
        this.width=width,
        this.height=height
    }
    update(){
        this.y +=1
    }
    render(){
        const one = new Image()
        one.src= "images/321.png"
        one.onload=()=>{
            ctx.drawImage(one, this.x, this.y)
        }
    }
}
class Minion {
    constructor(x,y,width,height){
        this.x=x,
        this.y=y,
        this.width=width,
        this.height=height,
        this.alive = true
    }
    update(){
        setTimeout( ()=>{
            this.y +=1
        },
        5000
        )  
    }
    render(){
        const minion = new Image()
        minion.src= "images/minion.png"
        minion.onload=()=>{
            ctx.drawImage(minion, this.x, this.y)
        }
    }
}
class Stewie {
    constructor(x,y,width,height){
        this.x=x,
        this.y=y,
        this.width=width,
        this.height=height,
        this.alive = true
    }
    update(){
        setTimeout( ()=>{
            this.y +=1
        },
        8500
        )  
    }
    render(){
        const stewie = new Image()
        stewie.src= "images/stewie.png"
        stewie.onload=()=>{
            ctx.drawImage(stewie, this.x, this.y)
        }
    }
}
class Spongebob {
    constructor(x,y,width,height){
        this.x=x,
        this.y=y,
        this.width=width,
        this.height=height,
        this.alive = true
    }
    update(){
        setTimeout( ()=>{
            this.y +=1
        },
        10500
        ) 
    }
    render(){
        const spongebob = new Image()
        spongebob.src= "images/spongebob.png"
        spongebob.onload=()=>{
            ctx.drawImage(spongebob, this.x, this.y)
        }
    }
}
class Gma {
    constructor(x,y,width,height){
        this.x=x,
        this.y=y,
        this.width=width,
        this.height=height,
        this.alive = true
    }
    update(){
        setTimeout( ()=>{
            this.y +=1
        },
        13000
        ) 
    }
    render(){
        const gma = new Image()
        gma.src= "images/gma.png"
        gma.onload=()=>{
            ctx.drawImage(gma, this.x, this.y)
        }
    }
}
let laneArray = [16, 90, 172, 240, 315, 390]
function randomRedCar(){
    return laneArray[Math.floor(Math.random()*laneArray.length)]
}
let randoX = randomRedCar()

function addNewCar(){
    let randoX = randomRedCar()
    let newRedCar = new RedCar(randoX,0,30,50)
    cars.push(newRedCar)
}

function randoMinion(){
    return  laneArray[Math.floor(Math.random()*laneArray.length)]
}
let randoMin = randoMinion()


function randoStew(){
    return  laneArray[Math.floor(Math.random()*laneArray.length)]
}
let randoStewie = randoStew()


function randoSponge(){
    return  laneArray[Math.floor(Math.random()*laneArray.length)]
}
let randoSpongebob = randoSponge()

function randoGmas(){
    return  laneArray[Math.floor(Math.random()*laneArray.length)]
}
let randoGma = randoGmas()


let go = new Go (0,0,350,40)

let one = new One (0,0,350,40)

let minion = new Minion (randoMin,-60,40,60)

let stewie = new Stewie (randoStewie,-60,40,60)

let spongebob = new Spongebob (randoSpongebob,-60,40,60)

let gma = new Gma (randoGma,-60,40,60)

let dodgerSign = new DodgerSign(0,-50,300,40)

let yellowCar= new YellowCar(100,400,40,60)

let redCar =new RedCar(16,0,30,50,25)


const gameLoop = () => {
    
    // the 'win'condition of our game is to get to Dodger statdium 
    // if the simpsons car is still alive, then the game will continue 
    // if the simpsons car is deceased, the game will end 
    ctx.clearRect(0,0,game.width, game.height)

    cars.forEach((car)=>{
        car.update()
        if(car.alive===true){
        car.render()
        detectHit(car)
        } else {
            stopGameLoop()
            document.getElementById('container').style.backgroundColor ='black'
            document.getElementById('container').innerHTML=`<h1 id="lose"> Doh! You didn't make it to the game </h1><audio controls autoplay> id="homer-doh" <source src="audio/Doh.mp3" type="audio/mpeg"></audio> <img id="simpson-gif-doh" src="https://media.giphy.com/media/TwtXMS5EnKDBK/giphy.gif"/>`
        }
    })

    if (dodgerSign.alive===true){
        dodgerSign.render()
        detectHit(dodgerSign)
    } else {
        stopGameLoop()
        document.getElementById('container').style.backgroundColor ='black'
        document.getElementById('container').innerHTML=`<img id="donut-gif-1" src="https://media.giphy.com/media/U7PwlrLCvk0Zoviyht/giphy.gif" /> <img id="donut-gif-2" src="https://media.giphy.com/media/U7PwlrLCvk0Zoviyht/giphy.gif" /> <h1 id="winner">Winner Winner Chicken Dinner!</h1> <audio controls autoplay> id="homer-win-voice" <source src="audio/I win.mp3" type="audio/mpeg"></audio> <img id="simpson-gif" src="https://media.giphy.com/media/ZCldwd8JpfXgY/giphy.gif"/>`
    }

    if (minion.alive===true){ 
        minion.render()
        detectHit(minion)
    }else{
        stopGameLoop()
        document.getElementById('container').style.backgroundColor ='black'
        document.getElementById('container').innerHTML=`<h1 id="lose"> Doh! You didn't make it to the game </h1><audio controls autoplay> id="homer-doh" <source src="audio/Doh.mp3" type="audio/mpeg"></audio> <img id="simpson-gif-doh" src="https://media.giphy.com/media/TwtXMS5EnKDBK/giphy.gif"/>`
    }

    if (stewie.alive ===true){
        stewie.render()
        detectHit(stewie)
    } else{
        stopGameLoop()
        document.getElementById('container').style.backgroundColor ='black'
        document.getElementById('container').innerHTML=`<h1 id="lose"> Doh! You didn't make it to the game </h1><audio controls autoplay> id="homer-doh" <source src="audio/Doh.mp3" type="audio/mpeg"></audio> <img id="simpson-gif-doh" src="https://media.giphy.com/media/TwtXMS5EnKDBK/giphy.gif"/>`
    }

    if (gma.alive ===true){
        gma.render()
        detectHit(gma)
    } else{
        stopGameLoop()
        document.getElementById('container').style.backgroundColor ='black'
        document.getElementById('container').innerHTML=`<h1 id="lose"> Doh! You didn't make it to the game </h1><audio controls autoplay> id="homer-doh" <source src="audio/Doh.mp3" type="audio/mpeg"></audio> <img id="simpson-gif-doh" src="https://media.giphy.com/media/TwtXMS5EnKDBK/giphy.gif"/>`
    }

    if( spongebob.alive === true){
        spongebob.render()
        detectHit(spongebob)
    }else{
        stopGameLoop()
        document.getElementById('container').style.backgroundColor ='black'
        document.getElementById('container').innerHTML=`<h1 id="lose"> Doh! You didn't make it to the game </h1><audio controls autoplay> id="homer-doh" <source src="audio/Doh.mp3" type="audio/mpeg"></audio> <img id="simpson-gif-doh" src="https://media.giphy.com/media/TwtXMS5EnKDBK/giphy.gif"/>`
    }
    go.update()
    go.render()

    one.update()
    one.render()

    minion.update()
    stewie.update()
    gma.update()
    spongebob.update()

    dodgerSign.update()
    redCar.update()

    yellowCar.render() 
    yellowCar.moveYellowCar()
    
}

let gameInterval = setInterval(gameLoop, 6)


const stopGameLoop=()=> {clearInterval(gameInterval)}

document.addEventListener('keydown', (e) => {
    yellowCar.setDirection(e.key)
})

document.addEventListener('keyup', (e) => {
    if (['a','d'].includes(e.key)) {
        yellowCar.unSetDirection(e.key)
    }
})
document.addEventListener('DOMContentLoaded', function(){
    gameInterval
    ctx.clearRect(0,0,game.width, game.height)
    requestAnimationFrame(gameLoop,120)
})

const detectHit = (thing) => {
    
    if (yellowCar.x < thing.x + thing.width
        && yellowCar.x + yellowCar.width > thing.x
        && yellowCar.y < thing.y + thing.height&&  yellowCar.y + yellowCar.height >thing.y){
            thing.alive = false
            console.log('it works')
        }
}

