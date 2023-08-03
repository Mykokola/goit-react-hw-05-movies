import { useEffect } from 'react';
import { fetchTrendingMovies } from 'apiMovies/fetchMovies';
import { useState } from 'react';
import { NavLink} from 'react-router-dom';
export const Home = () => {
  const [trendFilmsArry, setTrendFilmsArry] = useState([]);
  const trendMoviesMass = async () => {
    const response = await fetchTrendingMovies();
    return response;
  };

  useEffect(() => {
    trendMoviesMass().then(response => {
      setTrendFilmsArry(response.data.results);
    });
  }, []);
  return (
    <>
      <h1>Trending Today</h1>
      <nav>
        {trendFilmsArry.map(elem => {
          return elem.title ? (
              <NavLink key={elem.id} to={`/movies/` + elem.id}>{elem.title}</NavLink>
          ) : null;
        })}
      </nav>
    </>
  );
};
