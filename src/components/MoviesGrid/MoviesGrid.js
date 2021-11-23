import './MoviesGrid.css'
import React from 'react'
import Movie from '../Movie/Movie'
import MovieDetails from '../MovieDetails/MovieDetails'
import fetchMovies from '../../api/rancid-tomatillos'

function MoviesGrid(props) {
  const [movieData, setMovieData] = React.useState({
    status: 'idle',
    error: null,
    movies: []
  })

  const [showDetails, setShowDetails] = React.useState(false)
  const [selectedMovieId, setSelectedMovieId] = React.useState(null)

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

  console.log(movieData)

  const allMovies = movieData.movies.map(movie => {
    return (
      <Movie
        key={movie.id}
        id={movie.id}
        posterPath={movie.poster_path}
        setShowDetails={setShowDetails}
        setSelectedMovieId={setSelectedMovieId}
      />
    )
  })

  const selectedMovie = movieData.movies.find( ({ id }) => id === selectedMovieId)

  return (
    <div>
      {showDetails
        ? <MovieDetails
            title={selectedMovie.title}
            averageRating={selectedMovie.average_rating}
            releaseDate={selectedMovie.release_date}
            backdropPath={selectedMovie.backdrop_path}
            setShowDetails={setShowDetails}
            setSelectedMovieId={setSelectedMovieId}
          />
        : <div className="movie-grid">
            {allMovies}
          </div>
      }
    </div>
  )
}

export default MoviesGrid
