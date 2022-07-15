import Topic from "./Topic";
import {Switch, Route, Link, useRouteMatch} from "react-router-dom";
import React, {useState, useEffect} from 'react';
import './ArtPage.css'

function ArtPage() {

  // focus = {Arts of Africa, Oceania, and the Americas 5, greek and roman 13, egyptian 10, europe 11, Asian Art 6}

  let { path, url } = useRouteMatch();
    
  return (
    <div>
      <h2>Art Categorys</h2>
      <ul id="routeList">
        <li>
          <Link to={`${url}/13`}>Greek Art</Link>
        </li>
        <li>
          <Link to={`${url}/5`}>African Art</Link>
        </li>
        <li>
          <Link to={`${url}/10`}>Egyptian Art</Link>
        </li>
        <li>
          <Link to={`${url}/6`}>Asian Art</Link>
        </li>
        <li>
          <Link to={`${url}/11`}>European Art</Link>
        </li>
      </ul>
  
      <Switch>
        <Route exact path={path}>
          <h3>Please Choose An Art Category.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic  />
        </Route>
      </Switch>
    </div>
  );
}

export default ArtPage