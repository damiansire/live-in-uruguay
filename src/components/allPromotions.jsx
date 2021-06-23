import React from "react"
import Promotion from "./promotion"
import ItauBeneficit from "../../static/itau.json"

const AllPromotions = () => {
  return (
    <div className="grid grid-cols-12 gap-3">
      {ItauBeneficit.map(beneficit => {
        return (
          <div className="col-span-1">
            <Promotion beneficit={beneficit} />
          </div>
        )
      })}
    </div>
  )
}

export default AllPromotions
