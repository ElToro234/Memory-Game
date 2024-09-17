import { useEffect, useState } from 'react'
import './App.css'
import SingleCard from './components/SingleCard'

const cardImages = [
  { "src": "/img/IMG_1.jpeg", matched : false  },
  { "src": "/img/IMG_2.jpeg", matched : false },
  { "src": "/img/IMG_3.jpeg", matched : false },
  { "src": "/img/IMG_4.jpeg", matched : false },
  { "src": "/img/IMG_5.jpeg", matched : false },
  { "src": "/img/IMG_6.jpeg", matched : false }
]

function App() {
  const[cards, setCards] = useState([])
  const[turns, setTurns] = useState(0)
  const[choiceOne, setChoiceOne] = useState(null);
  const[choiceTwo, setChoiceTwo] = useState(null);

  //Shuffle the cards
  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({...card, id: Math.random()}))

    setCards(shuffleCards)
    setTurns(0)
  }

  //handles choice selection
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  //Compare if the cards are the same
  useEffect (() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        setCards (prevCards => {
          return prevCards.map ( card => {
            if (card.src === choiceOne.src) {
              return {...card , matched : true}
            } else {
              return card
            }
          })
        })
        resetTurn()
      }else{
        resetTurn()
      }
    }
  }, [choiceOne, choiceTwo])

  console.log(cards)

  //Resets after a choice is made
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
  }

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={ shuffleCards }>New Game</button>
      <div className = "card-grid" >
        {cards.map (card => (
          <SingleCard 
          key = {card.id} 
          card = { card } 
          handleChoice = {handleChoice} 
          flipped = {card === choiceOne || card === choiceTwo || card.matched}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
