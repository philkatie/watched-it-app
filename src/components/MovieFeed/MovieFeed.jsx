import React, { useEffect } from "react";
import { Card, Dimmer, Segment, Image } from "semantic-ui-react";
import MovieCard from "../MovieCard/MovieCard";
import { AppContext } from "../../context/AppContext";
import { getMovies } from "../../utils/imdbApi";

export default function MovieFeed({movies, watches, numMoviesCol, addToWatched, removeFromWatched}) {

    return (
        <>
            <Card.Group itemsPerRow={numMoviesCol} stackable>
                {movies.map((movie, index) => {
                    return (
                        <MovieCard
                            movie={movie}
                            key={index}
                            watches={watches}
                            addToWatched={addToWatched}
                            removeFromWatched={removeFromWatched}
                        />
                    )
                })}
            </Card.Group>
            
        </>
        );
    }

//     return (
//     <>
//         <Card.Group itemsPerRow={3} stackable>
//             {props.movies.map((movie, index) => <div>
//                 <Card>
//                     <Card.Content>
//                         <img src={movie.image} alt="movie"></img>
//                     </Card.Content>
//                     <Card.Description>
//                         {movie.fullTitle}
//                     </Card.Description>
//                 </Card>
//             </div>)}
//         </Card.Group>
        
//     </>
//     );
// }