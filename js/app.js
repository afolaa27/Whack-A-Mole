

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
			levelSpeed: 800,
			level : 1,
			pOneLvlWon : 1,
			pTwoLvlWon : 1,
			finalWin: "",
			endButtonDiv: "",


			startGame(){
				this.showStatus = document.getElementById('container')
				this.showStatus.hidden = true
				this.showEnd = document.getElementById('End')
				this.showEnd.hidden = true
				this.showWinLvl = document.getElementById('winLevelChecker')
				this.showWinLvl.hidden = true
				this.finalWin = document.getElementById('gameWinner')
				this.finalWin.hidden = true
				/*this.endButtonDiv = document.getElementById('buttonDivEnd')
				this.endButtonDiv.hidden = true*/
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
				let levelLocator = document.getElementById('level')
				levelLocator.innerText = this.level 

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
					newDiv.setAttribute('id', `h${i}`)

					//console.log(this.squares[i]);
					container.appendChild(newDiv)
					console.log(container);

				}
			},
			displayMole(){
				this.randNum = Math.floor(Math.random()*8)
				let value = "h"
				let locas = value+this.randNum
				console.log(locas);
				this.moleLocation = document.getElementById(locas)
				//console.log("moleLocation ", this.moleLocation);


				this.moleLocation.style.backgroundImage = "url(https://www.stickpng.com/assets/images/59aeb64032bcd87615d27983.png)"
				


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
						this.checkWinner()
						this.showEnd.hidden = true
					}
					this.showStatus.hidden = true

				}
				this.print()
			}, this.levelSpeed)
		},
		displayScoreBoard(wins){
			console.log("i got here : ", wins);
			let dispPlayerOneScore = document.getElementById('pOneScore')
			let dispPlayerTwoScore = document.getElementById('pTwoScore')

			let firstPlayerScoreBoard = this.UserName +" : " + this.playerOneScore
			dispPlayerOneScore.innerText = firstPlayerScoreBoard
			let secondPlayerScoreBoard = this.userTwo + " : " + this.playerTwoScore
			dispPlayerTwoScore.innerText = secondPlayerScoreBoard

			let levelWinnerLocation = document.getElementById("levelWinnersName")
			let lvlwinner = wins +  " wins this level"
			levelWinnerLocation.innerText =  lvlwinner

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
			//this.turn = 'playerOne'

			this.time = 30
			this.score = 0
			this.clearMole()
			this.showEnd.hidden = true
		},
		checkWinner(){

			if (this.playerOneScore > this.playerTwoScore){
				game.displayScoreBoard(this.UserName)
				this.pOneLvlWon +=1
				this.levelIncrease()
			}
			else if (this.playerOneScore === this.playerTwoScore) {
				let tie = "Its a tie"
				game.displayScoreBoard(tie)

			}
			else{
				game.displayScoreBoard(this.userTwo)
				this.levelIncrease()
				this.pTwoLvlWon +=1
			}

		},
		levelIncrease(){
			this.levelSpeed-=200
			this.level+=1
			this.checkEndGame()

		},
		checkEndGame(){
			let champion = ""
			champion =document.getElementById('finalWinner')
			let roundWon = document.getElementById('roundsWon')

			if (this.level > 3){
				this.showEnd.hidden = true
				this.showWinLvl.hidden = true
				this.finalWin.hidden = false
				if (this.pOnelvlWon > this.pTwoLvlWon){
					
					champion.innerText = this.UserName + " WINS THE GAME"
					roundWon.innerText = this.pOneLvlWon + " level(s) Won "
					this.endButtonDiv.hidden = false

				}else{
					champion.innerText = this.userTwo + " WINS THE GAME"
					roundWon.innerText = this.pTwoLvlWon + " level(s) Won "
					this.endButtonDiv.hidden = false
				}
			}
			let celebrationDivLocator = document.getElementById('gameWinner')
			celebrationDivLocator.style.backgroundImage = "url(https://media.giphy.com/media/5jT0jaNDsM6Ik7X9yq/giphy.gif)"
			
		},
		changeTurn(){
			if (this.turn == "playerOne"){
				this.turn = "playerTwo"
			}
			else{
				this.turn = "playerOne"
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
		game.changeTurn()
		game.timeInterval()
	})
	document.getElementById('buttonsR').addEventListener('click', function(){
		game.restart()	
		
	})
	document.getElementById('continues').addEventListener('click', function(){
		game.restart()
		game.changeTurn()

		game.showWinLvl.hidden = true
		game.timeInterval()
	})
	document.getElementById('buttonsRestart').addEventListener('click', function(){
		this.level = 1
		game.restart()
		this.levelSpeed = 800
		this.showInfoStatus.hidden = false
		game.timeInterval()
		this.endButtonDiv.hidden = true
		
	})


