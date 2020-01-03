	console.log('Whack A Mole');


	class Square {
		constructor() {
			this.clicked = false
		} setClicked(){
			this.clicked = true
		}
	}
	const game = {
		time: 30,
		score: 0,
		timeID: "",
		difficulty: 0,
		squares : [],
		randNum: 0,
		moleLocation: 0,
		

		startGame(){
			showStatus = document.getElementById('container')
			showStatus.hidden = true
			
		},
		displayConsole(){
			//takes away the intro screen 
			let showInfoStatus = document.getElementById("intro")
			showInfoStatus.hidden = true

			//displays the game screen
			showStatus = document.getElementById('container')
			showStatus.hidden = false

			this.print()
			this.printSquares()
		},
		print(){

			let UserName = document.getElementById("name").value
			let user = document.getElementById("userN")
			let diffLocation = document.getElementById("difficulty")
			//gets userName location from input box
			this.difficulty = document.getElementById("number").value

			//displays the username in the game console
			user.innerText = UserName
			//displays the difficulty in the game console
			diffLocation.innerText = this.difficulty

			//gets the timer location
			let timeDisplay = document.getElementById('timer')

			timer.innerText = this.time
		},
		
		printSquares(){
			const container = document.getElementById('squareHolder')
			for (let i = 0; i<this.squares.length; i++){
				let newDiv = document.createElement("div");
				newDiv.classList.add('square')
				newDiv.setAttribute('id', i)
				//console.log(this.squares[i]);
				container.appendChild(newDiv)
			}
		},
		displayMole(){
			this.randNum = Math.floor(Math.random()*8)
			this.moleLocation = document.getElementById(this.randNum)
			//console.log("moleLocation ", this.moleLocation);
			this.moleLocation.style.backgroundImage = "url(https://c7.uihere.com/files/447/597/308/whac-a-mole-crappy-flappy-moles-android-video-game-android-thumb.jpg)"
			


		//console.log(this.moleLocation.id);
		
	},
	clearMole(){
		this.moleLocation.style.backgroundImage = "none"
	},
	timeInterval(time){
		this.displayConsole()
		this.timerID = setInterval(() => {
			this.time--

			if(this.time % 2 === 0){
				this.displayMole()

			}
			else {
				this.clearMole()
			}

			if(this.time === 0){

				clearInterval(this.timerID)
			}
			this.print()
		}, 1000)
	},
	checkHit(loc){
		if (loc === this.moleLocation){
			this.score+=10
		}
		
	}
}

game.startGame()
document.getElementById('submit').addEventListener('click', function(){	
	game.timeInterval()
})
const locateDiv = document.querySelector("#squareHolder")
locateDiv.addEventListener('click', (e) =>{
	let locator = e.target
	game.checkHit(locator)
	//console.log("this is my location ", locator.id);
} )

