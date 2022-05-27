import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Link, Outlet } from "react-router-dom";
import { Card, Grid } from "semantic-ui-react";
import { AppContext } from "../../context/AppContext";
import MovieFeed from "../../components/MovieFeed/MovieFeed";
import MovieCard from "../../components/MovieCard/MovieCard";
import * as moviesApi from "../../utils/moviesApi";
import * as watchesApi from '../../utils/watchesApi';

export default function HomePage({user, handleLogout, addToWatched}) {

    const [movies, setMovies] = useState([]);
    // const [watches, setWatches] = useState([]);
    const [error, setError] = useState("");


    const getMovies = async () => {
        const url = "https://imdb-api.com/en/API/Top250Movies/k_677cenz9"

        const response = await fetch(url);
        const responseJson = await response.json();

        console.log(responseJson);
        setMovies(responseJson.items)
    }

    useEffect(()=>{
        getMovies();
    }, []);

    // function addToWatched(movie) {
    //     const newWatchesList = [...watches, movie];
    //     setWatches(newWatchesList);
    // }

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
                    <MovieFeed 
                        movies={movies} 
                        numMoviesCol={3}
                        handleWatchesClick={addToWatched}
                    /> 
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}