import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeNewsHub from './components/newsHub/home';
import Trending from './components/newsHub/trending';
import Categories from './components/newsHub/categories';
import Favorites from './components/newsHub/favorites';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <HomeNewsHub />,
  },
  {
    path: "/trending",
    element: <Trending />,
  },
  {
    path: "/categories",
    element: <Categories />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
