import React, { Component } from 'react';

export default class SmokeSignals extends Component {

	render() {
		return (
			<div style={{width: '50%'}} className="smokeSignals">
				<div className="smokeSignalHeader center-content">
					<div className="usernameCont avatar">
						<img style={{maxHeight: 40}} src="https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-xtf1/v/t1.0-9/12642806_521596858010280_1419475641188069942_n.jpg?oh=e65dfd45a83b1b5e8527717438d89dac&oe=57D80912&__gda__=1474261065_4c7334dc34454498689f56da78c60ef2" alt="" className="circle responsive-img"/>
      			<span className="title" style={{paddingLeft: 10}}>Pankaj Thakur</span>	
					</div>
				</div>
				<div className="row">
			    <div className="col s12" style={{padding: 0}}>
			      <ul className="tabs">
			        <li className="tab col s3"><a className="active" href="#forMe">For Me</a></li>
			        <li className="tab col s3"><a href="#forAll">For All</a></li>
			      </ul>
			    </div>
			    <div id="forMe" className="col s12" style={{padding: 0}}>
			    {this.getSmokeSignals(this.props.smokeSignals)}
			    </div>
    			<div id="forAll" className="col s12" style={{padding: 0}}>
    			{this.getSmokeSignals(this.props.smokeSignals)}
    			</div>
			  </div>
			  
			</div>
		)
	};

	onClickItem(smokeSignal) {
		this.props.openSmokeSignal(smokeSignal)
	}

	getSmokeSignals(smokeSignals) {
		console.log(smokeSignals)
		return (
    	<ul className="list">
    		{smokeSignals.map((smokeSignal, i) => {
    			return (
    				<li className="listItem" key={i} onClick={this.onClickItem.bind(this, smokeSignal)}>
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


