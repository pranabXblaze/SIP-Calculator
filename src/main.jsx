import React  from "react";
import ReactDOM from "react-dom/client";

import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import ThemeProvider from "./components/ThemeProvider/theme-provider";
import "./index.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Layout from "./Layout";
import Home from "./components/Home";
import LoginSignup from "./components/LoginComponent/LoginSignup";
import Explore from "./components/ExploreSection/Explore/Explore";
import "./index.css";

const router = new createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/loginSignup" element={<LoginSignup />} />
      <Route path="/explore" element={<Explore />}/>
    </Route>
  )
);

/* The commented code block is attempting to create a router instance using React Router. Here's a breakdown of what it is doing: */

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <ErrorBoundary>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
        </ThemeProvider>
      </ErrorBoundary>
  </React.StrictMode>
);
