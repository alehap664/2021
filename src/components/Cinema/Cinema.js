import { Switch, Route, useRouteMatch} from 'react-router-dom'
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Catalog from './Detail/Catalog//Catalog';
import Film from './Detail/Film/Film';

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
      </Switch>
      <Footer></Footer>
    </>
  );
}

export default Cinema;