import React from "react"
import Header from "../components/header"
import CardsSelectPreview from "../components/cardsSelectPreview"
import latamPass from "../../static/cards/cardsImg/itau-visa-latam-pass.json"
import visaVolar from "../../static/cards/cardsImg/itau-visa-volar.json"
const SelectCard = () => {
  return (
    <>
      <Header />
      <div className="bg-grisecito">
        <div>
          <CardsSelectPreview cardsImg={visaVolar} title="Visa Volar Itau" />
          <CardsSelectPreview
            cardsImg={latamPass}
            title="Visa LATAM Pass Itau"
          />
        </div>
      </div>
    </>
  )
}

export default SelectCard
