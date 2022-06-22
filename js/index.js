// const game = document.getElementById('canvas')
// const movement = document.getElementById('movement')



// function main (){
const game = document.getElementById('canvas')

const ctx = game.getContext('2d')

game.setAttribute('width', getComputedStyle(game)['width'])
game.setAttribute('height', getComputedStyle(game)['height'])

console.log('this is the vanvas width', game.width)
console.log('this is the canvas height', game.height)

// game.setAttribute('width', '230')
// game.setAttribute('height', '486')

// class RandomCars {
//     static random(max, min=0){
//         return Math.random()*(max-min)+min;
//     }
// }

class Cars{
    constructor(x, y, width, height){
        this.x = x,
        this.y = y,
        this.height= height,
        this.width = width,
        // this.velocityX =0,
        // this.speed = 30,
        // this.friction = 0.9,
        this.alive = true
        // this.pattern= pattern
        this.render= function(){
            const yellowCar = new Image()
                yellowCar.src= "images/yellowcar.png"
                yellowCar.onload=()=>{
                    ctx.drawImage(yellowCar, this.x, this.y)
                }
            // image.src="images/yellowcar.png"
            // const pattern =ctx.createPattern(yellowCar,"no-repeat")
            // ctx.fillStyle =pattern
            // ctx.fillRect(0,0,300,300)
            // ctx.fillStyle= this.image
            // ctx.fillRect(this.x, this.y, this.width, this.height)
        }
    }

    
}
const yellowCar= new Cars(90,420,40,60)
// let yellowCar = "images/yellowcar.png"
// let yellowCar = new Image()
// yellowCar.src= "images/yellowcar.png"
// yellowCar.onload=function(){
//     ctx.drawImage(yellowCar,this.x, this.y)
// }
//     const pattern =ctx.createPattern(yellowCar,"no-repeat")
//     ctx.fillStyle =pattern
//     ctx.fillRect(0,0,300,300)
// }
// document.onkeydown=function(e){
//     pos++
//     key-window.event?e.keyCode:e.which
// }
// let blueCar= new Cars(80, 200,"images/bluecar.png")


// movement(x,y) {
    //     this.x = x
    //     this.y= y
    // }

    // draw(){
    //     ctx.drawImage(yellowCar, 30, 40)
    //     ctx.drawImage(blueCar, this.x, this.y, this.width, this.height)
    //     ctx.drawImage(blackCar, this.x, this.y, this.width, this.height)
    //     ctx.drawImage(redCar, this.x, this.y, this.width, this.height)
    // }

// }

// need to create loop to randomize cars moving through
//seperate bewtween each each must be at least 150 for y and 50 for x
// x to get car in the middle: 
// first row-16
//  second row- 90
// third row- 172
// fourth row- 240

// let yellowCar = new Image()
// yellowCar.onload= function(){
//     ctx.drawImage(yellowCar, 90, 420)
// }


// function init(){
    // yellowCar.src= "images/yellowcar.png"
    
    
    
//     window.requestAnimationFrame(draw)
// }


// ctx.width = game.width
// ctx.height = game.height

// ctx.fillStyle='black'
// ctx.strokeStyle= 'red'
// ctx.lineWidth =5

// ctx.fillRect(0,0,20,20)
// ctx.strokeStyle(0,0,20,20)


// function draw(){

//     ctx.clearRect(0,0,300,300)
//     // ctx.save()
//     ctx.drawImage(yellowCar, 2, 5)
//     ctx.drawImage(yellowCar, 30, 50)
//     ctx.drawImage(yellowCar, 30, 50)
//     ctx.drawImage(yellowCar, 30, 50)

//     window.requestAnimationFrame(draw)
// }

// let redCar = new Cars (10,10,'red', 16, 16)
// let blueCar = new Cars (200, 50, 'blue', 32, 48)

//The gameLoop function will be what helps us create an animation effect 
//it also allows us to say what happens when and control those events to our liking
//this is how we utilize movement

const gameLoop = () => {
    // the 'win'condition of our game is to get to Dodger statdium 
    // if the simpsons car is still alive, then the game will continue 
    // if the simpsons car is deceased, the game will end 
    // if (blueCar.alive){
    //     detectHit()
    // }
    // } else if (blackCar.alive){
    //     detectHit()
    // }
    //we need to rend both of our objects, and we'll use their respective render methods to do this
    // we will also, update our movement box with the coordinates of our player
    // and to create the illusion of movement, we need to clear the canvas every single 'frame' so that our hero's movement doesnt turn him into a snake.
    ctx.clearRect(0,0,game.width, game.height)
    // movement.textContent = yellowCar.x + ' , ' + yellowCar.y
    yellowCar.render()

    // if (blueCar.alive){
    //     blueCar.render()
    // }
}

document.addEventListener('DOMContentLoaded', function(){
    //in here, we need to have our movement handler
    document.addEventListener('keydown', movementHandler)


    
    // we also need our game loop running at an interval 
    setInterval(gameLoop, 10)
})
// document.addEventListener('click', function(){
    // (e.keyCode)=true
    let offset =0
// repeating roadlines



function draw(){
    // let yellowCar = new Image()
    //     yellowCar.onload= function(){
    //         ctx.drawImage(yellowCar, 90, 420)
    //     }
    // yellowCar.src= "images/yellowcar.png"

    let blueCar = new Image()
        blueCar.onload= function(){
            ctx.drawImage(blueCar, 16, 200)
        }
    blueCar.src= "images/bluecar.png"

    let blackCar = new Image()
        blackCar.onload= function(){
            ctx.drawImage(blackCar, 172, 50, this.width, this.height)
        }
    blackCar.src= "images/blackcar.png"

    let redCar = new Image()
        redCar.onload= function(){
            ctx.drawImage(redCar, 240, 200, this.width, this.height)
        }
    redCar.src= "images/Redcar.png"

    ctx.clearRect(0,0,game.width, game.height)
   
        ctx.beginPath()
        ctx.setLineDash([4,16])
        ctx.lineWidth =2
        ctx.moveTo(65,0)
        ctx.lineTo(65,500)
        ctx.stroke()
        ctx.strokeStyle = 'white'
        ctx.lineDashOffset = -offset
    
        ctx.beginPath()
        ctx.setLineDash([4,16])
        ctx.lineWidth =2
        ctx.moveTo(150,0)
        ctx.lineTo(150,500)
        ctx.stroke()
        ctx.strokeStyle = 'white'
        ctx.lineDashOffset = -offset
   
        ctx.beginPath()
        ctx.setLineDash([4,16])
        ctx.lineWidth =2
        ctx.moveTo(230,0)
        ctx.lineTo(230,500)
        ctx.stroke()
        ctx.strokeStyle = 'white'
        ctx.lineDashOffset = -offset

       
    }
   

    function moveLine(){
        offset++
        if(offset >16){
         offset=0
        }
        draw()
     setTimeout(moveLine, 25)
    }

    moveLine()
// })

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
    //hit condition
    if (yellowCar.x < blueCar.x + blueCar.width
        && yellowCar.x + yellowCar.width > blueCar.x
        && yellowCar.y < blueCar.y + blueCar.height&&  yellowCar.y + yellowCar.height > blueCar.y){

            blueCar.alive = false
            document.getElementById('container').style.backgroundColor ='black'
            document.getElementById('container').innerHTML=`<img id="donut-gif-1" src="https://media.giphy.com/media/U7PwlrLCvk0Zoviyht/giphy.gif" /> <img id="donut-gif-2" src="https://media.giphy.com/media/U7PwlrLCvk0Zoviyht/giphy.gif" /> <h1 id="winner">Winner Winner Chicken Dinner!</h1> <audio controls autoplay> id="homer-win-voice" <source src="audio/Homer Simpson _ The Simpsons I win.mp3" type="audio/mpeg"></audio> <img id="simpson-gif" src="https://media.giphy.com/media/ZCldwd8JpfXgY/giphy.gif"/>`
        }
}

// ctx.setLineDash([4,16])

// ctx.beginPath()
// ctx.strokeStyle = 'white'
// ctx.lineDashOffset = offset
// ctx.moveTo(0,100)
// ctx.lineDashOffset(20,10)
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