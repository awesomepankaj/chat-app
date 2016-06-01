import React, { Component } from 'react';
import {grey400, lime500, blueA200, fullWhite} from 'material-ui/styles/colors';
import Sad from 'material-ui/svg-icons/social/sentiment-dissatisfied';
import Happy from 'material-ui/svg-icons/social/sentiment-satisfied';
import FlatButton from 'material-ui/FlatButton'
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Badge from 'material-ui/Badge';
import _ from 'lodash';

import SmokeStore from '../stores/SmokeSignals'

export default class SmokeSignal extends Component {

	constructor(props) {
		super(props)

		this.state = {}
	}

	render() {


		let {userId, message} = !_.isEmpty(this.props.selectedSmokeSignal) && this.props.selectedSmokeSignal._source

		return (
			<div className="smokeSignal">
				{_.isEmpty(this.props.selectedSmokeSignal) && 
					<div className="welcomeContainer">
				 		<img src="https://lifemakersite.files.wordpress.com/2016/05/s-0lfmevwnbslvb5qkmfomg.png?w=882" style={{width: 300, height: 300, borderRadius: '50%', opacity: '0.8'}}/>
			 			<h4 className="welcome-text">Welcome to Lifemaker</h4>	
					</div>
					||
					<div className="smokeSignalContainer">
						<div className='smokeSignalHeader'>
							<div className="creatorInfo">
								<Avatar>{_.capitalize(userId[0])}</Avatar>
								<p style={{marginLeft: 9}}>{_.capitalize(userId)}</p>
							</div>
							<div>
								<IconMenu
						      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
						      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
						      targetOrigin={{horizontal: 'right', vertical: 'top'}}
						    >
						      <MenuItem primaryText="Refresh" />
						      <MenuItem primaryText="Send feedback" />
						      <MenuItem primaryText="Settings" />
						      <MenuItem primaryText="Help" />
						      <MenuItem primaryText="Sign out" />
						    </IconMenu>
							</div>
						</div>
						<div className="smokeSignalFields">
							<p>{message}</p>
							<p>
				      	<span style={{color: lime500, marginRight: '20px'}}>#Call-in</span>
				      	<span style={{color: blueA200}}>#Artha</span>
				      </p>
				      <div>
				      	<Badge
						      badgeContent={9}
						      className="badge"
						      badgeStyle={{display: 'flex !important', top: 12, right: 12}}
						      style={{marginRight: '180px'}}
						      secondary={true}
						    >
					      	<IconButton tooltip="Happy">
							    	<Happy />
							    </IconButton>
							  </Badge>
							  <Badge
						      badgeContent={2}
						      className="badge"
						      badgeStyle={{display: 'flex !important', top: 12, right: 12}}
						      style={{marginLeft: '180px'}}
						      primary={true}
						    >
					      	<IconButton tooltip="Sad">
							    	<Sad />
							    </IconButton>
							  </Badge>
				      </div>
						</div>
						<div className="commentsSection">
							<p style={{marginLeft: 70}}>Comments</p>
							<Divider inset={true}/>
							<div className="commentsCont">
								<Card style={{width: '50%', marginLeft: 20, marginTop: 20}}>
					        <CardText style={{padding: 11, paddingBottom: 0, fontSize: 14}}>
					        	<Avatar style={{marginRight: 10}}>A</Avatar>
					        	This is comment on life.
					        </CardText>
					        <CardActions className="commentActions">
					        	<p style={{fontSize: 13}}>written by Pankaj</p>
					        	<IconButton tooltip="Happy">
					        		<Happy />
					        	</IconButton>
					        	<IconButton tooltip="Sad">
					        		<Sad />
					        	</IconButton>
					        </CardActions>
					      </Card>
							</div>
						</div>
						<div className="createComment">
							<TextField
      					hintText="Write comment here..."
      					underlineShow={false}
      					style={{border: '1px solid #FBFBFB', width: '94%', paddingLeft: 20, paddingRight: 20, borderRadius: 2, backgroundColor: '#F5F1EE'}}
    					/>	
						</div>
					</div>
				}	
			</div>
		)
	}
}