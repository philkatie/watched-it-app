import React, { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import HomePage from "../HomePage/HomePage";
import ProfilePage from "../ProfilePage/ProfilePage";
import userService from "../../utils/userService";

const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [user, setUser] = useState(userService.getUser()); // getUser decodes our JWT token, into a javascript object
  // this object corresponds to the jwt payload which is defined in the server signup or login function that looks like
  // this  const token = createJWT(user); // where user was the document we created from mongo
  const [movies, setMovies] = useState([]);
  const [watches, setWatches] = useState([]);

  function handleSignUpOrLogin() {
    setUser(userService.getUser()); // getting the user from localstorage decoding the jwt
  }

  function handleLogout() {
    userService.logout();
    setUser(null);
  }

  const getMovies = async () => {
    const url = `https://imdb-api.com/en/API/Top250Movies/${REACT_APP_API_KEY}`

    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson);
    setMovies(responseJson.items)
  }

  useEffect(()=>{
      getMovies();
  }, []);

  function addToWatched(movie) {
    const newWatchesList = [...watches, movie];
    setWatches(newWatchesList);
  }

  function removeFromWatched(movie) {
    const newWatchesList = watches.filter((watch) => watch.id !== movie.id);
    setWatches(newWatchesList);
  }

  if (user) {
    return (
      <Routes>
        <Route
        path="/"
        element={<HomePage 
          user={user} 
          movies={movies} 
          watches={watches}
          handleLogout={handleLogout} 
          addToWatched={addToWatched}
          removeFromWatched={removeFromWatched}
        />}
      />
        <Route
          path="/login"
          element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        <Route
          path="/signup"
          element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        <Route
          path="/:username" 
          element={<ProfilePage 
            user={user} 
            watches={watches}
            handleLogout={handleLogout} 
            addToWatched={addToWatched}
            removeFromWatched={removeFromWatched}
          />}/>
      </Routes>
    );
  }

  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage 
          user={user} 
          movies={movies} 
          watches={watches}
          handleLogout={handleLogout} 
          addToWatched={addToWatched}
          removeFromWatched={removeFromWatched}
        />}
      />
      <Route
        path="/login"
        element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      <Route
        path="/signup"
        element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
