const game = document.getElementById('canvas')

const ctx = game.getContext('2d')

game.setAttribute('width', getComputedStyle(game)['width'])
game.setAttribute('height', getComputedStyle(game)['height'])

console.log('this is the vanvas width', game.width)
console.log('this is the canvas height', game.height)

const cars = []
// game.setAttribute('width', '230')
// game.setAttribute('height', '486')

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
        // if (key.toLowerCase() == 'w') { this.direction.up = true }
        // if (key == 'ArrowLeft') { this.direction.left = true }
        if (key.toLowerCase() == 'a') { this.direction.left = true }
        ctx.clearRect(0,0,game.width, game.height)
        requestAnimationFrame(gameLoop,60)
        // if (key.toLowerCase() == 's') { this.direction.down = true }
        if (key.toLowerCase() == 'd') { this.direction.right = true }
        ctx.clearRect(0,0,game.width, game.height)
        // if (key == 'ArrowRight') { this.direction.right = true }
        requestAnimationFrame(gameLoop,60)
    }

    unSetDirection = function (key) {
        console.log('this is the key that was pressed', key)
        if (key.toLowerCase() == 'a') { this.direction.left = false }
        // requestAnimationFrame(gameLoop,60)
        // if (key == 'ArrowLeft') { this.direction.left = false }
        // if (key.toLowerCase() == 's') { this.direction.down = false }
        if (key.toLowerCase() == 'd') { this.direction.right = false }
        // requestAnimationFrame(gameLoop,60)
        // if (key == 'ArrowRight') { this.direction.right = false }
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
    constructor(x, y, width, height, speed){
        this.x = x,
        this.y = y,
        // this.dx =dx,
        // this.dy= dy,
        this.height= width,
        this.width = height,
        // this.velocityX =0,
        this.speed = speed,
        this.moveCounter =4
        // this.friction = 0.9,
        this.alive = true 
    } 
    move(x){
        this.x =x;
    }
    update(){
        ctx.clearRect(0,0,game.width, game.height)
            this.render= function(){
                const redCar = new Image()
                    redCar.src= "images/redcar.png"
                    redCar.onload=()=>{
                        ctx.drawImage(redCar, this.x, this.y)
                    }
            }
            this.y +=1

            if (this.y === 90) {
                addNewCar()
             }
            // this.moveCounter--
            //     if (this.moveCounter === 0) {
            //     this.y++
            //     this.moveCounter = 2
            //     }   
            // if(this.y>=90){
            //     return this.render= function(){
            //         const redCar = new Image()
            //             redCar.src= "images/redcar.png"
            //             redCar.onload=()=>{
            //                 ctx.drawImage(redCar, this.x, this.y)
            //             }
            //     }
            // }
            // if(this.y>=180){
            //     return this.render= function(){
            //         const redCar = new Image()
            //             redCar.src= "images/redcar.png"
            //             redCar.onload=()=>{
            //                 ctx.drawImage(redCar, this.x, this.y)
            //             }
            //     }
            // }
            // if(this.y >=480){
            //     return this.y=0
            // }
    }
    render(){
        const redCar = new Image()
            redCar.src= "images/redcar.png"
            redCar.onload=()=>{
                ctx.drawImage(redCar, this.x, this.y)
            }
    }
    // randomRedCar(){
    //     for (let i=0; i<=10; i++){
    //         let randoRedNumber= [laneArray[Math.floor(Math.random()*laneArray.length)]]
    //         this.x =randoRedNumber

    //         // let redCar= new RedCar(randoRedNumber,0,60,80)
    //         console.log(redCar)
    //         // redCar.render()
    //         console.log(redCar.render())
    //         // redCar.y +=1
    //         redCar.speed= 10000
    //     }
    //     // setInterval(this.randomRedCar, .0001)
    // }
}

// function addNewCar(){
//     const newCar = new Image()
//     newCar.src= "images/redcar.png"
//     newCar.onload=()=>{
//         ctx.drawImage(newCar, this.x, this.y)
//     }
//     randomRedCar.push(newCar)
// }
let laneArray = [16, 90, 172, 240]
function randomRedCar(){
    // for (let i=0; i<=10; i++){
    return laneArray[Math.floor(Math.random()*laneArray.length)]
    // }
}
let randoX = randomRedCar()

function addNewCar(){
    let randoX = randomRedCar()
   let newRedCar = new RedCar(randoX,0,40,60,25)
   cars.push(newRedCar)
   
    
}




let yellowCar= new YellowCar(100,420,60,80)
let redSpeed=  Math.random() * 4 - 2


// let randomX=()=>{
//     Math.floor(Math.random()*game.width)
// }

let redCar =new RedCar(16,0,40,60,25)



// const newCar=()=>{
//     if(this.y>=90){
//         this.y=0
//         return this.render= function(){
//             const redCar = new Image()
//                 redCar.src= "images/redcar.png"
//                 redCar.onload=()=>{
//                     ctx.drawImage(redCar, 240, 0)
//                 }
//         }
//     }
//     if(this.y>=180){
//         return this.render= function(){
//             const redCar = new Image()
//                 redCar.src= "images/redcar.png"
//                 redCar.onload=()=>{
//                     ctx.drawImage(redCar, this.x, this.y)
//                 }
//         }
//     }
// }
// newCar(redCar)
// const randomRedCar=()=>{
//     for (let i=0; i<=30; i++){
//         let randoRedNumber= [laneArray[Math.floor(Math.random()*laneArray.length)]]
//         let redCar= new RedCar(randoRedNumber,0,60,80)
//         console.log(redCar)
//         redCar.render()
//         console.log(redCar.render())
//         redCar.y +=1
//     }
// }
// randomRedCar()



const gameLoop = () => {
    
    // the 'win'condition of our game is to get to Dodger statdium 
    // if the simpsons car is still alive, then the game will continue 
    // if the simpsons car is deceased, the game will end 
    ctx.clearRect(0,0,game.width, game.height)

    // update()
    cars.forEach((car)=>{
        car.render()
        detectHit(car)
        car.update()
    })


    if (redCar.alive){
        redCar.render()
        detectHit(redCar)
    } else {
        document.getElementById('container').style.backgroundColor ='black'
        document.getElementById('container').innerHTML=`<img id="donut-gif-1" src="https://media.giphy.com/media/U7PwlrLCvk0Zoviyht/giphy.gif" /> <img id="donut-gif-2" src="https://media.giphy.com/media/U7PwlrLCvk0Zoviyht/giphy.gif" /> <h1 id="winner">Winner Winner Chicken Dinner!</h1> <audio controls autoplay> id="homer-win-voice" <source src="audio/Homer Simpson _ The Simpsons I win.mp3" type="audio/mpeg"></audio> <img id="simpson-gif" src="https://media.giphy.com/media/ZCldwd8JpfXgY/giphy.gif"/>`
        // document.getElementById('container').style.backgroundColor ='black'
        // document.getElementById('container').innerHTML=`<audio controls autoplay> id="lose" <source src="audio/Home Simpson _ The Simpsons Doh.mp3" type="audio/mpeg"></audio> <img id="simpson-doh-gif" src="https://media.giphy.com/media/TwtXMS5EnKDBK/giphy.gif"/>`
    }
    
    // redCar.randomRedCar()
    // newCar()
    // newCar(redCar)
    
    redCar.update()

    yellowCar.render() 
    yellowCar.moveYellowCar()
    
}
    

let gameInterval =  setInterval(gameLoop, 60)

const stopGameLoop=()=> {clearInterval(gameInterval)}
// we're going to use setInterval to repeat our game loop function at specific times
// document.addEventListener('DOMContentLoaded', function () {
//     // this starts the game when the content is loaded
//     gameInterval
// })

document.addEventListener('keydown', (e) => {
    // when the key is down, set the direction according to our
    // player.setDirection method
    yellowCar.setDirection(e.key)

    // function moveRandomCars(){
    //     ctx.beginPath()
    //     ctx.
    // }
    // moveRandomCars()
})

document.addEventListener('keyup', (e) => {
    // this one will look a lil different than keydown
    // we need to make sure it only applies to the keys we listed in unSetDirection
    if (['a','d'].includes(e.key)) {
        yellowCar.unSetDirection(e.key)
    }
})
document.addEventListener('DOMContentLoaded', function(){
    gameInterval
    ctx.clearRect(0,0,game.width, game.height)
    requestAnimationFrame(gameLoop,60)
})


const detectHit = (thing) => {
    //hit condition
    if (yellowCar.x < thing.x + thing.width
        && yellowCar.x + yellowCar.width > thing.x
        && yellowCar.y < thing.y + thing.height&&  yellowCar.y + yellowCar.height >thing.y){

            thing.alive = false
            
        }
}





// class BlueCar1{
//     constructor(x, y, width, height){
//         this.x = x,
//         this.y = y,
//         this.height= height,
//         this.width = width,
//         // this.velocityX =0,
//         this.speed = 5,
//         // this.friction = 0.9,
//         this.alive = true
//         this.render= function(){
//             const blueCar = new Image()
//                 blueCar.src= "images/bluecar.png"
//                 blueCar.onload=()=>{
//                     ctx.drawImage(blueCar, this.x, this.y)
//                 }
//         }
//     } 
// }
// class BlueCar2{
//     constructor(x, y, width, height){
//         this.x = x,
//         this.y = y,
//         this.height= height,
//         this.width = width,
//         // this.velocityX =0,
//         this.speed = 5,
//         // this.friction = 0.9,
//         this.alive = true
//         this.render= function(){
//             const blueCar = new Image()
//                 blueCar.src= "images/bluecar.png"
//                 blueCar.onload=()=>{
//                     ctx.drawImage(blueCar, this.x, this.y)
//                 }
//         }
//     } 
// }
// class BlueCar3{
//     constructor(x, y, width, height){
//         this.x = randomRedCar,
//         this.y = y,
//         this.height= height,
//         this.width = width,
//         // this.velocityX =0,
//         this.speed = 5,
//         // this.friction = 0.9,
//         this.alive = true
//         this.render= function(){
//             const blueCar = new Image()
//                 blueCar.src= "images/bluecar.png"
//                 blueCar.onload=()=>{
//                     ctx.drawImage(blueCar, this.x, this.y)
//                 }
//         }
//     } 
//     update(){
//         ctx.clearRect(0,0,game.width, game.height)
//         this.render= function(){
//             const blueCar = new Image()
//                 blueCar.src= "images/bluecar.png"
//                 blueCar.onload=()=>{
//                     ctx.drawImage(blueCar, this.x, this.y)
//                 }
//         }

//         if(RedCar4.y >= 90){
//             return this.y +=1
//             // this.speed
//         }
//         if (this.y >=480){
//             return this.y=0
//         }
//     }
// }


// class BlueCar4{
//     constructor(x, y, width, height){
//         this.x = x,
//         this.y = y,
//         this.height= height,
//         this.width = width,
//         // this.velocityX =0,
//         this.speed = 5,
//         // this.friction = 0.9,
//         this.alive = true
//         this.render= function(){
//             const blueCar = new Image()
//                 blueCar.src= "images/bluecar.png"
//                 blueCar.onload=()=>{
//                     ctx.drawImage(blueCar, this.x, this.y)
//                 }
//         }
//     } 
// }

// class BlackCar1{
//     constructor(x, y, width, height){
//         this.x = x,
//         this.y = y,
//         this.height= height,
//         this.width = width,
//         // this.velocityX =0,
//         this.speed = 5,
//         // this.friction = 0.9,
//         this.alive = true
//         this.render= function(){
//             const blackCar = new Image()
//                 blackCar.src= "images/blackcar.png"
//                 blackCar.onload=()=>{
//                     ctx.drawImage(blackCar, this.x, this.y)
//                 }
//         }
//     } 
// }
// class BlackCar2{
//     constructor(x, y, width, height){
//         this.x = x,
//         this.y = y,
//         this.height= height,
//         this.width = width,
//         // this.velocityX =0,
//         this.speed = 5,
//         // this.friction = 0.9,
//         this.alive = true
//         this.render= function(){
//             const blackCar = new Image()
//                 blackCar.src= "images/blackcar.png"
//                 blackCar.onload=()=>{
//                     ctx.drawImage(blackCar, this.x, this.y)
//                 }
//         }
//     } 
// }
// class BlackCar3{
//     constructor(x, y, width, height){
//         this.x = x,
//         this.y = y,
//         this.height= height,
//         this.width = width,
//         // this.velocityX =0,
//         this.speed = 5,
//         // this.friction = 0.9,
//         this.alive = true
//         this.render= function(){
//             const blackCar = new Image()
//                 blackCar.src= "images/blackcar.png"
//                 blackCar.onload=()=>{
//                     ctx.drawImage(blackCar, this.x, this.y)
//                 }
//         }
//     } 
// }
// class BlackCar4{
//     constructor(x, y, width, height){
//         this.x = x,
//         this.y = y,
//         this.height= height,
//         this.width = width,
//         // this.velocityX =0,
//         this.speed = 5,
//         // this.friction = 0.9,
//         this.alive = true
//         this.render= function(){
//             const blackCar = new Image()
//                 blackCar.src= "images/blackcar.png"
//                 blackCar.onload=()=>{
//                     ctx.drawImage(blackCar, this.x, this.y)
//                 }
//         }
//     } 
// }
// class RedCar1{
//     constructor(x, y, width, height){
//         this.x = x,
//         this.y = y,
//         this.height= height,
//         this.width = width,
//         // this.velocityX =0,
//         this.speed = 5,
//         // this.friction = 0.9,
//         this.alive = true
//         this.render= function(){
//             const redCar = new Image()
//                 redCar.src= "images/redcar.png"
//                 redCar.onload=()=>{
//                     ctx.drawImage(redCar, this.x, this.y)
//                 }
//         }
//     } 
// }
// class RedCar2{
//     constructor(x, y, width, height){
//         this.x = x,
//         this.y = y,
//         this.height= height,
//         this.width = width,
//         // this.velocityX =0,
//         this.speed = 5,
//         // this.friction = 0.9,
//         this.alive = true
//         this.render= function(){
//             const redCar = new Image()
//                 redCar.src= "images/redcar.png"
//                 redCar.onload=()=>{
//                     ctx.drawImage(redCar, this.x, this.y)
//                 }
//         }
//     } 
// }
// class RedCar3{
//     constructor(x, y, width, height){
//         this.x = x,
//         this.y = y,
//         this.height= height,
//         this.width = width,
//         // this.velocityX =0,
//         this.speed = 5,
//         // this.friction = 0.9,
//         this.alive = true
//         this.render= function(){
//             const redCar = new Image()
//                 redCar.src= "images/redcar.png"
//                 redCar.onload=()=>{
//                     ctx.drawImage(redCar, this.x, this.y)
//                 }
//         }
//     } 
// }



// let randoCars = randomCarArray()

// const randomCarArray=()=>{
//     let randoCars= randomCars[Math.floor(Math.random()*randomCars.length)]
    // console.log(randoCars)
    // randoCars.forEach(i.render())
    // for (let i=0; i<randoCars.length; i++){
    //     randoCars[i].render()
        // randoCars[i].y +=10 
        // ctx.clearRect(0,0,game.width, game.height)
        // requestAnimationFrame(randomCarArray)
        // setInterval(randomCarArray,1000)
        // ctx.clearRect(0,0,game.width, game.height)
        // clearInterval(30000)
        // requestAnimationFrame(randomCarArray)
//     }
//     return randoCars
// }
// for (let i=0; i<5; i++){
//     RedCar4[i].render()
//     RedCar4[i].y +=10
// }
// const redCar = []
// for (let i=0; i<30; i++){
//     redCar.push(new RedCar4())
//  RedCar4[i].render()
// }
// const treatsArray = []
// for (let i = 0; i < 30; i++) {
//     treatsArray.push(new Treats())
// }

// let blueCar1 = new BlueCar1(16,0,40,60)
// let blueCar2= new BlueCar2(90,0,40,60)
// let blueCar3= new BlueCar3(172,0, 40, 60)
// let blueCar4= new BlueCar4(240,0,40,60)

// let blackCar1 = new BlackCar1(16, 0,40,60)
// let blackCar2= new BlackCar2(90,0,40,60)
// let blackCar3= new BlackCar3(172,0, 40, 60)
// let blackCar4= new BlackCar4(240,0,40,60)

// let redCar1 = new RedCar1(16,0,40,60)
// let redCar2= new RedCar2(90,0,40,60)
// let redCar3= new RedCar3(172,0, 40, 60)


// redCar4.render()
// let updateRedCar4 = function(){
//     // requestAnimationFrame(updateRedCar4)
//     updateRedCar4.update()
// }
// updateRedCar4()
// const arrayOne = [blueCar2, blackCar3]
// const arrayTwo = [redCar1,blackCar2, blueCar4]
// const arrayThree= [blueCar1, blackCar2 , redCar3]
// const arrayFour=[blueCar1, redCar3, blackCar4]
// const arrayFive=[blackCar2, redCar3, blueCar4]
// const arraySix=[blackCar1, blueCar2]
// const arraySeven=[redCar3, blackCar4]
// const arrayEight=[redCar2, blueCar4]
// const arrayNine=[redCar1, blackCar3]
// const arrayTen=[blackCar1, blueCar4]
// const arrayEleven=[blueCar1]
// const arrayTwelve=[redCar2]
// const arrayThirteen=[blackCar3]
// const arrayFourteen=[redCar4]

// let randomCars = [
//     [blueCar2, blackCar3],
//     [redCar1,blackCar2, blueCar4],
//     [blueCar1, blackCar2 , redCar3],
//     [blueCar1, redCar3, blackCar4],
//     [blackCar2, redCar3, blueCar4],
//     [blackCar1, blueCar2],
//     [redCar3, blackCar4],
//     [redCar2, blueCar4],
//     [redCar1, blackCar3],
//     [blackCar1, blueCar4],
//     [blueCar1],
//     [redCar2],
//     [blackCar3],
//     [redCar4]
// ]
// grab the y of redCard4 and move it down lane 4 
// create a pause after. Maybe use setTimeout or setInterval?
// grab the y of blueCar 3 and move it down lane 3 

//red car appears at the top
// red car update function moves car down by grabbing y and adding 1
//once red car get to the bottom send it back to the top
//find a better way than a for loop maybe a forEach? to get car to reset at the top
// once red card gets to 90px down the canvas call update function on blue car 
//set different speed values to each car?

//



// let randoCars = randomCarArray()

// const randomCarArray=()=>{
//     let randoCars= randomCars[Math.floor(Math.random()*randomCars.length)]
    // console.log(randoCars)
    // randoCars.forEach(i.render())
    // for (let i=0; i<randoCars.length; i++){
    //     randoCars[i].render()
        // randoCars[i].y +=10 
        // ctx.clearRect(0,0,game.width, game.height)
        // requestAnimationFrame(randomCarArray)
        // setInterval(randomCarArray,1000)
        // ctx.clearRect(0,0,game.width, game.height)
        // clearInterval(30000)
        // requestAnimationFrame(randomCarArray)
//     }
//     return randoCars
// }
// const randoCars = randomCarArray()
// console.log(randoCars)
// console.log(randomCarArray())
// console.log(randomCarArray())
// console.log(randomCarArray())
// console.log(randomCarArray())
// console.log(randomCarArray())
// console.log(randomCarArray())
// console.log(randomCarArray())
// console.log(randomCarArray())
// console.log(randomCarArray())
// console.log(randomCarArray())
// console.log(randomCarArray())

// let gameSpeed = 3;

// setInterval(() => {
//   gameSpeed += 1;
//   if (gameSpeed > 9) {
//     gameSpeed = 9;
//   }
// }, 5000);


// let updateRandomCarPos = function(){
//     requestAnimationFrame(updateRandomCarPos)
//     // update()
//     // randoCars.update()
// }
// updateRandomCarPos()

//The gameLoop function will be what helps us create an animation effect 
//it also allows us to say what happens when and control those events to our liking
//this is how we utilize movement
// function update(){
//     ctx.clearRect(0,0,game.width, game.height)
//     randomCarArray().forEach(randomCarArray.y+=1)
//     // randoCars
    
//     // clearInterval(update)
// }
// requestAnimationFrame(update,60)

    // setInterval(gameLoop,10)
    //in here, we need to have our movement handler
    // document.addEventListener('keydown', movementHandler)




    // update()
    // randoCars.render()
    // if(randomCarArray()===[blueCar2, blackCar3]){
    //     blueCar2.render(), blueCar3.render()
    // } else if (randomCarArray()===[redCar1,blackCar2, blueCar4]){
    //     return redCar1.render(),blackCar2.render(),blueCar4.render()
    // } else if (randomCarArray()===[blueCar1, blackCar2 , redCar3]){
    //     return blueCar1.render(),blackCar2.render(),redCar3.render()
    // } else if (randomCarArray()===[blueCar1, redCar3, blackCar4]){
    //     return blueCar1.render(),redCar3.render(), blackCar4.render()
    // } else if (randomCarArray()===[blackCar2, redCar3, blueCar4]){
    //     return  blackCar2.render(),redCar3.render(),blueCar4.render()
    // } else if (randomCarArray()===[blackCar1, blueCar2]){
    //     return  blackCar1.render(),blueCar2.render()
    // } else if (randomCarArray()===[redCar3, blackCar4]){
    //     return redCar3.render(),blackCar4.render()
    // } else if (randomCarArray()===[redCar2, blueCar4]){
    //     return redCar2.render(),blueCar4.render()
    // } else if (randomCarArray()===[redCar1, blackCar3]){
    //     return redCar1.render(),blackCar3.render()
    // } else if (randomCarArray()===[blackCar1, blueCar4]){
    //     return blackCar1.render(),blueCar4.render()
    // } else if (randomCarArray()===[blueCar1]){
    //     return blueCar1.render()
    // }else if (randomCarArray()===[redCar2]){
    //     return redCar2.render()
    // }else if (randomCarArray()===[blackCar3]){
    //     return blackCar3.render()
    // }else {
    //     return redCar4.render()
    // }
      
// document.getElementById('container').style.backgroundColor ='black'
//         document.getElementById('container').innerHTML=`<img id="donut-gif-1" src="https://media.giphy.com/media/U7PwlrLCvk0Zoviyht/giphy.gif" /> <img id="donut-gif-2" src="https://media.giphy.com/media/U7PwlrLCvk0Zoviyht/giphy.gif" /> <h1 id="winner">Winner Winner Chicken Dinner!</h1> <audio controls autoplay> id="homer-win-voice" <source src="audio/Homer Simpson _ The Simpsons I win.mp3" type="audio/mpeg"></audio> <img id="simpson-gif" src="https://media.giphy.com/media/ZCldwd8JpfXgY/giphy.gif"/>`
    // blueCar1.render()
    // blueCar2.render()
    // blueCar3.render()
    // blueCar4.render()

    // blackCar1.render()
    // blackCar2.render()
    // blackCar3.render()
    // blackCar4.render()

    // redCar1.render()
    // redCar2.render()
    // redCar3.render()
    // redCar4.render()


    
    



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

  




// let offset =0
// function draw(){


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
//    draw()

//     function moveLine(){
//         offset++
//         if(offset >16){
//          offset=0
//         }
//         draw()
//      setTimeout(moveLine, 25)
//     }
//     moveLine()
    
// })
// function drawDashedLine(pattern) {
//     ctx.beginPath();
//     ctx.setLineDash(pattern);
//     ctx.moveTo(0, y);
//     ctx.lineTo(300, y);
//     ctx.stroke();
//     y += 20;
//   }
//   let y = 15;
//   drawDashedLine([10, 10]);


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