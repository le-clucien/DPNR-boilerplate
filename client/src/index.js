import React from "react"
import { renderById } from './utils/utils'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { Results } from "./results"

export function	App()
{	
	return	<Router>
				<Switch>
					<Route path="/resultats" component={ Results } />
					
				</Switch>
			</Router>
}

renderById( <App/>, 'root' )