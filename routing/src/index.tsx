import React from 'react';
import ReactDOM from 'react-dom/client';
import {Router, Route, Routes} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Movies from "./pages/Movies";
import Theatre from "./pages/Theatre";
import Conserts from "./pages/Concerts";
import App from "./App";
import Moviesall from "./pages/Moviesall";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },

    {
        path: "movies",
        element: <Movies/>,

    },


    {
        path: "concerts",
        element: <Conserts/>,

    },
    {
        path: "theatre",
        element: <Theatre/>,
    },
    {
        path: `/movies:Id/1`,
        element: <Moviesall post={1}/>,
    },
    {
        path: `/movies:Id/2`,
        element: <Moviesall post={2}/>,
    },
    {
        path: `/movies:Id/3`,
        element: <Moviesall post={3}/>,
    },

]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <React.StrictMode>
      <RouterProvider router={router} />
    {/*{<App />}*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
