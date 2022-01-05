import ReactDOM from "react-dom"

/**
 * renderById()
 * @param content React component to render
 * @param id html ID to render to
 * Ease the call to ReaactDOM.render.
 */
export function		renderById(content, id)
{
	ReactDOM.render(
		content,
		document.querySelector('#' + id)
	)
}

/**
 * sleep()
 * @param ms time to wait in millisecond
 * @returns a Promise resolving itself ms milliseconds after call
 */
export function sleep(ms) {
	return new Promise( resolve => setTimeout(resolve, ms) );
}
