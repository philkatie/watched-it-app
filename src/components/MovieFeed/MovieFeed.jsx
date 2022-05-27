import React, { useEffect } from "react";
import { Card, Dimmer, Segment, Image } from "semantic-ui-react";
import MovieCard from "../MovieCard/MovieCard";
import { AppContext } from "../../context/AppContext";
import { getMovies } from "../../utils/imdbApi";

export default function MovieFeed(props) {

    return (
    <>
        <Card.Group itemsPerRow={3} stackable>
            {props.movies.map((movie, index) => <div>
                <Card>
                    <Card.Content>
                        <img src={movie.image} alt="movie"></img>
                    </Card.Content>
                    <Card.Description>
                        {movie.fullTitle}
                    </Card.Description>
                </Card>
            </div>)}
        </Card.Group>
        
    </>
    );
}