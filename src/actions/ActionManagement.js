import Url from '../config/url';
import jPost from '../config/jPost';
import InfoGen from '../config/InfoGen';

export var LoadMain = (indexType,status, type,search,selectedIndex,dataStart,dataLimit,filter='') => {
  return new Promise((resolve,reject)=>{
    var url;
    if(indexType===0){
       url = Url.ws_projects;
    }else if(indexType===1){
      url = Url.ws_ticket;
    }else if(indexType==2){
      url = Url.ws_appointment;
    }else if(indexType==4){
      url = Url.inventory;
    }else if(indexType==3){
      url = Url.notification;
    }
    var data = {
        token:InfoGen.token,
        email:InfoGen.email,
        status:status,
        type:type.join(","),
        search:search,
        dataStart:dataStart,
        dataLimit:dataLimit,
        filter:filter
    };
    if(url){
      jPost(url, data).then(function(res){
        // console.log(res);
        resolve(res);
      });
    }
  });
}

export var LoadCaseDetail = (ticket_sid) => {
  return new Promise((resolve,reject)=>{
    var data = {
      token:InfoGen.token,email:InfoGen.email,
      ticket_sid:ticket_sid
    }
    jPost(Url.ws_ticketDetail, data).then((res)=>{
      resolve(res);
    });
  })
}

export var changeContactUser = (sid, name, email, mobile, phone, company) => {
  return new Promise((resolve,reject)=>{
    var data = {token:InfoGen.token,email:InfoGen.email,ticket_sid:sid,eu_name:name,eu_email:email, eu_mobile:mobile, eu_phone:phone,eu_company:company};
    jPost(Url.cEndUser,data).then((res)=>{
      // that.setState({data:res.data,tasks:res.tasks,initialTask:true,
      //   editManHours:false,editEndUser:!this.state.editEndUser});
      resolve(res);
    });
  })
}
