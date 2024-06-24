import React from "react";
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import LoginSignup from "./components/LoginComponent/LoginSignup";
import Stocks from "./components/ExploreSection/Explore/Stocks";
import NewsFeed from "./components/ExploreSection/Explore/NewsFeed";
import useAuth, { AuthProvider }  from "./context/AuthContext";
import ProtectedRoute from "./components/LoginComponent/ProtectedRoute";
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
export default function App(){
  const {authStatus, user, handleLogin,handleRegister, handleLogout} = useAuth();

    // const router = new createBrowserRouter(
    //     createRoutesFromElements(
    //       <Route path="/" element={<Layout />} errorElement={<ErrorBoundary/>}>
    //         <Route path="/" element={<Home />} />
    //         <Route path="/loginSignup" element={<LoginSignup/>} /> 
    //         <Route path="/stocks" element={authStatus? <Stocks /> : <ProtectedRoute/>}/>
    //         <Route path='/news' element={authStatus? <NewsFeed/> : <ProtectedRoute/>}/>
    //       </Route>
    //     )
    //   );

      const router = new createBrowserRouter(
        [
          {
            path: "/",
            element: <Layout />,
            errorElement: <ErrorBoundary/>,
            children: [
              {
                path: "/",
                element: <Home/>
              },
              {
                path: "/loginSignup",
                element: authStatus ? <LoginSignup/> : <ProtectedRoute/>
              },
              {
                path: "/stocks",
                element: authStatus? <Stocks />: <ProtectedRoute/>
              },
              {
                path: "/news",
                element: <NewsFeed />
              }
            ]
          }
        ]
      )
    return(
            <AuthProvider value={{authStatus, user, handleLogin,handleRegister, handleLogout}}>
                <RouterProvider router={router} />
            </AuthProvider>
    )
}