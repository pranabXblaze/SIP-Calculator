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
import Stocks from "./components/ExploreSection/Explore/Stocks";
import "./index.css";
import NewsFeed from "./components/ExploreSection/Explore/NewsFeed";
import App from "./App";

// const router = new createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route path="/" element={<Home />} />
//       <Route path="/loginsignup" element={<LoginSignup />} />
//       <Route path="/stocks" element={<Stocks />}/>
//       <Route path='/news' element={<NewsFeed/>}/>
//     </Route>
//   )
// );


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
        <App/>
  </React.StrictMode>
);
