import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"

export default function Header() {

  

  return (
    <>
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
          <NavLink to='/stocks'    
          className={({isActive}) =>`${isActive ? "text-orange-700" : "text-gray-500"} lg:hover:bg-transparent lg:border-0 hover:text-orange-700`
                     }>
          Stocks
          </NavLink>
          </MenubarItem>
          <MenubarItem>
          <NavLink to='/news'    
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
            
    <div className="flex justify-end space-x-2">
            <Link
              className="bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-gradient-to-l flex align-middle text-center min-h-[2px] text-white py-2 px-4 rounded-lg"
              to="/loginSignup"
            >
              Login/Signup
            </Link>
    </div>
    </div>    
    </>
  );
}