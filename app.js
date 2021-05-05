document.addEventListener('DOMContentLoaded', () => {
  
  //array de cartas por duplicado
  const cardArray = [
    {
            name: 'aguero',
            img: 'images/aguero.png'
    },
    {
            name: 'aguero',
            img: 'images/aguero.png'
    },
    {
            name: 'maradona',
            img: 'images/maradona.png'
    },
    {
            name: 'maradona',
            img: 'images/maradona.png'
    },
    {
            name: 'messi',
            img: 'images/messi.png'
    },
    {
            name: 'messi',
            img: 'images/messi.png'
    },
    {
            name: 'ronaldinho',
            img: 'images/ronaldinho.png'
    },
    {
            name: 'ronaldinho',
            img: 'images/ronaldinho.png'
    },
    {
            name: 'ronaldo',
            img: 'images/ronaldo.png'
    },
    {
            name: 'ronaldo',
            img: 'images/ronaldo.png'
    },
    {
            name: 'tevez',
            img: 'images/tevez.png'
    },
    {
            name: 'tevez',
            img: 'images/tevez.png'
    }  
]

  //declaracion de constantes 
  cardArray.sort(() => 0.5 - Math.random())
  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  //funcion para crear el tablero
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //validacion para cartas iguales
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('Error, you have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('Correct, you earned a point')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('Incorrect, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congrats, you won!'
    }
  }

  //dar vuelta la carta
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})
