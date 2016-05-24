import React, { Component } from 'react'
import _ from 'lodash'
import RaisedButton from 'material-ui/RaisedButton';

import SmokeSignals from './SmokeSignals'
import SmokeSignal from './SmokeSignal'


export class Home extends Component {

	constructor(props) {
		super(props)

		this.state = {
			selectedSmokeSignal: {},
			smokeSignals: [{
				id: 1,
				title: 'Life is Comming',
				description: 'This is the life that I remembered after my death',
			},
			{
				id: 2,
				title: 'Some guys are great in my life',
				description: "I don't want to tell the name of guys",
			}],
			blurTypes: {
				offer: true,
				ask: true,
				share: true,
				callIn: true
			},
			smokeTypes: [{
				id: 'offer',
				title: 'Offer',
				description: 'Offer your services or resources eg. contribute towards organization of HH, take a talk or conduct a yoga class.',
				bgColor: '#9D55A0',
			},
			{
				id: 'ask',
				title: 'Ask',
				description: 'Ask for help from the help with community eg. look for help with the kitchen or has someone seen the TPLINK routers?',
				bgColor: '#D64509',
			},
			{
				id: 'share',
				title: 'Share',
				description: "Share an observation or learning eg. I discovered a new bathing spot by the river or someone's tent fell on the ground",
				bgColor: '#0991D6'
			},
			{
				id: 'callIn',
				title: 'Call-in',
				description: 'Gather people eg. for talks, demos, tribevibe or a ritual by the river',
				bgColor: 'rgb(150, 131, 29)'
			}],
			screen: 1,
		}
	};

	openSmokeSignal = (smokeSignal) => {
		this.setState({
			selectedSmokeSignal: smokeSignal
		})
	};

	onSelectType = (type) => {
		_.keys(this.state.blurTypes).map((blurType) => {
			if(blurType === type) {
				this.state.blurTypes[blurType] = false
			} else {
				this.state.blurTypes[blurType] = true
			}
		})
		this.forceUpdate()
	};


	showNextScreen = () => {
		if(this.state.screen == 3) {
			//document.getElementById('modal1').closeModal()
			$('#modal1').closeModal();
		} else {
			document.getElementById("createSmokeScreen" + this.state.screen).className = "hideSmokeScreen"
			document.getElementById("createSmokeScreen" + (this.state.screen + 1)).className = "showSmokeScreen"
			this.setState({
				screen: this.state.screen + 1
			})
		}
	};

	render() {
		return (
			<div>
				<div className="col s12 m2 backgroundCon">
    		</div>
    		<div className="appCont">	
      		<SmokeSignals smokeSignals={this.state.smokeSignals} openSmokeSignal={this.openSmokeSignal}/>
      		<SmokeSignal selectedSmokeSignal={this.state.selectedSmokeSignal}/>
			  </div>
			</div>
		)
	}
}