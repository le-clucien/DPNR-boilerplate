import React, { useState } from "react"
import { Container, Menu, Image, Button } from "semantic-ui-react"

/**
 * HeaderMenu()
 * Main menu of the website
 */
export function	HeaderMenu( props )
{
	const	divStyle = {
		marginBottom: '100px',
		position: 'fixed',
		zIndex: 10
	}
	const	backgroudStyle = {
		/* Rectangle 206 */
		position: 'fixed',
		width: '100%',
		height: '70px',
		left: '0px',
		top: '0px',
		background: '#FFFFFF',
		boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.15)'
	}
	const	menuStyle = {
		marginTop: '2px'
	}
	
	const	[ activeItem, setActiveItem ] = useState( props.activeName )
	const	menuItems = [ 
		{
			name: 'Vendre', 
			url: 'resultats'
		},
		{
			name: 'Acheter'
		},
		{
			name: 'Estimer'
		},
		{
			name: 'Nous Rejoindre'
		}
	]

	return	<div style={ divStyle }>
				<div style={ backgroudStyle } ></div>
				< Menu
					fixed='top'
					secondary
					size='huge'
					style={ menuStyle }
				>
					<Container>
						<Menu.Item
							disabled
							name='vimot'
						>
							<Image src='images/vimot.png' size='small' />
						</Menu.Item>

						<Menu.Menu position='right'>

							{ menuItems.map( item => (
								<Menu.Item
									name={ item.name }
									active={ activeItem === item.name }
									onClick={ 
										() => setActiveItem( item.name )
									}
								key={item.name} >
									{ item.name }
								</Menu.Item>
							) ) }

							<Menu.Item>
								<Button primary
									name='log'
									active= {activeItem === 'log' }
									onClick={ () => setActiveItem( 'log' ) }
								>
									Se connecter
								</Button>
							</Menu.Item>
						</Menu.Menu>
					</Container>
				</Menu>
			</div>
}
