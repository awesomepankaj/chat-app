import React, { Component } from 'react'
import _ from 'lodash'

import SmokeSignals from './SmokeSignals'
import SmokeSignal from './SmokeSignal'

export class App extends Component {

	constructor(props) {
		super(props)

		this.state = {
			selectedSmokeSignal: {},
			smokeSignals: [{
				id: 1,
				title: 'Life is Comming',
				description: 'This is the life that I remembered after my death'
			},
			{
				id: 2,
				title: 'Some guys are great in my life',
				description: "I don't want to tell the name of guys"
			}]
		}
	};

	openSmokeSignal(smokeSignal) {
		this.setState({
			selectedSmokeSignal: smokeSignal
		})
	}

	render() {
		console.log(this.state.selectedSmokeSignal)
		return (
			<div>
				<div className="col s12 m2 backgroundCon">
    		</div>
    		<div className="appCont">
	    		<div>
		    		<div className="row">
				      <div className="col s12 m12">
				        <div className="card-panel white" style={{height: '580px', padding: 0}}>
				        	<div className="smokeSignalsCont">
				        		<SmokeSignals smokeSignals={this.state.smokeSignals} openSmokeSignal={this.openSmokeSignal}/>
				        		<SmokeSignal selectedSmokeSignal={this.state.selectedSmokeSignal}/>
				        	</div>
				        </div>
				      </div>
				    </div>
				  </div>
			  </div>
			</div>
		)
	}
}