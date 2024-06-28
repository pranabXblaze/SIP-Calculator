import React from "react";
import { NavLink,Link } from "react-router-dom";

import { ModeToggle } from "./mode-toggle";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ToastContainer,toast,cssTransition } from "react-toastify";
import 'react-toastify/ReactToastify.css'
import useAuth, { AuthProvider } from "../context/AuthContext";
export default function Header() {
  
  const {authStatus, user,handleLogout } = useAuth();

  //console.log(auth)
  //console.log(authStatus);
  const Bounce = cssTransition({
    enter: "animate__animated animate__bounceIn",
    exit: "animate__animated animate__bounceOut"
  });

  const notify_lout = () => toast.success('🌐 Logged out Succesfully.', {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce
  })

  function handle_l() {
    handleLogout()
    return notify_lout
  }
  return (
    <AuthProvider value={{authStatus, user, handleLogout}}>
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
          <NavLink to='/'    
          className={({isActive}) =>`${isActive ? "text-orange-700" : "text-gray-500"} lg:hover:bg-transparent hover:text-orange-700`
                     }>
          Home
          </NavLink>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
        <NavLink to={'/stocks' || '/news'}   
          className={({isActive}) =>`${isActive ? "text-orange-700" : "text-gray-500"} lg:hover:bg-transparent hover:text-orange-700`
                    }>
          Explore
          </NavLink>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
          <NavLink to={authStatus? '/stocks' : '/loginSignup'}    
          className={({isActive}) =>`${isActive ? "text-orange-700" : "text-gray-500"} lg:hover:bg-transparent lg:border-0 hover:text-orange-700`
                     }>
          Stocks
          </NavLink>
          </MenubarItem>
          <MenubarItem>
          <NavLink to={authStatus? '/stocks' : '/loginSignup'}   
          className={({isActive}) =>`${isActive ? "text-orange-700" : "text-gray-500"} lg:hover:bg-transparent lg:border-0 hover:text-orange-700`
                     }>
          Latest Buzz
          </NavLink>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
          <MenubarCheckboxItem checked>
            Always Show Full URLs
          </MenubarCheckboxItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
    <div className="flex">
        <ModeToggle/>
     </div>
     <div className="flex">
     {authStatus && <div>
   <DropdownMenu>
     <DropdownMenuTrigger asChild>
   <Avatar>
   <AvatarImage src={`https://ui-avatars.com/api/?name=${user}`}/>
   <AvatarFallback>Username:{user?.email}</AvatarFallback>
   </Avatar>
   </DropdownMenuTrigger>
   <DropdownMenuContent>
     <DropdownMenuItem>
       <Link to={''}>
       My Account
       </Link>
     </DropdownMenuItem>
     <DropdownMenuItem className='' onClick={handle_l}> 
       Logout
     </DropdownMenuItem>
   </DropdownMenuContent>
   </DropdownMenu>
 </div>}
 { !authStatus && <div className="flex justify-end space-x-2">
            <Link
              className="bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-gradient-to-l flex align-middle text-center min-h-[2px] text-white py-2 px-4 rounded-lg"
              to="/loginSignup"
            >
              Login/Signup
            </Link>
  </div> 
  }
  <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        draggable
        pauseOnHover= {false}
        theme="colored"
        transition= {Bounce}
        ></ToastContainer>
      </div>        
    </AuthProvider>
  );
}