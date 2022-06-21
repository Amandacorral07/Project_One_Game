// const game = document.getElementById('canvas')
const movement = document.getElementById('movement')



// function main (){
const game = document.getElementById('canvas')

const ctx = game.getContext('2d')

game.setAttribute('width', getComputedStyle(game)['width'])
game.setAttribute('height', getComputedStyle(game)['height'])

console.log('this is the vanvas width', game.width)
console.log('this is the canvas height', game.height)

// game.setAttribute('width', '230')
// game.setAttribute('height', '486')

class RandomCars {
    static random(max, min=0){
        return Math.random()*(max-min)+min;
    }
}

let yellowCar = new Image()
yellowCar.onload= function(){
    ctx.drawImage(yellowCar, this.x, this.y, this.width, this.height)
}

yellowCar.src= "images/yellowcar.png"


let blueCar = new Image()
blueCar.onload= function(){
    ctx.drawImage(blueCar, this.x, this.y, this.width, this.height)
}

blueCar.src= "images/bluecar.png"

let blackCar = new Image()
blackCar.onload= function(){
    ctx.drawImage(blackCar, this.x, this.y, this.width, this.height)
}

blackCar.src= "images/blackcar.png"

let redCar = new Image()
redCar.onload= function(){
    ctx.drawImage(redCar, this.x, this.y, this.width, this.height)
}

redCar.src= "images/Redcar.png"
// ctx.width = game.width
// ctx.height = game.height

// ctx.fillStyle='black'
// ctx.strokeStyle= 'red'
// ctx.lineWidth =5

// ctx.fillRect(0,0,20,20)
// ctx.strokeStyle(0,0,20,20)

class Cars{
    constructor(game, ctx, color){
        this.context = ctx
        this.x = game.width /2,
        this.y = game.height -60,
        this.color= color,
        this.height= 10,
        this.width = 5,
        this.velocityX =0,
        this.speed = 30,
        this.friction = 0.9,
        this.alive = true
        // this.render= function (){
        //     ctx.fillStyle= this.color
        //     ctx.fillRect(this.x, this.y, this.width, this.height)
        // }
    }

// }
// const yellowCar = document.createElement('img')
// img.src = "images/car_topview.svg"

// function make_yellow_car(){
//     car_image = new Image()
//     car_image.src='images/car_topview.svg'
//     car_image.onload = function(){
//         ctx.drawImage(car_image, 0, 0)
//     }
// }
    movement(x,y) {
        this.x = x
        this.y= y
    }

    draw(){
        ctx.drawImage(yellowCar, this.x, this.y, this.width, this.height)
        ctx.drawImage(blueCar, this.x, this.y, this.width, this.height)
        ctx.drawImage(blackCar, this.x, this.y, this.width, this.height)
        ctx.drawImage(redCar, this.x, this.y, this.width, this.height)
    }

}
// let redCar = new Cars (10,10,'red', 16, 16)
// let blueCar = new Cars (200, 50, 'blue', 32, 48)

//The gameLoop function will be what helps us create an animation effect 
//it also allows us to say what happens when and control those events to our liking
//this is how we utilize movement

// const gameLoop = () => {
    // the 'win'condition of our game is to get to Dodger statdium 
    // if the simpsons car is still alive, then the game will continue 
    // if the simpsons car is deceased, the game will end 
    // if (blueCar.alive){
    //     detectHit()
    // } else if (blackCar.alive){
    //     detectHit()
    // }
    //we need to rend both of our objects, and we'll use their respective render methods to do this
    // we will also, update our movement box with the coordinates of our player
    // and to create the illusion of movement, we need to clear the canvas every single 'frame' so that our hero's movement doesnt turn him into a snake.
    // ctx.clearRect(0,0,game.width, game.height)
    // movement.textContent = redCar.x + ' , ' + redCar.y
    // redCar.render()

    // if (blueCar.alive){
    //     blueCar.render()
    // }
// }

document.addEventListener('DOMContentLoaded', function(){
    //in here, we need to have our movement handler
    document.addEventListener('keydown', movementHandler)
    // we also need our game loop running at an interval 
    // setInterval(gameLoop, 60)
})

const movementHandler = (e) =>{
    // left=37, right=39
    switch (e.keyCode){
        case (37): 
        // this moves the player to the left
            yellowCar.x -= 10
            break 
        case (39): 
            yellowCar.x += 10
            break
        case (40): 
            // this moves the player to the left
            yellowCar.y += 10
            break 
        case (38): 
        // this moves the player to the left
            yellowCar.y -= 10
            break 
        
    }
}

const detectHit = () => {
    if (redCar.x < blueCar.x + blueCar.width
        && redCar.x + redCar.width > blueCar.x
        && redCar.y < blueCar.y + blueCar.height&&  redCar.y + redCar.height > blueCar.y){

            blueCar.alive = false
            document.getElementById('container').style.backgroundColor ='black'
            document.getElementById('container').innerHTML=`<img id="donut-gif-1" src="https://media.giphy.com/media/U7PwlrLCvk0Zoviyht/giphy.gif" /> <img id="donut-gif-2" src="https://media.giphy.com/media/U7PwlrLCvk0Zoviyht/giphy.gif" /> <h1 id="winner">Winner Winner Chicken Dinner!</h1> <audio controls autoplay> id="homer-win-voice" <source src="audio/Homer Simpson _ The Simpsons I win.mp3" type="audio/mpeg"></audio> <img id="simpson-gif" src="https://media.giphy.com/media/ZCldwd8JpfXgY/giphy.gif"/>`
        }
}
let offset =0
// repeating roadlines

function drawLine(){
    ctx.clearRect(0,0,game.width, game.height)
    ctx.setLineDash([4,16])
    ctx.lineWidth =2
    ctx.moveTo(20,0)
    ctx.lineTo(0,50)
    ctx.strokeStyle = 'white'
    ctx.lineDashOffset = offset
    // ctx.strokeRect(60,0,0,490)
    // x,y,width, height
    // ctx.strokeRect(100,100,0,100)
}

function moveLine(){
    offset++
    if(offset >16){
        offset=0
    }
    drawLine()
    setTimeout(moveLine, 20)
}

moveLine()
// ctx.setLineDash([4,16])

// ctx.beginPath()
// ctx.strokeStyle = 'white'
// ctx.lineDashOffset = 4
// ctx.moveTo(0,100)
// ctx.lineDashOffset(300,100)
// ctx.stroke()
// function roadArea(){
//     for (let x=0; x<10; x++){
//     let roadlines = document.createElement('div')
//     roadlines.setAttribute('class', 'line')
//     roadlines.y = x *150
//     roadlines.style.top = roadlines.y + 'px'
//     game.appendChild(roadlines)
//     }
// }

// function movelines(){
//     let roadlines = document.querySelectorAll('.line')
//     roadlines.forEach(function(line){
//         if(line.y >=700){
//             line.y = line.y- 750
//         }
//         line.y = line.y + 
//     })
// }