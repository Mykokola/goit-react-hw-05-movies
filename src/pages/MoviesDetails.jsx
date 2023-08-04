import { useParams, NavLink, Link, useLocation } from 'react-router-dom';
import { fetchAbautMovies } from 'apiMovies/fetchMovies';
import { useState, useEffect } from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
export const MoviesDetails = () => {
  const { id } = useParams();
  const [moviesDetails, setMoviesDetails] = useState([]);
  const abautMovies = async id => {
    const response = await fetchAbautMovies(id);
    return response;
  };
  useEffect(() => {
    abautMovies(id).then(response => {
      setMoviesDetails(response.data);
    });
  }, [id]);
  try {
    const { overview, release_date, poster_path, title, genres, vote_average } =
      moviesDetails;
    let yearMovies = release_date.slice(0, 4);

    return (
      <>
        <div>
          <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt="" />
          <h1>
            {title}({yearMovies})
          </h1>
          <p>User Sroce:{Math.round(vote_average)}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          {genres.map(e => (
            <p key={e.id}>{e.name}</p>
          ))}
        </div>
        <div>
          <h3>addition information</h3>
          <NavLink to={'cast'}>Cast</NavLink>
          <NavLink to={'reviews'}>Reviews</NavLink>
          <Suspense fallback={<div>Loading subpage...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </>
    );
  } catch {
    return;
  }
};
