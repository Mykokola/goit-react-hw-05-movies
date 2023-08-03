import { Route,Routes,NavLink } from "react-router-dom";
import { Home } from "pages/Home";
import { Movies } from "pages/Movies";
import { MoviesDetails } from "pages/MoviesDetails";
export const App = () => {
  return (
 <>
 <nav>
  <NavLink to="/">Home</NavLink>
  <NavLink to="/movies">Movies</NavLink>
 </nav>
 <Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/movies" element={<Movies/>}></Route>
  <Route path="/movies/:id" element={<MoviesDetails/>}></Route>
 </Routes>
 </>
   
  );
};
