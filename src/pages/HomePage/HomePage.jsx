import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Link, Outlet } from "react-router-dom";
import { Card, Grid } from "semantic-ui-react";
import { AppContext } from "../../context/AppContext";
import MovieFeed from "../../components/MovieFeed/MovieFeed";
import MovieCard from "../../components/MovieCard/MovieCard";
import AddMovieForm from "../../components/AddMovieForm/AddMovieForm";
import * as moviesApi from "../../utils/moviesApi";

export default function HomePage({user, handleLogout}) {

    const [movies, setMovies] = useState([])

    async function handleAddMovie(movie) {
        console.log(movie);
        const data = await moviesApi.create(movie);
        console.log(data.movie, ' This is a new movie ', data, ' data variable')
        setMovies(movies => [data.movie, ...movies])
    }

    return (
        <Grid centered>
            <Grid.Row>
                <Grid.Column>
                    <NavBar handleLogout={handleLogout} user={user} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <AddMovieForm />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column style={{ maxWidth: 1000 }}>
                  <h1>Popular Movies:</h1>
                  {/* <MovieCard /> */}
                    <MovieFeed /> 
                </Grid.Column>
                
            </Grid.Row>
        </Grid>
    )
}