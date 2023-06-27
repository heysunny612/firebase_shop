import React from "react";
import ReactDOM from "react-dom/client";
import "./stylesheets/index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound";
import AllProducts from "./pages/AllProducts";
import NewProducts from "./pages/NewProducts";
import ProductDetail from "./pages/ProductDetail";
import MyCart from "./pages/MyCart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import UserContextProvider from "./context/UserContext";
import ProtectedRoute from "./pages/ProtectedRoute";
import CartContextProvider from "./context/CartContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "/products", element: <AllProducts /> },
      {
        path: "/products/new",
        element: (
          <ProtectedRoute requireAdmin>
            <NewProducts />
          </ProtectedRoute>
        ),
      },
      { path: "/products/:id", element: <ProductDetail /> },
      {
        path: "/cart",
        element: (
          <ProtectedRoute>
            <MyCart />
          </ProtectedRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <CartContextProvider>
          <RouterProvider router={router} />
        </CartContextProvider>
      </UserContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
