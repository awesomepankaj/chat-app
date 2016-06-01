import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import FloatingActionButton from 'material-ui/FloatingActionButton';

import Sad from 'material-ui/svg-icons/social/sentiment-dissatisfied';
import Happy from 'material-ui/svg-icons/social/sentiment-satisfied';

import ContentAdd from 'material-ui/svg-icons/content/add';
import ActionHome from 'material-ui/svg-icons/action/account-circle';

import SmokeStore from '../stores/SmokeSignals'


export default class SmokeSignals extends Component {

	constructor(props) {
    super(props);
    this.state = {
      value: 'b',
      forMeSignals: SmokeStore.getForMe()
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  componentDidMount = () => {
		SmokeStore.listen(this.refreshSignals)
  };

  refreshSignals = () => {
  	this.setState({
  		forMeSignals: SmokeStore.getForMe()
  	})
  }


	render() {
		console.log(this.state.forMeSignals)
		return (
			<div style={{width: '40%'}} className="smokeSignals">
				<Tabs
	        value={this.state.value}
	        onChange={this.handleChange}
	      >
	        <Tab label="For Me" value="a">
	        	<div className="tabContainer">
		        	<List>
				        <Subheader>Today</Subheader>
				        {this.state.forMeSignals && this.state.forMeSignals.map((signal, i) => {
				        	let {message, userId} = signal._source
				        	return (
				        		<div key={i}>
					        		<ListItem
							          leftAvatar={<Avatar>{userId[0]}</Avatar>}
							          onTouchTap={this.props.openSmokeSignal.bind(null, signal)}
							          primaryText={userId}
							          secondaryText={
							          	<p>{message}</p>
							          }
							          secondaryTextLines={1}
							        />
											<Divider inset={true} />
										</div>
				        	)
				        })}
				      </List>
				    </div>
	        </Tab>
	        <Tab label="For All" value="b">
	        	<div className="tabContainer">
		        	<List>
				        <Subheader>Smoke Signals</Subheader>
				        <ListItem
				          leftAvatar={<Avatar>S</Avatar>}
				          primaryText="Brunch this weekend?"
				          secondaryText={
				            <p>
				              <span style={{color: darkBlack}}>Brendan Lim</span> --
				              I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
				            </p>
				          }
				          secondaryTextLines={2}
				        />
				        <Divider inset={true} />
				        <ListItem
				          leftAvatar={<Avatar>P</Avatar>}
				          primaryText={
				            <p>Summer BBQ&nbsp;&nbsp;<span style={{color: lightBlack}}>4</span></p>
				          }
				          secondaryText={
				            <p>
				              <span style={{color: darkBlack}}>to me, Scott, Jennifer</span> --
				              Wish I could come, but I&apos;m out of town this weekend.
				            </p>
				          }
				          secondaryTextLines={2}
				        />
				        <Divider inset={true} />
				        <ListItem
				          leftAvatar={<Avatar>A</Avatar>}
				          primaryText="Oui oui"
				          secondaryText={
				            <p>
				              <span style={{color: darkBlack}}>Grace Ng</span> --
				              Do you have Paris recommendations? Have you ever been?
				            </p>
				          }
				          secondaryTextLines={2}
				        />
				        <Divider inset={true} />
				        <ListItem
				          leftAvatar={<Avatar>S</Avatar>}
				          primaryText="Birdthday gift"
				          secondaryText={
				            <p>
				              <span style={{color: darkBlack}}>Kerem Suer</span> --
				              Do you have any ideas what we can get Heidi for her birthday? How about a pony?
				            </p>
				          }
				          secondaryTextLines={2}
				        />
				        <Divider inset={true} />
				        <ListItem
				          leftAvatar={<Avatar>L</Avatar>}
				          primaryText="Recipe to try"
				          secondaryText={
				            <p>
				              <span style={{color: darkBlack}}>Raquel Parrado</span> --
				              We should eat this: grated squash. Corn and tomatillo tacos.
				            </p>
				          }
				          secondaryTextLines={2}
				        />
				      </List>
				    </div>
	        </Tab>
	      </Tabs>		  
	      <FloatingActionButton style={{position: 'absolute', left: '370px', bottom: '25px'}}>
      		<ContentAdd />
    		</FloatingActionButton>
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
