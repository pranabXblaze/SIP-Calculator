import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
  } from "react-router-dom";



import Layout from "../Layout";
import Home from "./Home";
import LoginSignup from "./LoginComponent/LoginSignup";
import Explore from "./ExploreSection/Explore/Explore";

const router = new createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/loginSignup" element={<LoginSignup />} />
        <Route path="/explore" element={<Explore />}/>
      </Route>
    )
  );

export default function Routes() {

    const darkMode = useDarkMode(false);
    
  return( 
    <main className={`${darkMode ? 'dark' : ''} text-foreground bg-background`}>
    <RouterProvider router={router} />
    </main>
    
  )

}