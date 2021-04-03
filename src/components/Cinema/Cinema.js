import { Switch, Route, useRouteMatch} from 'react-router-dom'
import NotFound from '../Notfound/Notfound';

import Nav from './Nav/Nav';
import Footer from './Footer/Footer';

import Home from './Home/Home';
import Catalog from './Detail/Catalog//Catalog';
import Film from './Detail/Film/Film';
import Watch from '../Watch/Watch';
import Contact from './Contact/Contact';
import policy from './policy/policy';
import About from './About/About';

function Cinema() {
  const { path } = useRouteMatch();
  return (
    <>
      <Nav></Nav>
      <Switch>
        <Route path={path} exact component={Home} />
        <Route path={`${path}/detail`} exact component={Catalog} />
        <Route path={`${path}/detail/:id`} exact component={Film} />
        <Route path={`${path}/watch/:id`} exact component={Watch} />
        <Route path={`${path}/contacts`} exact component={Contact} />
        <Route path={`${path}/policy`} exact component={policy} />
        <Route path={`${path}/about`} exact component={About} />
        <Route path="*" exact component={NotFound} />
      </Switch>
      <Footer></Footer>
    </>
  );
}

export default Cinema;