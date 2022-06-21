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


// ctx.width = game.width
// ctx.height = game.height

// ctx.fillStyle='black'
// ctx.strokeStyle= 'red'
// ctx.lineWidth =5

// ctx.fillRect(0,0,20,20)
// ctx.strokeStyle(0,0,20,20)

class Cars{
    constructor(x, y, color, width, height){
        this.x = x,
        this.y = y,
        this.color= color,
        this.height= height,
        this.width = width,
        this.alive = true,
        this.render= function (){
            ctx.fillStyle= this.color
            ctx.fillRect(this.x, this.y, this.width, this.height)
        }
    }
}
// }

let redCar = new Cars (10,10,'red', 16, 16)
let blueCar = new Cars (200, 50, 'blue', 32, 48)

//The gameLoop function will be what helps us create an animation effect 
//it also allows us to say what happens when and control those events to our liking
//this is how we utilize movement

const gameLoop = () => {
    // the 'win'condition of our game is to get to Dodger statdium 
    // if the simpsons car is still alive, then the game will continue 
    // if the simpsons car is deceased, the game will end 
    if (blueCar.alive){
        detectHit()
    }
    //we need to rend both of our objects, and we'll use their respective render methods to do this
    // we will also, update our movement box with the coordinates of our player
    // and to create the illusion of movement, we need to clear the canvas every single 'frame' so that our hero's movement doesnt turn him into a snake.
    ctx.clearRect(0,0,game.width, game.height)
    movement.textContent = redCar.x + ' , ' + redCar.y
    redCar.render()

    if (blueCar.alive){
        blueCar.render()
    }
}

document.addEventListener('DOMContentLoaded', function(){
    //in here, we need to have our movement handler
    document.addEventListener('keydown', movementHandler)
    // we also need our game loop running at an interval 
    setInterval(gameLoop, 60)
})

const movementHandler = (e) =>{
    // left=37, right=39
    switch (e.keyCode){
        case (37): 
        // this moves the player to the left
            blueCar.x -= 10
            break 
        case (39): 
            blueCar.x += 10
            break
        case (40): 
            // this moves the player to the left
            blueCar.y += 10
            break 
        case (38): 
        // this moves the player to the left
            blueCar.y -= 10
            break 
        
    }
}

const detectHit = () => {
    if (redCar.x < blueCar.x + blueCar.width
        && redCar.x + redCar.width > blueCar.x
        && redCar.y < blueCar.y + blueCar.height&&  redCar.y + redCar.height > blueCar.y){

            blueCar.alive = false
            document.getElementById('container').style.backgroundColor ='black'
            document.getElementById('container').innerHTML=`<h1 id="winner">'Winner Winner Chicken Dinner!'</h1> <img id="simpson-gif" src="https://media.giphy.com/media/ZCldwd8JpfXgY/giphy.gif"/>`
        }
}