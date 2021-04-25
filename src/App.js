import { Route, Switch } from 'react-router-dom';

import ManageCollection from './containers/ManageCollection/ManageCollection';
/* import ViewCollection from './containers/ViewCollection/ViewCollection'; */

import './App.css';



function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={ManageCollection} />
{/*         <Route path="/" exact component={ViewCollection} /> */}
      </Switch>
    </>
  );
}

export default App;
