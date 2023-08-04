import { Route,Routes } from "react-router-dom";
import { Home } from "pages/Home";
import { Movies } from "pages/Movies";
import { MoviesDetails } from "pages/MoviesDetails";
import { Cast } from "./Cast";
import { Reviews } from "./Reviews/Reviews";
import { SharedLayout } from "./SharedLayout/SharedLayout";
export const App = () => {
  return (
   <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast/>}/>
          <Route path="reviews" element={<Reviews/>}/>
        </Route>
      </Route>
    </Routes>
  );
};
