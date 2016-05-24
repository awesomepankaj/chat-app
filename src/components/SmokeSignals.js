import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';

import ActionHome from 'material-ui/svg-icons/action/account-circle';


export default class SmokeSignals extends Component {

	constructor(props) {
    super(props);
    this.state = {
      value: 'b',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };


	render() {
		return (
			<div style={{width: '50%', height: '100%'}} className="smokeSignals">
				<div className="smokeSignalHeader">
					<IconButton tooltip="User">
						<ActionHome />
    			</IconButton>	
				</div>
				<Tabs
	        value={this.state.value}
	        onChange={this.handleChange}
	      >
	        <Tab label="For Me" value="a" style={{height: '100%'}}>
	        	<List style={{height: '25em', overflowY: 'auto', marginBottom: 24}}>
			        <Subheader>Today</Subheader>
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
	        </Tab>
	        <Tab label="For All" value="b">
	        	<List style={{height: '25em', overflowY: 'auto', marginBottom: 24}}>
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
	        </Tab>
	      </Tabs>		  
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
