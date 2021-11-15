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

import AdoptionApply from '../pages/AdoptionApply';
import AdoptionApply2 from '../pages/AdoptionApply2';
import TakeAdoptionApply from '../pages/TakeAdoptionApply';
import Tutorial from '../components/Tutorial/Tutorial';
import Tutorial2 from '../components/Tutorial/Tutorial2';
import EssentialKnowledge from '../components/Tutorial/EssentialKnowledge';
import EssentialQuiz from '../components/Tutorial/EssentialQuiz';
import EssentialQuiz2 from '../components/Tutorial/EssentialQuiz2';
import EssentialQuiz3 from '../components/Tutorial/EssentialQuiz3';
import EssentialQuiz4 from '../components/Tutorial/EssentialQuiz4';
import EssentialQuiz5 from '../components/Tutorial/EssentialQuiz5';
import FosterKnowledge from '../pages/FosterKnowledge';
import EditPost from '../components/EditPost';
import Timer from '../components/Timer';
import Footer from '../components/Footer';

import { actionCreators as userAction } from '../redux/modules/user';
import { Spinner } from '../elements';

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
        <Route path='/login' exact component={Login} />
        <Route path='/' exact component={Landing} />
        <Route path='/oauth/callback/kakao' component={Kakao} />

        <Route path='/signup' exact component={Signup} />
        <Route path='/main' exact component={Main} />
        <React.Suspense fallback={<Spinner />}></React.Suspense>
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

        <Route path='/adoption' exact component={Adoption} />
        <Route path='/detail/:id' exact component={Detail} />
        <Route path='/apply/:id' exact component={AdoptionApply} />
        <Route path='/apply2/:id' exact component={AdoptionApply2} />
        <Route path='/addpost' exact component={AddPost} />
        <Route path='/comment' exact component={CommentList} />
        <Route path='/mypage' exact component={Mypage} />
        <Route path='/intro' exact component={Intro} />
        <Route path='/alarm' exact component={Alarm} />

        <Route path='/takeapply/:id' exact component={TakeAdoptionApply} />
        <Route path='/editpost' exact component={EditPost} />
        <Route path='/timer' exact component={Timer} />
        <Footer></Footer>
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
