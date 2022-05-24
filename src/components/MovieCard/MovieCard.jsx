import React, { useState } from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { AppContext } from '../../context/AppContext'

const API_KEY = process.env.API_KEY;

export default function MovieCard({ movie }) {
    
    // const [movieId, setMovieId] = useState('');
    const [imgUrl, setImgUrl] = useState(null);

    return (
        <Card raised>
            <Card.Content>
                <Card.Header>
                    {movie.title}
                </Card.Header>
            </Card.Content>
            <Image 
                as='a'
                href={`/${movie.id}`}
                src={`${imgUrl ? imgUrl : movie.image}`}
            />
        </Card>
    )
}