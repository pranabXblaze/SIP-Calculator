import React, { useState } from "react";
import { NavLink,Link } from "react-router-dom";

import { ModeToggle } from "./mode-toggle";
import {
  MenubarSub,
  MenubarSeparator,
  MenubarSubTrigger,
  MenubarSubContent,
  Menubar,
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
import 'react-toastify/ReactToastify.css'
import useAuth, { AuthProvider } from "../context/AuthContext";
export default function Header() {
  const {authStatus, user,handleLogout } = useAuth();
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  //console.log(auth)
  // console.log(authStatus);
  let category = ["business", "entertainment", "general", "health", "science", "sports", "technology","politics"]

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
          Explore
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
          <NavLink to={authStatus? '/stocks' : '/auth'}    
          className={({isActive}) =>`${isActive ? "text-orange-700" : "text-gray-500"} lg:hover:bg-transparent lg:border-0 hover:text-orange-700`
                     }>
          Stocks
          </NavLink>
          </MenubarItem>
          <MenubarItem>
          <NavLink to={authStatus? '/all-news' : '/auth'}   
          className={({isActive}) =>`${isActive ? "text-orange-700" : "text-gray-500"} lg:hover:bg-transparent lg:border-0 hover:text-orange-700`
                     }>
          Latest News
          </NavLink>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          Latest News
          </MenubarTrigger>
        <MenubarContent>
         
          <MenubarSub className={showCategoryDropdown ? "dropdown p-2 show-dropdown" : "dropdown p-2"}>
            <MenubarSubTrigger>Top Headlines</MenubarSubTrigger>
             <MenubarSubContent>
              {category.map((element, index) => 
                 (
                  <MenubarItem key={index} onClick={() => { setShowCategoryDropdown(!showCategoryDropdown) }}>

                    <Link to={"/top-headlines/" + element} className="flex gap-3 capitalize hover:text-red-500" type="btn"
                      onClick={() => {
                        setActive(!active)
                      }}>
                      {element}
                    </Link>
                  </MenubarItem>
                )
              )}
              </MenubarSubContent>
            </MenubarSub>
          <MenubarSeparator/>            
          <MenubarItem>
          <NavLink to={authStatus? '/country/:iso' : '/auth'}   
          className={({isActive}) =>`${isActive ? "text-orange-700" : "text-gray-500"} lg:hover:bg-transparent lg:border-0 hover:text-orange-700`
                     }>
          Country News
          </NavLink>
          </MenubarItem>
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
   <AvatarImage src={`https://ui-avatars.com/api/?name=${user.email}`}/>
   <AvatarFallback>Username:{user?.email}</AvatarFallback>
   </Avatar>
   </DropdownMenuTrigger>
   <DropdownMenuContent>
     <DropdownMenuItem>
       <Link to={''}>
       My Account
       </Link>
     </DropdownMenuItem>
     <DropdownMenuItem className='' onClick={handleLogout}> 
       Logout
     </DropdownMenuItem>
   </DropdownMenuContent>
   </DropdownMenu>
 </div>}
 { !authStatus && <div className="flex justify-end space-x-2">
            <Link
              className="bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-gradient-to-l flex align-middle text-center min-h-[2px] text-white py-2 px-4 rounded-lg"
              to="/auth"
            >
              Login/Signup
            </Link>
  </div> 
  }
      </div>        
    </AuthProvider>
  );
}