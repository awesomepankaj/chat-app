import React, { Component } from 'react';

export default class SmokeSignal extends Component {

	render() {
		console.log(this.props.selectedSmokeSignal)
		return (
			<div className="smokeSignal">
				<div>
					<h4 className="welcome-text">Welcome to Lifemaker</h4>
				</div>
			</div>
		)
	}
}