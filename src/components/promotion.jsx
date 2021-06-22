import React from 'react'

const Promotion = (props) => {
    return (
        <div>
            <div class="flex items-center flex-col">
					<img class="h-20 w-24 mb-1"
						src={props.beneficit.imgUrl} />
					<div class="flex flex-col p-1">
						<span class="font-light text-sm">{props.beneficit.title}</span>
					</div>
				</div>
        </div>
    )
}

export default Promotion
