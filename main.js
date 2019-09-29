const btnGuess = document.querySelector('.guessButton')
const message = document.querySelector('.message')
const input = document.querySelector('.number')
let inputValue = document.querySelector('.number').value
let randomNumber = Math.floor(Math.random() * 10)
let myArray = []
let pastGuesses = document.querySelector('.pastGuesses')
let max = 10
const count = document.querySelector('.count')
console.log(randomNumber)

numberGuessMax(myArray.length)

btnGuess.addEventListener('click', () => {
  inputValue = document.querySelector('.number').value

  if (!inputValue == ``) myArray.push(inputValue)
  if (myArray.length >= 10) {
    btnGuess.disabled = true
    alert('Doan hoai khong trung!')
  }

  numberGuessMax(myArray.length)
  pastGuesses.innerText = `Past guesses: ${myArray.join(', ')}`
  displayResult()
})

function numberGuessMax(arr) {
  count.innerText = `So lan doan con lai: ${max - arr}`
}

function displayResult() {
  if (inputValue === ``) {
    alert('Nhap so vao')
  } else if (inputValue < randomNumber) {
    message.innerText = `Doan cao hon`
    message.style.color = `red`
  } else if (inputValue > randomNumber) {
    message.innerText = `Doan thap hon`
    message.style.color = `red`
  } else if (inputValue == randomNumber) {
    message.innerText = `Dung roi`
    message.style.color = `green`
    btnGuess.disabled = true
  }
}
