import './App.css'
import movieData from './movieData'
import MoviesGrid from './components/MoviesGrid/MoviesGrid'

function App() {
  return (
    <div className="App">
      <h1>Rancid Tomatillos</h1>
      <MoviesGrid movieData={movieData}/>
    </div>
  )
}

export default App
