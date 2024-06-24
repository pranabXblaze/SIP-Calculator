import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../context/AuthContext'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function LoginTogAvatar() {
    const {authStatus,user,handleLogout} = useAuth()
    
  return authStatus ? (            
   <div>
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
     <DropdownMenuItem className='' onClick={handleLogout}> 
       Logout
     </DropdownMenuItem>
   </DropdownMenuContent>
   </DropdownMenu>
 </div>
  ):(<div className="flex justify-end space-x-2">
            <Link
              className="bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-gradient-to-l flex align-middle text-center min-h-[2px] text-white py-2 px-4 rounded-lg"
              to="/loginSignup"
            >
              Login/Signup
            </Link>
    </div> 
    )
}
