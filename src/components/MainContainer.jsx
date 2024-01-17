import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitile from "./VideoTitle";
const Maincontainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[0];
  const { original_title, overview ,id} = mainMovie;

  return (
    <div>
      <VideoTitile title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default Maincontainer;
