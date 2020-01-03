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
			scoreLocator: "",
			timeID: "",
			difficulty: 0,
			squares : [],
			randNum: 0,
			moleLocation: 0,
			showStatus: "",
			showInfoStatus: "",
			showEnd: "",
			

			startGame(){
				this.showStatus = document.getElementById('container')
				this.showStatus.hidden = true
				this.showEnd = document.getElementById('End')
				this.showEnd.hidden = true
			},
			displayConsole(){
				//takes away the intro screen 
				this.showInfoStatus = document.getElementById("intro")
				this.showInfoStatus.hidden = true

				//displays the game screen
				this.showStatus = document.getElementById('container')
				this.showStatus.hidden = false

				this.print()
				this.printSquares()
			},
			print(){

				let UserName = document.getElementById("name").value
				let user = document.getElementById("userN")

				//gets userName location from input box
				

				//displays the username in the game console
				user.innerText = UserName
				//displays the difficulty in the game console
				

				//gets the timer location
				let timeDisplay = document.getElementById('timer')

				timer.innerText = this.time

				this.scoreLocator = document.getElementById('score')
				this.scoreLocator.innerText = this.score
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
					this.showStatus.hidden = true
					this.showEnd.hidden = false
				}
				this.print()
			}, 1000)
		},
		checkHit(loc){
			if (loc === this.moleLocation){
				this.score+=10
				this.print()
			}
			else {
				this.score -=5
				this.print()
			}
		},
		restart(){
			this.time = 30
			this.score = 0
			this.showEnd.hidden = true

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
	document.getElementById('continue').addEventListener('click', function(){
		game.restart()	
		game.timeInterval()
	})
	document.getElementById('buttonsR').addEventListener('click', function(){
		game.restart()	
		
	})

