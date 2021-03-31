import { Switch, Route, useRouteMatch} from 'react-router-dom'
import NotFound from '../Notfound/Notfound';

import Nav from './Nav/Nav';
import Footer from './Footer/Footer';

import Home from './Home/Home';
import Catalog from './Detail/Catalog//Catalog';
import Film from './Detail/Film/Film';
import Watch from '../Watch/Watch';

function Cinema() {
  const { path } = useRouteMatch();
  console.log(path);
  return (
    <>
      <Nav></Nav>
      <Switch>
        <Route path={path} exact component={Home} />
        <Route path={`${path}/detail`} exact component={Catalog} />
        <Route path={`${path}/detail/:id`} exact component={Film} />
        <Route path={`${path}/watch/:id`} exact component={Watch} />
        <Route path="*" exact component={NotFound} />
      </Switch>
      <Footer></Footer>
    </>
  );
}

export default Cinema;