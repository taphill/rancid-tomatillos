import React from 'react'
import './MoviesGrid.css'
import Movie from '../Movie/Movie'
import fetchMovies from '../../api/rancid-tomatillos'

function MoviesGrid(props) {
  const [movieData, setMovieData] = React.useState({
    status: 'idle',
    error: null,
    movies: []
  })

  React.useEffect(() => {
    fetchMovies().then(
      data => {
        setMovieData({status: 'resolved', movies: data.movies})
      },
      error => {
        setMovieData({status: 'rejected', error})
      }
    )
  }, [])

  const allMovies = movieData.movies.map(movie => {
    return (
      <Movie
        key={movie.id}
        id={movie.id}
        title={movie.title}
        averageRating={movie.average_rating}
        releaseDate={movie.release_date}
        posterPath={movie.poster_path}
        backdropPath={movie.backdrop_path}
      />
    )
  })

  return (
    <div className="movie-grid">
      {allMovies}
    </div>
  )
}

export default MoviesGrid
