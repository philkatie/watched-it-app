import React, { useEffect, useState, useContext } from 'react'
import userService from "../utils/userService";
export const AppContext = React.createContext();

export const AppContextProvider = ({children}) => {

    const API_KEY = process.env.API_KEY;
	const [user, setUser] = useState(userService.getUser());
	const [appData, setAppData] = useState({});
    const [apiUrl, setApiUrl] = useState('');
    const [movieData, setMovieData] = useState({});
    const searchList = [
        {key: 'top250', name:'Top 250', url: `https://imdb-api.com/en/API/Top250Movies/${API_KEY}`}
    ]

    function apiSearch(query) {
        console.log('searching');

        return (
            fetch(query)
            .then(response => response.json())
            .then(data => setAppData(data))
        )
    }

    function movieSearch(apiId) {
        const url = `https://imdb-api.com/en/API/Title/${API_KEY}/${apiId}`
        return (
            fetch(url)
            .then(response => response.json())
            .then(data => setAppData(data))
        )
    }

	function handleLogout() {
		setUser(null);
	}

	function handleSignUpOrLogin() {
		const userData = userService.getUser()
		setUser(userData)
	}


	return (
		<AppContext.Provider value={{
			handleLogout, 
			handleSignUpOrLogin, 
			user, 
			appData, 
			apiSearch, 
			searchList, 
			movieSearch, 
			movieData,
		}}>{children}</AppContext.Provider>	)
}