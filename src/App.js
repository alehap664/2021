import './App.scss';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Cinema from './components/Cinema/Cinema';
import Admin from './components/Admin/Admin';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="https://alehap664.github.io/react-cinema/" exact component={Home} />
        <Route path="https://alehap664.github.io/react-cinema/cinema" component={Cinema} />
        <Route path="https://alehap664.github.io/react-cinema/admin" component={Admin} />
      </Switch>
    </Router>
  );
}

const Home = () => {
  return(
    <Redirect to="/cinema" />
  )
}

export default App;
