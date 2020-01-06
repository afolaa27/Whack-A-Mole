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
			playerOneScore: 0,
			playerTwoScore: 0,
			turn: 'playerOne',
			scoreLocator: "",
			timeID: "",
			difficulty: 0,
			squares : [],
			randNum: 0,
			moleLocation: 0,
			showStatus: "",
			showInfoStatus: "",
			showEnd: "", 
			showWinLvl: "",
			UserName: "",
			userTwo: " ",

			

			startGame(){
				this.showStatus = document.getElementById('container')
				this.showStatus.hidden = true
				this.showEnd = document.getElementById('End')
				this.showEnd.hidden = true
				this.showWinLvl = document.getElementById('winLevelChecker')
				this.showWinLvl.hidden = true
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

				this.UserName = document.getElementById("name").value
				let user = document.getElementById("userN")
				this.userTwo = document.getElementById("playerTwoName").value
				let secondUsername = document.getElementById('userN')
				timer.innerText = this.time
				
				let timeDisplay = document.getElementById('timer')

				this.scoreLocator = document.getElementById('score')


				if (this.turn === 'playerOne'){
					user.innerText = this.UserName
					this.scoreLocator.innerText = this.score
				}else if (this.turn === 'playerTwo'){
					
					secondUsername.innerText = this.userTwo
					this.scoreLocator.innerText = this.score
				}
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

				if(this.time % 2 === 1){
					this.displayMole()

				}
				else {
					this.clearMole()
				}

				if(this.time === 0){

					clearInterval(this.timerID)
					if (this.turn === 'playerOne'){

						this.playerOneScore = this.score
						console.log(this.playerOneScore);
						this.showEnd.hidden = false
					}
					else if (this.turn === 'playerTwo'){
						this.playerTwoScore = this.score
						console.log(this.playerTwoScore);
						
						this.displayScoreBoard()
						this.showEnd.hidden = true
					}
					this.showStatus.hidden = true

				}
				this.print()
			}, 1000)
		},
		displayScoreBoard(){


			let dispPlayerOneScore = document.getElementById('pOneScore')
			let dispPlayerTwoScore = document.getElementById('pTwoScore')

			let firstPlayerScoreBoard = this.UserName +" : " + this.playerOneScore
			dispPlayerOneScore.innerText = firstPlayerScoreBoard
			let secondPlayerScoreBoard = this.userTwo + " : " + this.playerTwoScore
			dispPlayerTwoScore.innerText = secondPlayerScoreBoard
			this.showWinLvl.hidden = false
			this.showEnd.hidden = true
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
			this.turn = 'playerTwo'
			this.time = 30
			this.score = 0
			this.clearMole()
			this.showEnd.hidden = true
		},
		checkWinner(){

			if (this.playerOneScore > this.playerTwoScore){

			}
			else {

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
		
	} )
	document.getElementById('continue').addEventListener('click', function(){
		
		game.restart()	 
		game.timeInterval()
	})
	document.getElementById('buttonsR').addEventListener('click', function(){
		game.restart()	
		
	})

