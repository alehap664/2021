import { Switch, Route, useRouteMatch} from 'react-router-dom'
import Nav from './Nav/Nav';
import Home from './Home/Home';
import Detail from './Detail/Detail';

function Cinema() {
  const { path } = useRouteMatch();
  console.log(path);
  return (
    <>
      <Nav></Nav>
      <Switch>
        <Route path={path} exact component={Home} />
        <Route path={`${path}/detail/:id`} exact component={Detail} />
      </Switch>
    </>
  );
}

export default Cinema;