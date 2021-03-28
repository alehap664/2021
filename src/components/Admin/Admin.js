import Side from "./Side/Side";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import Book from "./Main/Book/Book.jsx";
import Film from "./Main/Film/Film";
const Admin = () => {
  const { path } = useRouteMatch();
  return (
    <div className="container-fluid h-100vh bg-main p-0 d-flex flex-nowrap admin">
      <Side />
      <Switch>
        <Route path={`${path}/add`} exact component={Book} />
        <Route path={`${path}/film`} component={Film} />
      </Switch>
    </div>
  )
}

export default Admin
