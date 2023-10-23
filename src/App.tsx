import './App.css'
import { Button } from './components/atoms/Button'
import { MovieAspects } from './components/atoms/MovieAspects'
import { MovieInfo } from './components/atoms/MovieInfo'

function App() {

  return (
    <div className="bg-black w-screen h-screen flex justify-center items-center">
      <div className=" bg-slate-100 p-16 rounded-2xl flex items-center justify-center">
        <MovieInfo date={'12-10-2023'} schedule={'10h 30m - 12h 15m'} title={'Spiderman 3'} seats={'4'} image={'https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg'}/>
      </div>
    </div>
  )
}

export default App
