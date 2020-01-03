	console.log('Whack A Mole');


	class Square {
		constructor() {
			
			
			this.clicked = false

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
			this.timeInterval()
		},
		displayConsole(){
			//takes away the intro screen 
			let showInfoStatus = document.getElementById("intro")
			showInfoStatus.hidden = true

			//displays the game screen
			showStatus = document.getElementById('container')
			showStatus.hidden = false

			this.print()
			this.createSquares()
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


		createSquares(){
			for(let i = 0; i < 9; i++) {

				const sq = new Square()

				this.squares.push(sq)
			}
			this.printSquares()
			
		},
		printSquares(){
			const container = document.getElementById('squareHolder')
			for (let i = 0; i<this.squares.length; i++){
				let newDiv = document.createElement("div");
				newDiv.classList.add('square')
				newDiv.setAttribute('id', i)
				console.log(this.squares[i]);
				//newDiv.setAttribute('background', 'color: red')
				newDiv.style.color = "red"
				container.appendChild(newDiv)


			}
			//this.displayMole()	
		},
		displayMole(){
			this.randNum = Math.floor(Math.random()*9)
			this.moleLocation = document.getElementById(this.randNum)

			console.log("moleLocation ", this.moleLocation);

			this.moleLocation.style.backgroundImage = "url(https://cdn.imgbin.com/4/0/4/imgbin-mole-cartoon-panda-8a4dFFWDLpYvyvL3P6GvJJWq3.jpg)"
			// if(this.moleLocation !== this.moleLocation){
			// 	this.clearMole()
			// }
		},
		clearMole(){
			this.moleLocation.style.backgroundImage = "none"
		},
		timeInterval(time){
			this.timerID = setInterval(() => {
				this.time--

				if(this.time % 2 == 0){
					this.displayMole()

				}
				else {

					this.clearMole()
				}

				if(this.time == 0){
					
					clearInterval(this.timerID)
				}
				this.print()
			}, 1000)
		},
	}
	
	game.startGame()
	document.getElementById('submit').addEventListener('click', function(){	
		game.displayConsole()
	})
	
