import './App.scss';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Cinema from './components/Cinema/Cinema';
import Admin from './components/Admin/Admin';

function App() {
  return (
    // <Router>
    //   <Switch>
    //     <Route path="/" exact component={Home} />
    //     <Route path="/cinema" component={Cinema} />
    //     <Route path="/admin" component={Admin} />
    //   </Switch>
    // </Router>
    <Cinema />
  );
}

const Home = () => {
  return(
    <Redirect to="/cinema" />
  )
}

export default App;
