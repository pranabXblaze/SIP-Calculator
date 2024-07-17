import React from 'react'
import useAuth, { AuthProvider } from '../../../context/AuthContext'

export default function NewsFeed() {

 const {authStatus,user} = useAuth()  
  return (
    <AuthProvider value={{authStatus}}>
     <div>
      <h1>NewsFeed</h1>
      <h2>Hello</h2>
     </div>
    </AuthProvider>
  )
}
