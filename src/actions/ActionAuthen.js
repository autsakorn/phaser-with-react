import Url from '../core/url';
import jPost from '../core/jPost';
import InfoGen from '../core/InfoGen';
import get from '../core/Get';
import Put from '../core/Put';

export const ActionLogin = (user, password)  => {
  return new Promise((resolve,reject)=>{
    var formData = new FormData();
    if(user && password){
      formData.append("email",user);
      formData.append("password",password);
      if(typeof window.registrationId !=='undefined'){
        formData.append("registration_id",window.registrationId);
      }
      get(Url.login, formData).then(function(res){
        if(!res.error){
          localStorage.removeItem("project_sid");
          localStorage.setItem("case_email", res.user.email);
          localStorage.setItem("case_token", res.token);
          // location.reload();
          // window.location = "";
          // <Redirect to={{pathname: '/home'}} />
          resolve();
        }else{
          alert(res.message);
          reject();
        }
      });
    }
  });
}
export const ActionSignUp = (email,password,name,mobile) => {
  return new Promise((resolve,reject)=>{
    if(email!=="" && password!=="" && name !=="" && mobile !==""){
      var data = {email:email,password:password,name:name,mobile:mobile,otp:""}
      var formData = new FormData();
      formData.append('data',JSON.stringify(data));
      Put(Url.signup, formData).then(function(res){
        console.log(res);
        resolve(res)
      });
    }else{
      reject();
    }
  });
}
export const ActionSignUpOtp = (email,password,name,mobile,otp) => {
  return new Promise((resolve,reject)=>{
    const data = {email:email,password:password,name:name,mobile:mobile,otp:otp}
    const formData = new FormData();
    formData.append('data',JSON.stringify(data));
    Put(Url.signupConfirm, formData).then(function(res){
      resolve(res);
      // if(res.message==="Confirm Success!"){
      //   var signUpSuccess = <div style={{color:lightBlack}}>Sign Up Successfully... <br/> You can Sign In vSpace.</div>
      //   alert(res.message);
      //   // that.setState({
      //   //   labelLastStep:signUpSuccess
      //   // });
      //   // that.setState({
      //   //   stepIndex: stepIndex + 1,
      //   //   finished: stepIndex >= 2,
      //   // });
      // }else{
      //   alert(res.message);
      // }
    });
  })
}
export const ActionForgot = (email) => {
  return new Promise((resolve,reject)=>{
    var formData = new FormData();
    var data = {email:email};
    formData.append('data',JSON.stringify(data));
    Put(Url.forgotPassword,formData).then(function(res){
        console.log(res);
        if(res.data.active==="1" || res.data.active==="0"){
          // that.setState({
          //   stepIndex: stepIndex + 1,
          //   finished: stepIndex >= 2,
          // });
          resolve(res);
        }else{
          alert(res.message);
          reject();
        }
    });
  });
}
export const ActionResetPassword = (email, newpassword,otp) => {
  return new Promise((resolve,reject)=>{
    var dataTmp = {email:email,password:newpassword,otp:otp};
    var formData = new FormData();
    formData.append('data',JSON.stringify(dataTmp));
    Put(Url.confirmForgotPassword,formData).then(function(res){
        // console.log(res);
        alert(res.message);
        if(res.error){

          reject();
        }else{
          resolve(res);
          // alert(res.message);
          // that.setState({
          //     stepIndex: stepIndex + 1,
          //     finished: stepIndex >= 2,
          // });
        }
    });
  })
}
