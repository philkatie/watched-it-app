import React, { useState, useEffect } from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import AddToWatched from "../AddToWatched/AddToWatched";
import RemoveFromWatched from "../RemoveFromWatched/RemoveFromWatched";

// const API_KEY = process.env.API_KEY;

export default function MovieCard({movie, watches, addToWatched, removeFromWatched, user}) {
  
    const watchIndex = watches.findIndex(
      (watch) => watch.id === movie.id
    );

    return (
        <Card key={movie._id} raised>
          <Card.Content>
            <div className="image-container">
              <Image src={movie.image} wrapped ui={false} width={275}/>
            </div>
          </Card.Content>
          <Card.Content>
            <div className="container">
              {movie.fullTitle}
            </div>
          </Card.Content>
          { user ? <>
            <Card.Description>
              {watchIndex > -1 ? 
              <>
                <div onClick={() => removeFromWatched(movie)}>
                  <RemoveFromWatched />
                </div>
              </> :
              <>
              <div onClick={() => addToWatched(movie)}>
                <AddToWatched />
              </div>
              </>
              }
            </Card.Description>
          </> : <>
            <Card.Description>
              <div>
                Log In To Start Your Watch List
              </div>
            </Card.Description>
          </>}
        </Card>
    );
}