import React from 'react';
import {Switch, Route} from "react-router-dom";
import './Main.scss';

import Book from "./Book/Book.jsx";
import Film from "./Film/Film";

const Main = () => {
  return (
    <Switch>
      <Route path="/book">
        <Book />
      </Route>
      <Route path="/film">
        <Film />
      </Route>
    </Switch>
  )
}

export default Main
