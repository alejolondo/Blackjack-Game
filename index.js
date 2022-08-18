let userdata = {
    name: "Usuario",
    chips: 900
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardEl = document.getElementById('card-el')


let userEl = document.getElementById('user-el')
userEl.textContent = `${userdata.name}:  $${userdata.chips}`

function getRandomCard() {

    let randomNum = Math.ceil(Math.random()*13)
    if(randomNum === 1){
        return 11
    } else if ( randomNum > 10){
        return 10
    }else {
        return randomNum
    }

}

function startGame(){
    isAlive = true 
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardEl.textContent = "Cards: "

    for(let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " "   
    }
    sumEl.textContent = "Sum: "  + sum
    
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
   
    messageEl.textContent =message

    
}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
        var card = getRandomCard()
        cards.push(card)
    
        sum += card 
    
        renderGame()
    }

}