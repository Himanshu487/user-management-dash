// Navbar Component
import React from 'react'
import {Link, NavLink} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {

  const { loginWithRedirect,logout,isAuthenticated,user } = useAuth0();

  return (
    <div className='mt-5 mx-auto block w-full max-w-screen-xl lg:rounded-2xl border border-white/80 bg-white bg-opacity-90 py-2 px-4 text-gray-900 shadow-md backdrop-blur-3xl backdrop-saturate-300 lg:px-8 lg:py-4'>
  <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
    <div className='lg:mr-20 flex items-center gap-6'>
      {/* Link to User Details Page */}
      <NavLink 
        // to="/dashboard/userDetails"
        to="/"
        activeclassname="text-sky-700 font-bold"
        className='block p-1 hover:text-sky-700 font-sans text-xl font-normal leading-normal text-inherit antialiased'
      >
        User Details
      </NavLink>
  
     
{
  isAuthenticated ?  <button className='block p-1 hover:text-sky-700 font-sans text-xl font-normal leading-normal text-inherit antialiased' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
  Log Out
</button> :  <button className='block p-1 hover:text-sky-700 font-sans text-xl font-normal leading-normal text-inherit antialiased' onClick={() => loginWithRedirect()}>Log In</button>
}
     
 {
   isAuthenticated && <p className='block p-1 hover:text-sky-700 font-sans text-xl font-normal leading-normal text-inherit antialiased'>{user.name}</p>
} 
     

    </div>
  </div>
</div>

  )
}

export default Navbar