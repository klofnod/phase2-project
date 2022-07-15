import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import React, {useState, useEffect} from 'react';
import './ArtPage.css'
import GreekRomanArtPage from "../ArtComponents/GreekRomanArt";
import EgyptianArtPage from "../ArtComponents/EgyptianArt";
import EuropeanPaintingsPage from "../ArtComponents/EuropeanPaintings";
import AsianArtPage from "../ArtComponents/AsianArt";
import AfricanArtPage from "../ArtComponents/AfricanArt";


function ArtPage(){
/*
  const [artArrayOfObjects, setArtArrayOfObjects]= useState ([])
  let arrayOfAllObj = []
  function GetCategoryID (categoryID){
    useEffect(()=>{
      fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=${categoryID}`)
      .then(res => res.json())
      .then(data => 
        {data.objectIDs.slice(0, 5).map((artId)=>{
          fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
          .then(res => res.json())
          .then(data => (arrayOfAllObj.push(data)))
          })
        })
        setArtArrayOfObjects(arrayOfAllObj)
    },[])
  }
*/
 
    return (
        <Router>
        <div id='mainList'>
            <ul id="topList">
              <li>
                <Link to="/GreekRomanArt">Greek & RomanArt</Link>
              </li>
              <li>
                <Link to="/EgyptianArt">Egyptian Art</Link>
              </li>
              <li>
                <Link to="/EuropeanPaintings">European Paintings</Link>
              </li>
              <li>
                <Link to="/AfricanArt">Arts of Africa, Oceania, & the Americas</Link>
              </li>
              <li>
                <Link to="/AsianArt">Asian Art</Link>
              </li>
            </ul>
            <Switch>
                <Route path="/GreekRomanArt">
                    <GreekRomanArtPage  />
                </Route> 
                <Route  path="/EgyptianArt">
                    <EgyptianArtPage />
                </Route>
                <Route path="/EuropeanPaintings">
                    <EuropeanPaintingsPage  />
                </Route>
                <Route path="/AfricanArt">
                  <AfricanArtPage  />
                </Route>
                <Route path="/AsianArt">
                  <AsianArtPage  />
                </Route>
            </Switch> 
        </div>
        </Router>
    );
}



export default ArtPage