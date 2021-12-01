const baseURL = 'https://rancid-tomatillos.herokuapp.com/api/v2'

export default function fetchMovies () {
  return fetch(`${baseURL}/movies`).then(response => response.json())
}
