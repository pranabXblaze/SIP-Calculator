import React from 'react'
import { ToastContainer,toast } from 'react-toastify'

export default function ToastComponent() {
    toast('🦄 Wow so easy!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark", // "light & dark"
        transition: Bounce,
        })    
  return (
    <div>
       <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark" //"light & dark"
transition: Bounce
     /> 
    </div>
  )
}
