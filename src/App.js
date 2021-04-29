import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import ManageCollection from './containers/ManageCollection/ManageCollection';
import ViewCollection from './containers/ViewCollection/ViewCollection'; 

import './App.css';



function App() {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/admin" component={ManageCollection} />
          {/*         <Route path="/" component={FrontPage} /> */}
<Route path="/gallery" exact component={ViewCollection} />
        </Switch>
      </main>
    </>
  );
}

export default App;
