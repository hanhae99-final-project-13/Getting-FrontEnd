import React from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configureStore';
import './App.css';

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

import { useDispatch } from 'react-redux';
import { actionCreators as userAction } from '../redux/modules/user';

function App() {
  const dispatch = useDispatch();

  const isToken = window.localStorage.getItem('USER_TOKEN') ? true : false;

  React.useEffect(() => {
    if (isToken) {
      dispatch(userAction.LoginCheck());
    }
  }, [dispatch, isToken]);

  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path='/landing' exact component={Landing} />
        <Route path='/oauth/callback/kakao' component={Kakao} />
        <Route path='/' exact component={Main} />
        <Route path='/adoption' exact component={Adoption} />
        <Route path='/addpost' exact component={AddPost} />
        <Route path='/comment' exact component={CommentList} />
        <Route path='/mypage' exact component={Mypage} />
        <Route path='/login' exact component={Login} />
        <Route path='/signup' exact component={Signup} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
