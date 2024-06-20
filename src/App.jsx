import React from "react";
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom";
import ThemeProvider from "./components/ThemeProvider/theme-provider";
import Layout from "./Layout";
import Home from "./components/Home";
import LoginSignup from "./components/LoginComponent/LoginSignup";
import Stocks from "./components/ExploreSection/Explore/Stocks";
import NewsFeed from "./components/ExploreSection/Explore/NewsFeed";

export default function App(){
    const router = new createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/loginsignup" element={<LoginSignup />} />
            <Route path="/stocks" element={<Stocks />}/>
            <Route path='/news' element={<NewsFeed/>}/>
          </Route>
        )
      );
    return(
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <RouterProvider router={router} />
            </ThemeProvider>
    )
}