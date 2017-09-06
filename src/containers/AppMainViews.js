import React, {PropTypes} from 'react';
import {
	View, Navbar, Pages, Page, ContentBlock, ContentBlockTitle,
	List, ListItem, Views, NavLeft, Link, NavCenter, NavRight, GridRow, GridCol, Button,
	Fab,Icon,Tabs,Tab,Toolbar,ListButton
} from 'framework7-react';

import HomeWorkAddNew from './HomeWorkAddNew';
import Homework from './Homework';
export class AppMainViews extends React.Component{
	constructor(props){
		super(props);
		this.state = {openAddNew:false,status:1}
	}
	toggleOpenAddNew = () => {
		this.setState({openAddNew:!this.state.openAddNew});
	}
	onTabChange = (status) => {
		this.setState({status});
	}
	render(){
		var {openAddNew,status} = this.state;

  	return (<Page style={{background:'#00bcd4'}}>

						<List>
							<ListButton link="/game/" style={{color:'#ffffff', textAlign:'center'}}>START</ListButton>
						</List>
						<HomeWorkAddNew toggleOpenAddNew={this.toggleOpenAddNew} open={openAddNew} />
          </Page>)
		}
}
AppMainViews.contextTypes = {
	framework7AppContext: PropTypes.object
};
