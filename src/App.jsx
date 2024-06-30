import React from "react";
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import LoginSignup from "./components/LoginComponent/LoginSignup";
import Stocks from "./components/ExploreSection/Explore/Stocks";
import NewsFeed from "./components/ExploreSection/Explore/NewsFeed";
import useAuth, { AuthProvider }  from "./context/AuthContext";
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
export default function App(){
  const {authStatus, user, handleLogin,handleRegister, handleLogout} = useAuth();
 
  const router = new createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<Layout />} errorElement={<ErrorBoundary/>}>
            <Route path="" element={<Home />}  />
            <Route path="/auth" element={<LoginSignup/>} /> 
            <Route path="/stocks" 
            element=
            { 
              <Stocks/>
            }
            />
            <Route path="/news" 
            element=
            {
              <NewsFeed/>
            }
            />
          </Route>
        )
      );
     
    return(
            <AuthProvider value={{authStatus, user, handleLogin,handleRegister, handleLogout}}>
                <RouterProvider router={router} />
            </AuthProvider>
    )
}