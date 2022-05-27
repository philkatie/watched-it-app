import React, { useState, useEffect } from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { AppContext } from '../../context/AppContext'
import * as moviesApi from '../../utils/moviesApi'

// const API_KEY = process.env.API_KEY;

export default function MovieCard({movie}) {
    
    return (
        <Card key={movie._id} raised>
          <Card.Content>
            <div className="image-container">
              <Image src={movie.image} wrapped ui={false} width={275}/>
            </div>
          </Card.Content>
          <Card.Content>
            <div className="container">
              {movie.fullTitle}
            </div>
          </Card.Content>
          <Card.Description>
            <div className="container d-flex align-items-center justify-content-center">
              <span className="mr-2">Add To Watched List</span>&nbsp;&nbsp;
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                fill="currentColor" 
                class="bi bi-tv-fill" 
                viewBox="0 0 16 16"
              >
                <path 
                  d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM2 2h12s2 0 2 2v6s0 2-2 2H2s-2 0-2-2V4s0-2 2-2z"
                />
              </svg>        
            </div>
          </Card.Description>
        </Card>
    );
}



    // const { user, removeMovie, addMovie, allPosters, getPoster } = React.useContext(AppContext)
    // const [imgUrl, setImgUrl] = useState(null);
    // const [apiMovie, setApiMovie] = useState(movie);

    // function MovieSearch(id) {
    //     console.log('searching for movie')
	// 	const url = `https://imdb-api.com/en/API/Title/${API_KEY}/${id}`
	// 	return (
	// 		fetch(url)
	// 			.then(response => response.json())
	// 			.then(data => setApiMovie(data))
	// 	)
	// }

    // useEffect(() => {
    //     // getPoster(movie.id)
    //     // (movieId in allPosters) ? setImgData(allPosters[movieId]) : getPoster(movieId)
    //     movie ? setApiMovie(movie) : MovieSearch(movieId)
    // }, [movieDB]);

    // const inList = movieDB?.length && user ? movieDB[0].users.includes(user._id) : false
    // const liked = inList ? 'red' : 'grey'
    // const clickHandler =
    // inList
    //   ? () => removeMovie(apiMovie.id)
    //   : () => addMovie(apiMovie.id)

    // const Rated = movie?.imDbRating ? <Card.Description className={"ui center aligned"}><Icon name={'star'} color='yellow'></Icon>IMDB Rating: {movie.imDbRating}</Card.Description> : <Card.Description className={"ui center aligned"}><Icon name={'star'} color='yellow'></Icon>No Rating Available</Card.Description>


    // return (
    //     <Card raised>
    //         <Card.Content>
    //             <Card.Header>
    //                 {/* {apiMovie?.title} */}
    //                 <h1>Movie Title</h1>
    //             </Card.Header>
    //             {/* {Rated} */}
    //             Rated R
    //         </Card.Content>
    //         {/* <Image  
    //             as={Link} 
    //             to={`/${apiMovie?.id}`} 
    //             src={`${imgUrl ? imgUrl : apiMovie?.image}`} 
    //             wrapped ui={false} /> */}
    //     </Card>
    // )
