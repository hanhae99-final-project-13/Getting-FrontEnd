import React from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configureStore';
import './App.css';

import Main from '../pages/Main';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import CommentList from '../components/CommentList';
import AddPost from '../components/AddPost';
import Adoption from '../pages/Adoption';
import Landing from '../pages/Landing';
import Mypage from '../pages/Mypage';
import Kakao from '../components/Kakao';
import Header from '../components/Header';
import Detail from '../pages/Detail';
import Intro from '../pages/Intro';
import Alarm from '../pages/Alarm';
import Setting from '../components/Setting';
import AdoptionApply from '../pages/AdoptionApply';
import AdoptionApply2 from '../pages/AdoptionApply2';
import TakeAdoptionApply from '../pages/TakeAdoptionApply';
import Tutorial from '../components/Tutorial/Tutorial';
import Tutorial2 from '../components/Tutorial/Tutorial2';
import EssentialKnowledge from '../components/Tutorial/EssentialKnowledge';
import FosterKnowledge from '../pages/FosterKnowledge';

import { actionCreators as userAction } from '../redux/modules/user';

function App() {
  const dispatch = useDispatch();

  const isToken = window.localStorage.getItem('USER_TOKEN') ? true : false;
  console.log(isToken, '로그인 토큰 체크');

  React.useEffect(() => {
    if (isToken) {
      dispatch(userAction.LoginCheck());
    }
  }, [dispatch, isToken]);

  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Header></Header>

        <Route path='/' exact component={Landing} />
        <Route path='/oauth/callback/kakao' component={Kakao} />
        <Route path='/login' exact component={Login} />
        <Route path='/signup' exact component={Signup} />
        <Route path='/main' exact component={Main} />
        <Route path='/tutorial' exact component={Tutorial} />
        <Route path='/tutorial2' exact component={Tutorial2} />
        <Route
          path='/essentialknowledge'
          exact
          component={EssentialKnowledge}
        />
        <Route path='/fosterknowledge' exact component={FosterKnowledge} />
        <Route path='/adoption' exact component={Adoption} />
        <Route path='/detail/:id' exact component={Detail} />
        <Route path='/apply/:id' exact component={AdoptionApply} />
        <Route path='/apply2/:id' exact component={AdoptionApply2} />
        <Route path='/addpost' exact component={AddPost} />
        <Route path='/comment' exact component={CommentList} />
        <Route path='/mypage' exact component={Mypage} />
        <Route path='/intro' exact component={Intro} />
        <Route path='/alarm' exact component={Alarm} />
        <Route path='/setting' exact component={Setting} />
        <Route path='/takeapply' exact component={TakeAdoptionApply} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
