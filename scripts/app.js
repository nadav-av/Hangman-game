

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let game1


const render= ()=>{
    puzzleEl.innerHTML = ''
    guessesEl.textContent = game1.statusMessage

   const aux= game1.puzzle.split('')
   aux.forEach((letter)=>{
       const letterEl= document.createElement('span')
       letterEl.textContent= letter
       puzzleEl.appendChild(letterEl)
   })
}

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})

const startGame= async()=>{
    const puzzle= await (getPuzzle('2'))
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame() 




/*
getPuzzle('2').then((data)=>{
    console.log(data)
}).catch((err)=> {
    console.log(`ERROR: ${err}`)
})
*/



/*
getCurrentCountry().then((data)=>{
    console.log(data.name)

}).catch((err)=>{
    console.log(`ERROR: ${err}`)
})
*/