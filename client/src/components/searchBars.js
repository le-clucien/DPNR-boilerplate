import React, { useState } from "react"
import { Search } from "semantic-ui-react"

export let		flatsData = [
	{
		id: '001',
		priceLow: 500000,
		priceHigh: 505000,
		title: 'Appartement 3p. 55m2',
		address: 'Avenue des Ternes, 75017 Paris, France',
		bedrooms: 1,
		bathrooms: 1,
		watercloset: 1,
		floor: 3,
		floorsInBuilding: 4,
		description: 'L’entrée donne sur un spacieux séjour et une cuisine ouverte. Deux grandes fenêtres donnant sur une vue ainsi que les 3,2m de hauteur sous plafond procurent à la pièce une incroyable luminosité et de beaux volumes.'
	}
]

export function	ResultsSearchBar(  )
{
	const	inputStyle = {
		margin: '15px'
	}

	return <Search style={ inputStyle } icon='' />
}
