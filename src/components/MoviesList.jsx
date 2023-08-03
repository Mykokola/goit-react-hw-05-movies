import { NavLink } from 'react-router-dom';
export const MoviesList = ({MoviesArry}) => {
    if(MoviesArry){
  return (
    <>
      <nav>
        {MoviesArry.map(elem => {
          return elem.title ? (
            <NavLink key={elem.id} to={`/movies/` + elem.id}>
              {elem.title}
            </NavLink>
          ) : null;
        })}
      </nav>
    </>
  );}
  return
};
