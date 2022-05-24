import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import {Link} from "react-router-dom";
import { Card, Grid } from "semantic-ui-react";
import * as moviesApi from '../../utils/moviesApi';

export default function HomePage({user, handleLogout, movies, setMovies}) {

    // useEffect(function() {
    //     async function top250() {
    //         const movie = await moviesApi.top250();
    //         setMovies(movie);
    //     }
    //     top250();
    // },[]);

    return (
        <Grid centered>
            <Grid.Row>
                <Grid.Column>
                    <NavBar handleLogout={handleLogout} user={user} />
                    <h1>Popular Movies:</h1>
                </Grid.Column>
            </Grid.Row>
            {/* <Grid.Row>
                <Card.Group itemsPerRow={6} stackable>
                    {movies.map((m) => (
                        <Link to={`/movies/${m.id}`} key={m.id}>
                            <div>
                                <h1>{m.title}</h1>
                                <img src={m.image} alt={m.title} width="250" />
                            </div>
                        </Link>
                    ))}
                </Card.Group>
            </Grid.Row> */}
        </Grid>
    )
}