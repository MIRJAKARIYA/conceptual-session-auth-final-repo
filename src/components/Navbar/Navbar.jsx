import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
    const {user,logOut} = useContext(AuthContext)
    console.log(user)
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
     
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
         
            <li>
            <Link to="/about">about</Link>
    
          </li>
         
     
          
        </ul>
      </div>
      <div className="navbar-end">
        {user ? <div>
            {user.email}
            <button className="btn btn-accent" onClick={()=>logOut()}>Logout</button>
        </div>:""}
      </div>
    </div>
  );
};

export default Navbar;
