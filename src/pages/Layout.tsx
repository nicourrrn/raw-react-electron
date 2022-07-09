import React, {useEffect} from "react";
import {Link, Outlet} from "react-router-dom";
import "./Layout.sass";

export const Layout = () => {
    useEffect(() => {

    })

    return (
      <div className='Layout'>
          <nav><ul className='NavBar'>
              <li><Link to='/'>Home</Link></li>
          </ul></nav>
          <Outlet />
      </div>
    );
}

