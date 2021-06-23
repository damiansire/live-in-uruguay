import React from "react"

const CardsSelectPreview = props => {
  return (
    <div className="justify-center">
      <div className="text-center font-bold text-2xl">{props.title}</div>
      <div className="grid grid-cols-12 justify-center">
        {props.cardsImg.map(card => {
          return (
            <div className="col-span-6 md:col-span-2 m-2">
              <div className="text-center mb-2 font-semibold">{card.Name}</div>
              <img src={card.ImgSrc}></img>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CardsSelectPreview
