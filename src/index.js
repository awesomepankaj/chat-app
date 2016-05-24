import React from 'react';
import { render } from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';


injectTapEventPlugin();

import { Home } from './components/App';


class App extends React.Component {
	render() {
		return (
			<div>
		  	<MuiThemeProvider muiTheme={getMuiTheme()}>
		    	<Home />
				</MuiThemeProvider>
			</div>
		)
	}
}

render(<App />, document.getElementById('root'));
