import './HomePage.css'

function Home() {
  
    return (
     
        <div id="homePageDiv">
          <h2>Welcome to the Met museum Art Viewer</h2>
          <img id='mainImage' src="https://www.metmuseum.org/-/media/images/blogs/now-at-the-met/2021/2021_03/dan-max-march-reflection/header_1520.jpg?h=1231&w=1520&sc_lang=en&hash=B716F81B9353A3AD09DCD456DCEC3E80"/>
        <div id='infoSection'>
          <h3>About the Museum</h3>
          <p className='pTags'>The Metropolitan Museum of Art presents over 5,000 years of art from around the world for everyone to experience and enjoy. The Museum lives in two iconic sites in New York City—The Met Fifth Avenue and The Met Cloisters. Millions of people also take part in The Met experience online.<br/> Since its founding in 1870, The Met has always aspired to be more than a treasury of rare and beautiful objects. Every day, art comes alive in the Museum's galleries and through its exhibitions and events, revealing new ideas and unexpected connections across time and across cultures.</p>
          <h3>Mission Statement</h3>
          <p className='pTags'>The Met was founded on April 13, 1870, "to be located in the City of New York, for the purpose of establishing and maintaining in said city a Museum and library of art, of encouraging and developing the study of the fine arts, and the application of arts to manufacture and practical life, of advancing the general knowledge of kindred subjects, and, to that end, of furnishing popular instruction."<br/>This statement of purpose has guided the Museum for over 140 years.<br/>On January 13, 2015, the Trustees of The Metropolitan Museum of Art reaffirmed this statement of purpose and supplemented it with the following statement of mission:<br/>The Metropolitan Museum of Art collects, studies, conserves, and presents significant works of art across all times and cultures in order to connect people to creativity, knowledge, and ideas.</p>
        </div>
      </div>
    );
}

export default Home