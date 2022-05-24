import React, { useEffect } from "react";
import { Card, Dimmer, Segment, Image } from "semantic-ui-react";
import MovieCard from "../MovieCard/MovieCard";
import { AppContext } from '../../context/AppContext';

export default function MovieFeed() {
    const {appData, user, apiSearch, searchList} = React.useContext(AppContext)

    useEffect(() => {
      apiSearch(searchList.filter(search => {return search.key === 'mostPopular'})[0].url);
    }, []);

    const Movies = appData.items?.map((movie, i) => {
        return (
            <MovieCard key={i}  movie={movie} />
        )
    })

  return (<>
  <h1 align='center'>{}</h1>
      <Card.Group itemsPerRow={6} stackable>
        {Movies}
    </Card.Group>
  </>

  );
}