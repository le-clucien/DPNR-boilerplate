import React from "react"

import { VectorsResults } from "./components/vectors"
import { HeaderMenu } from "./components/menu"
import { ReturnButton } from "./components/buttons"
import { PageContainer } from "./components/containers"
import { ResultsSearchBar } from "./components/searchBars"
import { ResultsFilters } from "./components/filters"
import { FlatResults } from "./components/flatResults"

/**
 * Results()
 * Generic results page
 */
export function	Results()
{
	let	filters = {
		priceLow: 0,
		priceHigh: 500000
	}

	return	<div>
				{/* To fix */}
				<VectorsResults />
				<HeaderMenu activeName='Acheter'/>
				<PageContainer>	

					<ReturnButton />
					<ResultsSearchBar />
					<ResultsFilters />

					{/* <FlatResults flatIndex={0} /> */}

				</PageContainer>
			</div>
}