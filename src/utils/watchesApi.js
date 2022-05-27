import tokenService from "./tokenService"

const BASE_URL = '/api'

export function create(movieId){
	return fetch(`${BASE_URL}/posts/${movieId}/watches`, {
		method: 'POST',
		headers: {
			'Authorization': 'Bearer ' + tokenService.getToken()
		  }
	}).then(res => {
		if(res.ok) return res.json()
		throw new Error('Not logged In! Check Express terminal')
	})
}

export function removeWatch(watchId){
	return fetch(`${BASE_URL}/watches/${watchId}`, {
		method: 'DELETE',
		headers: {
			'Authorization': 'Bearer ' + tokenService.getToken()
		  }
	}).then(res => {
		if(res.ok) return res.json()
		throw new Error('Not logged In! Check Express terminal')
	})
}