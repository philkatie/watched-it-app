import React, { useState } from 'react';
import { Button, Form, Grid, Header, Image, Segment } from "semantic-ui-react";

export default function AddMovieForm(props) {

    const [state, setState] = useState({title: ''});

    function handleChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        
        const formData = new FormData()
        formData.append('title', state.title)
        props.handleAddMovie(formData);
    }

    return (
        <Grid textAlign='center' verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Segment>
                
                    <Form  autoComplete="off" onSubmit={handleSubmit}>
                    
                    <Form.Input
                        className="form-control"
                        name="title"
                        value={state.title}
                        placeholder="Movie Title"
                        onChange={handleChange}
                        required
                    />   
                    <Button
                        type="submit"
                        className="btn"
                    >
                        ADD MOVIE
                    </Button>
                    </Form>
                </Segment>
            </Grid.Column>
        </Grid>
    )
}