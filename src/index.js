import React from 'react';
import ReactDOM from 'react-dom/client';
import './stylesheets/index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import AllProducts from './pages/AllProducts';
import NewProducts from './pages/NewProducts';
import ProductDetail from './pages/ProductDetail';
import MyCart from './pages/MyCart';
import Home from './pages/Home';
import Login from './pages/Login';
import ProtectedRoute from './pages/ProtectedRoute';
import { UserContextProvider } from './context/UserContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: '/products', element: <AllProducts /> },
      {
        path: '/products/new',
        element: (
          <ProtectedRoute requireAdmin>
            <NewProducts />
          </ProtectedRoute>
        ),
      },
      { path: '/products/:id', element: <ProductDetail /> },
      {
        path: '/cart',
        element: <MyCart />,
      },
      {
        path: '/login',
        element: (
          <ProtectedRoute isLogin>
            <Login />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>
);
