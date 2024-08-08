import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { Link } from 'react-router-dom';  
//import "./alert.css";
import 'react-toastify/ReactToastify.css'
import useAuth, { AuthProvider } from '../../../context/AuthContext';
export default function AlertDialogue() {
    const {authStatus} = useAuth();

  
  return (
    <AuthProvider value={{authStatus}}>
    <div>
        <AlertDialog>
     <AlertDialogTrigger asChild>
        <button className='bg-blue-500 p-2 rounded-lg' onClick={authStatus? notify: null }>Your Watchlist</button>
        </AlertDialogTrigger>
        <AlertDialogContent className='bg-white text-gray-500'>
            <AlertDialogHeader>
                <AlertDialogTitle>Title</AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </AlertDialogDescription>
            <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction asChild>
                    <button><Link to='/auth'>Login/Register</Link></button>
                </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
     </AlertDialog>
    </div>
  </AuthProvider>  
  ) 
}
