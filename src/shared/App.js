import React from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configureStore';

import Main from '../pages/Main';
import CommentList from '../components/CommentList';
import AddPost from '../components/AddPost';
import Adoption from '../pages/Adoption';

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path='/' exact component={Main} />
        <Route path='/adoption' exact component={Adoption} />
        <Route path='/addpost' exact component={AddPost} />
        <Route path='/comment' exact component={CommentList} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
