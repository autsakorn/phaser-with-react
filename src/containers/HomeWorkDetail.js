import React,{Component} from 'react';
import {Page, Navbar, List, ListItem,ContentBlockTitle,FormInput,FormLabel} from 'framework7-react';
import {getCurrentRoute} from './App';
import firebase,{myHomeWork} from '../core/FirebaseApp';
import moment from 'moment';

export default class HomeWorkDetail extends Component{
  constructor(props){
    super(props);
    const route = getCurrentRoute();

    this.state = {sid:route.params.sid,data:{},loaded:false,subject:'',detail:'',due_datetime:'',status:''};
  }
  componentDidMount(){
    this.loadData();
  }
  loadData = () => {
    var that = this;
    myHomeWork.child(this.state.sid).once('value').then(function(snapshot) {
      var data = snapshot.val();
      console.log(data);
      that.setState({
        subject:data.subject,
        detail:data.detail,
        due_datetime:moment(data.due_datetime).format('YYYY-MM-DDTHH:mm'),status:data.status,loaded:true});
    });
  }
  onStatusChange = (status) => {
    var {subject,detail,due_datetime} = this.state;
    myHomeWork.child(this.state.sid).set({
      subject,detail,status,due_datetime:moment(due_datetime).format('YYYY-MM-DD HH:mm'),
    });
    this.loadData();
  }
  onSubjectChange = (subject) => {
    var {status,detail,due_datetime} = this.state;
    status = (!status)?"Todo":status;
    myHomeWork.child(this.state.sid).set({
      due_datetime:moment(due_datetime).format('YYYY-MM-DD HH:mm'),subject,detail,status:status
    });
    this.loadData();
  }
  onDetailChange = (detail) => {
    var {status,subject,due_datetime} = this.state;
    status = (!status)?"Todo":status;
    myHomeWork.child(this.state.sid).set({
      subject,detail:detail,status,due_datetime:moment(due_datetime).format('YYYY-MM-DD HH:mm'),
    });
    this.loadData();
  }
  onDuedateChange = (due_datetime) => {
    console.log(due_datetime);
    var {status,subject,detail} = this.state;
    status = (!status)?"Todo":status;
    myHomeWork.child(this.state.sid).set({
      subject,detail:detail,status,due_datetime:moment(due_datetime).format('YYYY-MM-DD HH:mm'),
    });
    this.loadData();
  }
  renderStatus = () => {
    var {status} = this.state;
    status = (!status)?"Todo":status;

      return (<ListItem smartSelect smartSelectBackOnSelect title={status}>
        <select onChange={(e)=>this.onStatusChange(e.target.value)} name="status" defaultValue={status}>
          <option value="Todo">Todo</option>
          <option value="Done">Done</option>
        </select>
      </ListItem>)

  }
  render(){
    var {sid,loaded} = this.state;
    var {subject,detail,status, due_datetime} = this.state;
    console.log(due_datetime);
    if(loaded){
      return(<Page>
        <Navbar backLink="Back" title={subject} sliding />

        <List mediaList form>
          <ListItem>
            <FormLabel>Subject</FormLabel>
            <FormInput onChange={(e)=>this.onSubjectChange(e.target.value)} type="text" value={subject} placeholder="Subject"/>
          </ListItem>

          <ListItem>
            <FormLabel>Due datetime</FormLabel>
            <FormInput onChange={(e)=>this.onDuedateChange(e.target.value)} type="datetime-local" value={due_datetime} />
          </ListItem>

          <ListItem>
            <FormLabel>Detail</FormLabel>
            <FormInput onChange={(e)=>this.onDetailChange(e.target.value)} type="textarea" value={detail} placeholder="Detail">{detail}</FormInput>
          </ListItem>
        </List>

        <ContentBlockTitle>Status</ContentBlockTitle>
        <List mediaList form>
          {this.renderStatus()}
        </List>
      </Page>)
    }else{
      return <Page></Page>
    }
  }
}
