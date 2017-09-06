import InfoGen from '../core/InfoGen';
import firebase,{myHomeWork} from '../core/FirebaseApp';
var userId = InfoGen.token;
export const ActionAddNew = (subject, due_datetime, detail, status)  => {
  return new Promise((resolve,reject)=>{

    myHomeWork.push({userId,subject, due_datetime, detail, status}).then((res)=>{
      console.log(res);
      resolve();
    })
  });
}

export const ActionListHomework = () => {
  return new Promise((resolve,reject)=>{
    // var data = firebase.database().ref('homework');//.equalTo(userId);
    // console.log(data);
    // resolve(data);
    myHomeWork.on('value', snapshot => {
      const store = snapshot.val();
      resolve(store)
    }).orderByKey(true);
  });
}
