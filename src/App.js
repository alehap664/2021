import './App.scss';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Cinema from './components/Cinema/Cinema';
import Admin from './components/Admin/Admin';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cinema" component={Cinema} />
        <Route path="/admin" component={Admin} />
{/* 
        <Route path="/react-cinema" exact component={Home} />
        <Route path="/react-cinema/cinema" component={Cinema} />
        <Route path="/react-cinema/admin" component={Admin} /> */}
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
