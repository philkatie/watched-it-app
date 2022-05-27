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

    const [movies, setMovies] = useState([        {
        "id": "tt0111161",
        "rank": "1",
        "title": "The Shawshank Redemption",
        "fullTitle": "The Shawshank Redemption (1994)",
        "year": "1994",
        "image": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Frank Darabont (dir.), Tim Robbins, Morgan Freeman",
        "imDbRating": "9.2",
        "imDbRatingCount": "2590639"
    },
    {
        "id": "tt0068646",
        "rank": "2",
        "title": "The Godfather",
        "fullTitle": "The Godfather (1972)",
        "year": "1972",
        "image": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,1,128,176_AL_.jpg",
        "crew": "Francis Ford Coppola (dir.), Marlon Brando, Al Pacino",
        "imDbRating": "9.2",
        "imDbRatingCount": "1785900"
    },
    {
        "id": "tt0468569",
        "rank": "3",
        "title": "The Dark Knight",
        "fullTitle": "The Dark Knight (2008)",
        "year": "2008",
        "image": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Christopher Nolan (dir.), Christian Bale, Heath Ledger",
        "imDbRating": "9.0",
        "imDbRatingCount": "2561393"
    },
    {
        "id": "tt0071562",
        "rank": "4",
        "title": "The Godfather: Part II",
        "fullTitle": "The Godfather: Part II (1974)",
        "year": "1974",
        "image": "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,1,128,176_AL_.jpg",
        "crew": "Francis Ford Coppola (dir.), Al Pacino, Robert De Niro",
        "imDbRating": "9.0",
        "imDbRatingCount": "1232680"
    },
    {
        "id": "tt0050083",
        "rank": "5",
        "title": "12 Angry Men",
        "fullTitle": "12 Angry Men (1957)",
        "year": "1957",
        "image": "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Sidney Lumet (dir.), Henry Fonda, Lee J. Cobb",
        "imDbRating": "8.9",
        "imDbRatingCount": "765280"
    },])

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