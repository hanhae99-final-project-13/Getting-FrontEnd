import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import styled from 'styled-components';

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
  Tutorial,
  Tutorial2,
} from '../components/Tutorial';

import {
  AdvancedKnowledge1,
  AdvancedQuiz,
} from '../components/AdvancedKnowledge1';

import {
  AdvancedKnowledge2,
  Advanced2Quiz,
} from '../components/AdvancedKnowledge2';

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
  const isToken = localStorage.getItem('USER_TOKEN');

  React.useEffect(() => {
    if (isToken) {
      dispatch(userAction.LoginCheck());
    }
  }, [dispatch, isToken]);

  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        {/* <Background> */}
        <Switch>
          <Route path='/login' exact component={Login} />
          <Route path='/test' exact component={Test} />
          <Route path='/' exact component={Landing} />
          <Route path='/oauth/callback/kakao' component={Kakao} />

          <Route path='/signup' exact component={Signup} />
          <Route path='/main' exact component={withHeaderMainFooter(Main)} />
          <Route
            path='/tutorial'
            exact
            component={withKnowledgeFooter(Tutorial)}
          />
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
            path='/essentialquiz/:id'
            exact
            component={withKnowledgeFooter(EssentialQuiz)}
          />
          <Route
            path='/advancedknowledge1'
            exact
            component={withKnowledgeFooter(AdvancedKnowledge1)}
          />
          <Route
            path='/advancedquiz/:id'
            exact
            component={withKnowledgeFooter(AdvancedQuiz)}
          />
          <Route
            path='/advancedknowledge2'
            exact
            component={withKnowledgeFooter(AdvancedKnowledge2)}
          />
          <Route
            path='/advanced2quiz/:id'
            exact
            component={withKnowledgeFooter(Advanced2Quiz)}
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
        {/* </Background> */}
      </ConnectedRouter>
    </React.Fragment>
  );
}

const Background = styled.div`
  padding: 0;
  background-color: #eff4f8;
`;

export default App;
