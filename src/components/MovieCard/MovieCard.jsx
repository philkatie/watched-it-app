import React, { useState } from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import * as moviesApi from "../../utils/moviesApi";

const API_KEY = process.env.API_KEY;

export default function MovieCard() {
    
    // const [movieId, setMovieId] = useState('');

    return (
        <Card>
            <Card.Content>
                <Card.Header>
                    {/* {movieId?.title} */}
                </Card.Header>
            </Card.Content>
        </Card>
    )
}