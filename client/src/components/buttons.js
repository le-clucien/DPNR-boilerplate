import React from "react"
import { Breadcrumb, Icon } from "semantic-ui-react"

/**
 * ReturnButton()
 * A styled return button using the Breadcrumb template
 */
export function	ReturnButton( props )
{
	const	buttonStyle = {
		marginBottom: '15px'
	}

	return	<Breadcrumb style={ buttonStyle } >
				<Breadcrumb.Section
					link
					onClick={ () => console.log( "clicked" ) }
				>
					<Icon name='arrow left' />
					RETOUR
				</Breadcrumb.Section>
			</Breadcrumb>
}
