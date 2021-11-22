import './MovieDetails.css'
import React from 'react'
import Ordinal from '../../utils/utils'

function MovieDetails(props) {
  const goBack = (event) => {
    props.setShowDetails(false)
    props.setSelectedMovieId(null)
  }

  const formatRating = () => {
    return Math.round(props.averageRating * 100) / 100
  }

  const formatDate = () => {
    const date = new Date(`${props.releaseDate} EST`)
    const month = date.toLocaleString('default', { month: 'long' })
    const day = Ordinal(date.getDate())
    const year = date.getFullYear()

    return `${month} ${day}, ${year}`
  }

  return (
    <>
      <div className="movie-details">
        <img src={props.backdropPath} alt="" />
        <h2>{props.title}</h2>
        <h2>{formatRating()}</h2>
        <h2>{formatDate()}</h2>
      </div>
      <button className="back-button" onClick={goBack}>Go Back</button>
    </>
  )
}

export default MovieDetails
