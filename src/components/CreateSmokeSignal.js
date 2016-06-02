import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import _ from 'lodash';

import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

export default class CreateSMView extends Component {
	
	state = {
    finished: false,
    stepIndex: 0,
    selectedSignalType: 'offer',
    selectedSignalGoal: 'moksha',
    signalValue: '',
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
		signalGoals: [{
			title: 'Moksha',
			description: 'Self-descovery, wisdom, spiritual progress and health.',
			bgColor: 'rgb(150, 131, 29)'
		},
		{
			title: 'Dharma',
			description: 'Fullfilment of responsibility based on unbiased assesment of truth.',
			bgColor: '#0991D6'
		},
		{
			title: 'Artha',
			description: 'Resources, for example skills, tools, knowledge.',
			bgColor: '#D64509'
		},
		{
			title: 'Karma',
			description: 'Love, fullfilment of desires, and enjoyment.',
			bgColor: '#9D55A0'
		}]
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    if(stepIndex === 2) {
    	this.props.closeDialog()
    	return
    }
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  getSelectedBox = (types, onClickItem, selectedSignalType) => {
  	return (
  		<div className="signalTypes">
  			{
  				_.map(types, (type, i) => {
  					let opacity = selectedSignalType.toLowerCase() === type.title.toLowerCase() && 1 || 0.6		
  					return (
  						<div className="signalType" key={i} onClick={onClickItem.bind(null, type.title)} style={{backgroundColor: type.bgColor, opacity: opacity}}>
  							<p>{type.title}</p>		
  							<p>{type.description}</p>
  						</div>
  					)
  				})
  			}
  		</div>
  	)
  }

  onClickSignalType = (type) => {
  	this.setState({
  		selectedSignalType: type 
  	})
  }

  onClickSignalGoal = (goal) => {
  	this.setState({
  		selectedSignalGoal: goal
  	})
  }

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return this.getSelectedBox(this.state.smokeTypes, this.onClickSignalType, this.state.selectedSignalType)
      case 1:
        return (
        	<div style={{width: '100%'}}>
        		<TextField
				      hintText="Enter your message here..."
				      style={{width: '100%'}}
				      multiLine={true}
				      value={this.state.signalValue}
				      onChange={this.handleSignalValue}
				      rows={3}
				    />
        	</div>
        )
      case 2:
        return this.getSelectedBox(this.state.signalGoals, this.onClickSignalGoal, this.state.selectedSignalGoal)
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }

  handleSignalValue = (e) => {
  	this.setState({
  		signalValue: e.target.value
  	})
  }

  render() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};

    return (
      <div style={{width: '100%', maxWidth: 'none', margin: 'auto'}}>
        <Stepper activeStep={stepIndex} style={{display: 'flex !important'}}>
          <Step style={{display: 'flex !important'}}>
            <StepLabel style={{display: 'flex !important'}}>Select campaign settings</StepLabel>
          </Step>
          <Step style={{display: 'flex !important'}}>
            <StepLabel style={{display: 'flex !important'}}>Create an ad group</StepLabel>
          </Step>
          <Step style={{display: 'flex !important'}}>
            <StepLabel style={{display: 'flex !important'}}>Create an ad</StepLabel>
          </Step>
        </Stepper>
        <div style={contentStyle}>
          {finished ? (
            <p>
              <a
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  this.setState({stepIndex: 0, finished: false});
                }}
              >
                Click here
              </a> to reset the example.
            </p>
          ) : (
            <div>
              <p>{this.getStepContent(stepIndex)}</p>
              <div style={{marginTop: 12}}>
                <FlatButton
                  label="Back"
                  disabled={stepIndex === 0}
                  onTouchTap={this.handlePrev}
                  style={{marginRight: 12}}
                />
                <RaisedButton
                  label={stepIndex === 2 ? 'Finish' : 'Next'}
                  primary={true}
                  onTouchTap={this.handleNext}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}