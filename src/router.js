import React from 'react';
import { createBrowserRouter, Link, RouterProvider, useRouteError } from 'react-router-dom';

import Home from './pages/Home';
import Booking from './pages/Booking';
import About from './pages/About';
import App from './App';


function NoMatch() {
  let error = useRouteError();
  console.log("error",error);
  return (
    <div>
      <h2>Nothing to see here!</h2>
      
      <p>Error: {error.status} - {error.statusText}</p>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    ErrorBoundary: NoMatch,
    children: [
      {
        index: true,
        Component: Home,
      }, {
        path: "booking",
        Component: Booking,
      }, {
        path: "about",
        Component: About,
      },
    ],
  }
]);

function AppRouter() {
  return <RouterProvider router={router} />;
};

export default AppRouter;