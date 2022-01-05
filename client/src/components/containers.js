import React from "react"
import { Container } from "semantic-ui-react"

/**
 * PageContainer() 
 * Default container for all page contents
 */
export function	PageContainer( props )
{
	const	containerStyle = {
		marginTop: '100px'
	}

	return	<Container style={ containerStyle } >
				{ props.children }
			</Container>
}
