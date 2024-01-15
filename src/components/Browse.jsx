
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import Header from "./Header"
import Maincontainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"



const Browse = () => {
  useNowPlayingMovies()
  return (
    <div>
      <Header/>
      <Maincontainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse