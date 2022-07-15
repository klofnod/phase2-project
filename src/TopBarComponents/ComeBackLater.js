import './MainPage.css'
import HomePage from './TopBarComponents/HomePage';
import ArtPage from './ArtPage';
import SearchPage from './SearchPage';
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
// drawingandprints 09, medieval art 17,       focus = {Arts of Africa, Oceania, and the Americas 5, greek and roman 13, egyptian 10, europe 11, Asian Art 6}


function MainPage(){
/*
  const [arrayOfCategoryIDs, setArrayOfCategoryIDs] = useState([])
  useEffect(()=>{
    fetch('https://collectionapi.metmuseum.org/public/collection/v1/departments')
    .then(res => res.json())
    .then(arrayOfIDs => setArrayOfCategoryIDs(arrayOfIDs.departments))
  },[])
 console.log('LOG of ID: ' ,arrayOfCategoryIDs)
  const LiList = arrayOfCategoryIDs.map(({departmentId, displayName})=>{
    let EasyName = '/' + displayName.replace(/\s/g,'')
    return (
    <li key={departmentId}>
      <NavLink to={EasyName}>{displayName}</NavLink>
    </li>
    )
  })
  const RouteList = arrayOfCategoryIDs.map(({departmentId, displayName})=>{
    let EasyName = displayName.replace(/\s/g,'')
    console.log(displayName)
    console.log(EasyName)
    return (
      <Route path={`/${EasyName}`} key={departmentId} >
        <EasyName />
      </Route>
    )
  })
*/
  return (
    <Router>
      <div id='mainList'>
        <ul id='topBar'>
          <li className=''>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Search">Search</Link>
          </li>
          <li>
            <Link to="/Art">Art</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/Home">
            <HomePage/>
          </Route> 
          <Route path="/Search">
            <SearchPage/>
          </Route>
          <Route path="/Art">
            <ArtPage/>
          </Route>
        </Switch> 
      </div>
    </Router>
  );
}

export default MainPage