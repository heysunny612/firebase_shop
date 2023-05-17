import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import AllProducts from './pages/AllProducts';
import NewProducts from './pages/NewProducts';
import ProductDetail from './pages/ProductDetail';
import MyCart from './pages/MyCart';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: '/products', element: <AllProducts /> },
      { path: '/products/new', element: <NewProducts /> },
      { path: '/products/:id', element: <ProductDetail /> },
      { path: '/cart', element: <MyCart /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
