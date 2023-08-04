import { NavLink,useLocation } from 'react-router-dom';
export const MoviesList = ({MoviesArry}) => {
  const location = useLocation()
    if(MoviesArry){
  return (
    <>
      <nav>
        {MoviesArry.map(elem => {
          return elem.title ? (
            <NavLink state={{from:location}} key={elem.id} to={`/movies/` + elem.id}>
              {elem.title}
            </NavLink>
          ) : null;
        })}
      </nav>
    </>
  );}
  return
};
