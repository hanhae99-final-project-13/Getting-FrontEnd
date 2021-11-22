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

import {
  withHeaderMainFooter,
  withKnowledgeFooter,
  withHeaderAdoptionFooter,
  withHeaderNomalFooter,
  withMypageFooter,
} from '../components/hoc';
import Test from '../pages/Test';

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
          <Route path='/test' exact component={Test} />
          <Route path='/' exact component={Landing} />
          <Route path='/oauth/callback/kakao' component={Kakao} />

          <Route path='/signup' exact component={Signup} />
          <Route path='/main' exact component={withHeaderMainFooter(Main)} />
          <Route path='/tutorial' exact component={Tutorial} />
          <Route
            path='/tutorial2'
            exact
            component={withKnowledgeFooter(Tutorial2)}
          />
          <Route
            path='/essentialknowledge'
            exact
            component={withKnowledgeFooter(EssentialKnowledge)}
          />

          <Route
            path='/essentialquiz'
            exact
            component={withKnowledgeFooter(EssentialQuiz)}
          />
          <Route
            path='/essentialquiz2'
            exact
            component={withKnowledgeFooter(EssentialQuiz2)}
          />
          <Route
            path='/essentialquiz3'
            exact
            component={withKnowledgeFooter(EssentialQuiz3)}
          />
          <Route
            path='/essentialquiz4'
            exact
            component={withKnowledgeFooter(EssentialQuiz4)}
          />
          <Route
            path='/essentialquiz5'
            exact
            component={withKnowledgeFooter(EssentialQuiz5)}
          />
          <Route
            path='/fosterknowledge'
            exact
            component={withKnowledgeFooter(FosterKnowledge)}
          />

          <Route
            path='/adoption'
            exact
            component={withHeaderAdoptionFooter(Adoption)}
          />

          <Route
            path='/detail/:id'
            exact
            component={withHeaderAdoptionFooter(Detail)}
          />

          <Route path='/apply/:id' exact component={AdoptionApply} />
          <Route path='/apply2/:id' exact component={AdoptionApply2} />
          <Route
            path='/addpost'
            exact
            component={withHeaderAdoptionFooter(AddPost)}
          />
          <Route path='/comment' exact component={CommentList} />
          <Route path='/mypage' exact component={withMypageFooter(Mypage)} />
          <Route path='/intro' exact component={withHeaderNomalFooter(Intro)} />
          <Route path='/alarm' exact component={Alarm} />
          <Route
            path='/takeapply/:id'
            exact
            component={withMypageFooter(TakeAdoptionApply)}
          />
          <Route
            path='/editpost'
            exact
            component={withHeaderAdoptionFooter(EditPost)}
          />

          <Route component={NotFound} />
        </Switch>
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
