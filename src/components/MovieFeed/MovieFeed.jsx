import React, { useEffect } from "react";
import { Card, Dimmer, Segment, Image } from "semantic-ui-react";
import MovieCard from "../MovieCard/MovieCard";
import { AppContext } from "../../context/AppContext";
import { getMovies } from "../../utils/imdbApi";

export default function MovieFeed({movies, watches, numMoviesCol, addToWatched, removeFromWatched, user}) {

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
                            user={user}
                        />
                    )
                })}
            </Card.Group>
            
        </>
        );
    }