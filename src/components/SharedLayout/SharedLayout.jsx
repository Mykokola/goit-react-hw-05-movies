import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
export const SharedLayout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading....</div>}>
        <Outlet/>
      </Suspense>
    </>
  );
};
