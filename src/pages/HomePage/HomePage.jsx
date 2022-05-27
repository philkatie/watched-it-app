import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Link, Outlet } from "react-router-dom";
import { Card, Grid } from "semantic-ui-react";
import { AppContext } from "../../context/AppContext";
import MovieFeed from "../../components/MovieFeed/MovieFeed";
import MovieCard from "../../components/MovieCard/MovieCard";
import * as moviesApi from "../../utils/moviesApi";
import * as watchesApi from '../../utils/watchesApi';

export default function HomePage({user, movies, watches, handleLogout, addToWatched, removeFromWatched}) {

    return (
        <Grid centered>
            <Grid.Row>
                <Grid.Column>
                    <NavBar handleLogout={handleLogout} user={user} />
                </Grid.Column>
            </Grid.Row>
            {user ? <>
                <Grid.Row>
                    <Grid.Column style={{ maxWidth: 1000 }}>
                    <h1>IMDB's Top 250 Movies:</h1>
                        <MovieFeed 
                            movies={movies} 
                            watches={watches}
                            numMoviesCol={3}
                            addToWatched={addToWatched}
                            removeFromWatched={removeFromWatched}
                            user={user}
                        /> 
                    </Grid.Column>
                </Grid.Row>
            </> : <>
                <Grid.Row>
                    <Grid.Column style={{ maxWidth: 1000 }}>
                    <h1>IMDB's Top 250 Movies:</h1>
                    <h2>Log In To View Movies</h2>
                        {/* <MovieFeed 
                            movies={movies} 
                            watches={watches}
                            numMoviesCol={3}
                            addToWatched={addToWatched}
                            removeFromWatched={removeFromWatched}
                            user={user}
                        />  */}
                    </Grid.Column>
                </Grid.Row>
            </>}
            
        </Grid>
    )
}