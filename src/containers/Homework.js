import React, {PropTypes} from 'react';
import {
	View, Navbar, Pages, Page, ContentBlock, ContentBlockTitle,
	List, ListItem, Views, NavLeft, Link, NavCenter, NavRight, GridRow, GridCol, Button,
	Fab,Icon
} from 'framework7-react';
import firebase,{myHomeWork} from '../core/FirebaseApp';
import InfoGen from '../core/InfoGen';
import moment from 'moment';
import HomeWorkAddNew from './HomeWorkAddNew';
import {ActionListHomework} from '../actions/ActionHomeWork';

var DATA = [
	{subject:"Subject 1",create_datetime:moment().format('DD-MM-YYYY')}
]
export default class Homework extends React.Component{
  constructor(props){
    super(props);
		this.state = {data:[],openAddNew:false};
  }
  componentDidMount(){
    var userId = InfoGen.token;
    // console.log(userId);
    // firebase.database().ref('/users/' + userId).set({name:'Test'}).then(function(snapshot) {
    //   console.log(snapshot);
    //   // var username = snapshot.val().username;
    //   // ...
    // });
		// this.loadData();

		var that = this;
		myHomeWork.on('child_added', snapshot => {
			// console.log(snapshot.key);
			// console.log(snapshot.val());
			that.loadData();
		});
		myHomeWork.on('child_changed', snapshot => {
			that.loadData();
		});
		myHomeWork.on('child_removed', snapshot => {
			that.loadData();
		});
  }
	loadData = () => {
		ActionListHomework().then((res)=>{
			this.setState({data:res});
		});
	}
	doSomething = () => {

	}
	toggleOpenAddNew = () => {
		this.setState({openAddNew:!this.state.openAddNew});
	}
	renderItem = () => {
		var {data} = this.state;

		try {
			if(Object.keys(data).length>0){
				return(
					<List mediaList>
						{
							Object.keys(data).map((item,i)=>{
								if(this.props.status=="1" && data[item].status=="Todo"){
									return <ListItem link={"/HomeWorkDetail/"+item} key={i} title={data[item].subject}
									text={data[item].due_datetime}  subtitle={data[item].status}/>
								}else if(this.props.status=="2" && data[item].status=="Done"){
									return <ListItem link={"/HomeWorkDetail/"+item} key={i} title={data[item].subject}
									text={data[item].due_datetime}  subtitle={data[item].status}/>
								}
							})
						}
					</List>
				);
			}else{
				return(<List mediaList>
					<ListItem>Welcome to Homework</ListItem>
				</List>)
			}
		}catch(e){
			console.log(e);
		}
	}
  render(){
		var {openAddNew} = this.state;
    return (this.renderItem())
  }
}

Homework.contextTypes = {
	framework7AppContext: PropTypes.object
};
