import { Route, Switch } from 'react-router-dom';

import FrontPage from './containers/FrontPage/FrontPage';
import Login from './containers/Login/Login'; 
import ManageCollection from './containers/ManageCollection/ManageCollection';
import ViewCollection from './containers/ViewCollection/ViewCollection';

import './App.css';

function App() {
  return (
    <>
      <main>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/admin" component={ManageCollection} />
          <Route path="/gallery" component={ViewCollection} />
          <Route path="/" exact component={FrontPage} />
        </Switch>
      </main>
    </>
  );
}

export default App;
