import './Movie.css'
import React from 'react'

function Movie(props) {
  const showDetails = (event) => {
    const id = parseInt(event.target.id)
    props.setShowDetails(true)
    props.setSelectedMovieId(id)
  }

  return (
    <button className="movie" onClick={showDetails}>
      <img src={props.posterPath} alt="" id={props.id} />
    </button>
  )
}

export default Movie
