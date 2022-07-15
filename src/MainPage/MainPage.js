import React from "react";
import {BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch} from "react-router-dom";
import Home from "./HomePage";
import ArtPage from "./ArtComps/ArtPage";
import FavoritePage from "./FavoritePage/FavoritePage";

function MainPage() {

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/ArtPage">Art</Link>
          </li>
          <li>
            <Link to="/FavoritePage">Favortie Page</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/ArtPage">
            <ArtPage />
          </Route>
          <Route path = "/FavoritePage">
            <FavoritePage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default MainPage


