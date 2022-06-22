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

class YellowCar{
    constructor(x, y, width, height){
        this.x = x,
        this.y = y,
        this.height= height,
        this.width = width,
        // this.velocityX =0,
        // this.friction = 0.9,
        this.alive = true,
        // this.pattern= pattern
        this.speed = 15,
        this.direction = {
            left: false,
            right: false
        }
    }
    setDirection = function (key) {
        console.log('this is the key that was pressed', key)
        // if (key.toLowerCase() == 'w') { this.direction.up = true }
        // if (key.keyCode == 37) { this.direction.left = true }
        if (key.toLowerCase() == 'a') { this.direction.left = true }
        // if (key.toLowerCase() == 's') { this.direction.down = true }
        if (key.toLowerCase() == 'd') { this.direction.right = true }
        // if (key.keyCode == 39) { this.direction.right = true }
    }
    unSetDirection = function (key) {
        console.log('this is the key that was pressed', key)
        // if (key.toLowerCase() == 'w') { this.direction.up = false }
        if (key.toLowerCase() == 'a') { this.direction.left = false }
        // if (key.keyCode == 37) { this.direction.left = false }
        // if (key.toLowerCase() == 's') { this.direction.down = false }
        if (key.toLowerCase() == 'd') { this.direction.right = false }
        // if (key.keyCode == 39) { this.direction.right = false }
    }
    moveYellowCar = function () {
    if (this.direction.left) {
        this.x -= this.speed
    
        if (this.x <= 0) {
            this.x = 0
        }
        requestAnimationFrame(gameLoop)
    }
    if (this.direction.right) {
        this.x += this.speed
        
        if (this.x + this.width >= game.width) {
            this.x = game.width - this.width
        }
        requestAnimationFrame(gameLoop)
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

class BlueCar{
    constructor(x, y, width, height){
        this.x = x,
        this.y = y,
        this.height= height,
        this.width = width,
        // this.velocityX =0,
        this.speed = 15
        // this.friction = 0.9,
        this.alive = true
        this.render= function(){
            const blueCar = new Image()
                blueCar.src= "images/bluecar.png"
                blueCar.onload=()=>{
                    ctx.drawImage(blueCar, this.x, this.y)
                }
        }
    } 
}

class BlackCar{
    constructor(x, y, width, height){
        this.x = x,
        this.y = y,
        this.height= height,
        this.width = width,
        // this.velocityX =0,
        this.speed = 15,
        // this.friction = 0.9,
        this.alive = true
        this.render= function(){
            const blackCar = new Image()
                blackCar.src= "images/blackcar.png"
                blackCar.onload=()=>{
                    ctx.drawImage(blackCar, this.x, this.y)
                }
        }
    } 
}
class RedCar{
    constructor(x, y, width, height){
        this.x = x,
        this.y = y,
        this.height= height,
        this.width = width,
        // this.velocityX =0,
        this.speed = 15,
        // this.friction = 0.9,
        this.alive = true
        this.render= function(){
            const redCar = new Image()
                redCar.src= "images/redcar.png"
                redCar.onload=()=>{
                    ctx.drawImage(redCar, this.x, this.y)
                }
        }
    } 
}
const randomCarY = (max) => {
    return Math.floor(Math.random() * max)
}
const randomCarX =() =>{
    let randomCarArray = [16,90,172,240]
    for (let i=0; i<randomCarArray.length; i++){
        randomCarArray.push(Math.random)
    }
    
}
// return [i]Math.floor(Math.random() * max)

let yellowCar= new YellowCar(90,420,40,60)

let blueCar = new BlueCar(randomCarX(game.width),randomCarY(game.height),40,60)

let blackCar = new BlackCar(randomCarX(game.width),randomCarY(game.height),40,60)

let redCar = new RedCar(randomCarX(game.width),randomCarY(game.height),40,60)

// need to create loop to randomize cars moving through
//seperate bewtween each each must be at least 150 for y and 50 for x
// x to get car in the middle: 
// first row-16
//  second row- 90
// third row- 172
// fourth row- 240



// let gameSpeed = 3;

// setInterval(() => {
//   gameSpeed += 1;
//   if (gameSpeed > 9) {
//     gameSpeed = 9;
//   }
// }, 5000);




//The gameLoop function will be what helps us create an animation effect 
//it also allows us to say what happens when and control those events to our liking
//this is how we utilize movement

const gameLoop = () => {
    
    // the 'win'condition of our game is to get to Dodger statdium 
    // if the simpsons car is still alive, then the game will continue 
    // if the simpsons car is deceased, the game will end 
    ctx.clearRect(0,0,game.width, game.height)

    
    blueCar.render()
    blackCar.render()
    redCar.render()


    yellowCar.render() 
    yellowCar.moveYellowCar()

   
}

// const movementHandler = (e) =>{
//     // left=37, right=39
//     switch (e.keyCode){
//         case (37): 
//         // this moves the player to the left
//             yellowCar.x -= 10
//             break 
//         case (39): 
//             yellowCar.x += 10
//             break
//         case (40): 
//             // this moves the player to the left
//             yellowCar.y += 10
//             break 
//         case (38): 
//         // this moves the player to the left
//             yellowCar.y -= 10
//             break 
        
//     }
// }


document.addEventListener('DOMContentLoaded', function(){
    requestAnimationFrame(gameLoop,60)
    //in here, we need to have our movement handler
    // document.addEventListener('keydown', movementHandler)


    
    // we also need our game loop running at an interval 
    
    // setInterval(gameLoop, 10)
    

})
// setInterval(gameLoop, 10)
// requestAnimationFrame(gameLoop,60)
// document.addEventListener('click', function(){
    // (e.keyCode)=true
    let offset =0
// repeating roadlines

document.addEventListener('keydown', (e) => {
    // when the key is down, set the direction according to our
    // player.setDirection method
    yellowCar.setDirection(e.key)
})

document.addEventListener('keyup', (e) => {
    // this one will look a lil different than keydown
    // we need to make sure it only applies to the keys we listed in unSetDirection
    if ([37,39].includes(e.key)) {
        yellowCar.unSetDirection(e.key)
    }
})

// function draw(){
//     // let yellowCar = new Image()
//     //     yellowCar.onload= function(){
//     //         ctx.drawImage(yellowCar, 90, 420)
//     //     }
//     // yellowCar.src= "images/yellowcar.png"

//     let blueCar = new Image()
//         blueCar.onload= function(){
//             ctx.drawImage(blueCar, 16, 200)
//         }
//     blueCar.src= "images/bluecar.png"

//     let blackCar = new Image()
//         blackCar.onload= function(){
//             ctx.drawImage(blackCar, 172, 50, this.width, this.height)
//         }
//     blackCar.src= "images/blackcar.png"

//     let redCar = new Image()
//         redCar.onload= function(){
//             ctx.drawImage(redCar, 240, 200, this.width, this.height)
//         }
//     redCar.src= "images/Redcar.png"

//     ctx.clearRect(0,0,game.width, game.height)
   
//         ctx.beginPath()
//         ctx.setLineDash([4,16])
//         ctx.lineWidth =2
//         ctx.moveTo(65,0)
//         ctx.lineTo(65,500)
//         ctx.stroke()
//         ctx.strokeStyle = 'white'
//         ctx.lineDashOffset = -offset
    
//         ctx.beginPath()
//         ctx.setLineDash([4,16])
//         ctx.lineWidth =2
//         ctx.moveTo(150,0)
//         ctx.lineTo(150,500)
//         ctx.stroke()
//         ctx.strokeStyle = 'white'
//         ctx.lineDashOffset = -offset
   
//         ctx.beginPath()
//         ctx.setLineDash([4,16])
//         ctx.lineWidth =2
//         ctx.moveTo(230,0)
//         ctx.lineTo(230,500)
//         ctx.stroke()
//         ctx.strokeStyle = 'white'
//         ctx.lineDashOffset = -offset

       
// }
   

//     function moveLine(){
//         offset++
//         if(offset >16){
//          offset=0
//         }
//         draw()
//      setTimeout(moveLine, 25)
//     }

//     moveLine()
// // })




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