import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Root";
import Home from "./pages/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import ServicesDtls from "./pages/private/ServicesDtls";
import AuthProvider from "./providers/AuthProvider";
import About from "./pages/About";
import PrivateRoute from "./Pages/Private/PrivateRoute";
import Gallery from "./Pages/Gallery";

const router = createBrowserRouter([
  {
    path: "/", element: <Root />, errorElement: <ErrorPage />,
    children: [
      { loader: () => fetch('../public/card.json'), path: "/", element: <Home /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      { loader: () => fetch('../public/card.json'), path: "/services/:id", element: <PrivateRoute><ServicesDtls /></PrivateRoute> },
      { path: "/contact", element: <Contact /> },
      { path: "/about", element: <PrivateRoute><About /></PrivateRoute> },
      { path: "/gallery", element: <PrivateRoute><Gallery></Gallery></PrivateRoute> }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode><AuthProvider><RouterProvider router={router} /></AuthProvider></React.StrictMode>
);