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
//import "./alert.css";
import { ToastContainer,toast,cssTransition } from 'react-toastify';

import useAuth from '../../../context/AuthContext';
export default function AlertDialogue() {
    const {authStatus} = useAuth();

    const Bounce = cssTransition({
      enter: "animate__animated animate__bounceIn",
      exit: "animate__animated animate__bounceOut"
    });
    const notify = () => toast('🦄 Login Or Register to continue.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
   //const watchlist; TODO
  return (
    <div>
      <ToastContainer
    position="bottom-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    transition = {Bounce}/>
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
                    <button><a href='/loginsignup'>Login/Register</a></button>
                </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
     </AlertDialog>
    </div>
  ) 
}
