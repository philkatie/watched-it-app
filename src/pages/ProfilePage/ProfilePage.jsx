import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Card, Grid } from "semantic-ui-react";
import * as moviesApi from "../../utils/moviesApi";
import * as watchesApi from '../../utils/watchesApi';
import WatchesFeed from "../../components/WatchesFeed/WatchesFeed";

export default function HomePage({user, movies, watches, handleLogout, addToWatched, removeFromWatched}) {

    return (
        <Grid centered>
            <Grid.Row>
                <Grid.Column>
                    <NavBar handleLogout={handleLogout} user={user} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column style={{ maxWidth: 1000 }}>
                  <h1>My Watched List:</h1>
                    <WatchesFeed 
                        movies={movies} 
                        watches={watches}
                        numMoviesCol={3}
                        addToWatched={addToWatched}
                        removeFromWatched={removeFromWatched}
                        user={user}
                    /> 
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}