import React, { useState, useEffect } from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { AppContext } from '../../context/AppContext'
import * as moviesApi from '../../utils/moviesApi'
import AddToWatched from "../AddToWatched/AddToWatched";

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
            <AddToWatched />
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
