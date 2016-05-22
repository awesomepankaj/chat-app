import React, { Component } from 'react';
import _ from 'lodash';

export default class SmokeSignal extends Component {

	render() {
		console.log(this.props.selectedSmokeSignal)
		return (
			<div className="smokeSignal">
				{_.isEmpty(this.props.selectedSmokeSignal) && 
					<div>
						<h4 className="welcome-text">Welcome to Lifemaker</h4>
					</div>
					||
					<div>
						<p className="listItemTitle">{this.props.selectedSmokeSignal.title}</p>
						<p className="listItemDescription">{this.props.selectedSmokeSignal.description}</p>
					</div>
				}
			</div>
		)
	}
}