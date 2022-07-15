import {useParams} from "react-router-dom";
import React, {useState, useEffect} from 'react';
import './topic.css'

function Topic() {

  let { topicId } = useParams();
    
  const [artArrayOfObjects, setArtArrayOfObjects]= useState ([])
  const [count, setCount] = useState(0);
  
  let arrayOfAllObj = []

  useEffect(()=>{
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=${topicId}`)
    .then(res => res.json())
    .then(data =>{
      setArtArrayOfObjects([])
      data.objectIDs.slice(count, count+5).map((artId)=>{
        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
        .then(res => res.json())
        .then(data => setArtArrayOfObjects(arrayOfAllObj=>[...arrayOfAllObj, data]))
        })
      })
      console.log('Log From useeffect: ',arrayOfAllObj)
  },[topicId, count])

  function IncreaseSliceValue(){
    setCount(count + 5);
   console.log(count)
  }

  function DecreaseSliceValue(){
    setCount(count - 5)
  }

  function PostFavoritedArt(favoritedArt){
    fetch(' http://localhost:3001/favoritedArt', {
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(favoritedArt)
    })
  }

  const ArtCard = artArrayOfObjects.map((eachObj)=>{
    console.log(eachObj.title)
    let FavoriteData = {title:eachObj.title , image: eachObj.primaryImage, id:eachObj.objectID }
    return(
      <li>
        <div className="mainCard" key={eachObj.objectID}>
          <h1 className="artTitle">{eachObj.title}</h1>
          <div className="imageCard">
            <img className="artImage" src={eachObj.primaryImage === ""? 'https://st.depositphotos.com/1987177/3470/v/450/depositphotos_34700099-stock-illustration-no-photo-available-or-missing.jpg': eachObj.primaryImage}/>
          </div>
          <button onClick={()=>PostFavoritedArt(FavoriteData)}>Favorite</button>
          <p>Culture: {eachObj.culture} <br/>
            medium: {eachObj.medium} <br/>
            period: {eachObj.period === "" ? 'Please check back later': eachObj.period} <br/>
            Accession Year: {eachObj.accessionYear} <br/>
            Credit: {eachObj.creditLine} <br/>
            Dimensions: {eachObj.dimensions} <br/>
            Classification: {eachObj.classification}
          </p>
        </div>
      </li>
    )
  })

  return (
    <div>
      <ul className="buttonList">
        <li>
          <button type="button" onClick={DecreaseSliceValue}>{'<'} Previous</button>
        </li>
        <li>
          <button type="button" onClick={IncreaseSliceValue}>Next {'>'}</button>
        </li>
      </ul>
      <ul id="listOfArt">
        {ArtCard}
      </ul>
    </div>
  );
}

export default Topic