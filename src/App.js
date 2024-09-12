import { useState } from 'react'
import './App.css';

const cardImages = [
  { "src": "/img/IMG_1.jpeg"},
  { "src": "/img/IMG_2.jpeg"},
  { "src": "/img/IMG_3.jpeg"},
  { "src": "/img/IMG_4.jpeg"},
  { "src": "/img/IMG_5.jpeg"},
  { "src": "/img/IMG_6.jpeg"}
]

function App() {
  const[cards, setCards] = useState([])
  const[turns, setTurns] = useState(0)

  //Shuffle the cards
  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({...card, id: Math.random()}))

    setCards(shuffleCards)
    setTurns(0)
  }
    console.log(cards, turns)

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={ shuffleCards }>New Game</button>
      <div className = "card-grid" >
        {cards.map (card => (
          <div className = "card" key = {card.id} > 
            <img className="front" src = {card.src} alt = "front card"/>
            <img className="back" src = "/img/cover.png" alt = "back card"/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
