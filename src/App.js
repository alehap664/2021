import './App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Cinema from './components/Cinema/Cinema';
import Admin from './components/Admin/Admin';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/cinema" component={Cinema} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </Router>
  );
}

export default App;
