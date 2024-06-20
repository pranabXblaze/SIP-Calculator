import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"

export default function Header() {

  

  return (
    <>
      {/* <header className="sticky top-1 z-20 bg-[#CAF0F8] shadow-md py-5 px-5 rounded-t-lg min-w-[440px] min-h-[20px]">
        <nav className="flex justify-between align-middle gap-4">
          <div className="font-bold text-xl">Stocks & Fundulator</div>
          <ul className="flex space-x-5 my-2">
            <li>
              <a href="/" className="hover:text-blue-500 text-bold">
                Home
              </a>
            </li>
            <li>
              <a href="/explore" className="hover:text-blue-500 text-bold">
                Explore
              </a>
            </li>
          </ul>
          <div className="flex justify-end space-x-2">
            <Link
              className="bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-gradient-to-l flex align-middle text-center min-h-[2px] text-white py-2 px-4 rounded-lg"
              to="/loginSignup"
            >
              Login/Signup
            </Link>
            <div className="flex">
            <ModeToggle/>
            </div>
          </div>
        </nav>
      </header> */}
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
          className={({isActive}) =>`${isActive ? "text-orange-700" : "text-gray-500"} lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                     }>
          Stocks
          </NavLink>
          </MenubarItem>
          <MenubarItem>
          <NavLink to='/news'    
          className={({isActive}) =>`${isActive ? "text-orange-700" : "text-gray-500"} lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
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