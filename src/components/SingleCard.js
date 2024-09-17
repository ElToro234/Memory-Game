import './SingleCard.css'

export default function SingleCard( { card, handleChoice, flipped}) {

    const handleClick = () => {
        handleChoice (card)
    }

    return (
        <div className = "card" key = { card.id }>
            <div className = {flipped ? "flipped" : ""}> 
            <img className="front" src = {card.src} alt = "front card"/>
            <img className="back" onClick = {handleClick} src = "/img/cover.png" alt = "back card"/>
          </div>
        </div>
    )
}
