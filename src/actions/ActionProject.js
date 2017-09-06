import Url from '../config/url';
import Put from '../config/Put';
import jPost from '../config/jPost';
import InfoGen from '../config/InfoGen';
export var FindContract = (contract_no_filter) => {
  return new Promise((resolve,reject)=>{
    var dataTmp = {email:InfoGen.email, token:InfoGen.token,contract:contract_no_filter};

    jPost(Url.findContractInfo, dataTmp).then(function(res){
      console.log(res);
      resolve(res);
    });
  });
}

export var ChangeContract = (project_sid,newContract,projectName,enduser,enduser_address) => {
  return new Promise((resolve,reject)=>{
    var data = {
      email:InfoGen.email,
      token:InfoGen.token,
      project_sid:project_sid,
      newContract:newContract,
      projectName:projectName,
      enduser:enduser,
      enduser_address:enduser_address
    }
    jPost(Url.changeContract, data).then((res)=>{
      resolve(res);
    });
    // console.log(data);
  })
}
export var LoadProjectDetail = (project_sid) => {
  return new Promise((resolve, reject)=>{
    var dataTmp = {token:InfoGen.token,email:InfoGen.email,project_sid:project_sid};
    jPost(Url.ws_projects_detail,dataTmp).then((res)=>{
      resolve(res);
    });
  });
}
export var AddOwnerProject = (project_sid,new_staff_email) => {
  return new Promise((resolve,reject)=>{
      var formData = new FormData();
      formData.append("email",InfoGen.email);
      formData.append("token",InfoGen.token);
      formData.append("project_sid", project_sid);
      formData.append("new_staff_email", new_staff_email);
      // var that = this;
      Put(Url.projectAddStaff, formData).then(function(res){
        console.log(res);
        resolve(res);
        if(res.data){
          // var tmp = that.state.projectOwner;
          // tmp.push({email:email,pic_full:pic_employee,thainame:thainame,engname:engname});
          // that.setState({projectOwner:tmp});
        }
      });
  });
}

export var RemoveOwnerProject = (project_sid,staff_email) => {
  return new Promise((resolve,reject)=>{
      var formData = new FormData();
      formData.append("email",InfoGen.email);
      formData.append("token",InfoGen.token);
      formData.append("project_sid", project_sid);
      formData.append("staff_email", staff_email);
      // var that = this;
      Put(Url.projectDeleteStaff, formData).then(function(res){
        console.log(res);
        resolve(res);
        if(!res.error){
          // var tmp = [];
          // that.state.projectOwner.forEach((item)=> {
          //   if(item.email!==email){
          //     tmp.push(item);
          //   }
          // });
          // that.setState({projectOwner:tmp});
        }
      });
  });
}

export var CloseProject = (project_sid,remarkCloseProject) => {
  // console.log(this.state.remarkCloseProject);
  // console.log(this.state.projectInfo.project_sid);
  return new Promise((resolve,reject)=>{
    var formData = new FormData();
    formData.append("email",InfoGen.email);
    formData.append("token",InfoGen.token);
    formData.append("project_sid", project_sid);
    formData.append("remark_close_project", remarkCloseProject);
    // var that = this;
    // var tmp = this.state.projectInfo;
    Put(Url.closeProject,formData).then(function(res){
      resolve(res);
      if(!res.error){
        // tmp.data_status = '400';
        // that.setState({openCloseProject:false,remarkCloseProject:'',projectInfo:tmp});
      }
    });
  })
}
