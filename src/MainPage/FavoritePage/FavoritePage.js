import './FavoritePage.css'
import {useState, useEffect} from 'react';

function FavoritePage() {

    const [commentData, setCommentData]=useState('')
    const [favoritedArtData, setFavoritedArtData]= useState([])

    function GetComment(e){
        e.preventDefault()
        console.log(commentData)
    }

    function Test(e){
        setCommentData(e.target.value)
    }
    useEffect(()=>{
        fetch( 'http://localhost:3001/favoritedArt')
        .then(res => res.json())
        .then(data => setFavoritedArtData(data))
    },[])

    const FavoritedArtCard = favoritedArtData.map((eachObj)=>{
        return (
            <div key={eachObj.id}>
                <h1>{eachObj.title}</h1>
                <img className='favoriteImage' src={eachObj.image}/>
                <form onSubmit={GetComment}>
                    <input type="text" name="comment"value={commentData} onChange={Test}/>
                    <button type="submit">Add Comment</button>
                </form>
                <p>{commentData}</p>
            </div>
        )
    })
    return (
      <div>
        <h2>Favorite Page</h2>
        {FavoritedArtCard}
      </div>
    );
}

export default FavoritePage