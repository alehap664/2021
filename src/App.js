import './App.scss';
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import Cinema from './components/Cinema/Cinema';
import Admin from './components/Admin/Admin';
import Loading from './components/Loading/Loading';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cinema" component={Cinema} />
        <Route path="/admin" component={Admin} />
        <Route path="/loading" component={Loading} />
      </Switch>
    </Router>
  );
}

const Home = () => {
  return(
    <div>
      <a href="/cinema" className="text-light">Link to Cinema</a>
    </div>
  )
}

export default App;
