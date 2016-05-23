import React, { Component } from 'react';
import _ from 'lodash';

export default class SmokeSignal extends Component {

	render() {
		return (
			<div className="smokeSignal">
				<div className="smokeSignalHeader">
				</div>
				{_.isEmpty(this.props.selectedSmokeSignal) && 
					<div>
						<h4 className="welcome-text">Welcome to Lifemaker</h4>
					</div>
					||
					<div className="smokeSignalContent">
						<p className="listItemTitle">{this.props.selectedSmokeSignal.title}</p>
						<p className="listItemDescription">{this.props.selectedSmokeSignal.description}</p>
					</div>
				}
				{!_.isEmpty(this.props.selectedSmokeSignal) && 
					<div className="row commentBox">
				    <form className="col s12">
				      <div className="row">
				        <div className="input-field col s12">
				          <textarea id="textarea1" placeholder="Comment Here" className="materialize-textarea" style={{maxHeight: '3rem', minHeight: '0.8rem', height: '0.8rem'}}></textarea>
				        </div>
				      </div>
				    </form>
					</div>
				}
			</div>
		)
	}
}