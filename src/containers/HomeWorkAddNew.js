import React,{PropTypes} from 'react';

import {
	View,  Pages, Page, Navbar,Popup,NavRight,
	 Link,List,ListItem,FormLabel,FormInput,ListButton,
   Button
} from 'framework7-react';
import {ActionAddNew} from '../actions/ActionHomeWork';
import moment from 'moment';

export default class HomeworkAddNew extends React.Component {
  constructor(props){
    super(props);
    this.state = {subject:'',dueDate:new Date(),detail:'',status:'Todo'};
  }
  onSave = () => {
    var {subject,dueDate,detail,status} = this.state;
    var {toggleOpenAddNew} = this.props;
    console.log(dueDate);
    ActionAddNew(subject,moment(dueDate).format('YYYY-MM-DD HH:mm'),detail,status).then((res)=>{
      toggleOpenAddNew();
    });
  }
  render(){
    var {open,toggleOpenAddNew} = this.props;
    var {subject,dueDate,detail} = this.state;
     return(
      <Popup opened={open}>

              <Navbar title="ADD NEW">
                <NavRight>
                  <Link onClick={()=>toggleOpenAddNew()}>Close</Link>
                </NavRight>
              </Navbar>
              <List form>
                <ListItem >
                  <FormLabel>Name</FormLabel>
                  <FormInput type="text" onChange={(e)=>this.setState({subject:e.target.value})} value={subject} placeholder="Subject"/>
                </ListItem>
                <ListItem >
                  <FormLabel>Due datetime</FormLabel>
                  <FormInput type="datetime-local" placeholder="Due date" onChange={(e)=>this.setState({dueDate:e.target.value})} value={dueDate} />
                </ListItem>
                <ListItem >
                  <FormLabel>Detail</FormLabel>
                  <FormInput type="textarea" onChange={(e)=>this.setState({detail:e.target.value})} value={detail} placeholder="Detail"/>
                </ListItem>
                <ListItem ><Button onClick={()=>this.onSave()}>Save</Button></ListItem>
              </List>
      </Popup>
    )
  }
}
