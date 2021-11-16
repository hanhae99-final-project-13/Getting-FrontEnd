import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configureStore';
import './App.css';

import {
  Main,
  Login,
  Signup,
  Adoption,
  Landing,
  Mypage,
  Detail,
  Intro,
  Alarm,
  AdoptionApply,
  AdoptionApply2,
  TakeAdoptionApply,
  FosterKnowledge,
  NotFound,
} from '../pages';
import {
  AddPost,
  Kakao,
  Header,
  CommentList,
  EditPost,
  Timer,
  Footer,
} from '../components';
import {
  EssentialKnowledge,
  EssentialQuiz,
  EssentialQuiz2,
  EssentialQuiz3,
  EssentialQuiz4,
  EssentialQuiz5,
  Tutorial,
  Tutorial2,
} from '../components/Tutorial';

import { actionCreators as userAction } from '../redux/modules/user';
import { withHeaderFooter } from '../components/hoc';

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
        <Switch>
          <Route path='/login' exact component={Login} />
          <Route path='/' exact component={Landing} />
          <Route path='/oauth/callback/kakao' component={Kakao} />

          <Route path='/signup' exact component={Signup} />
          <Route path='/main' exact component={withHeaderFooter(Main)} />
          <Route path='/tutorial' exact component={Tutorial} />
          <Route path='/tutorial2' exact component={Tutorial2} />
          <Route
            path='/essentialknowledge'
            exact
            component={EssentialKnowledge}
          />

          <Route path='/essentialquiz' exact component={EssentialQuiz} />
          <Route path='/essentialquiz2' exact component={EssentialQuiz2} />
          <Route path='/essentialquiz3' exact component={EssentialQuiz3} />
          <Route path='/essentialquiz4' exact component={EssentialQuiz4} />
          <Route path='/essentialquiz5' exact component={EssentialQuiz5} />
          <Route path='/fosterknowledge' exact component={FosterKnowledge} />

          <Route
            path='/adoption'
            exact
            component={withHeaderFooter(Adoption)}
          />

          <Route path='/detail/:id' exact component={Detail} />

          <Route path='/apply/:id' exact component={AdoptionApply} />
          <Route path='/apply2/:id' exact component={AdoptionApply2} />
          <Route path='/addpost' exact component={AddPost} />
          <Route path='/comment' exact component={CommentList} />
          <Route path='/mypage' exact component={withHeaderFooter(Mypage)} />
          <Route path='/intro' exact component={Intro} />
          <Route path='/alarm' exact component={Alarm} />
          <Route path='/takeapply/:id' exact component={TakeAdoptionApply} />
          <Route path='/editpost' exact component={EditPost} />
          <Route path='/timer' exact component={Timer} />
          <Route component={NotFound} />
          {/* <Footer></Footer> */}
        </Switch>
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
