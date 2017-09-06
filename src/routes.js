import {About} from './components/pages/About';
import {Form} from './components/pages/Form';
import AppSignUpScreen from './containers/AppSignUpScreen';
import HomeWorkDetail from './containers/HomeWorkDetail';
import Game from './containers/Game';
export const routes = [
  // {
  //   path: '/about/',
  //   component: About
  // },
  {
    path:'/game',
    component: Game
  },
  {
    path: '/form/',
    component: Form
  },
  {
    path:'/HomeWorkDetail/:sid/',
    component:HomeWorkDetail
  },
  {
    path:'/signup/',
    component: AppSignUpScreen
  }

];
