import './App.scss';
import {BrowserRouter as Router, Switch, Route , Redirect} from 'react-router-dom'
import Cinema from './components/Cinema/Cinema';
import Admin from './components/Admin/Admin';
import NotFound from './components/Notfound/Notfound';

import Nav from './components/Cinema/Nav/Nav';
import Footer from './components/Cinema/Footer/Footer';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cinema" component={Cinema} />
        <Route path="/admin" component={Admin} />
        <Route path="*">
          <Nav/>
          <NotFound />
          <Footer/>
        </Route>
      </Switch>
    </Router>
  );
}

const Home = () => {
  return(
    <Redirect to="/cinema"></Redirect>
  )
}

export default App;
