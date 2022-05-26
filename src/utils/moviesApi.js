import tokenService from './tokenService';

const BASE_URL = '/api/movies';

export function create(movie) {
    return fetch(BASE_URL, {
      method: 'POST',
      body: movie,
      headers: {
        'Authorization': 'Bearer ' + tokenService.getToken()
      }
    
    }).then(res => res.json());
  }

export function getAll() {
  return fetch(BASE_URL, {
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  })
  .then(res => res.json());
}