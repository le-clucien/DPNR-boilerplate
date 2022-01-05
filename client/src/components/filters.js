
import React, { useState } from "react"
import { Button, Grid, Icon, Segment } from "semantic-ui-react"

function	FilterSegment( props )
{
	const	divStyle = {
		height: '110px',
		background: '#FFFFFF',
		border: '1px solid #999999',
		boxSizing: 'borderBox',
		borderRadius: '4px'
	}
	const	contentStyle = {
		padding: '10px',
		// fontFamily: 'Work Sans',
		fontStyle: 'normal',
		fontWeight: 'bold'
	}
	const	titleStyle = {
		fontSize: '16px',
		lineHeight: '20px',
		/* identical to box height, or 125% */
		color: ( props.titleColor ? props.titleColor : '#689191' )
	}
	const	childrenStyle = {
		marginTop: '10px',
		color: ( props.textColor ? props.textColor : '#689191' )
	}

	return	<div style={ divStyle } >
				<div style={ contentStyle }>
					<div style={ titleStyle } >
						{ props.title }
					</div>
					<div style={ childrenStyle }>
						{ props.children }
					</div>
				</div>
			</div>
}

export function	ResultsFilters()
{
	const	gridStyle = {
		margin: '15px'
	}

	const	chambresButtons = [ '1', '2', '3', '4', '5+' ]
	const	[ activeChambre, setActiveChambre ] = useState( null )

	return	<Grid style={ gridStyle }>
				{/* BUDGET */}
				<Grid.Column width={ 4 }>
					<FilterSegment title='BUDGET'>
					</FilterSegment>
				</Grid.Column>	

				{/* SURFACE */}
				<Grid.Column width={ 4 }>
					<FilterSegment title='SURFACE'>
					</FilterSegment>
				</Grid.Column>

				{/* CHAMBRES */}
				<Grid.Column width={ 4 }>
					<FilterSegment title='CHAMBRES'>

						<Grid columns='6' >
							{ chambresButtons.map( chambre => (
								<Grid.Column>
									<Button basic icon
										size='small'
										active={ activeChambre === chambre }

										onClick={ () => (
											setActiveChambre( chambre )
										) }
									>
										{ chambre }
									</Button>
								</Grid.Column>
							) ) }
						</Grid>

					</FilterSegment>
				</Grid.Column>

				<Grid.Column width={ 4 } textAlign='center' className='pointer'>
					<FilterSegment textColor='#999999' >
						PLUS DE FILTRES <Icon name='angle right' />
					</FilterSegment>
				</Grid.Column>
			</Grid>
}
