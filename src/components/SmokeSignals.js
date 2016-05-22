import React, { Component } from 'react';

export default class SmokeSignals extends Component {

	render() {
		return (
			<div style={{width: '50%'}} className="smokeSignals">
				<div className="row">
			    <div className="col s12" style={{padding: 0}}>
			      <ul className="tabs">
			        <li className="tab col s3"><a className="active" href="#test1">For Me</a></li>
			        <li className="tab col s3"><a href="#test2">For All</a></li>
			      </ul>
			    </div>
			    <div id="test1" className="col s12" style={{padding: 0}}>
			    {this.getSmokeSignals(this.props.smokeSignals)}
			    </div>
    			<div id="test2" className="col s12" style={{padding: 0}}>
    			{this.getSmokeSignals(this.props.smokeSignals)}
    			</div>
			  </div>
			</div>
		)
	};

	getSmokeSignals(smokeSignals) {
		console.log(smokeSignals)
		return (
    	<ul className="list">
    		{smokeSignals.map((smokeSignal, i) => {
    			return (
    				<li className="listItem" key={i} onClick={this.props.openSmokeSignal.bind(null, smokeSignal)}>
		    			<span className="listItemTitle">{smokeSignal.title}</span>
		    			<span className="listItemDescription">
		    			{smokeSignal.description}
		    			</span>
			    	</li>
    			)
    		})}
    	</ul>
		)
	}
}
