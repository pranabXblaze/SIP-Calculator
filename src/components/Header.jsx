import React from "react";
import { NavLink } from "react-router-dom";

import { ModeToggle } from "./mode-toggle";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
import useAuth, { AuthProvider } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import LoginTogAvatar from "./LoginTogAvatar";
export default function Header() {
  
  const {authStatus, user,handleLogout } = useAuth();

  console.log(auth)
  console.log(authStatus);
  
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
      <MenubarMenu>
        {/* <MenubarTrigger>Profiles</MenubarTrigger> */}
        {/* <MenubarContent>
          <MenubarRadioGroup value="benoit">
            <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
            <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
            <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarItem inset>Edit...</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Add Profile...</MenubarItem>
        </MenubarContent> */}
      </MenubarMenu>
    </Menubar>
    <div className="flex">
            <ModeToggle/>
            <LoginTogAvatar/>
     </div>        
    </AuthProvider>
  );
}