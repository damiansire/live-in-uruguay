import React from 'react'
import Promotion from './promotion'
import ItauBeneficit from "../../public/data/itau.json"

const AllPromotions = () => {
    console.log(ItauBeneficit)
    return (
        <div className="grid grid-cols-12 gap-3">
        {
            ItauBeneficit.map((beneficit) => {
                return(
                <div className="col-span-1">
                    <Promotion beneficit={beneficit} />
                </div>) 
            })
        }
        </div>
    )
}

export default AllPromotions
