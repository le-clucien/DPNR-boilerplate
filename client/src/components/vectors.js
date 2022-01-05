import React from 'react'
import { Container } from 'semantic-ui-react'

/**
 * VectorResults
 * Design element in the backgroud of the Results pages
 */
export function	VectorsResults()
{
	const	leftStyle = {
		position: 'absolute',
		height: '691px',
		width: '1205px',
		left: '-680px',
		top: '30px',
		zIndex: '-1'
	}
	const	leftName = 'resultsTopLeft.png'

	const	rightStyle = {
		position: 'absolute',
		width: '898px',
		height: '967px',
		right: '-10px',
		top: '-550px',
		zIndex: '-1'
	}
	const	rightName = 'resultsTopRight.png'

	return	<div className='noselect' >
				<img
					src={ '/images/components/' + leftName }
					style={ leftStyle } alt=''
				/>
				<img
					src={ '/images/components/' + rightName }
					style={ rightStyle } alt=''
				/>
			</div>
}
