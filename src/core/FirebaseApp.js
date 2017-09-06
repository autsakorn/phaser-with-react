import * as firebase from "firebase";
import InfoGen from './InfoGen';
var config = {
	apiKey: "AIzaSyAN1BSduRZnyKws6W4_0q74AN4aCHe02i4",
  authDomain: "homework-5e080.firebaseapp.com",
  databaseURL: "https://homework-5e080.firebaseio.com",
  projectId: "homework-5e080",
  storageBucket: "homework-5e080.appspot.com",
  messagingSenderId: "288019061597"
};
firebase.initializeApp(config);
export default firebase;
const userId = InfoGen.token;
export const myHomeWork = firebase.database().ref('homework/'+userId);
