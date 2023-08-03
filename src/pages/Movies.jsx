import { useState, useEffect } from 'react';
import { fetchSearchMovies } from 'apiMovies/fetchMovies';
import { useSearchParams } from 'react-router-dom';
import { MoviesList } from 'components/MoviesList';
export const Movies = () => {
  const [searchForm, setSearchFrom] = useState('');
  const [searchMoviesArry, setSearchMoviesArry] = useState([]);
  const [searchParams, setSearchForm] = useSearchParams();
  const handSetState = e => {
    setSearchFrom(e.target.value);
  };
  const searchMovies = async moviesName => {
    const response = await fetchSearchMovies(moviesName);
    return response;
  };

  const submitSearch = e => {
    e.preventDefault();
    searchForm.trim()
      ? setSearchForm({ query: searchForm })
      : setSearchForm({});
  };
  useEffect(() => {
    searchMovies(searchForm).then(response => {
      setSearchMoviesArry(response.data.results);
    });
  }, [searchParams]);

  return (
    <>
      <form onSubmit={submitSearch}>
        <input onChange={handSetState} value={searchForm} type="text" />
        <button type="submit">Search</button>
      </form>
      <MoviesList MoviesArry={searchMoviesArry}></MoviesList>
    </>
  );
};
