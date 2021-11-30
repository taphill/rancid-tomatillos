import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './MovieDetails.css'
import Ordinal from '../../utils/utils'

function MovieDetails(props) {
  const data = useLocation().state.movieData

  const formatRating = () => {
    return Math.round(data.averageRating * 100) / 100
  }

  const formatDate = () => {
    const date = new Date(`${data.releaseDate} EST`)
    const month = date.toLocaleString('default', { month: 'long' })
    const day = Ordinal(date.getDate())
    const year = date.getFullYear()

    return `${month} ${day}, ${year}`
  }

  return (
    <>
      <div className="movie-details">
        <img src={data.backdropPath} alt="" />
        <h2>{data.title}</h2>
        <h2>Released: {formatDate()}</h2>
        <h2>Rating: {formatRating()}</h2>
      </div>
      <Link to="/">
        <button className="back-button">
          Go Back
        </button>
      </Link>
    </>
  )
}

export default MovieDetails
