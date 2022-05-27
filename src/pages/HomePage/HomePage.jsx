import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Link, Outlet } from "react-router-dom";
import { Card, Grid } from "semantic-ui-react";
import { AppContext } from "../../context/AppContext";
import MovieFeed from "../../components/MovieFeed/MovieFeed";
import MovieCard from "../../components/MovieCard/MovieCard";
import * as moviesApi from "../../utils/moviesApi";

export default function HomePage({user, handleLogout}) {

    const [movies, setMovies] = useState([])

    const getTop250 = async () => {
        const url = "https://imdb-api.com/en/API/Top250Movies/k_677cenz9"

        const response = await fetch(url);
        const responseJson = await response.json();

        console.log(responseJson);
        setMovies(responseJson.items)
    }

    useEffect(()=>{
        getTop250();
    }, []);

    async function handleAddMovie(movie) {
        console.log(movie);
        const data = await moviesApi.create(movie);
        console.log(data.movie, ' This is a new movie ', data, ' data variable')
        setMovies(movies => [data.movie, ...movies])
    }

    async function getMovies() {
        try {
            const data = await moviesApi.getAll();
            setMovies([...data.movies])
        } catch(err) {
            console.log(err, ' this is the error')
        }
    }

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <Grid centered>
            <Grid.Row>
                <Grid.Column>
                    <NavBar handleLogout={handleLogout} user={user} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column style={{ maxWidth: 1000 }}>
                  <h1>IMDB's Top 250 Movies:</h1>
                    <MovieFeed movies={movies} numMoviesCol={3} /> 
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}